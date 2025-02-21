// src/components/Header.jsx
import React, { useState } from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import './css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/imgs/logo.png';

// Define a custom CSS class for orange icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="ast_top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-10">
              <div className="ast_logo">
                <Link to="/"><img src={Logo} alt="Logo" title="Logo" /></Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-2">
              <div className="ast_main_menu_wrapper">
                <div className={`ast_menu ${menuOpen ? 'ast_main_menu_hide' : ''}`}>
                  <ul>
                    <li className="as_submenu_li"><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/services">services</Link></li>
                    <li className="as_submenu_li"><Link to="/blog">blog</Link></li>
                    <li><Link to="/appointment">appointment</Link></li>
                    <li className="as_submenu_li"><Link to="/shop">shop</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                  </ul>
                </div>
              </div>
              <button className="ast_menu_btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars}  />
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="ast_main_menu_drawer">
          <ul>
            <li className="as_submenu_li"><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>about</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>services</Link></li>
            <li className="as_submenu_li"><Link to="/blog" onClick={toggleMenu}>blog</Link></li>
            <li><Link to="/appointment" onClick={toggleMenu}>appointment</Link></li>
            <li className="as_submenu_li"><Link to="/shop" onClick={toggleMenu}>shop</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
