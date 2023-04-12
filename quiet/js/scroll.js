const scrollBox = document.querySelector('.center');
const bg = document.querySelector('.halftone');
const bar = document.querySelector('.progress-bar');
const text0 = document.getElementById('text0');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const scroll = document.querySelector('.scroll');

const incrementRate = 2;
const stop2InitialValue = Math.pow(Math.log(10), 2.75) + '%';

bg.style.setProperty('--stop2', stop2InitialValue);

let lastScrollPos = 0;
let isScrolling = false;

function handleScroll() {
  if (!isScrolling) {
    isScrolling = true;

    requestAnimationFrame(() => {
      bg.style.setProperty('--stop2', Math.pow(1.1 * Math.log(scrollBox.scrollTop + 10), 2.85) + '%');
      bg.style.setProperty('--offset', Math.pow(Math.log(scrollBox.scrollTop + 10), 3)/2 + 'px');
      bar.style.height = ((scrollBox.scrollTop / document.documentElement.clientHeight) * 100/3) + '%';

      if (scrollBox.scrollTop > 400) scroll.classList.add('fade');
      else scroll.classList.remove('fade');
      
      if (scrollBox.scrollTop > 150) text0.classList.remove('fade');
      else text0.classList.add('fade');

      if (scrollBox.scrollTop > 300) text1.classList.remove('fade');
      else text1.classList.add('fade');

      if (scrollBox.scrollTop > 500) text2.classList.remove('fade');
      else text2.classList.add('fade');

      if (scrollBox.scrollTop > 900) text3.classList.remove('fade');
      else text3.classList.add('fade');

      if (scrollBox.scrollTop > 1200) text4.classList.remove('fade');
      else text4.classList.add('fade');

      lastScrollPos = scrollBox.scrollTop;
      isScrolling = false;
    });
  }
}

scrollBox.addEventListener('scroll', handleScroll);
