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

import vas1 from '../assets/images/content/vas_1.png';
import vas2 from '../assets/images/content/vas_2.png';
import vas3 from '../assets/images/content/vas_3.png';
import vas4 from '../assets/images/content/vas_4.png';
import vas5 from '../assets/images/content/vas_5.png';
import vas6 from '../assets/images/content/vas_6.png';

import vad1 from '../assets/images/content/vad_1.png';
import vad2 from '../assets/images/content/vad_2.png';
import vad3 from '../assets/images/content/vad_3.png';
import vad4 from '../assets/images/content/vad_4.png';
import vad5 from '../assets/images/content/vad_5.png';
import vad6 from '../assets/images/content/vad_6.png';
import vad7 from '../assets/images/content/vad_7.png';
import vad8 from '../assets/images/content/vad_8.png';

import vdkBb from '../assets/images/imgs/vdk_bb.jpg';
import vdkVst from '../assets/images/imgs/vdk_vst.jpg';
import vdkKndl from '../assets/images/imgs/vdk_kndl.png';

const DailyRoutines = () => {
  return (
    <div className="ast_wedo_wrapper ast_toppadder70 ast_bottompadder50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>Daily Routines</h1>
              <p>Align your daily routines with astrological wisdom for a balanced and fulfilling life. Follow personalized guidance to enhance health, success, and well-being.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ast_vedic_astrology">
                  <h4>vedic astrology</h4>
                  <ul>
                    <li>
                      <Link to="/appointment">
                        <img src={vas1} alt="Sun Sign" />
                        <div className="ast_vedic_astro_info">
                          <h5>Sun Sign</h5>
                          <p>Represents your core personality, identity, and life purpose.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vas2} alt="Moon Sign" />
                        <div className="ast_vedic_astro_info">
                          <h5>moon Sign</h5>
                          <p>Reflects your emotions, inner self, and subconscious mind.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vas3} alt="Planets" />
                        <div className="ast_vedic_astro_info">
                          <h5>Planets</h5>
                          <p>Each planet influences different aspects of life and destiny.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vas4} alt="Ascendant" />
                        <div className="ast_vedic_astro_info">
                          <h5>Ascendant</h5>
                          <p>Defines your outer personality, first impressions, and approach to life. </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vas5} alt="Twelve Houses" />
                        <div className="ast_vedic_astro_info">
                          <h5>Twelve Houses</h5>
                          <p>Each house governs specific life areas like career, relationships, and health.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vas6} alt="Nakshatras" />
                        <div className="ast_vedic_astro_info">
                          <h5>Nakshatras</h5>
                          <p>Lunar constellations that shape personality traits and life events.</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ast_vedic_astrology">
                  <h4>baby names by nakshatra</h4>
                  <div className="ast_vedic_astro_box">
                    <img src={vdkBb} alt="Baby" />
                    <p>Daily Planetary OverviewIt is a long estable fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/appointment" className="ast_btn pull-right">search now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ast_vedic_astrology">
                  <h4>astrology advice</h4>
                  <ul>
                    <li>
                      <Link to="/appointment">
                        <img src={vad1} alt="career" />
                        <div className="ast_vedic_astro_info">
                          <h5>career</h5>
                          <p>Get astrological insights to choose the right career path and achieve success.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vad2} alt="relationship" />
                        <div className="ast_vedic_astro_info">
                          <h5>relationship</h5>
                          <p>Understand compatibility and strengthen your relationships with astrology.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vad3} alt="finance" />
                        <div className="ast_vedic_astro_info">
                          <h5>finance</h5>
                          <p>Plan your finances wisely with astrological guidance for stability and growth.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vad4} alt="business" />
                        <div className="ast_vedic_astro_info">
                          <h5>business</h5>
                          <p>Unlock business success with astrology-based strategies and timing.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vad5} alt="education" />
                        <div className="ast_vedic_astro_info">
                          <h5>education</h5>
                          <p>Enhance learning and academic success with personalized astrological advice.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vad6} alt="health" />
                        <div className="ast_vedic_astro_info">
                          <h5>health</h5>
                          <p>Maintain well-being with astrology-backed health predictions and remedies.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vad7} alt="Ask A Question" />
                        <div className="ast_vedic_astro_info">
                          <h5>Ask A Question</h5>
                          <p>Seek answers to your life’s uncertainties with expert astrological guidance.</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        <img src={vad8} alt="Love Remedies" />
                        <div className="ast_vedic_astro_info">
                          <h5>Love Remedies</h5>
                          <p>Find astrological solutions to attract love and maintain harmony in relationships.</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ast_vedic_astrology">
                  <h4>vastu shastra</h4>
                  <div className="ast_vedic_astro_box">
                    <img src={vdkVst} alt="vastu" />
                    <p>Daily Planetary OverviewIt is a long estable fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/appointment" className="ast_btn pull-right">know more</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ast_vedic_astrology">
                  <h4>Birth journal (kundli)</h4>
                  <div className="ast_vedic_astro_box">
                    <img src={vdkKndl} alt="Baby" />
                    <p>Daily Planetary OverviewIt is a long estable fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/appointment" className="ast_btn pull-right">check now</Link>
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

export default DailyRoutines;