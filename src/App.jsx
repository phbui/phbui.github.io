import { useRef, useEffect, useState } from "react";
import ModelViewer from "./components/ModelViewer";
import "./App.css";
import NavBar from "./components/NavBar";
import ALink from "./components/ALink";
import resume from "./assets/Philip Bui - Resume.pdf";
import ProjectCarousel from "./components/ProjectCarousel";

const App = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [refsLoaded, setRefsLoaded] = useState(false);

  useEffect(() => {
    if (homeRef.current && projectsRef.current && aboutRef.current && contactRef.current) {
      setRefsLoaded(true);
    }
  }, [homeRef, projectsRef, aboutRef, contactRef]);

  return (
    <div className="mainContainer">
      <div className="background"></div>
      {refsLoaded && <NavBar refs={{ homeRef, projectsRef, aboutRef, contactRef }} />}
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
        <pre>{"between humans, art, and technology."}</pre>
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
        style={{ margin: "10vh 30vw 5vh 0" }}
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
        <pre>{"  let undergrad = '"}<a href="https://www.wpi.edu/academics/study/computer-science-bs"><ALink text="B.S. in CS" /></a>{" @ "}<a href="https://www.wpi.edu/"><ALink text="WPI" /></a>{"';"}</pre>
        <pre>{"  let grad = '"}<a href="https://engineering.tufts.edu/cs/current-students/graduate/ms-human-robot-interaction"><ALink text="M.S. in CS:HRI" /></a>{" @ "}<a href="https://www.tufts.edu/"><ALink text="Tufts" /></a>{"';"}</pre>
        <br></br>
        <pre>
          {" "}
          {"  const "}
          <span style={{ textDecoration: "underline" }}>
            {"industry_experience"}
          </span>
          {" = () => {          "}
        </pre>
        <pre> {"    return ["}</pre>
        <pre> {"      {"}<a href="https://www.amazon.com/"><ALink text="Amazon" /></a>{": 'Operations Intern'},"}</pre>
        <pre> {"      {"}<a href="https://www.prosperon.io/"><ALink text="ProsperOn" /></a>{": 'Website Developer'},"}</pre>
        <pre> {"      {"}<a href="https://www.enlabel.com/"><ALink text="enLabel" /></a>{": 'Software Engineer'}"}</pre>
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
        <pre> {"      {"}<a href="https://www.tufts.edu/"><ALink text="Tufts" /></a>{": '"}<a href="https://sites.tufts.edu/hilab/"><ALink text="Human Interaction Laboratory" /></a>{"'},"}</pre>
        <pre> {"      {"}<a href="https://www.usra.edu/"><ALink text="USRA" /></a>{": '"}<a href="https://www.afrl.af.mil/"><ALink text="Air Force Research Laboratory" /></a>{"'},"}</pre>
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
