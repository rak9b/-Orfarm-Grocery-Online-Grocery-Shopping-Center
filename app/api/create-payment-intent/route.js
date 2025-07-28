import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request) => {
  try {
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_SECRET_KEY);
    const { price } = await request.json();
    const amount = await parseInt(price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({
      data: error,
      message: "There was a payment server error",
    });
  }
};
