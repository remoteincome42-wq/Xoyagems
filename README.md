# XoyaGems Automated Business Funding System

AI-powered lead generation landing page for business funding in the **USA and Canada**. Includes an embedded AI chat advisor that qualifies leads and drives form submissions.

## Features

- **AI Chat Agent** — Proactive chatbot that qualifies visitors with funding questions, collects email, and pushes form submission
- **Lead Capture Form** — Full lead form capturing name, email, phone, business type, revenue, country, funding amount, time in business
- **Embeddable Widget** — Standalone `widget.js` that can be embedded on any website
- **Dark, Professional UI** — Modern design with trust badges and social proof
- **Responsive** — Works on desktop and mobile
- **Auto-popup** — Chat agent auto-opens after 6 seconds to engage visitors

## Quick Start — GitHub Pages

1. Push `index.html` and `widget.js` to your GitHub repo
2. In the repo: Settings > Pages > Source = `main` branch, root `/`
3. Your page will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Embed on Any Website

```html
<div id="fundflow-widget"></div>
<script src="https://YOUR_DOMAIN.com/widget.js"></script>
```

Replace `YOUR_DOMAIN.com` with your actual domain. The widget adds a floating `$` button that opens a modal lead form.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with hero, form, chat agent, embed code section |
| `widget.js` | Embeddable lead capture widget for external sites |

## Customization

- **Form fields** — Edit the `<form id="leadForm">` in `index.html`
- **Chat flow** — Modify `conversationState` transitions and `showOptions()` in the `<script>` block
- **Widget fields** — Edit the form inside the `html.innerHTML` template in `widget.js`
- **Colors** — Edit CSS custom properties in `:root {}` at the top of `index.html`
- **Copy** — Replace all text content as needed

## AI Chat Flow

The chat agent follows a qualification funnel:

1. **Greeting** — Introduces itself, offers 3 quick-reply options
2. **Funding Amount** — Asks desired funding range
3. **Monthly Revenue** — Asks approximate revenue
4. **Country** — USA or Canada
5. **Time in Business** — How long operating
6. **Email Collection** — Prompts for email to send offers
7. **Name Collection** — First name for personalization
8. **CTA** — Pushes to full form or confirms completion

All collected data is logged to the browser console. To send data to a backend, modify the form submit handler in both files.
