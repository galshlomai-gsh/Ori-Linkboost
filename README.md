# Ori Linkboost

Next.js 15 + TypeScript app using the App Router and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run typecheck` — TypeScript check (no emit)

## Project layout

```
src/
  app/
    layout.tsx     # root layout
    page.tsx       # home page
    globals.css    # Tailwind entry
```

## CI

GitHub Actions runs `typecheck` and `build` on every push to `main` and on
every pull request. See `.github/workflows/ci.yml`.
