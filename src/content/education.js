// Degrees, newest last (display order).
// Fields:
//   id, aboutVar     id for keys, aboutVar is the variable name in the About block
//   degree           full degree name
//   degreeShort      short degree label shown in the About block
//   degreeUrl        program page
//   school, schoolUrl
//   start, end       "YYYY-MM", end is null while the degree is in progress
//   gpa, notes       optional extras for skins that want them
export const education = [
  {
    id: "wpi-bs",
    aboutVar: "undergrad",
    degree: "B.S. in Computer Science",
    degreeShort: "B.S. in CS",
    degreeUrl: "https://www.wpi.edu/academics/study/computer-science-bs",
    school: "WPI",
    schoolUrl: "https://www.wpi.edu/",
    start: "2021-08",
    end: "2023-12",
    gpa: "3.8/4.0",
    notes: "Graduated with distinction.",
  },
  {
    id: "tufts-ms",
    aboutVar: "grad_1",
    degree: "M.S. in Computer Science: Human-Robot Interaction",
    degreeShort: "M.S. in CS:HRI",
    degreeUrl: "https://engineering.tufts.edu/cs/current-students/graduate/ms-human-robot-interaction",
    school: "Tufts",
    schoolUrl: "https://www.tufts.edu/",
    start: "2024-09",
    end: "2025-05",
    gpa: "3.8/4.0",
  },
  {
    id: "nyu-phd",
    aboutVar: "grad_2",
    degree: "Ph.D. in Urban Systems",
    degreeShort: "Ph.D. in Urban Systems",
    degreeUrl: "https://engineering.nyu.edu/academics/programs/urban-systems-phd",
    school: "NYU",
    schoolUrl: "https://www.nyu.edu/",
    start: "2026-09",
    end: null,
    notes: "Advised by Dr. Debra Laefer, Urban Modeling Group. Studying honest uncertainty in urban infrastructure sensing.",
  },
];
