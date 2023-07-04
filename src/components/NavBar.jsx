import React, { useCallback } from 'react';

const NavBar = ({ homeRef, projectsRef, aboutRef, contactRef }) => {
    const handleClick = useCallback((ref) => () => {
        const { current: element } = ref;
      
        window.scrollTo({
          top: element.offsetTop - window.innerHeight / 2 + element.offsetHeight / 2,
          behavior: 'smooth',
        });
      }, []);

  return (
    <div className="accentLine">
      <pre className="preText">
        <a onClick={handleClick(homeRef)} className='links'>home</a>
      </pre>
      <pre className="preText">
        <a onClick={handleClick(projectsRef)} className='links'>projects</a>
      </pre>
      <pre className="preText">
        <a onClick={handleClick(aboutRef)} className='links'>about</a>
      </pre>
      <pre className="preText">
        <a onClick={handleClick(contactRef)} className='links'>contact</a>
      </pre>
    </div>
  );
};

export default NavBar;
