import React, { useEffect, useState } from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const blogsList = querySnapshot.docs.map(doc => doc.data());
        setBlogs(blogsList);
      } catch (error) {
        console.error('Error fetching blogs: ', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="ast_blog_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={index}>
              <div className="ast_blog_box">
                <div className="ast_blog_img">
                  <span className="ast_date_tag">{new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}</span>
                  <a href={blog.link}>
                    <img src={blog.imageURL} alt="Blog" title="Blog" />
                  </a>
                </div>
                <div className="ast_blog_info">
                  <ul className="ast_blog_info_text">
                    <li>
                      <a href={blog.link}>
                        <i className="fa fa-user" aria-hidden="true"></i> Mayuresh Dixit
                      </a>
                    </li>
                  </ul>
                  <h3 className="ast_blog_info_heading">
                    <a href={blog.link}>{blog.title}</a>
                  </h3>
                  <p className="ast_blog_info_details">{blog.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;