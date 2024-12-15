import React, { useEffect } from 'react';
import './Summary.css';
import { assets } from '../../assets/assets';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Summary = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease', 
      once: true,
    });
  }, []); 

  return (
    <>
      <div className="summary-container">
        <div className="left-summary-content" data-aos="fade-right">
          <h1 className="summary-text">
            why <br />
            weestep?
          </h1>
          <ul>
            <li className="summary_text">durability and convenience</li>
          </ul>
          <p className="summaty-description">shoes only made of genuine leather</p>
        </div>
        <div className="right-summary-content" data-aos="fade-left">
          <img src={assets.photo_7} alt="" className="summary-image" />
        </div>
      </div>
    </>
  );
};

export default Summary;
