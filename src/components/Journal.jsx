import React, { useState } from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Journal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: 'male',
    appointmentType: '1',
    reachMethod: '1',
    date: '',
    time: '',
    address: '',
    reason: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'appointments'), formData);
      setResponseMessage('Your appointment has been booked successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        gender: 'male',
        appointmentType: '1',
        reachMethod: '1',
        date: '',
        time: '',
        address: '',
        reason: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      setResponseMessage('There was an error booking your appointment. Please try again.');
    }
  };

  return (
    <div className="ast_journal_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_journal_info">
              <h3>make your appointment to discuss any problem.</h3>
              <p>Life often presents challenges that leave us searching for answers, but astrology offers a path to clarity and solutions. Whether you’re facing career uncertainties, relationship struggles, financial concerns, health issues, or personal dilemmas, our expert astrologers are here to guide you. Through detailed horoscope analysis, planetary insights, and proven astrological remedies, we help you navigate life’s complexities with confidence.</p>
              <p>By booking an appointment, you gain access to personalized guidance tailored to your unique birth chart and life circumstances. Our astrologers provide deep insights into your past, present, and future, empowering you to make informed decisions and overcome obstacles. Don’t let uncertainty hold you back—schedule a consultation today and take the first step toward a brighter, more balanced future!</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_journal_box_wrapper">
              <form onSubmit={handleSubmit}>
                <h3>appointment form</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>name</label>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>email</label>
                    <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>mobile number</label>
                    <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>appointment</label>
                    <select name="appointmentType" value={formData.appointmentType} onChange={handleChange}>
                      <option value="1">Gemstone consultancy</option>
                      <option value="2">Astrology consultancy</option>
                      <option value="3">Vastu consulting</option>
                      <option value="4">Pooja</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>way to reach</label>
                    <select name="reachMethod" value={formData.reachMethod} onChange={handleChange}>
                      <option value="1">Phone</option>
                      <option value="2">Email</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>preferred date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>preferred time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>address</label>
                    <textarea name="address" placeholder="Address" rows="4" value={formData.address} onChange={handleChange}></textarea>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <label>reason for appointment</label>
                    <textarea name="reason" placeholder="Message" rows="4" value={formData.reason} onChange={handleChange}></textarea>
                  </div>
                  <div className="response">{responseMessage}</div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <button type="submit" className="ast_btn pull-right">make an appointment</button>
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