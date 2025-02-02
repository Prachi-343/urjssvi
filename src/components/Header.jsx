// src/components/Header.jsx
import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSignIn, faUserPlus, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Define a custom CSS class for orange icons
const iconStyles = {
  color: '#ff6f00'
};

const Header = () => {
  return (
    <>
      <div className="ast_top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_contact_details">
                <ul>
                  <li><a href="tel:+918181814269"><FontAwesomeIcon icon={faPhone} style={iconStyles} /> +91 8181814269</a></li>
                  <li><a href="mailto:mayureshdixit18@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={iconStyles} /> mayureshdixit18@gmail.com</a></li>
                </ul>
              </div>
              <div className="ast_autho_wrapper">
                <ul>
                  <li><a className="popup-with-zoom-anim" href=""><FontAwesomeIcon icon={faSignIn} style={iconStyles} /> Log In</a></li>
                  <li><a className="popup-with-zoom-anim" href=""><FontAwesomeIcon icon={faUserPlus} style={iconStyles} /> Sign Up</a></li>
                  <li className="ast_search">
                    <a href="#"><FontAwesomeIcon icon={faSearch} style={iconStyles} /></a>
                    <div className="ast_search_field">
                      <form>
                        <input type="text" placeholder="Search Here" />
                        <button type="button"><FontAwesomeIcon icon={faSearch} style={iconStyles} /></button>
                      </form>
                    </div>
                  </li>
                  <li className="ast_cart">
                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} style={iconStyles} /></a>
                  </li>
                </ul>           
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ast_header_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-10">
              <div className="ast_logo">
                <Link to="/"><img src="src\assets\images\imgs\header-logo.png" alt="Logo" title="Logo" /></Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-2">
              <div className="ast_main_menu_wrapper">
                <div className="ast_menu">
                  <ul>
                    <li className="as_submenu_li"><Link className="dropdown-toggle" to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/services">services</Link></li>
                    <li className="as_submenu_li"><Link className="dropdown-toggle" to="/blog">blog</Link></li>
                    <li><Link to="/appointment">appointment</Link></li>
                    <li className="as_submenu_li"><Link className="dropdown-toggle" to="/shop">shop</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                  </ul>
                </div>
              </div>
              <button className="ast_menu_btn"><FontAwesomeIcon icon={faBars} style={iconStyles} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;