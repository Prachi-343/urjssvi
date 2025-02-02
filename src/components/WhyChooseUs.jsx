import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
// import wc1 from '../assets/images/img/wc_1.png';
import wc1 from '../assets/images/imgs/wc_1.png';
import ww2 from '../assets/images/imgs/ww_2.png';
import ww3 from '../assets/images/imgs/ww_3.png';
import ww4 from '../assets/images/imgs/ww_4.png';
import ww5 from '../assets/images/imgs/ww_5.png';
import ww6 from '../assets/images/imgs/ww_6.png';

const WhyChooseUs = () => {
  return (
    <div className="ast_whywe_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>why <span>choose us</span></h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hummer.</p>
            </div>
          </div>
          <div className="ast_whywe_info row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span><img src={wc1} alt="90+ Expert Astrologers" /></span>
                <div className="ast_whywe_info_box_info">
                  <p>90+ Expert Astrologers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span><img src={ww2} alt="24x7, 365 Days Availability" /></span>
                <div className="ast_whywe_info_box_info">
                  <p>24x7, 365 Days Availability</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span><img src={ww3} alt="Instant Access Worldwide" /></span>
                <div className="ast_whywe_info_box_info">
                  <p>Instant Access Worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span><img src={ww4} alt="Accurate Remedial Solutions" /></span>
                <div className="ast_whywe_info_box_info">
                  <p>Accurate Remedial Solutions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span><img src={ww5} alt="Privacy Guaranteed" /></span>
                <div className="ast_whywe_info_box_info">
                  <p>Privacy Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span><img src={ww6} alt="Trusted by million+ clients" /></span>
                <div className="ast_whywe_info_box_info">
                  <p>Trusted by million+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;