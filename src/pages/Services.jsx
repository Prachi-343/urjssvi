// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Service from '../components/Service.jsx';
import DailyRoutines from '../components/DailyRoutines.jsx';
import Counter from '../components/Counter.jsx';
import Footer from '../components/Footer.jsx';
import Bread from '../components/Breadcrumb.jsx';

const Services = () => {
  return (
    <div>
      <Header />
      <Bread />
      <Service />
      <DailyRoutines />
      <Counter />
      <Footer />
    </div>
  );
};

export default Services;