import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bread from '../components/Breadcrumb.jsx';
import Product from '../components/Product_single.jsx';


const Products = () => {
  return (
    <div>
      <Header />
      <Bread  />
      <Product  />
      <Footer />
    </div>
  );
};

export default Products;