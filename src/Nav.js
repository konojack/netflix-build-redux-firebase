import { useEffect, useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);

  const transitionNavbar = () => {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className="nav__logo" src="/netflix-logo.png" alt="netflix logo" />
        <img
          className="nav__avatar"
          src="/netflix-avatar.png"
          alt="netflix logo"
        />
      </div>
    </div>
  );
};

export default Nav;
