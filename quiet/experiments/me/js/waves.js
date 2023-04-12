const waves = document.querySelector(".waters");

let iterator = 1;
let increment = 0.1;
let lastTime = 0;

function update(currentTime) {
  const deltaTime = currentTime - lastTime;
  lastTime = currentTime;
  
  iterator += increment * (deltaTime / 500);
  
  if (iterator >= 2) {
    iterator = 2;
    increment = -0.1;
  }
  
  if (iterator <= 0.5) {
    iterator = 0.5;
    increment = 0.1;
  }
  
  waves.style.setProperty('--stop2', iterator + 'rem');
  
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
