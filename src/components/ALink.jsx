import React, { useEffect, useRef } from "react";

const ALink = ({ text }) => {
  const linkRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let interval = null;
    const handleMouseOver = (event) => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = text
          .split("")
          .map((char, index) =>
            index < iteration ? char : letters[Math.floor(Math.random() * 26)]
          )
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
  }, [text, letters]);

  return (
    <span
      className="links"
      ref={linkRef}
    >
      {text}
    </span>
  );
};

export default ALink;
