# Cafe Regina ☕

A modern, fully responsive static website for **Cafe Regina** — a community coffee house in Portland, Oregon, USA.

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero, features strip, about snippet, menu preview, specials banner, testimonials, hours & location |
| `menu.html` | Full menu with category filter (Espresso, Cold Brew, Tea, Pastries, Savory Bites, Seasonal) |
| `about.html` | Brand story, team profiles, values, awards & press |
| `contact.html` | Contact form, address, hours, embedded map, private events section |

## Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JavaScript** — zero dependencies, no build step required
- Google Fonts: *Playfair Display* (headings) + *Lato* (body)
- Responsive design with mobile-first media queries
- Accessible markup: ARIA labels, semantic HTML, keyboard navigable

## Features

- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Warm espresso-brown & amber colour palette
- 🧭 Sticky navbar that transitions from transparent → solid on scroll
- 📋 Menu category filter (JavaScript, no page reload)
- 💌 Contact & newsletter forms with toast feedback
- 🌀 Scroll-reveal animations via IntersectionObserver
- ♿ WCAG-friendly: semantic HTML, `aria-*` attributes, focus styles
- 🔒 No external JS libraries — no CDN attack surface

## Getting Started

Open `index.html` in any modern browser. No server or build step required.

```bash
# Optional: serve with any static server
npx serve .
# or
python3 -m http.server 8080
```

## Structure

```
Cafe-Regina/
├── index.html        # Homepage
├── menu.html         # Full menu
├── about.html        # About Us
├── contact.html      # Contact & Location
├── css/
│   └── styles.css    # All styles (CSS variables, responsive)
└── js/
    └── main.js       # Nav, scroll effects, menu filter, forms
```
