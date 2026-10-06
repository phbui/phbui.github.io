import React, { useCallback } from 'react';
import ALink from './ALink';

const NavBar = ({ refs }) => {
  console.log(refs)
  const handleClick = useCallback(
    (ref) => (e) => {
      e.preventDefault(); 
      const { current: element } = ref;

      if (element) {
        window.scrollTo({
          top: element.offsetTop - window.innerHeight / 2 + element.offsetHeight * 3,
          behavior: 'smooth',
        });
      } else {
        console.warn("Ref is not attached to an element:", ref);
      }
    },
    []
  );

  const navItems = [
    { label: 'home', ref: refs.homeRef },
    { label: 'projects', ref: refs.projectsRef },
    { label: 'about', ref: refs.aboutRef },
    { label: 'contact', ref: refs.contactRef },
  ];

  return (
    <div className="accentLine">
      {navItems.map((item, index) => (
        <pre key={index} className="preText">
          <a onClick={handleClick(item.ref)} className="navBar">
            <ALink text={item.label} />
          </a>
        </pre>
      ))}
    </div>
  );
};

export default NavBar;
