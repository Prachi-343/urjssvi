import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bread from '../components/Breadcrumb.jsx';
import Journal from '../components/Journal.jsx';
import Shoping from '../components/Shoping.jsx';


const Shop = () => {
  return (
    <div>
      <Header />
      <Bread  />
      <Shoping  />
      <Footer />
    </div>
  );
};

export default Shop;