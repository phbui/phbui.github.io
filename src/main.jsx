import React from "react";
import ReactDOM from "react-dom/client";
import { skins } from "./skins";
import { SKIN } from "./config";

const requested = new URLSearchParams(window.location.search).get("skin");
const name = requested && skins[requested] ? requested : SKIN;
if (requested && !skins[requested]) {
  console.warn(`Unknown skin "${requested}". Falling back to "${SKIN}".`);
}

skins[name]().then(({ default: Skin }) => {
  ReactDOM.createRoot(document.getElementById("root")).render(<Skin />);
});
