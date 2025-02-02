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

import birthJournalIcon from '../assets/images/content/icons8-baby-32.png';
import vastuShastraIcon from '../assets/images/content/icons8-home-50.png';
import faceReadingIcon from '../assets/images/content/icons8-face-64.png';
import lalKitabIcon from '../assets/images/content/icons8-book-50.png';
import gemstonesIcon from '../assets/images/content/icons8-gemstone-50.png';
import kundliDoshIcon from '../assets/images/content/icons8-kundli-dosh-501.png';

const Service = () => {
  return (
    <div className="ast_service_wrapper ast_toppadder70 ast_bottompadder50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>our <span>services</span></h1>
              <p>Our astrology services include personalized horoscope readings, career and love guidance, and accurate predictions. Get expert insights to shape your future with confidence.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={birthJournalIcon} alt="Service" />
              <h4>Birth Journal</h4>
              <p>Discover the secrets of your life with a personalized birth journal based on your unique astrological chart.</p>
              <div className="clearfix"></div>
              <Link to="/service_single" className="ast_btn">read more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={vastuShastraIcon} alt="Service" />
              <h4>Vastu Shastra</h4>
              <p>Enhance harmony and prosperity in your life with expert Vastu Shastra guidance.</p>
              <div className="clearfix"></div>
              <Link to="/service_single" className="ast_btn">read more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={faceReadingIcon} alt="Service" />
              <h4>Face Reading</h4>
              <p>Unveil hidden truths about your personality and destiny with expert face reading analysis.</p>
              <div className="clearfix"></div>
              <Link to="/service_single" className="ast_btn">read more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={lalKitabIcon} alt="Service" />
              <h4>Lal Kitab</h4>
              <p>Unlock simple yet powerful remedies for a better life with Lal Kitab astrology.</p>
              <div className="clearfix"></div>
              <Link to="/service_single" className="ast_btn">read more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={gemstonesIcon} alt="Service" />
              <h4>Gemstones</h4>
              <p>Harness the power of gemstones to attract positivity, success, and well-being in your life.</p>
              <div className="clearfix"></div>
              <Link to="/service_single" className="ast_btn">read more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={kundliDoshIcon} alt="Service" />
              <h4>kundli dosh</h4>
              <p>Identify and resolve Kundli Dosh with expert remedies for a harmonious and prosperous life.</p>
              <div className="clearfix"></div>
              <Link to="/service_single" className="ast_btn">read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;