# DEVTourism - Travel Booking Website

A modern, responsive travel booking website built with HTML, CSS, and JavaScript, featuring Stripe payment integration.

## 🌟 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ 6 Featured destinations (Bali, Brasov, Santorini, Kyoto, Swiss Alps, Machu Picchu)
- ✅ Multiple package options (3-night, 7-night, 10+ night stays)
- ✅ Contact and Feedback forms
- ✅ Stripe payment integration (demo mode)
- ✅ Clean, modern UI with gradient accents

## 📂 Project Structure

```
final_website/
├── index.html              # Homepage
├── about.html              # About page
├── destinations.html       # All destinations overview
├── contact.html            # Contact form
├── feedback.html           # Feedback form
├── payment.html            # Stripe payment page
├── payment_success.html    # Payment confirmation
├── 3days.html             # 3-night packages
├── 7days.html             # 7-night packages
├── 10nights.html          # 10+ night packages
├── [destination].html      # Individual destination pages (6 files)
├── thankyou_*.html        # Thank you pages
├── style.css              # Main stylesheet (1245 lines)
├── style2.css             # Additional styles
├── images/                # 130+ images
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## 🚀 Quick Start - Local Testing

1. Open `index.html` in your browser
2. Navigate through the site
3. All pages are static HTML - no build step required

## 📦 Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project folder
cd final_website

# Deploy
vercel
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Email
3. Click "Add New Project"
4. Import your Git repository OR drag & drop the `final_website` folder
5. Vercel will auto-detect it as a static site
6. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

## 💳 Stripe Integration Setup

### Current Status: ✅ FUNCTIONAL - 2 Methods Available

The payment page now supports **TWO methods** for Stripe integration:

#### **Method 1: Stripe Payment Links** (Recommended for Quick Start)
- ✅ Works INSTANTLY without backend
- ✅ Direct redirect to Stripe Checkout
- ✅ Perfect for demos and quick testing
- ⚙️ Uses pre-created links from Stripe Dashboard

#### **Method 2: Stripe Checkout Session API** (Recommended for Production)
- ✅ Full control over pricing and metadata
- ✅ Uses Vercel Serverless Functions (backend included)
- ✅ Production-ready implementation
- ⚙️ Requires Stripe Secret Key configuration

### Quick Start - Method 1 (Payment Link)

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. In Stripe Dashboard: Products → Payment Links → Create new
3. Set product details (name, price £199, currency GBP)
4. Copy the generated link (e.g., `https://buy.stripe.com/test_xxxxx`)
5. In `payment.html` (line ~74), replace:
   ```javascript
   const STRIPE_PAYMENT_LINK = 'YOUR_LINK_HERE';
   ```
6. Ensure `USE_PAYMENT_LINK = true` (default)
7. Deploy and test!

**Test it:** Open payment.html → Click "Pay with Stripe" → Should redirect to Stripe Checkout ✅

### Advanced Setup - Method 2 (Checkout Session API)

#### Local Development:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file** in project root:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key
   ```

3. **Update `payment.html`** (line ~73):
   ```javascript
   const USE_PAYMENT_LINK = false;  // Switch to Method 2
   const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_publishable_key';
   ```

4. **Test locally:**
   ```bash
   vercel dev
   ```
   Open http://localhost:3000/payment.html

#### Vercel Production Deployment:

1. **Set Environment Variable in Vercel:**
   - Go to Vercel Dashboard → Your Project
   - Settings → Environment Variables
   - Add: `STRIPE_SECRET_KEY` = `sk_test_your_actual_key`
   - Save and redeploy

2. **Deploy:**
   ```bash
   vercel --prod
   ```

### Test Card Numbers (Stripe Test Mode)

| Card Number | Result |
|-------------|--------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Declined |
| `4000 0025 0000 3155` | Requires authentication |

Use any future expiry date (e.g., 12/34) and any 3-digit CVV.

### Files Added for Stripe

- ✅ `payment.html` (updated) - Frontend with both methods
- ✅ `api/create-checkout-session.js` - Vercel Function for Method 2
- ✅ `package.json` - Node.js dependencies
- ✅ `.env.example` - Environment variables template
- ✅ `STRIPE_SETUP_GUIDE.txt` - Detailed setup instructions

See [STRIPE_SETUP_GUIDE.txt](STRIPE_SETUP_GUIDE.txt) for complete documentation.

## 🎨 Customization

### Change Colors

Edit `style.css` - main brand color:
```css
background: linear-gradient(90deg, #3e35d9, #352ed1); /* Header */
color: #3a32d1; /* Primary text color */
```

### Update Contact Info

Search for `info@devtourism.com` and `####` in HTML files and replace with real contact details.

### Add More Destinations

1. Duplicate any `[destination].html` file
2. Update content and images
3. Add to `destinations.html` grid
4. Add thumbnail to `images/` folder

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Known Limitations

- Forms use GET method (for demo) - won't send real data
- No backend for form processing
- Payment is in demo mode
- No database for bookings

## 📈 Next Steps for Production

1. ✅ Set up real Stripe account and keys
2. ✅ Add backend API for forms (Vercel Functions, Netlify Functions, or external service)
3. ✅ Implement email notifications (SendGrid, Mailgun)
4. ✅ Add booking management system
5. ✅ Set up analytics (Google Analytics, Plausible)
6. ✅ Add SEO optimization (meta tags, sitemap.xml)

## 📄 License

© 2026 DEVTourism. All rights reserved.

## 🆘 Support

For questions: info@devtourism.com

---

**Ready to deploy!** Just push to Vercel and your site will be live in minutes. 🚀
