// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bread from '../components/Breadcrumb.jsx';
import Blogsection from '../components/Blogsection.jsx';


const Blog = () => {
  return (
    <div>
      <Header />
      <Bread  />
      <Blogsection  />
      <Footer />
    </div>
  );
};

export default Blog;