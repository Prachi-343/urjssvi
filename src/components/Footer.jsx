import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import Logo from '../assets/images/imgs/header-logo.png';
import { faPhone, faEnvelope, faSignIn, faUserPlus, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className="ast_footer_wrapper ast_toppadder70 ast_bottompadder20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_footer_info">
              <img src={Logo} alt="Logo" />
              <p>
              Your journey to self-discovery begins here! Explore astrology, get expert predictions, <br/> and find the guidance you need for a better life. Stay connected and let the stars guide your path.
              </p>
              <ul>
                <li><a href="#" ><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="widget text-widget">
              <h4 className="widget-title">our newsletter</h4>
              <div className="ast_newsletter">
                <p>Stay updated with the latest astrological insights and predictions. Subscribe to our newsletter and never miss out on the cosmic guidance that can help you navigate your life.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-12">
            <div className="widget text-widget">
              <h4 className="widget-title">quick links</h4>
              <div className="ast_sociallink">
                <ul>
                  <li><a href="/about">about</a></li>
                  <li><a href="/blog">blog</a></li>
                  <li><a href="/privacy_policy">Privacy Policy</a></li>
                  <li><a href="/contact">contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="widget text-widget">
              <h4 className="widget-title">get in touch</h4>
              <div className="ast_gettouch">
                <ul>
                  <li><i className="fa fa-home" aria-hidden="true"></i>
                    <p>14, Shree Sankeshwar Building, above Jay Maharashtra Chana Bhandar, beside Prakash Hardware, Tilak Nagar, Dombivli East, Dombivli, Maharashtra 421201</p>
                  </li>
                  <li><i className="fa fa-at" aria-hidden="true"></i>
                    <a href="mailto:mayureshdixit18@gmail.com">mayureshdixit18@gmail.com</a>
                    <a href="http://www.urjassvi.com" target="_blank" rel="noopener noreferrer">www.urjassvi.com</a>
                  </li>
                  <li><i className="fa fa-phone" aria-hidden="true"></i>
                    <p>+91 8181814269</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_copyright_wrapper">
              <p>&copy; Copyright 2025, All Rights Reserved, <a href="#">Urjassvi</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;