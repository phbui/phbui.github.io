import React, { useRef } from 'react';
import ModelViewer from './components/ModelViewer';
import './App.css';
import NavBar from './components/NavBar';
import Project from './components/Project';
import ALink from './components/ALink';
import resume from './assets/Philip Bui Resume.pdf';
import hu3900 from './assets/HU3900 - ChatGPT, How Do I Design.pdf'
import huIMG from './assets/chatgpt.jpg';
import ncIMG from './assets/wpi.jpg';
import msrsIMG from './assets/mgbwh.jpg';

const App = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='mainContainer'>
      <div className='background'></div>
      <NavBar homeRef={homeRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef} />
      <div className='canvasHolder'>
        <ModelViewer />
      </div>
      <div className='accentHolder'>      
        <div className='topLeft'>
          <p className='accentText verticalText'>+---|=============-</p>
        </div>
        <div className='topLeft'>        
          <p className='accentText'>+---|=============-</p>
        </div>
        <div className='bottomRight rightSword'>
          <p className='accentText verticalText'>-=============|---+</p>
        </div>
        <div className='bottomRight'>
        <p className='accentText'>-=============|---+</p>
        </div>
      </div>
      <div ref={homeRef} className='textBox' style={{margin: '0 25vw 10vh 0'}}>
        <pre>{"Hello, my name is Phi (Φ),"}</pre>
        <pre>{"I make websites for cool people."}</pre>
      </div>
      <div ref={projectsRef} className='textBox' style={{margin: '0 15vw -25vh 0'}}>
        <pre>{"Check out some of my work:"}</pre>
      </div>
      <div className='projects'>
        <div className="textBox" style={{ margin: '50vh 0 0 0'}}>
          <Project img={ncIMG} title="NitroCycle" link="https://github.com/IQP-NCPOGD/nitrocycle" text="An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's IQP program."/>
        </div>
        <div className="textBox" style={{ margin: '25vh 2.5vw 0 2.5vw'}}>
          <Project img={msrsIMG} title="MSRS" link="https://github.com/phbui/BWH-Medical-Service-Request-System" text="A medical service request system (MSRS) made for Mass General Brigham and Women's Hospital for WPI's Software Engineering course."/>
        </div>
        <div className="textBox" style={{ margin: '0vh 0 0 0'}}>
          <Project img={huIMG} title="HUA Paper" link={hu3900} download="Philip Bui - ChatGPT, How Do I Design?" text="'ChatGPT, How do I Design?' advocates for harmonious human-AI co-creation in creativity, acknowledging benefits, challenges, and ethical implications."/>
        </div>
      </div>
      <div ref={aboutRef} className='textBox' style={{margin: '0 -15vw 10vh 0'}}>
        <pre>{"Some stuff about me:"}</pre>
      </div>
      <div className='textBox'style={{margin: '0 -10vw 10vh 0'}}>
        <pre>{"const About = (phi_bui) => {"}</pre>
        <pre>   {"const resume = fetch('"}<a href={resume} download="Philip Bui - Resume.pdf"><ALink text="resume.pdf"/></a>{"');"}</pre>
        <pre>   {"let undergrad = 'B.S. in CS @ WPI';"}</pre>
        <pre>   {"let grad = null; "}<span className='grad'>{"//TBD"}</span></pre>
        <br></br>
        <pre>   {"const experience = () => {"}</pre>
        <pre>       {"return ["}</pre>
        <pre>           {"{Amazon: 'Area Manager Intern'},"}</pre>
        <pre>           {"{ProsperOn: 'Website Developer Intern'}"}</pre>
        <pre>       {"];"}</pre>
        <pre>   {"};"}</pre>
        <pre>{"}"}</pre>
      </div>
      <div ref={contactRef}  className='textBox' style={{margin: '0 30vw 10vh 0'}}>
        <pre>{"Get in contact with me:"}</pre>
      </div>
      <div className='textBox'>
        <pre>{"const Contact = {"}              </pre>
        <pre>  {"{email: "}<a href="mailto:bilphui@gmail.com"><ALink text="bilphui@gmail.com"/></a>{"},"}</pre>
        <pre>  {"{linkedin: "}<a href="https://www.linkedin.com/in/phi-bui/"><ALink text="phi-bui"/></a>{"},"}</pre>
        <pre>  {"{github: "}<a href="https://github.com/phbui"><ALink text="phbui"/></a>{"}"}</pre>
        <pre>{"}"}</pre>
      </div>
    </div>
  );
};

export default App;
