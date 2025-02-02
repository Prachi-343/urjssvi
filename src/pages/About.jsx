// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Abouts from '../components/About.jsx';
import WhyChooseUs from '../components/WhyChooseUs';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Bread from '../components/Breadcrumb.jsx';


const About = () => {
  return (
    <div>
      <Header />
      <Bread  />
      <Abouts />
      <WhyChooseUs />
      <Counter />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;