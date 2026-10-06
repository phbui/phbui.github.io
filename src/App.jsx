import { Fragment, useRef, useEffect, useState } from "react";
import ModelViewer from "./components/ModelViewer";
import "./App.css";
import NavBar from "./components/NavBar";
import ALink from "./components/ALink";
import resume from "./assets/Philip Bui - Resume.pdf";
import cv from "./assets/Philip Bui - CV.pdf";
import ProjectCarousel from "./components/ProjectCarousel";

const publications = [
  {
    lines: [
      ["State-Wise Constrained Policy Shaping for"],
      ["Zero-Shot Runtime Behavior Steering"],
      ["T. Howell, P. Bui, R. McPherson, V. Sarathy"],
      [
        {
          text: "AAAI-26 Workshop on AI Governance (AIGOV)",
          href: "https://aigovernance.github.io/",
        },
      ],
      ["Singapore, 2026. Oral."],
      ["Collisions fell 97% in-distribution and 99% zero-shot."],
    ],
  },
  {
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
    lines: [
      ["Do Agents Disclose What the Data Cannot Support?"],
      ["A Live-Data Benchmark for Abstention,"],
      ["Measurement-Uncertainty Caveats, and Missingness"],
      ["Disclosure over Municipal Open Data"],
      ["P. Bui, 2026. Released as a benchmark."],
      [
        "Code and data: ",
        {
          text: "civic-honesty-benchmark",
          href: "https://github.com/phbui/civic-honesty-benchmark",
        },
      ],
      ["A production model disclosed a findable defect in 0 of 108 answers."],
    ],
  },
];

const honors = [
  [
    "Tandon School of Engineering Ph.D. Fellowship, NYU, 2026",
  ],
  [
    "NYC DEP Environmental Technology Lab Challenge, Cyvl, 2026",
  ],
  [
    "Honos Civicus Society, Tufts, 2025",
  ],
  [
    "Upsilon Pi Epsilon, WPI, 2021-2023",
  ],
];

const App = () => {
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
        <pre>
          {"  const cv = fetch('"}
          <a href={cv} download="Philip Bui - CV.pdf">
            <ALink text="cv.pdf" />
          </a>
          {"');"}
        </pre>
        <pre>
          {"  const academic = fetch('"}
          <a href="/academic/">
            <ALink text="Academic" />
          </a>
          {"');"}
        </pre>
        <pre>
          {"\n"}
          {"  let undergrad = '"}
          <a href="https://www.wpi.edu/academics/study/computer-science-bs">
            <ALink text="B.S. in CS" />
          </a>
          {" @ "}
          <a href="https://www.wpi.edu/">
            <ALink text="WPI" />
          </a>
          {" (2021-2023)';"}
        </pre>
        <pre>
          {"  let grad_1 = '"}
          <a href="https://engineering.tufts.edu/cs/current-students/graduate/ms-human-robot-interaction">
            <ALink text="M.S. in CS:HRI" />
          </a>
          {" @ "}
          <a href="https://www.tufts.edu/">
            <ALink text="Tufts" />
          </a>
          {" (2024-2025)';"}
        </pre>
        <pre>
          {"  let grad_2 = '"}
          <a href="https://engineering.nyu.edu/academics/programs/urban-systems-phd">
            <ALink text="Ph.D. in Urban Systems" />
          </a>
          {" @ "}
          <a href="https://www.nyu.edu/">
            <ALink text="NYU" />
          </a>
          {" (2026-present)';"}
        </pre>
        <br></br>
        <pre>
          {" "}
          {"  const "}
          <span style={{ textDecoration: "underline" }}>
            {"industry_experience"}
          </span>
          {" = () => {           "}
        </pre>
        <pre> {"    return ["}</pre>
        <pre>
          {" "}
          {"      {"}
          <a href="https://www.amazon.com/">
            <ALink text="Amazon" />
          </a>
          {": 'Operations Intern'},"}
        </pre>
        <pre>
          {" "}
          {"      {"}
          <a href="https://www.enlabel.com/">
            <ALink text="enLabel" />
          </a>
          {": 'Software Engineer, Jan 2024 - Jan 2025'},"}
        </pre>
        <pre>
          {" "}
          {"      {"}
          <a href="https://www.cyvl.com/">
            <ALink text="CYVL" />
          </a>
          {": 'Full-Stack Software Engineer, 2025-2026'}"}
        </pre>
        <pre> {"    ];"}</pre>
        <pre> {"  };"}</pre>
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
        <pre>
          {" "}
          {"      {"}
          <a href="https://www.tufts.edu/">
            <ALink text="Tufts" />
          </a>
          {": '"}
          <a href="https://sites.tufts.edu/hilab/">
            <ALink text="Human Interaction Laboratory" />
          </a>
          {"'},"}
        </pre>
        <pre>
          {" "}
          {"      {"}
          <a href="https://www.usra.edu/">
            <ALink text="USRA" />
          </a>
          {": '"}
          <a href="https://www.afrl.af.mil/">
            <ALink text="Air Force Research Laboratory" />
          </a>
          {", summer 2025'},"}
        </pre>
        <pre>
          {" "}
          {"      {"}
          <a href="https://www.wpi.edu/">
            <ALink text="WPI" />
          </a>
          {": 'AI Futures Collab, summer 2025'},"}
        </pre>
        <pre> {"    ];"}</pre>
        <pre> {"  };"}</pre>
        <br></br>
        <pre>
          {" "}
          {"  const "}
          <span style={{ textDecoration: "underline" }}>
            {"publications"}
          </span>
          {" = () => {"}
        </pre>
        <pre> {"    return ["}</pre>
        {publications.map((pub, i) => (
          <Fragment key={i}>
            {pub.lines.map((line, j) => (
              <pre key={j}>
                {j === 0 ? "      {'" : "        "}
                {line.map((seg, k) =>
                  typeof seg === "string" ? (
                    seg
                  ) : (
                    <a key={k} href={seg.href}>
                      <ALink text={seg.text} />
                    </a>
                  )
                )}
                {j === pub.lines.length - 1 ? "'}," : ""}
              </pre>
            ))}
            <br></br>
          </Fragment>
        ))}
        <pre> {"    ];"}</pre>
        <pre> {"  };"}</pre>
        <br></br>
        <pre>
          {" "}
          {"  const "}
          <span style={{ textDecoration: "underline" }}>
            {"honors"}
          </span>
          {" = () => {"}
        </pre>
        <pre> {"    return ["}</pre>
        {honors.map((line, i) => (
          <pre key={i}>
            {"      '"}
            {line}
            {"',"}
          </pre>
        ))}
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
          <a href="mailto:pb2963@nyu.edu">
            <ALink text="pb2963@nyu.edu" />
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
