import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import CountUp from 'react-countup';

import timer1 from '../assets/images/content/timer_1.png';
import timer2 from '../assets/images/content/timer_2.png';
import timer3 from '../assets/images/content/timer_3.png';
import timer4 from '../assets/images/content/timer_4.png';

const TimerSection = () => {
  return (
    <div className="ast_timer_wrapper ast_toppadder70 ast_bottompadder40">
      <div className="ast_img_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>now <span>we have</span></h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hummer.</p>
            </div>
          </div>
          <div className="ast_counter_wrapper row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="ast_counter">
                <span><img src={timer1} alt="timer" /></span>
                <h2 className="timer">
                  <CountUp start={0} end={200} duration={5} />
                </h2>
                <h4>Offices Worldwide</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="ast_counter">
                <span><img src={timer2} alt="timer" /></span>
                <h2 className="timer">
                  <CountUp start={0} end={800} duration={5} />
                </h2>
                <h4>skilled Astrologers</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="ast_counter">
                <span><img src={timer3} alt="timer" /></span>
                <h2 className="timer">
                  <CountUp start={0} end={60} duration={5} />
                </h2>
                <h4>Cities Covered</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="ast_counter">
                <span><img src={timer4} alt="timer" /></span>
                <h2 className="timer">
                  <CountUp start={0} end={7} duration={5} />
                </h2>
                <h4>Years of Experiences</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerSection;