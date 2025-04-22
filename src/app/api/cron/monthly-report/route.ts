import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import JSZip from 'jszip';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const runtime = 'edge';

export async function GET(req: Request) {
  const auth = req.headers.get('Authorization');
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const { data, error } = await supabase
    .from('paiements')
    .select('id, created_at, user:auth.users(email)')
    .eq('statut', 'Validé');

  if (error || !data || data.length === 0) {
    return NextResponse.json({ success: false, message: 'Aucune facture trouvée.' });
  }

  const duMois = data.filter((f) => {
    const d = new Date(f.created_at);
    return d.getMonth() + 1 === month && d.getFullYear() === year;
  });

  if (duMois.length === 0) {
    return NextResponse.json({ success: true, message: 'Aucune facture ce mois.' });
  }

  const zip = new JSZip();
  for (const f of duMois) {
    const url = `https://your-supabase-url.storage.supabase.co/storage/v1/object/public/factures/facture-${f.id}.pdf`;
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    zip.file(`facture-${f.id}.pdf`, buffer);
  }

  const zipBuffer = await zip.generateAsync({ type: 'uint8array' });

  await resend.emails.send({
    from: 'NovaCore <factures@novacore.com>',
    to: 'compta@novacore.com',
    subject: `📊 Rapport Factures ${month}/${year}`,
    html: `<p>Veuillez trouver ci-joint le zip des factures validées pour le mois ${month}/${year}.</p>`,
    attachments: [
      {
        filename: `factures-${month}-${year}.zip`,
        content: Buffer.from(zipBuffer).toString('base64'),
        type: 'application/zip',
      },
    ],
  });

  return NextResponse.json({ success: true, message: `ZIP envoyé à compta@novacore.com (${duMois.length} factures)` });
}
