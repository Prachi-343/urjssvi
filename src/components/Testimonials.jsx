import React, { useEffect, useState } from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reviews'));
        const reviewsList = querySnapshot.docs.map(doc => doc.data());
        setReviews(reviewsList);
      } catch (error) {
        console.error('Error fetching reviews: ', error);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'reviews'), {
        name,
        review,
      });
      setName('');
      setReview('');
      // Fetch the updated reviews list
      const querySnapshot = await getDocs(collection(db, 'reviews'));
      const reviewsList = querySnapshot.docs.map(doc => doc.data());
      setReviews(reviewsList);
    } catch (error) {
      console.error('Error adding review: ', error);
    }
  };

  return (
    <div className="ast_testimonial_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>what client<span> says</span></h1>
              <p>Discover the experiences of our satisfied clients who have found clarity and success through our astrology services. Their testimonials reflect trust, accuracy, and life-changing guidance.</p>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-12 offset-lg-1 offset-md-0 offset-sm-0 offset-0">
            <div className="ast_testimonials_slider">
              <div className="owl-theme" loop margin={10} nav>
                {reviews.slice(-4).map((review, index) => (
                  <div className="item" key={index}>
                    <div className="ast_testimonials_slider_box">
                      <div className="ast_testimonials_slider_box_text">
                        <p>{review.review}</p>
                        <h4>{review.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>Submit your <span>review</span></h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="review">Review</label>
                <textarea
                  id="review"
                  className="form-control"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                ></textarea>
              </div><br/>
              <button type="submit" className="ast_btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;