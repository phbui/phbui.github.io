import { useRef, useEffect, useState } from "react";
import ModelViewer from "../../shared/ModelViewer";
import "./App.css";
import NavBar from "./NavBar";
import ProjectCarousel from "./ProjectCarousel";
import { AboutCode, ContactCode } from "./AboutCode";
import { profile } from "../../content";

const Layout = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [refsLoaded, setRefsLoaded] = useState(false);

  useEffect(() => {
    if (
      homeRef.current &&
      projectsRef.current &&
      aboutRef.current &&
      contactRef.current
    ) {
      setRefsLoaded(true);
    }
  }, [homeRef, projectsRef, aboutRef, contactRef]);

  return (
    <div className="mainContainer">
      <div className="background"></div>
      {refsLoaded && (
        <NavBar refs={{ homeRef, projectsRef, aboutRef, contactRef }} />
      )}
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
        {profile.greeting.map((line) => (
          <pre key={line}>{line}</pre>
        ))}
      </div>
      <div
        ref={projectsRef}
        className="textBox"
        style={{ margin: "0 15vw -25vh 0" }}
      >
        <pre>{profile.sections.projects}</pre>
      </div>
      <ProjectCarousel />
      <div
        ref={aboutRef}
        className="textBox"
        style={{ margin: "10vh 30vw 5vh 0" }}
      >
        <pre>{profile.sections.about}</pre>
      </div>
      <div className="textBox" style={{ margin: "0 -12.5vw 10vh 0" }}>
        <AboutCode />
      </div>
      <div
        ref={contactRef}
        className="textBox"
        style={{ margin: "0 32.5vw 10vh 0" }}
      >
        <pre>{profile.sections.contact}</pre>
      </div>
      <div className="textBox">
        <ContactCode />
      </div>
    </div>
  );
};

export default Layout;
