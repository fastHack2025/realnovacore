import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const body = await req.json();
  const montant = body.montant || 10000;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: { name: "Paiement NovaCore" },
          unit_amount: montant,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/paiements?status=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/paiements?status=cancel`,
  });

  return NextResponse.json({ url: session.url });
}
