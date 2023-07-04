import React, { useEffect, useRef } from 'react';

const ALink = ({ text }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const linkElement = linkRef.current;
    linkElement.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearInterval(interval);
      linkElement.removeEventListener("mouseover", handleMouseOver);
    };
  }, [text]);

  return <span className='links' ref={linkRef}>{text}</span>;
};

export default ALink;
