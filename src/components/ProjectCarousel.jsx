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

const academicProjects = [
  {
    img: huIMG,
    title: "AI Architecture for Storytelling",
    link: "https://www.are.na/block/33237601",
    text: "An AI-driven architecture for immersive storytelling, integrating procedural generation, large language models, and player behavior modeling."
  },
  {
    img: tuftsIMG,
    title: "Sphero Swarm Framework",
    link: "https://www.are.na/block/33345533",
    text: "A framework for Sphero swarm navigation using probabilistic methods and computer vision, developed for Tufts' human-robot interaction research.",
  },
  {
    img: wpiIMG,
    title: "Worcester PermitPro",
    link: "https://www.are.na/block/26865313",
    text: "A blockchain-based smart contract system that aims to streamline low-income housing development in Worcester for WPI's Major Qualifying Project Program.",
  },
  {
    img: tuftsIMG,
    title: "Robot System Controls Study",
    link: "https://www.are.na/block/33345530",
    text: "Explored human preferences in manual vs autonomous control of Sphero robots, emphasizing trust and adaptability in navigation systems.",
  },
  {
    img: huIMG,
    title: "ChatGPT, How Do I Design?",
    link: "https://www.are.na/block/26865380",
    text: "This paper advocates for harmonious human-AI co-creation in creativity, acknowledging benefits, challenges, and ethics.",
  },
  {
    img: wpiIMG,
    title: "NitroCycle",
    link: "https://github.com/IQP-NCPOGD/nitrocycle",
    text: "An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's Interactive Qualifying Project program.",
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
    text: "A website I made for a start-up entertainment consultancy, Untitled LLC in Boston, MA.",
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
