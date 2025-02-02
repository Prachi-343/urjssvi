import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Testimonials = () => {
  return (
    <div className="ast_testimonial_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>what client<span> says</span></h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hummer.</p>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-12 offset-lg-1 offset-md-0 offset-sm-0 offset-0">
            <div className="ast_testimonials_slider">
              <div className="owl-theme" loop margin={10} nav>
                <div className="item">
                  <div className="ast_testimonials_slider_box">
                    <img src="https://dummyimage.com/90x90" alt="Testimonial" />
                    <div className="ast_testimonials_slider_box_text">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution.</p>
                      <h4>Charlyn Stewart, <span>astrologer</span></h4>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ast_testimonials_slider_box">
                    <img src="https://dummyimage.com/90x90" alt="Testimonial" />
                    <div className="ast_testimonials_slider_box_text">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution.</p>
                      <h4>Kenneth Page, <span>tarot reader</span></h4>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ast_testimonials_slider_box">
                    <img src="https://dummyimage.com/90x90" alt="Testimonial" />
                    <div className="ast_testimonials_slider_box_text">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution.</p>
                      <h4>Louis Robinson, <span>horoscoper</span></h4>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ast_testimonials_slider_box">
                    <img src="https://dummyimage.com/90x90" alt="Testimonial" />
                    <div className="ast_testimonials_slider_box_text">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution.</p>
                      <h4>Judith Tierney, <span>psychologist</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;