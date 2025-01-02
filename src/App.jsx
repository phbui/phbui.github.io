import React, { useRef } from "react";
import ModelViewer from "./components/ModelViewer";
import "./App.css";
import NavBar from "./components/NavBar";
import ALink from "./components/ALink";
import resume from "./assets/Philip Bui Resume.pdf";
import ProjectCarousel from "./components/ProjectCarousel";

const App = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="mainContainer">
      <div className="background"></div>
      <NavBar
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div className="canvasHolder">
        <ModelViewer />
      </div>
      <div className="accentHolder">
        <div className="topLeft">
          <p className="accentText verticalText">+---|=============-</p>
        </div>
        <div className="topLeft">
          <p className="accentText">+---|=============-</p>
        </div>
        <div className="bottomRight rightSword">
          <p className="accentText verticalText">-=============|---+</p>
        </div>
        <div className="bottomRight">
          <p className="accentText">-=============|---+</p>
        </div>
      </div>
      <div
        ref={homeRef}
        className="textBox"
        style={{ margin: "0 25vw 10vh 0" }}
      >
        <pre>{"Hello, my name is Phi (Φ),"}</pre>
        <pre>{"I am interested in the intersection"}</pre>
        <pre>{"between humans and technology."}</pre>
      </div>
      <div
        ref={projectsRef}
        className="textBox"
        style={{ margin: "0 15vw -25vh 0" }}
      >
        <pre>{"Check out some of my work:"}</pre>
      </div>
      <ProjectCarousel />
      <div
        ref={aboutRef}
        className="textBox"
        style={{ margin: "5vh -15vw 10vh 0" }}
      >
        <pre>{"Some stuff about me:"}</pre>
      </div>
      <div className="textBox" style={{ margin: "0 -12.5vw 10vh 0" }}>
        <pre>{"const About = (phi_bui) => {"}</pre>
        <pre>
          {"  const resume = fetch('"}
          <a href={resume} download="Philip Bui - Resume.pdf">
            <ALink text="resume.pdf" />
          </a>
          {"');"}
        </pre>
        <pre>{"  let undergrad = 'B.S. in CS @ WPI';"}</pre>
        <pre>{"  let grad = 'M.S. in HRI @ Tufts';"}</pre>
        <br></br>
        <pre>
          {" "}
          {"  const "}
          <span style={{ textDecoration: "underline" }}>
            {"industry_experience"}
          </span>
          {" = () => {"}
        </pre>
        <pre> {"    return ["}</pre>
        <pre> {"      {Amazon: 'Operations Intern'},"}</pre>
        <pre> {"      {ProsperOn: 'Website Developer'},"}</pre>
        <pre> {"      {enLabel: 'Full-Stack Software Engineer'}"}</pre>
        <pre> {"    ];"}</pre>
        <br></br>
        <pre>
          {" "}
          {"  const "}
          <span style={{ textDecoration: "underline" }}>
            {"research_experience"}
          </span>
          {" = () => {"}
        </pre>
        <pre> {"    return ["}</pre>
        <pre> {"      {Tufts: 'Human Interaction Lab'},"}</pre>
        <pre> {"    ];"}</pre>
        <pre> {"  };"}</pre>
        <pre>{"}"}</pre>
      </div>
      <div
        ref={contactRef}
        className="textBox"
        style={{ margin: "0 32.5vw 10vh 0" }}
      >
        <pre>{"Get in contact with me:"}</pre>
      </div>
      <div className="textBox">
        <pre>{"const Contact = {            "} </pre>
        <pre>
          {"  {email: "}
          <a href="mailto:bilphui@gmail.com">
            <ALink text="bilphui@gmail.com" />
          </a>
          {"},"}
        </pre>
        <pre>
          {"  {linkedin: "}
          <a href="https://www.linkedin.com/in/phi-bui/">
            <ALink text="phi-bui" />
          </a>
          {"},"}
        </pre>
        <pre>
          {"  {github: "}
          <a href="https://github.com/phbui">
            <ALink text="phbui" />
          </a>
          {"},"}
        </pre>
        <pre>
          {"  {instagram: "}
          <a href="https://www.instagram.com/objectivephi/">
            <ALink text="@objectivephi" />
          </a>
          {"}"}
        </pre>
        <pre>{"}"}</pre>
      </div>
    </div>
  );
};

export default App;
