// lib/stripe.ts
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function createCheckoutSession(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return session.url;
  } catch (error) {
    console.error("Stripe API error:", error);
    throw new Error("Failed to create Stripe checkout session");
  }
}
