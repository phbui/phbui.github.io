import React from "react";
import Carousel from "./Carousel";
import Project from "./Project";
import huIMG from "../assets/chatgpt.jpg";
import wpiIMG from "../assets/wpi.jpg";
import msrsIMG from "../assets/mgbwh.jpg";
import meIMG from "../assets/main-era.jpg";
import untitledIMG from "../assets/untitled.jpg";
import tarotIMG from "../assets/tarot.jpg";
import tuftsIMG from "../assets/tufts.jpg";
import hilabIMG from "../assets/hilab.jpg";
import hamiIMG from "../assets/hami.jpg";

const academicProjects = [
  {
    img: hilabIMG,
    title: "Human Interaction Lab: GailBot",
    link: "https://www.gailbot.ai/",
    text: "PyPI-distributed transcription pipeline for conversation analysis. I led its back-end overhaul.",
  },
  {
    img: tuftsIMG,
    title: "LLMs Can Be Judgy Too",
    link: "https://www.are.na/block/36403350",
    text: "Fine‑tuned LLMs can proxy human reward in PPO for facial expression RL, boosting accuracy and reducing labeling vs pure human feedback.",
  },
  {
    img: tuftsIMG,
    title: "Metrics‑Driven Safe RL for AI Driving",
    link: "https://www.are.na/block/36445938",
    text: "A post-training supervisor that enforces safety norms on DQN agents in HighwayEnv. The paper is listed under Publications.",
  },
  {
    img: hamiIMG,
    title: "Civic Honesty Benchmark",
    link: "https://github.com/phbui/civic-honesty-benchmark",
    text: "A live-data benchmark of 596 questions over a municipal open-data API. The dataset and episode logs are public. The paper is listed under Publications.",
  },
  {
    img: tuftsIMG,
    title: "Captioning for Neurodivergent Users",
    link: "https://github.com/phbui/real-time-captioning-extension",
    text: "LLM-augmented captions add tone, intent, emotion cues to audio subtitles, improving comprehension, reducing cognitive load for neurodivergent users.",
  },
  {
    img: tuftsIMG,
    title: "Sphero Swarm Framework",
    link: "https://www.are.na/block/33345533",
    text: "A framework for Sphero swarm navigation using probabilistic methods and computer vision, developed for Tufts' human-robot interaction research.",
  },
  {
    img: tuftsIMG,
    title: "Robot System Controls Study",
    link: "https://www.are.na/block/33345530",
    text: "Explored human preferences in manual vs autonomous control of Sphero robots, emphasizing trust and adaptability in navigation systems.",
  },
  {
    img: wpiIMG,
    title: "Worcester PermitPro",
    link: "https://www.are.na/block/26865313",
    text: "An AI-assisted land-acquisition and financing platform for low-income housing in Worcester, with GIS layers, open municipal data and blockchain-published records. Built for WPI's Major Qualifying Project.",
  },
  {
    img: wpiIMG,
    title: "NitroCycle",
    link: "https://github.com/IQP-NCPOGD/nitrocycle",
    text: "An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's Interactive Qualifying Project program.",
  },
  {
    img: huIMG,
    title: "AI Architecture for Storytelling",
    link: "https://www.are.na/block/33237601",
    text: "An AI-driven architecture for immersive storytelling, integrating procedural generation, large language models, and player behavior modeling.",
  },
  {
    img: huIMG,
    title: "ChatGPT, How Do I Design?",
    link: "https://www.are.na/block/26865380",
    text: "This paper advocates for harmonious human-AI co-creation in creativity, acknowledging benefits, challenges, and ethics.",
  },
  {
    img: msrsIMG,
    title: "Medical Service Request System",
    link: "https://github.com/phbui/BWH-Medical-Service-Request-System",
    text: "A medical service request system (MSRS) made for Brigham and Women's Hospital (BWH) during WPI's Software Engineering course.",
  },
];

const miscellaneousProjects = [
  {
    img: untitledIMG,
    title: "Untitled",
    link: "https://untitled.boston/",
    text: "A website I made for Untitled LLC, the underground arts collective I co-founded in Boston, MA.",
  },
  {
    img: tarotIMG,
    title: "Tarot Cards",
    link: "https://objectivephi.github.io/",
    text: "A little tarot card reader I made on my downtime at work.",
  },
  {
    img: meIMG,
    title: "Main Era",
    link: "https://main-era.github.io/",
    text: "A website I made for a Boston-based, indie punk band.",
  },
  {
    img: tuftsIMG,
    title: "Haven",
    link: "https://www.are.na/block/26865372",
    text: "A live map for anonymous incident reporting and resource location designed for Tufts' Spring 2024 Producthon.",
  },
];

const ProjectCarousel = () => {
  return (
    <div className="projects-container">
      {/* Academic Section */}
      <div className="section academic-section">
        <pre className="section-title">Academic</pre>
        <div className="carousel-container">
          <Carousel>
            {academicProjects.map((project, index) => (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                link={project.link}
                text={project.text}
              />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Miscellaneous Section */}
      <div className="section miscellaneous-section">
        <pre className="section-title">Miscellaneous</pre>
        <div className="carousel-container">
          <Carousel>
            {miscellaneousProjects.map((project, index) => (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                link={project.link}
                text={project.text}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
