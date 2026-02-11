const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { packageName, priceId } = req.body;
        const STRIPE_PRICE_ID = priceId || 'price_1SzbRlFJ7SufhlMYpvNJA8GD';
        const protocol = req.headers['x-forwarded-proto'] || 'http';
        const host = req.headers.host;
        const baseUrl = `${protocol}://${host}`;

        console.log('Creating Stripe Checkout Session:', {
            priceId: STRIPE_PRICE_ID,
            packageName,
            baseUrl
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],

            line_items: [
                {
                    price: STRIPE_PRICE_ID,
                    quantity: 1,
                },
            ],

            mode: 'payment',
            success_url: `${baseUrl}/payment_success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/payment.html?canceled=true`,
            metadata: {
                package: packageName || 'DEVTourism Travel Package',
                source: 'DEVTourism_website'
            }
        });

        console.log('Checkout Session created:', session.id);
        return res.status(200).json({
            id: session.id,
            url: session.url
        });

    } catch (error) {
        console.error('Stripe error:', error);

        return res.status(500).json({
            error: error.message || 'Failed to create checkout session'
        });
    }
};
