import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Journal = () => {
  return (
    <div className="ast_journal_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_journal_info">
              <h3>make your appointment to discuss any problem.</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_journal_box_wrapper">
              <form>
                <h3>appointment form</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>name</label>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>email</label>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>mobile number</label>
                    <input type="text" placeholder="Mobile Number" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>gender</label>
                    <select>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>appointment</label>
                    <select>
                      <option value="1">Gemstone consultancy</option>
                      <option value="2">Astrology consultancy</option>
                      <option value="3">Vastu consulting</option>
                      <option value="4">Pooja</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>way to reach</label>
                    <select>
                      <option value="1">Phone</option>
                      <option value="2">Email</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>preferred date</label>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <input type="text" placeholder="Date" />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <input type="text" placeholder="Month" />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <input type="text" placeholder="Year" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>preferred time</label>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <input type="text" placeholder="Hrs" />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <input type="text" placeholder="Mins" />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <input type="text" placeholder="Sec" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>address</label>
                    <textarea placeholder="Address" rows="4"></textarea>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>reason for appointment</label>
                    <textarea placeholder="Message" rows="4"></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <button type="button" className="ast_btn pull-right">make an appointment</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;