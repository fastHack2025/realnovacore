import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { to } = await req.json();

  await resend.emails.send({
    from: "NovaCore <factures@novacore.com>",
    to,
    subject: "📨 Test email NovaCore",
    html: "<p>Hello depuis Resend !</p>",
  });

  return new Response(JSON.stringify({ success: true }));
}
