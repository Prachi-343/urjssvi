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
import ownerImage from '../assets/images/imgs/owner-hd.png';

const About = () => {
  return (
    <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>about <span>astrology</span></h1>
              <p>Astrology is the ancient science of interpreting celestial movements to reveal insights about personality, relationships, and life events.</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="ast_about_info_img">
              <img src={ownerImage} width="400" height="400" alt="About" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="ast_about_info">
              <h4>know about astrology</h4>
              <p>Astrology is an ancient practice that studies the influence of celestial bodies on human life. It is based on the belief that the positions and movements of the planets, stars, and moon impact personality traits, relationships, and future events. </p>
              <p>By analyzing birth charts, zodiac signs, and planetary alignments, astrology provides insights into various aspects of life, including career, love, and personal growth. Whether used for self-discovery or guidance, astrology serves as a tool to understand the deeper connections between the cosmos and human experiences.</p>
              <Link to="/about" className="ast_btn">know more</Link>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default About;