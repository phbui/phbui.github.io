// Papers and presentations.
// Fields:
//   id, title, authors, venue, venueUrl, place, year, status ("Published", "Under review", ...)
//   lines   the pre-wrapped display lines used by the About code block. Each line is an array of
//           segments. A segment is a plain string or { text, href } for a link.
//   projectId  optional id of the project card that describes the artifact
export const publications = [
  {
    id: "scps-workshop",
    lines: [
      ["State-Wise Constrained Policy Shaping for"],
      ["Zero-Shot Runtime Behavior Steering"],
      ["T. Howell, P. Bui, R. McPherson, V. Sarathy"],
      [{ text: "AAAI-26 Workshop on AI Governance (AIGOV)", href: "https://aigovernance.github.io/" }],
      ["Singapore, 2026. Oral."],
      ["Collisions fell 97% in-distribution and 99% zero-shot."],
    ],
  },
  {
    id: "scoring-rules",
    lines: [
      ["Scoring Rules Certify Reporting, Not Seeking:"],
      ["A Dilemma for Level-Based Rewards in Sequential,"],
      ["Embodied Perception"],
      ["P. Bui"],
      ["Poster, IROS 2026 Full-Shift Robot Co-Workers"],
      ["workshop (non-archival), Pittsburgh."],
      ["Proper scoring rules reward honest reporting, not seeking."],
    ],
  },
  {
    id: "civic-honesty",
    lines: [
      ["Do Agents Disclose What the Data Cannot Support?"],
      ["A Live-Data Benchmark for Abstention,"],
      ["Measurement-Uncertainty Caveats, and Missingness"],
      ["Disclosure over Municipal Open Data"],
      ["P. Bui, 2026. Released as a benchmark."],
      ["Code and data: ", { text: "civic-honesty-benchmark", href: "https://github.com/phbui/civic-honesty-benchmark" }],
      ["A production model disclosed a findable defect in 0 of 108 answers."],
    ],
  },
];
