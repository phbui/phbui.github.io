import React from 'react';
import ModelViewer from './components/ModelViewer';
import './App.css';

const App = () => {
  return (
    <div className='mainContainer'>
      <div className='background'></div>
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
        <div className='bottomRight' style={{right: '62px'}}>
          <p className='accentText verticalText'>-=============|---+</p>
        </div>
        <div className='bottomRight'>
        <p className='accentText'>-=============|---+</p>
        </div>
      </div>
      <div className='textBox'>
        <p>halsjdklasjlkjljfljs</p>
      </div>
      <div className="textBox">
      <pre>{"const About = (phi_bui) => {"}</pre>
      <pre>     {"let undergrad = 'B.S. in CS @ WPI';"}</pre>
      <pre>     {"let grad = null; "}<span>{"//TBD"}</span></pre>
      <pre>{"}"}</pre>
      </div>
      <div className='textBox'>
        <pre>{"const Contact = {"}</pre>
        <pre>    {"{email: "}<a className='links' href="mailto:bilphui@gmail.com">bilphui@gmail.com</a>{"},"}</pre>
        <pre>    {"{linkedin: "}<a className='links' href="https://www.linkedin.com/in/phi-bui/">phi-bui</a>{"},"}</pre>
        <pre>    {"{github: "}<a className='links' href="https://github.com/phbui">phbui</a>{"}"}</pre>
        <pre>{"}"}</pre>
      </div>
    </div>
  );
};

export default App;
