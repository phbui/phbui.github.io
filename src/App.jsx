import React from 'react';
import ModelViewer from './components/ModelViewer';

const styles = {
  canvasHolder: {
    position: 'fixed',
    top: 0,
    zIndex: 1,
  }
}

const App = () => {
  return (
    <div>
      <div style={{backgroundColor: 'transparent', height: '200vh', zIndex: 2, position: 'relative'}}></div>
      <div style={styles.canvasHolder}>
        <ModelViewer />
      </div>
    </div>
  );
};

export default App;
