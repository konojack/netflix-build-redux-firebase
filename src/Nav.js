import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

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

  const openProfile = () => {
    navigate('/profile');
  };

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="/netflix-logo.png"
          alt="netflix logo"
          onClick={() => navigate('/')}
        />
        <img
          className="nav__avatar"
          src="/netflix-avatar.png"
          alt="netflix logo"
          onClick={openProfile}
        />
      </div>
    </div>
  );
};

export default Nav;
