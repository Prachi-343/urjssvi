import React, { useEffect, useState } from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const q = query(collection(db, 'videos'), orderBy('createdAt', 'desc'), limit(3));
        const querySnapshot = await getDocs(q);
        const videosList = querySnapshot.docs.map(doc => doc.data());
        setVideos(videosList);
      } catch (error) {
        console.error('Error fetching videos: ', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="ast_packages_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading ast_bottompadder20">
              <h1>About <span>Vastushasra</span></h1>
              <p>Discover the ancient science of architecture and design that harmonizes the energies of your living spaces.</p>
            </div>
          </div>
        </div>
        <div className="ast_packages_mainbox">
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ast_packages_box">
                  <div className="video-wrapper">
                    <video controls>
                      <source src={video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h4>{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;