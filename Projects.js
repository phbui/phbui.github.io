function initSlider(slider) {
  const images = slider.querySelectorAll('.proj');
  const prevBtn = slider.querySelector('.arrow.left');
  const nextBtn = slider.querySelector('.arrow.right');
  const dots = slider.querySelectorAll('.dot');

  let currentImageIndex = 0;
  images[currentImageIndex].classList.add('active');
  dots[currentImageIndex].classList.add('active');

  prevBtn.addEventListener('click', () => {
    images[currentImageIndex].classList.remove('active', 'zoomed');
    dots[currentImageIndex].classList.remove('active');
    currentImageIndex = currentImageIndex - 1;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
  });

  nextBtn.addEventListener('click', () => {
    images[currentImageIndex].classList.remove('active', 'zoomed');
    dots[currentImageIndex].classList.remove('active');
    currentImageIndex = currentImageIndex + 1;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      images[currentImageIndex].classList.remove('active', 'zoomed');
      dots[currentImageIndex].classList.remove('active');
      currentImageIndex = dotIndex;
      images[currentImageIndex].classList.add('active');
      dots[currentImageIndex].classList.add('active');
    });
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
}
