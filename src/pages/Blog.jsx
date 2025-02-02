// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bread from '../components/Breadcrumb.jsx';


const Blog = () => {
  return (
    <div>
      <Header />
      <Bread  />
      <Footer />
    </div>
  );
};

export default Blog;