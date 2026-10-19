# Bridgeway Landing Page

A responsive landing page for the fictional payments company Bridgeway, built with **Vue 3** and **Tailwind CSS v4**. No third-party UI kits, icon packs, animation libraries or Figma-to-code output.

## 1. How to run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # serve the production build
```

Requires Node 18+.

## 2. Structure and why

```
src/
  assets/
    main.css            design tokens (@theme) + the only custom CSS (keyframes)
    images/             photos
  data/content.js       all copy and lists (nav, features, partners, socials, shapes)
  components/
    ui/                 small reusable pieces: BaseButton, BaseIcon, NavLink,
                        SocialIcon, FeatureCard, ShapeBlock
    layout/             AppHeader, AppFooter
    sections/           HeroSection, LogoMarquee, BenefitsSection, CtaSection
  App.vue               composes the page
```

- **Sections mirror the Figma layers** (Hero, Benefits, CTA, Footer), so it is easy to compare code and design.
- **Content lives in `data/content.js`.** Components only render, so changing copy never touches markup.
- **One `FeatureCard` with a `variant` prop.** The design alternates dark and light cards. `index % 2` reproduces the desktop checkerboard and the mobile stack without hardcoding each card.
- **Tokens in `@theme`.** Colors, font and animations are defined once and used as Tailwind utilities (`bg-lime`, `text-plum`, `animate-marquee`).
- **Custom CSS is limited to keyframes** (marquee, fade-up), which Tailwind has no preset for. Everything else is utilities or arbitrary values.

### Colors

Brand colors are defined once in `@theme` (`lime`, `plum`, `steel`, `sage`, `mint`, `mauve`, `danger`) and come from the swatches in the Figma design system.

### Typography

Taken from the Figma design system: **General Sans** (700) for headings and the wordmark, **Inter** (400) for body text. Both are loaded as fonts only (Fontshare and Google Fonts). Desktop scale: Main Header 70px / 100% / -4%, H2 40px / 100% / -2%, Body 28px / 150% (Inter). Mobile headings use the H2 style.

### Design measurements used (from Figma)

Desktop frame 1440px wide, 80px side padding, 80px gap between the benefits heading and its grid, 125px top padding on that section, a 3-column card grid with 24px gaps and roughly 400px-tall cards. CTA frame is 874px tall (125px top padding, composition about 636px) and the footer frame is 629px tall with shapes about 200x160px and 16px gaps; those two were derived from the overview screenshot, so verify them. These apply from `xl` (1280px) up; `lg` uses scaled-down values so 1024-1279px screens do not get oversized type.

## 3. The hardest part

Making the hero work at three sizes from two designs. Desktop is an organic dark blob with a yellow blob behind the headline, while mobile is a stacked card. I used one markup and responsive utilities (`lg:` switches) instead of two copies, and approximated the curves with large border radii. Tablet reuses the mobile structure with larger type and image sizes.

The seamless logo marquee was the second challenge. The list is rendered twice and the track animates `-50%`, with a masked fade at the edges, a hover pause and `motion-reduce` support.

## 4. What I would improve with more time

- Replace the border-radius blobs with the exported SVG paths for exact curves.
- Use the real SVG logos for the partner strip.
- Add `srcset` and modern image formats, and lazy-load below the fold.
- Add a mobile menu variant for very small screens, plus unit and visual regression tests.
- Add scroll-reveal animations, built with `IntersectionObserver` and no libraries.

## 5. Deliberate differences from the design

- **Tablet** has no design. Up to `lg` (1024px) the hero keeps the mobile card layout, the cards use two columns from `sm`, and the heading splits into two columns from `md`.
- Partner logos are styled text wordmarks, not the original artwork.
- The mobile hero uses a different image from desktop, as in the Figma file.
- Arrows and icons are my own inline SVG paths, so shapes may differ slightly from the originals.
- Small additions: subtle hover and focus states, keyboard focus rings, and reduced-motion handling.
