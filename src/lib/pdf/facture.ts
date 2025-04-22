import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

export async function generateFacturePDF({
  facture_id,
  nom,
  email,
  date,
  montant,
  moyen,
  lignes,
  logoUrl
}: {
  facture_id: string;
  nom: string;
  email: string;
  date: string;
  montant: number;
  moyen: string;
  lignes: { description: string; montant: number }[];
  logoUrl?: string;
}) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([600, 800]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  let y = 750;

  // Logo (optionnel)
  if (logoUrl) {
    const imgBuffer = await fetch(logoUrl).then(res => res.arrayBuffer());
    const img = await pdf.embedPng(imgBuffer);
    page.drawImage(img, { x: 400, y: 700, width: 150, height: 60 });
  }

  // Titre
  page.drawText("🧾 FACTURE", { x: 50, y, size: 24, font }); y -= 30;
  page.drawText(`Facture n° : ${facture_id}`, { x: 50, y: y -= 20, font, size: 12 });
  page.drawText(`Date : ${date}`, { x: 50, y: y -= 20, font, size: 12 });
  page.drawText(`Client : ${nom}`, { x: 50, y: y -= 20, font, size: 12 });
  page.drawText(`Email : ${email}`, { x: 50, y: y -= 20, font, size: 12 });

  y -= 30;
  page.drawText("Détail :", { x: 50, y: y -= 20, font, size: 13, color: rgb(0.2, 0.2, 0.2) });

  lignes.forEach(l => {
    page.drawText(`- ${l.description} ... ${l.montant / 100} €`, { x: 60, y: y -= 18, font, size: 11 });
  });

  y -= 20;
  page.drawText(`💰 Total : ${montant / 100} € (${moyen})`, { x: 50, y: y -= 20, font, size: 13 });

  // QR Code
  const qrData = `Facture: ${facture_id} | Client: ${email} | Montant: ${montant / 100} €`;
  const qrPng = await QRCode.toDataURL(qrData);
  const qrBytes = await fetch(qrPng).then(res => res.arrayBuffer());
  const qrImage = await pdf.embedPng(qrBytes);
  page.drawImage(qrImage, { x: 450, y: y - 80, width: 100, height: 100 });

  return await pdf.save();
}
