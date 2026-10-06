// Single map of every image and downloadable file in src/assets.
// Content modules refer to images by KEY (for example image: "tufts") and skins resolve the key here.
// To add an image: drop it in src/assets, import it below, add one line to `images`.
import chatgpt from "./chatgpt.jpg";
import wpi from "./wpi.jpg";
import mgbwh from "./mgbwh.jpg";
import mainEra from "./main-era.jpg";
import untitled from "./untitled.jpg";
import tarot from "./tarot.jpg";
import tufts from "./tufts.jpg";
import hilab from "./hilab.jpg";
import hami from "./hami.jpg";
import background from "./background.jpg";
import resume from "./Philip Bui - Resume.pdf";
import cv from "./Philip Bui - CV.pdf";

export const images = { chatgpt, wpi, mgbwh, mainEra, untitled, tarot, tufts, hilab, hami };
export const files = { resume, cv };
export { background };
