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
      <div style={{backgroundColor: 'pink', height: '200vh', zIndex: 0, position: 'relative'}}></div>
      <div style={styles.canvasHolder}>
        <ModelViewer />
      </div>
    </div>
  );
};

export default App;
