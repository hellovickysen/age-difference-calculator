# Age Difference Calculator

An Astro website for [agedifferencecalculator.xyz](https://agedifferencecalculator.xyz), created by Priyabrata Sen for an India-first audience. It includes a private, browser-based date calculator, a light/dark theme, and a 25-article topic cluster.

## Local development

```sh
npm install
npm run dev
```

## Quality checks

```sh
npm run build
npx astro check
```

## Deployment

The site is fully static and ready for Vercel. Import the GitHub repository into Vercel; the framework preset should be detected as Astro, the build command is `npm run build`, and the output directory is `dist`.

The public contact email is configured. After deployment, connect `agedifferencecalculator.xyz`, submit the generated sitemap in Google Search Console, and configure analytics only after updating the privacy page.
