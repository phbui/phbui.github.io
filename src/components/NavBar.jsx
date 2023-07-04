import React, { useCallback } from 'react';
import ALink from './ALink';

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
        <a onClick={handleClick(homeRef)} className='navBar'><ALink text='home'/></a>
      </pre>
      <pre className="preText">
        <a onClick={handleClick(projectsRef)} className='navBar'><ALink text='projects'/></a>
      </pre>
      <pre className="preText">
        <a onClick={handleClick(aboutRef)} className='navBar'><ALink text='about'/></a>
      </pre>
      <pre className="preText">
        <a onClick={handleClick(contactRef)} className='navBar'><ALink text='contact'/></a>
      </pre>
    </div>
  );
};

export default NavBar;
