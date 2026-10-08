import React, { useCallback } from 'react';
import ALink from './ALink';
import { profile } from '../../content';

const NavBar = ({ refs }) => {
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
  // External pages open in a new tab instead of scrolling. Content lives in profile.pages.
  const pageItems = profile.pages.map((p) => ({ label: p.label.toLowerCase(), href: p.href }));

  return (
    <div className="accentLine">
      {navItems.map((item, index) => (
        <pre key={index} className="preText">
          <a onClick={handleClick(item.ref)} className="navBar">
            <ALink text={item.label} />
          </a>
        </pre>
      ))}
      {pageItems.map((item) => (
        <pre key={item.label} className="preText">
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="navBar">
            <ALink text={item.label} />
          </a>
        </pre>
      ))}
    </div>
  );
};

export default NavBar;
