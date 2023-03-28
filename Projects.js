function initSlider(slider) {
  const images = slider.querySelectorAll('.proj');
  const prevBtn = slider.querySelector('.arrow.left');
  const nextBtn = slider.querySelector('.arrow.right');
  const dots = slider.querySelectorAll('.dot');
  let currentImageIndex = 0;

  const setActiveImageAndDot = (index) => {
    images[currentImageIndex].classList.remove('active', 'zoomed');
    dots[currentImageIndex].classList.remove('active');
    currentImageIndex = index;
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');

    console.log(images[currentImageIndex].dataset.text)
    updateProjectInfo(
      slider,
      images[currentImageIndex].dataset.link,
      images[currentImageIndex].dataset.text,
      images[currentImageIndex].dataset.date,
      images[currentImageIndex].dataset.collab
    )
  };

  prevBtn.addEventListener('click', () => {
    const index = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    setActiveImageAndDot(index);
  });

  nextBtn.addEventListener('click', () => {
    const index = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    setActiveImageAndDot(index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => setActiveImageAndDot(dotIndex));
  });

  images.forEach((image) => {
    image.addEventListener('click', () => {
      if (image.classList.contains('zoomed')) {
        image.classList.remove('zoomed');
      } else {

        images.forEach((img) => {
          if (img !== image) {
            img.classList.remove('zoomed');
          }
        });

        image.classList.add('zoomed');
      }
    });
  });

  setActiveImageAndDot(currentImageIndex);
}

function updateProjectInfo(slider, link, linkText, date, collab) {

  const proj = slider.parentElement;

  const projectLink = proj.querySelector('#link');
  const projectLinkText = proj.querySelector('#link-text');
  const projectDate = proj.querySelector('#date');
  const projectCollab = proj.querySelector('#collab');


  if (link) projectLink.href = link;
  if (linkText) projectLinkText.textContent = "🔗 " + linkText;
  if (date) projectDate.textContent = date;
  if (collab) projectCollab.textContent = collab;
}

