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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      setResponseMessage('Your message has been sent successfully!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      setResponseMessage('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="ast_mapnform_wrapper ast_toppadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>find & message <span>here</span></h1>
              <p>Have questions or need guidance? Reach out to us anytime—our expert astrologers are here to assist you with accurate insights and personalized advice.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ast_contact_map">
        <div className="ast_contact_form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>first name</label>
                <input type="text" name="first_name" className="require" value={formData.first_name} onChange={handleChange} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>last name</label>
                <input type="text" name="last_name" className="require" value={formData.last_name} onChange={handleChange} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>email</label>
                <input type="text" name="email" className="require" data-valid="email" data-error="Email should be valid." value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>subject</label>
                <input type="text" name="subject" className="require" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <label>message</label>
                <textarea rows="5" name="message" className="require" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="response">{responseMessage}</div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <button className="ast_btn pull-right submitForm" type="submit">send</button>
              </div>
            </div>
          </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.594538725196!2d73.08938207525378!3d19.212903882020054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795d0e826f317%3A0xafd6a05e5f3bc20f!2sUrjassvi%20Vastu%20-%20Mr.Mayuresh%20Dixit!5e0!3m2!1sen!2sin!4v1738114703125!5m2!1sen!2sin" allowFullScreen title="Google Maps"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;