import React from "react";
import Carousel from "./Carousel";
import Project from "./Project";
import { images } from "../../assets";
import { projects } from "../../content";

const Section = ({ className, title, track }) => (
  <div className={`section ${className}`}>
    <pre className="section-title">{title}</pre>
    <div className="carousel-container">
      <Carousel>
        {projects
          .filter((p) => p.track === track)
          .map((p) => (
            <Project
              key={p.id}
              img={images[p.image]}
              title={p.title}
              link={p.link}
              text={p.text}
            />
          ))}
      </Carousel>
    </div>
  </div>
);

const ProjectCarousel = () => (
  <div className="projects-container">
    <Section className="academic-section" title="Academic" track="academic" />
    <Section className="miscellaneous-section" title="Miscellaneous" track="misc" />
  </div>
);

export default ProjectCarousel;
