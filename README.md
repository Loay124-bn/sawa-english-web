# Sawa English — Landing Website

A static, framework-free landing page for the **Sawa English** Android app. Built with plain HTML5, CSS3, and vanilla JavaScript, ready to publish on GitHub Pages.

## Structure

```
sawa-english/
├── index.html            Home page
├── privacy.html          Privacy Policy page
├── css/
│   └── style.css         All styles (design tokens at the top)
├── js/
│   └── main.js           Sticky navbar, mobile menu, scroll reveal
├── assets/
│   ├── images/
│   │   ├── logo.png            App logo (placeholder)
│   │   ├── logo-64.png         Small favicon-sized logo
│   │   ├── hero-phone.png      Hero phone mockup (placeholder)
│   │   ├── screenshot-1.png    Vocabulary screen (placeholder)
│   │   ├── screenshot-2.png    Grammar screen (placeholder)
│   │   ├── screenshot-3.png    Listening screen (placeholder)
│   │   └── screenshot-4.png    Speaking screen (placeholder)
│   └── icons/                  Reserved for extra icon assets
└── README.md
```

## Replacing placeholder assets

All images in `assets/images/` are generated placeholders. Replace them with your real
files, **keeping the same filenames** (or update the `src` attributes in `index.html`
if you rename them):

- `logo.png` — square app logo, ideally 256×256px or larger, transparent or solid background.
- `logo-64.png` — small version used as the favicon (64×64px).
- `hero-phone.png` — a phone screenshot/mockup for the hero section (portrait orientation).
- `screenshot-1.png` … `screenshot-4.png` — real in-app screenshots (portrait orientation).

## Replacing placeholder text

- **Support email**: search for `support@example.com` in `index.html` and `privacy.html` and replace with your real support address.
- **Google Play link**: open `js/main.js` and update the `PLAY_STORE_URL` constant with your real Google Play Store listing URL.
- **Privacy Policy content**: `privacy.html` contains placeholder legal text. Replace it with your reviewed, final privacy policy before publishing.

## Running locally

No build step is required. Simply open `index.html` in a browser, or serve the folder
with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this folder's contents to a GitHub repository (the contents, not the parent folder, should be at the repo root, or in a `/docs` folder — your choice).
2. In the repository settings, enable **GitHub Pages** and point it at the branch/folder containing `index.html`.
3. All links in this project are relative, so the site will work correctly on:
   - The default `https://<username>.github.io/<repo>/` URL, and
   - A custom domain, with no code changes required.

## Notes

- No external frameworks are used — only plain HTML, CSS, and JavaScript (Google Fonts are loaded from a CDN for typography only).
- The layout is fully responsive, with a mobile navigation drawer below 720px width.
- Reduced-motion preferences are respected (`prefers-reduced-motion`).
