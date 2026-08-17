# SEO Fix Plan — Omega Exports International

## Where things actually stand

I checked `site:omegaexportsinternational.com.au` and searched your exact business name + industry terms — nothing from your domain shows up. That's expected for a new site, but there's a deeper issue underneath it: **when a crawler requests your homepage, the raw HTML contains only your `<title>` and meta description — no visible content at all.** That's the classic signature of a client-side-rendered React app with no pre-rendering. Real visitors are fine because their browser runs the JavaScript. Crawlers requesting the raw page are not — and several of them (Bing, DuckDuckGo, WhatsApp/LinkedIn link previews) don't run JavaScript at all, so they see nothing.

Everything below is ordered by leverage. Do the top items first.

---

## 1. Get indexed (15 minutes, unlocks everything else)

1. Create a free [Google Search Console](https://search.google.com/search-console) property using the **Domain** property type (not URL-prefix) — it covers `http`/`https` and `www`/non-`www` together.
2. Verify via **DNS TXT record**: Search Console gives you a TXT value → add it in Hostinger's hPanel under your domain's DNS Zone Editor → wait for propagation (usually under an hour) → click Verify.
3. Once verified, go to **Sitemaps** and submit `https://omegaexportsinternational.com.au/sitemap.xml` (you'll create this in step 4 — submit after it exists).
4. Use **URL Inspection** on your homepage → **Request Indexing**, to nudge Google to crawl sooner.
5. Repeat the domain verification in [Bing Webmaster Tools](https://www.bing.com/webmasters) too — five extra minutes, and Bing also feeds ChatGPT/Copilot's web answers.

---

## 2. Fix the core blocker: make your content visible without JavaScript

This is the highest-leverage fix here. You don't need to rewrite your app — you need static HTML generated at build time so the *first* response a crawler gets already has your real content in it. Your app still hydrates and behaves normally for actual visitors. **This doesn't require changing your Hostinger plan** — the HTML generation happens at build time on your machine (or in CI); the output is still plain static files uploaded to `public_html` exactly like now.

**Check first:** open `package.json`. If you see `react-scripts`, you're on Create React App, not Vite — let me know and I'll give you CRA-specific steps instead.

**If your site is a single page with no separate routes** (most likely for a site like this):

```bash
npm i -D vite-react-ssg
```

```js
// src/main.jsx
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App'
import './index.css'

export const createRoot = ViteReactSSG(App)
```

```json
// package.json
{
  "scripts": {
    "build": "vite-react-ssg build"
  }
}
```

Run `npm run build` and open `dist/index.html` — it should now contain your actual page text, not an empty `<div id="root">`. Upload `dist/` to `public_html` in Hostinger exactly as you do today.

**If you have separate routes** (`/about`, `/products`, `/contact`, etc.) via `react-router-dom`:

```bash
npm i -D vite-react-ssg react-router-dom
```

```js
// src/main.jsx
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'   // your route definitions
import './index.css'

export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
})
```

```json
// package.json
{
  "scripts": {
    "build": "vite-react-ssg build"
  }
}
```

This generates a real `.html` file per route, each with its own content baked in.

**If this is going to grow into a much bigger site**, migrating to Next.js with `output: 'export'` is worth considering long-term — more setup now, but the most mature ecosystem for SEO metadata and structured data as you scale. Not necessary for a first fix.

---

## 3. Tighten meta tags, add social preview tags, add structured data

Your current tags:
- **Title:** `Omega Exports International | Quality Beyond Borders` — pure brand, gives Google nothing to match against a search like "beef exporter Australia."
- **Description:** ~185 characters — Google truncates around 155–160, so the end is getting cut off in results.

Suggested replacements (adjust wording to match your actual positioning):

```
Title: Australian Beef, Lamb & Fresh Produce Exporter | Omega Exports International
Description: Australian exporter of premium beef, lamb, mutton, fresh vegetables & fruit — full cold-chain logistics for global B2B buyers.
```

You're also missing Open Graph/Twitter tags, so links shared on WhatsApp, LinkedIn, or email currently show no preview image or description. Add to your `index.html` `<head>`:

```html
<link rel="canonical" href="https://omegaexportsinternational.com.au/" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://omegaexportsinternational.com.au/" />
<meta property="og:title" content="Omega Exports International | Quality Beyond Borders" />
<meta property="og:description" content="Australian exporter of premium beef, lamb, mutton, fresh vegetables & fruit — full cold-chain logistics for global B2B buyers." />
<meta property="og:image" content="https://omegaexportsinternational.com.au/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Omega Exports International" />
<meta name="twitter:description" content="Australian exporter of premium beef, lamb, mutton, fresh vegetables & fruit." />
<meta name="twitter:image" content="https://omegaexportsinternational.com.au/og-image.jpg" />
```

(`og-image.jpg` should be a real 1200×630px image — a product or cold-chain photo works well.)

Then add Organization structured data so Google has clean data to build a richer result:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Omega Exports International",
  "url": "https://omegaexportsinternational.com.au",
  "logo": "https://omegaexportsinternational.com.au/logo.png",
  "description": "Global B2B exporter of premium meats, fresh vegetables, and fruit with cold-chain logistics.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.linkedin.com/company/your-page",
    "https://www.facebook.com/your-page"
  ]
}
</script>
```

Fill in the real logo path and social links. Test it with [Google's Rich Results Test](https://search.google.com/test/rich-results) once live.

---

## 4. Add a sitemap and robots.txt

Both go in `public/` (Vite copies this folder straight into `dist/` untouched).

`public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://omegaexportsinternational.com.au/sitemap.xml
```

`public/sitemap.xml` (adjust to your real pages):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://omegaexportsinternational.com.au/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

If you move to multi-page `vite-react-ssg`, add one `<url>` entry per route.

---

## 5. Keyword strategy — and what's actually realistic

Two very different goals hide inside "show up on Google," with very different timelines:

**Your own business name.** Once indexed with the fixes above, this is genuinely easy to win — I didn't find a strong competitor sitting on your exact name (closest matches are unrelated businesses: Omega Foods, Omega Cargo, an unrelated US-based "Omega Exports"). Expect this within a few weeks of indexing.

**Category terms your buyers actually search** — "Australian beef exporter," "wholesale lamb supplier Australia," "frozen mutton exporter," "fresh produce export company Australia." These are genuinely competitive. I found established, well-resourced players already ranking: Samex (Australian Meat Exporters), Austrade's own meat & livestock trade pages, Meat & Livestock Australia's international markets hub and exporter database, and Omega Cargo (a 20+ year Perth freight company — different Omega, worth knowing about since buyers may confuse the names). Realistically, competing for page one here takes 3–6+ months of sustained content and backlink work — not a quick fix, and anyone promising guaranteed page-one rankings in days is selling something that gets sites penalized, not ranked.

For real search volume before you invest in content, run your product terms + "Australia" + the destination markets you actually serve (e.g. "beef export to UAE," "lamb export Middle East") through Google Keyword Planner (free with a Google Ads account, no need to run ads) or Ubersuggest.

---

## 6. Free, industry-relevant backlinks and listings

Generic "get backlinks" advice isn't that useful, so here are directories actually relevant to an Australian food exporter:

- **MLA's Red Meat Exporters Database** (Meat & Livestock Australia) — a searchable directory specifically for Australian beef/lamb/goat exporters, listed via aussiemeattradehub.com.au. Email them to get listed.
- **Austrade** — Australia's government trade agency; their exporter resources are high-authority `.gov.au` backlinks if you qualify.
- **Google Business Profile** — even without walk-in retail, a verified profile with your business address builds trust signals and can surface in map results for buyers searching locally.
- **LinkedIn Company Page** — standard B2B trust signal, and a real backlink; trade buyers often check this before emailing.
- **B2B trade marketplaces** (Alibaba, TradeKey, Global Sources) — many exporters list here specifically for backlinks plus direct buyer lead gen, separate from Google SEO.

These are far more valuable than generic directory submissions because they're relevant to your actual industry.

---

## 7. Give Google a reason to come back

A static brochure site plateaus fast. An "Insights" or "News" section — export compliance updates, seasonal capacity, new markets opened, cold-chain logistics explainers — gets you fresh crawlable pages targeting longer-tail buyer questions, natural internal linking, and something to actually share on LinkedIn. Doesn't need to be frequent — even one solid post a month compounds over 6–12 months.

---

## Realistic timeline

| What | When |
|---|---|
| Indexed & findable by your exact business name | 1–4 weeks after sections 1–2 |
| Ranking for low-competition long-tail terms | 1–3 months |
| Page one for terms like "Australian beef exporter" | 6+ months of sustained content + backlinks |

---

## Quick checklist

- [ ] Verify domain in Google Search Console (DNS TXT via Hostinger)
- [ ] Verify in Bing Webmaster Tools
- [ ] Add prerendering/SSG so crawlers see real HTML (Section 2)
- [ ] Rewrite title tag with keywords + brand
- [ ] Trim meta description to ~155 characters
- [ ] Add OG/Twitter meta tags + create a 1200×630 share image
- [ ] Add Organization JSON-LD structured data
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Submit sitemap in Search Console, request indexing on homepage
- [ ] Set up Google Business Profile
- [ ] Complete LinkedIn Company Page
- [ ] Apply for MLA Red Meat Exporters Database listing
- [ ] Draft first 2–3 Insights/blog posts
