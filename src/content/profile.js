// Who the site is about and the short prompts that introduce each section.
// Fields:
//   name, fullName      display name and legal name
//   aboutVar            the variable name printed in the About code block, "const About = (aboutVar) => {"
//   greeting            the home text box, one string per line
//   sections            the prompt line above the projects, about and contact boxes
//   documents           downloadable files. id is the variable name in the About block,
//                       file is a key of `files` in src/assets/index.js, download is the saved file name
//   pages               other pages on the site. id is the variable name, label is the link text
export const profile = {
  name: "Phi Bui",
  fullName: "Philip Bui",
  aboutVar: "phi_bui",
  greeting: [
    "Hello, my name is Phi (Φ),",
    "I am interested in the intersection",
    "between humans and technology.",
  ],
  sections: {
    projects: "Check out some of my work:",
    about: "Some stuff about me:",
    contact: "Get in contact with me:",
  },
  documents: [
    { id: "resume", label: "resume.pdf", file: "resume", download: "Philip Bui - Resume.pdf" },
    { id: "cv", label: "cv.pdf", file: "cv", download: "Philip Bui - CV.pdf" },
  ],
  pages: [{ id: "academic", label: "Academic", href: "/academic/" }],
};
