# Sports Carnival 2026

A responsive, single-page event site built with React, Vite, and regular CSS. The homepage follows four supplied visual references and uses full-height scroll-snap panels: event hero, carnival message, game selection, and registration/prizes. It has no navigation bar or separate booth pages.

Scroll-triggered reveals use Intersection Observer. Snapping and reveals respect reduced-motion preferences. The supplied carnival graphics and booth illustrations are stored locally under `public/images`.

## Event details

- **Date:** Wednesday, 11 November 2026
- **Time:** 2:30 PM–5:00 PM
- **Venue:** 5th Row Zone
- **Admission:** Free
- **Audience:** Freshmores, Year 3–4, Graduate, and Masters students
- **Organiser:** ROOT Group 2

## Getting started

Install Node.js 18 or later, then run:

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
sports-carnival-site/
├── index.html
├── package.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── sports-carnival-bunting.png
│       ├── sports-carnival-main-decoration.png
│       ├── sports-carnival-balls.png
│       ├── bean-bag-toss.png
│       ├── pingpong-cup-challenge.png
│       ├── bottle-bowling.png
│       └── ball-pit-colour-rush.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   └── games.js
    ├── components/
    │   ├── ScrollEffects.jsx
    │   └── ui/
    │       └── countdown-number.jsx
    └── pages/
        └── Home.jsx
```

## Assets and build output

`public/images` contains the source assets. Vite copies these files into `dist/images` during `npm run build`; `dist` is generated output and is ignored by Git. Edit assets in `public/images`, not their generated copies in `dist/images`.

## Customisation

- Edit `src/data/games.js` to update booth card names, descriptions, colors, or image paths.
- Edit `src/pages/Home.jsx` to update panel content, event details, countdown target, or prizes.
- Edit `src/components/ui/countdown-number.jsx` to change countdown behavior.
- Edit `src/styles.css` to change colors, layouts, snapping, or reveal transitions.

The Google Fonts used by the site require an internet connection.
