const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        client_reference_id: req.body.client_reference_id,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "ondemand",
              },
              unit_amount: 1000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        metadata: {
          media_name: req.body.media_name,
          media_id: req.body.media_id,
          media_option: req.body.media_option,
        },
        success_url: `${req.headers.origin}/success-pay?session_id={CHECKOUT_SESSION_ID}`,
        automatic_tax: { enabled: true },
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
