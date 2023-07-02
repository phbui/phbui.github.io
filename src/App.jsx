import React from 'react';
import ModelViewer from './components/ModelViewer';

const styles = {
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
    zIndex: 2
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
}

const App = () => {
  return (
    <div>
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
        <div style={styles.bottomRight}>
          <p style={{...styles.accentText, ...styles.verticalText}}>-=============|---+</p>
        </div>
        <div style={{...styles.bottomRight}}>
        <p style={styles.accentText}>-=============|---+</p>
        </div>
      </div>
    </div>
  );
};

export default App;
