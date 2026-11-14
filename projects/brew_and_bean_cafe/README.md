# Brew & Bean Café Website

A responsive, premium/cozy café landing website built with separate HTML, CSS and JavaScript files.

## Files

- `index.html` — page structure and content
- `style.css` — all styling, responsive layout and animations
- `script.js` — menu switching, mobile navigation, reveal animations and contact-form validation

## Run

Open `index.html` in Chrome or Edge.

For development, VS Code + Live Server is recommended.

## Important placeholders to replace

Search `index.html` for:

- `123 Coffee Lane, Your City, India`
- `+91 99999 99999`
- Google Maps search URL
- `#` social links

Replace the menu items/prices in `script.js` with the client's real menu.

## Contact form

The current form has front-end validation only. It does NOT send email or save submissions.

When a backend is ready, replace the demo section in `script.js` with a `fetch()` request to your API.

## Images

The demo uses optimized Unsplash image URLs. For a real client site, replace them with the café's own compressed WebP/JPEG photos.

## Design notes

The layout is mobile-first in the responsive breakpoint and specifically prioritizes the hero section, CTA buttons, typography and readability on small screens.
