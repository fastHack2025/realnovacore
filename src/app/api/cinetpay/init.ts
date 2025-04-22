import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const { montant } = await req.json();
  const transaction_id = uuidv4();

  const response = await fetch("https://api-checkout.cinetpay.com/v2/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.CINETPAY_API_KEY!,
      "X-API-SECRET": process.env.CINETPAY_SECRET!,
    },
    body: JSON.stringify({
      transaction_id,
      amount: montant / 100,
      currency: "XOF",
      customer_name: "Client NovaCore",
      customer_surname: "",
      customer_email: "client@novacore.com",
      description: "Paiement NovaCore",
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/paiements?cinetpay=return`,
      notify_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/cinetpay/webhook`,
    }),
  });

  const json = await response.json();
  return NextResponse.json({ payment_url: json.data.payment_url });
}
