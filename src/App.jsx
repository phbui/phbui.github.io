import React, { useRef } from 'react';
import ModelViewer from './components/ModelViewer';
import './App.css';
import NavBar from './components/NavBar';
import Project from './components/Project';
import ALink from './components/ALink';

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
        <div className='bottomRight' style={{right: '50px'}}>
          <p className='accentText verticalText'>-=============|---+</p>
        </div>
        <div className='bottomRight'>
        <p className='accentText'>-=============|---+</p>
        </div>
      </div>
      <div ref={homeRef} className='textBox' style={{marginRight: '25vw'}}>
        <pre>{"Hello, my name is Phi (Φ),"}</pre>
        <pre>{"I make websites for cool people."}</pre>
      </div>
      <div ref={projectsRef} className='projects'>
        <div className="textBox" style={{ margin: '15vh 0 0 0'}}>
          <Project img="" title="Amazon Pathfinder" link="" text="Created an intern tool projected to achieve a 95% cost reduction, saving Amazon over $10k per Amazonian trained in drop zones."/>
        </div>
        <div className="textBox" style={{ margin: '5vh 2.5vw 0 2.5vw'}}>
          <Project img="" title="BGC NitroCycle" link="https://github.com/IQP-NCPOGD/nitrocycle" text="An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's IQP program."/>
        </div>
        <div className="textBox" style={{ margin: '0vh 0 0 0'}}>
          <Project img="" title="BWH MSRS" link="https://github.com/phbui/BWH-Medical-Service-Request-System" text="A medical service request system made for Brigham and Women's Hospital for WPI's Software Engineering course."/>
        </div>
      </div>
      <div ref={aboutRef} className='textBox' style={{marginLeft: '14vw'}}>
        <pre>{"const About = (phi_bui) => {"}</pre>
        <pre>   {"const resume = fetch('"}<a href={'assets/Philip Bui Resume.pdf'} download="Philip Bui - Resume.pdf"><ALink text="resume.pdf"/></a>{"');"}</pre>
        <pre>   {"let undergrad = 'B.S. in CS @ WPI';"}</pre>
        <pre>   {"let grad = null; "}<span className='grad'>{"//TBD"}</span></pre>
        <br></br>
        <pre>   {"const experience = () => {"}</pre>
        <pre>       {"return ["}</pre>
        <pre>           {"{Amazon: 'Area Manager Intern'},"}</pre>
        <pre>           {"{ProsperOn: Website Developer Intern}"}</pre>
        <pre>       {"];"}</pre>
        <pre>   {"};"}</pre>
        <pre>{"}"}</pre>
      </div>
      <div ref={contactRef} className='textBox'>
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
