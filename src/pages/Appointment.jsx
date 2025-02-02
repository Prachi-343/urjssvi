import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bread from '../components/Breadcrumb.jsx';
import Journal from '../components/Journal.jsx';


const Appointment = () => {
  return (
    <div>
      <Header />
      <Bread  />
      <Journal  />
      <Footer />
    </div>
  );
};

export default Appointment;