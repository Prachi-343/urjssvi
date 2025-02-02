import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import videoThumbnail1 from '../assets/images/imgs/video_thumbnail1.jpg';
import videoThumbnail2 from '../assets/images/imgs/video_thumbnail2.jpg';
import videoThumbnail3 from '../assets/images/imgs/video_thumbnail3.jpg';

const Videos = () => {
  return (
    <div className="ast_packages_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading ast_bottompadder20">
              <h1>About <span>Vastushasra</span></h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hummer.</p>
            </div>
          </div>
        </div>
        <div className="ast_packages_mainbox">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_packages_box">
                <img src={videoThumbnail1} alt="Video Thumbnail 1" className="img-fluid" />
                <h4>Vastushasra Basics</h4>
                <p>An introduction to Vastushasra, covering the basic principles and concepts.</p>
                <a href="#" className="ast_btn">Watch Video</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_packages_box active">
                <img src={videoThumbnail2} alt="Video Thumbnail 2" className="img-fluid" />
                <h4>Advanced Techniques</h4>
                <p>Explore advanced Vastushasra techniques for optimizing your living space.</p>
                <a href="#" className="ast_btn">Watch Video</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_packages_box">
                <img src={videoThumbnail3} alt="Video Thumbnail 3" className="img-fluid" />
                <h4>Case Studies</h4>
                <p>Real-life case studies demonstrating the application of Vastushasra principles.</p>
                <a href="#" className="ast_btn">Watch Video</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;