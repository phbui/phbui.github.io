# Skins

A skin is a folder in `src/skins/` that decides how the content looks. The words and data live in `src/content/`. A skin never needs to change them.

## Make a new skin

1. Copy the folder: `cp -r src/skins/default src/skins/myskin`
2. Edit `src/skins/myskin/App.css` for the look and `Layout.jsx` for the page structure. `AboutCode.jsx`, `ProjectCarousel.jsx`, `Project.jsx`, `Carousel.jsx`, `NavBar.jsx` and `ALink.jsx` are free to change or delete.
3. Register it in `src/skins/index.js` by adding one line: `myskin: () => import("./myskin/index.js"),`
4. Preview it without a rebuild at `http://localhost:5173/?skin=myskin` while `npm run dev` runs.
5. Make it the default by setting `export const SKIN = "myskin";` in `src/config.js`.

## What a skin must provide

`src/skins/<name>/index.js` must default-export one React component that renders the whole page. Import data from `../../content`, images from `../../assets` (`images[project.image]`) and the 3D viewer from `../../shared/ModelViewer`. Import the skin's own CSS inside the skin so it only loads with that skin.

## Rules

Do not edit `src/content/` to change a look. Keep the nav targets (home, projects, about, contact) pointing at the same sections if you want the scroll sync to keep working. An unknown `?skin=` value falls back to `SKIN` and prints a console warning.
