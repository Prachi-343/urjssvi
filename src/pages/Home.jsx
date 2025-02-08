// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Service from '../components/Service';
import DailyRoutines from '../components/DailyRoutines';
import Counter from '../components/Counter';
import Videos from '../components/Videos.jsx';
import Overview from '../components/overview.jsx';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <WhyChooseUs />
      <Service />
      <DailyRoutines />
      <Counter />
      <Videos />
      <Overview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;