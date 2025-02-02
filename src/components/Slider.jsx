import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="ast_slider_wrapper">
      <div className="ast_banner_text">
        <div className="starfield">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="ast_waves">
          <div className="ast_wave"></div>
          <div className="ast_wave"></div>
          <div className="ast_wave"></div>
        </div>
        <div className="ast_waves2">
          <div className="ast_wave"></div>
          <div className="ast_wave"></div>
          <div className="ast_wave"></div>
        </div>
        <div className="ast_waves3">
          <div className="ast_wave"></div>
          <div className="ast_wave"></div>
          <div className="ast_wave"></div>
        </div>
        <div className="container">
          <div className="ast_bannertext_wrapper">
            <h1>Enliven your home with Urjassvi Vastu.</h1>
            <ul className="ast_toppadder40 ast_bottompadder50">
              <li>Gems</li>
              <li>Astro</li>
              <li>Vastu</li>
            </ul>
            <Link to="/appointment" className="ast_btn">make it now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;