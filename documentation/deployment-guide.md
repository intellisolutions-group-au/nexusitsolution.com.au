# Deployment Guide for Nexus IT Solution

## Overview
This document outlines the standard deployment process for the static/dynamic Next.js website for **nexusitsolution.com.au**.

## Prerequisites
- Node.js version 20+
- Git initialized
- Access to deployment platform (e.g., Vercel, Netlify, Cloudflare Pages, or AWS S3)

## Static Export Configuration
This project is configured to allow a fully static export. Ensure `next.config.js` or `next.config.mjs` has the correct `output: 'export'` setting if deploying purely static files.

Currently, `package.json` includes:
```json
"scripts": {
  "build": "next build",
  "preview": "npx serve@latest out"
}
```

## Step-by-Step Deployment (Vercel/Netlify)
1. **Repository Link:** Push your latest code to the master/main branch on GitHub, GitLab, or Bitbucket.
2. **Import Project:** Open your hosting provider dashboard and import the repository.
3. **Build Settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next` (for dynamic Next.js deployments) or `out` (if using static export).
4. **Environment Variables:**
   - Add necessary variables such as `NEXT_PUBLIC_GA_ID` for Google Analytics or any CMS tokens.
5. **Deploy:** Click "Deploy". The CI/CD pipeline will automatically build and publish your site.

## DNS Configuration for nexusitsolution.com.au
1. Point your Nameservers to the hosting provider (e.g., Vercel's DNS).
2. OR Configure A/CNAME records:
   - **Type:** A | **Name:** @ | **Value:** [Provider IP]
   - **Type:** CNAME | **Name:** www | **Value:** cname.vercel-dns.com. (or equivalent)
3. Ensure SSL/TLS certificates are fully provisioned.

## Post-Deployment Checklist
- [ ] Verify SSL certificate is active
- [ ] Run Google Lighthouse audit on live URL
- [ ] Test Contact Forms to ensure delivery to `info@nexusitsolution.com.au`
- [ ] Submit XML Sitemap to Google Search Console
- [ ] Verify 301 redirects from `www` to non-`www` (or vice versa)
