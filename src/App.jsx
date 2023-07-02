import React from 'react';
import ModelViewer from './components/ModelViewer';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    backgroundImage: "url('src/assets/background.jpg')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    zIndex: 0,
  },
  canvasHolder: {
    position: 'fixed',
    top: 0,
    zIndex: 1,
  },
  accentHolder:{
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 3,
    pointerEvents: 'none',
  },
  topLeft: {
    position: 'absolute',
    top: '25px',
    left: '25px',
  },
  bottomRight: {
    position: 'absolute',
    bottom: '25px',
    right: '25px',
  },
  accentText: {
    margin: 0,
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
  },
  verticalText: {
    writingMode: 'vertical-rl'
  },
  textBox: {
    margin: '300px 0 300px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    border: '1px solid red',
    color: 'white',
    boxShadow: '0 0 5px rgb(254, 33, 70,0.25), 0 0 15px rgb(254, 33, 70, 0.5)',
    padding: '25px',
    height: ' 400vh',
    zIndex: 2,
  }
}

const App = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.background}></div>
      <div style={styles.canvasHolder}>
        <ModelViewer />
      </div>
      <div style={styles.accentHolder}>      
        <div style={styles.topLeft}>
          <p style={{...styles.accentText, ...styles.verticalText}}>+---|=============-</p>
        </div>
        <div style={styles.topLeft}>        
          <p style={styles.accentText}>+---|=============-</p>
        </div>
        <div style={{...styles.bottomRight, right: '62px'}}>
          <p style={{...styles.accentText, ...styles.verticalText}}>-=============|---+</p>
        </div>
        <div style={{...styles.bottomRight}}>
        <p style={styles.accentText}>-=============|---+</p>
        </div>
      </div>
      <div style={styles.textBox}>
        <p>halsjdklasjlkjljfljs</p>
      </div>
    </div>
  );
};

export default App;
