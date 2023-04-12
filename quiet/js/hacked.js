const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
const hacked = document.querySelector(".hacked");
const container = document.querySelector(".container");
const box = document.querySelector(".center");
const halftone = document.querySelector(".halftone");
const scrollText = document.querySelector(".scroll");
const progress = document.querySelector(".progress-container");
const content = document.querySelector(".content");
const logo = document.querySelector(".logo");

box.scrollTop = 0;

hacked.onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

function expand() {
  box.dataset.expanded = "true";
  container.classList.add('paused');
  hacked.classList.add('hidden');
  box.classList.add('expanded');
  halftone.classList.remove('fade');
  scrollText.classList.remove('fade');
  progress.classList.remove('fade');
  logo.classList.remove('fade');
}