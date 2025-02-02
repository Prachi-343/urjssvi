import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bread from '../components/Breadcrumb.jsx';;
import Contactform from '../components/Contactform.jsx';


const Contact = () => {
  return (
    <div>
      <Header />
      <Bread  />
      <Contactform  />
      <Footer />
    </div>
  );
};

export default Contact;