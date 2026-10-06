// Skin registry. Each entry lazily loads one skin, a folder whose index.js default-exports the page component.
// Register a new skin by adding a line here. See README.md in this folder.
export const skins = {
  default: () => import("./default/index.js"),
};
