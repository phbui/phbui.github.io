// Jobs and research positions, each list in display order.
// Fields:
//   id, employer, role, type, start, end ("YYYY-MM" or null), place
//   aboutLabel, aboutUrl   the linked name printed first in the About block
//   about                  the text after the name in the About block. A string, or an array of
//                          segments (a segment is a plain string or { text, href } for a link)
//   description            one or two sentences for skins that show details
//   bullets                optional list of the strongest facts
export const industry = [
  { id: "amazon", employer: "Amazon", role: "Operations Intern", aboutLabel: "Amazon", aboutUrl: "https://www.amazon.com/", about: "Operations Intern" },
  { id: "enlabel", employer: "enLabel", role: "Software Engineer", start: "2024-01", end: "2025-01", aboutLabel: "enLabel", aboutUrl: "https://www.enlabel.com/", about: "Software Engineer, Jan 2024 - Jan 2025" },
  { id: "cyvl", employer: "Cyvl", role: "Full-Stack Software Engineer", start: "2025-08", end: "2026-08", aboutLabel: "CYVL", aboutUrl: "https://www.cyvl.com/", about: "Full-Stack Software Engineer, 2025-2026" },
];

export const research = [
  {
    id: "tufts-hilab",
    employer: "Tufts University",
    aboutLabel: "Tufts",
    aboutUrl: "https://www.tufts.edu/",
    about: [{ text: "Human Interaction Laboratory", href: "https://sites.tufts.edu/hilab/" }],
  },
  {
    id: "afrl",
    employer: "Air Force Research Laboratory",
    aboutLabel: "USRA",
    aboutUrl: "https://www.usra.edu/",
    about: [{ text: "Air Force Research Laboratory", href: "https://www.afrl.af.mil/" }, ", summer 2025"],
  },
  { id: "wpi-aifc", employer: "WPI", aboutLabel: "WPI", aboutUrl: "https://www.wpi.edu/", about: "AI Futures Collab, summer 2025" },
];
