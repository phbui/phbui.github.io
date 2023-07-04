import React, { useRef } from 'react';
import ModelViewer from './components/ModelViewer';
import './App.css';
import NavBar from './components/NavBar';

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
        <div className='bottomRight' style={{right: '38px'}}>
          <p className='accentText verticalText'>-=============|---+</p>
        </div>
        <div className='bottomRight'>
        <p className='accentText'>-=============|---+</p>
        </div>
      </div>
      <div ref={homeRef} className='textBox' style={{marginRight: '20vw'}}>
        <pre>{"Hello, my name is Phi (Φ),"}</pre>
        <pre>{"I make websites for cool people."}</pre>
      </div>
      <div ref={projectsRef} className='project'>
        <div className="textBox"></div>
        <div className="textBox"></div>
        <div className="textBox"></div>
      </div>
      <div ref={aboutRef} className='textBox' style={{marginLeft: '10vw'}}>
        <pre>{"const About = (phi_bui) => {"}</pre>
        <pre>   {"const resume = "}<a className='links' href={'src/assets/Philip Bui Resume.pdf'} download="Philip Bui - esume.pdf">{'fetch(\'resume.pdf\');'}</a></pre>
        <pre>   {"let undergrad = 'B.S. in CS @ WPI';"}</pre>
        <pre>   {"let grad = null; "}<span>{"//TBD"}</span></pre>
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
        <pre>{"const Contact = {"}</pre>
        <pre>  {"{email: "}<a className='links' href="mailto:bilphui@gmail.com">{'bilphui@gmail.com'}</a>{"},"}</pre>
        <pre>  {"{linkedin: "}<a className='links' href="https://www.linkedin.com/in/phi-bui/">{'phi-bui'}</a>{"},"}</pre>
        <pre>  {"{github: "}<a className='links' href="https://github.com/phbui">{'phbui'}</a>{"}"}</pre>
        <pre>{"}"}</pre>
      </div>
    </div>
  );
};

export default App;
