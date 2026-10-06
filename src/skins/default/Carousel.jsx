import React, { useState } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (e, index) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel-content">
        {children.map((child, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {child}
          </div>
        ))}
      </div>

      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {children.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={(e) => goToSlide(e, index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
