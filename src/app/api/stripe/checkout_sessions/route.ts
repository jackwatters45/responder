import Stripe from "stripe";

import { env } from "~/env";

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
	try {
		// Create Checkout Sessions from body params.
		const session = await stripe.checkout.sessions.create({
			ui_mode: "embedded",
			line_items: [
				{
					// Provide the exact Price ID (for example, pr_1234) of
					// the product you want to sell
					price: "{{PRICE_ID}}",
					quantity: 1,
				},
			],
			mode: "subscription",
			return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
			automatic_tax: { enabled: true },
		});

		return Response.json({ clientSecret: session.client_secret });
	} catch (err) {
		return Response.error();
		// res.status(err.statusCode || 500).json(err.message);
	}
}

export async function GET(req: Request) {
	try {
		const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

		return Response.json({
			status: session.status,
			customer_email: session.customer_details?.email,
		});
	} catch (_err) {
		return Response.error();
	}
}
