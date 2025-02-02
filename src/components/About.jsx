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
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hummer.</p>
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
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
              <Link to="/about" className="ast_btn">know more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;