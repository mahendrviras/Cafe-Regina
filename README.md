# Café Regina ☕

A modern, animated, responsive café website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

![Café Regina Hero](https://github.com/user-attachments/assets/9191b427-5a3d-43be-9944-f3624a8f311f)

## Features

- **Modern UI/UX** — Minimal, elegant design with a warm coffee shop aesthetic
- **Smooth Animations** — Scroll reveal, parallax, hover effects powered by Framer Motion
- **Dark / Light Mode** — Toggle between themes with persistent preference
- **Responsive Design** — Mobile-first layout that looks great on all devices
- **CMS-Ready Structure** — All content stored in editable JSON files
- **SEO Optimized** — Semantic HTML, proper meta tags, and clean structure

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, intro, featured menu, reviews, Instagram gallery, CTA |
| **Menu** | Filterable menu with categories (Breakfast, Coffee, Pastries, Drinks) |
| **About** | Café story, philosophy, values, and atmosphere gallery |
| **Contact** | Address, phone, email, Instagram, opening hours, embedded Google Map |

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [TypeScript](https://www.typescriptlang.org/) — Type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mahendrviras/Cafe-Regina.git
cd Cafe-Regina

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## How to Edit Content

All content is stored in JSON files inside `src/data/`. A non-developer can update menu items, prices, reviews, and site content by editing these files:

### `src/data/menu.json`

Edit menu categories and items:

```json
{
  "categories": [
    {
      "id": "coffee",
      "name": "Coffee",
      "description": "Carefully sourced, expertly brewed",
      "items": [
        {
          "id": "cappuccino",
          "name": "Cappuccino",
          "description": "Espresso with steamed milk and velvety foam.",
          "price": 5.00,
          "image": "/images/menu/cappuccino.jpg",
          "tags": ["classic", "popular"]
        }
      ]
    }
  ]
}
```

### `src/data/reviews.json`

Add or update customer reviews:

```json
{
  "reviews": [
    {
      "id": 1,
      "name": "Sophie Laurent",
      "rating": 5,
      "text": "Best coffee in town!",
      "date": "2025-11-15"
    }
  ]
}
```

### `src/data/content.json`

Edit site-wide content: tagline, about text, contact info, hours, Instagram posts, and featured items.

## Adding Images

Place images in the `public/images/` directory:

- Menu items: `public/images/menu/`
- Instagram posts: `public/images/instagram/`
- About/atmosphere: `public/images/about/`

Reference them in JSON files using paths like `/images/menu/cappuccino.jpg`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header, footer, theme
│   ├── page.tsx            # Landing page
│   ├── menu/page.tsx       # Menu page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── globals.css         # Global styles and Tailwind theme
├── components/
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── ScrollReveal.tsx    # Scroll animation wrapper
│   └── ThemeProvider.tsx   # Dark/light mode context
└── data/
    ├── menu.json           # Menu items and categories
    ├── reviews.json        # Customer reviews
    └── content.json        # Site content and configuration
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#FAF7F2` | Background (light mode) |
| Coffee Brown | `#3C2A1E` | Primary text, hero backgrounds |
| Warm Beige | `#D4B896` | Accents, highlights, tags |
| Soft Black | `#1A1A1A` | Background (dark mode) |
| Latte | `#E8DDD3` | Secondary backgrounds |

## Hosting

This project can be deployed to:

- **[Vercel](https://vercel.com/)** (recommended) — Zero-config deployment for Next.js
- **[Netlify](https://www.netlify.com/)** — Works with `npm run build` and `out/` directory
- **Any Node.js host** — Run `npm run build && npm start`

## License

This project is open source and available under the [MIT License](LICENSE).
