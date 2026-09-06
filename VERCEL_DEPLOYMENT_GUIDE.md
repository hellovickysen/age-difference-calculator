# Vercel Deployment Guide

- Project: Age Difference Calculator
- Domain: agedifferencecalculator.xyz
- Author: Priyabrata Sen

## Current readiness

The Astro website builds successfully and is suitable for a Vercel preview deployment. The public contact email is configured.

Do not connect analytics or collect personal data until the Privacy Policy explains the tools and data being used.

## 1. Create the GitHub repository

Use the GitHub repository at `https://github.com/hellovickysen/age-difference-calculator`. The project already contains its own README and `.gitignore`.

From the project folder, run:

```powershell
git init -b main
git add .
git status --short
git commit -m "Launch age difference calculator"
git remote add origin https://github.com/hellovickysen/age-difference-calculator.git
git push -u origin main
```

Review `git status --short` before committing so that no private or unwanted file is included.

## 2. Import the project into Vercel

1. Sign in to Vercel with the GitHub account that owns the repository.
2. Select **Add New**, then **Project**.
3. Import the `age-difference-calculator` repository.
4. Vercel should detect Astro automatically.
5. Keep the build command as `npm run build`.
6. Keep the output directory as `dist` if Vercel does not fill it automatically.
7. No Astro Vercel adapter is required because this is a static website.
8. Select **Deploy**.

Every later push to the production branch will create a production deployment. Other branches can be used for preview deployments.

## 3. Check the Vercel preview

Before attaching the real domain, verify:

- The calculator works with valid dates, the same date, a leap-day birthday, and reversed date order.
- Dark mode works and remains readable.
- The homepage and several blog posts work on desktop and mobile.
- Blog links, navigation links, About, Contact, Privacy Policy, and Disclaimer open correctly.
- There are no missing pages, broken styles, or browser-console errors.
- `/robots.txt` and `/sitemap-index.xml` load.

## 4. Connect the domain

1. Open the Vercel project and go to **Settings**, then **Domains**.
2. Add `agedifferencecalculator.xyz`.
3. Add `www.agedifferencecalculator.xyz`.
4. Make the apex domain the main address and redirect `www` to it.
5. Add the DNS records shown by Vercel at the company where the domain was bought. Use Vercel's current values rather than copying old DNS values from a tutorial.
6. Wait for Vercel to confirm the domain and issue HTTPS.

## 5. Verify the production website

After the domain is active, check:

- `https://agedifferencecalculator.xyz/`
- `https://agedifferencecalculator.xyz/robots.txt`
- `https://agedifferencecalculator.xyz/sitemap-index.xml`
- HTTPS and the `www` redirect
- Canonical URLs and page titles
- Calculator results on mobile and desktop
- A selection of blog posts and their internal links

## 6. Add Google Search Console

1. Add `agedifferencecalculator.xyz` as a Domain property in Google Search Console.
2. Complete the DNS verification requested by Google.
3. Submit `https://agedifferencecalculator.xyz/sitemap-index.xml`.
4. Inspect the homepage URL and request indexing after the production checks pass.
5. Monitor indexing, page experience, search queries, and crawl errors. Indexing and rankings are not guaranteed and can take time.

## 7. Publishing after launch

The existing useful pages can be published together because they form a complete topic cluster. Avoid publishing many weak or near-duplicate posts simply to create volume. Add future articles gradually when each one answers a distinct search question and includes useful links to the calculator and closely related posts.

Use the master checklist before each future calculator-site launch.
