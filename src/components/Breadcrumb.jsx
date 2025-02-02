import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Breadcrumb = () => {
  return (
    <div className="ast_pagetitle">
      <div className="ast_img_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="page_title">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="breadcrumb">
              <li><a href="index.html">home</a></li>
              <li>//</li>
              <li><a href="about.html">About us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;