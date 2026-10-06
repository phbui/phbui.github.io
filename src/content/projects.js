// Every project card, in display order inside its track.
// Fields:
//   id, title
//   track         "academic" (course, lab and research work) or "misc" (everything else)
//   image         a key of `images` in src/assets/index.js
//   link          where the card and its title point
//   text          the short card text, one or two sentences
//   dates, organization, tags   optional extras for skins that show more
//   long          optional full description for future use
//   publicationId optional id in publications.js when a paper covers the same work
export const projects = [
  {
    id: "human-interaction-lab-gailbot",
    title: "Human Interaction Lab: GailBot",
    track: "academic",
    image: "hilab",
    link: "https://www.gailbot.ai/",
    text: "PyPI-distributed transcription pipeline for conversation analysis. I led its back-end overhaul.",
  },
  {
    id: "llms-can-be-judgy-too",
    title: "LLMs Can Be Judgy Too",
    track: "academic",
    image: "tufts",
    link: "https://www.are.na/block/36403350",
    text: "Fine‑tuned LLMs can proxy human reward in PPO for facial expression RL, boosting accuracy and reducing labeling vs pure human feedback.",
  },
  {
    id: "metrics-driven-safe-rl-for-ai-driving",
    title: "Metrics‑Driven Safe RL for AI Driving",
    track: "academic",
    image: "tufts",
    link: "https://www.are.na/block/36445938",
    text: "A post-training supervisor that enforces safety norms on DQN agents in HighwayEnv. The paper is listed under Publications.",
  },
  {
    id: "civic-honesty-benchmark",
    title: "Civic Honesty Benchmark",
    track: "academic",
    image: "hami",
    link: "https://github.com/phbui/civic-honesty-benchmark",
    text: "A live-data benchmark of 596 questions over a municipal open-data API. The dataset and episode logs are public. The paper is listed under Publications.",
  },
  {
    id: "captioning-for-neurodivergent-users",
    title: "Captioning for Neurodivergent Users",
    track: "academic",
    image: "tufts",
    link: "https://github.com/phbui/real-time-captioning-extension",
    text: "LLM-augmented captions add tone, intent, emotion cues to audio subtitles, improving comprehension, reducing cognitive load for neurodivergent users.",
  },
  {
    id: "sphero-swarm-framework",
    title: "Sphero Swarm Framework",
    track: "academic",
    image: "tufts",
    link: "https://www.are.na/block/33345533",
    text: "A framework for Sphero swarm navigation using probabilistic methods and computer vision, developed for Tufts' human-robot interaction research.",
  },
  {
    id: "robot-system-controls-study",
    title: "Robot System Controls Study",
    track: "academic",
    image: "tufts",
    link: "https://www.are.na/block/33345530",
    text: "Explored human preferences in manual vs autonomous control of Sphero robots, emphasizing trust and adaptability in navigation systems.",
  },
  {
    id: "worcester-permitpro",
    title: "Worcester PermitPro",
    track: "academic",
    image: "wpi",
    link: "https://www.are.na/block/26865313",
    text: "An AI-assisted land-acquisition and financing platform for low-income housing in Worcester, with GIS layers, open municipal data and blockchain-published records. Built for WPI's Major Qualifying Project.",
  },
  {
    id: "nitrocycle",
    title: "NitroCycle",
    track: "academic",
    image: "wpi",
    link: "https://github.com/IQP-NCPOGD/nitrocycle",
    text: "An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's Interactive Qualifying Project program.",
  },
  {
    id: "ai-architecture-for-storytelling",
    title: "AI Architecture for Storytelling",
    track: "academic",
    image: "chatgpt",
    link: "https://www.are.na/block/33237601",
    text: "An AI-driven architecture for immersive storytelling, integrating procedural generation, large language models, and player behavior modeling.",
  },
  {
    id: "chatgpt-how-do-i-design",
    title: "ChatGPT, How Do I Design?",
    track: "academic",
    image: "chatgpt",
    link: "https://www.are.na/block/26865380",
    text: "This paper advocates for harmonious human-AI co-creation in creativity, acknowledging benefits, challenges, and ethics.",
  },
  {
    id: "medical-service-request-system",
    title: "Medical Service Request System",
    track: "academic",
    image: "mgbwh",
    link: "https://github.com/phbui/BWH-Medical-Service-Request-System",
    text: "A medical service request system (MSRS) made for Brigham and Women's Hospital (BWH) during WPI's Software Engineering course.",
  },
  {
    id: "untitled",
    title: "Untitled",
    track: "misc",
    image: "untitled",
    link: "https://untitled.boston/",
    text: "A website I made for Untitled LLC, the underground arts collective I co-founded in Boston, MA.",
  },
  {
    id: "tarot-cards",
    title: "Tarot Cards",
    track: "misc",
    image: "tarot",
    link: "https://objectivephi.github.io/",
    text: "A little tarot card reader I made on my downtime at work.",
  },
  {
    id: "main-era",
    title: "Main Era",
    track: "misc",
    image: "mainEra",
    link: "https://main-era.github.io/",
    text: "A website I made for a Boston-based, indie punk band.",
  },
  {
    id: "haven",
    title: "Haven",
    track: "misc",
    image: "tufts",
    link: "https://www.are.na/block/26865372",
    text: "A live map for anonymous incident reporting and resource location designed for Tufts' Spring 2024 Producthon.",
  },
];
