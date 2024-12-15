import React, { useEffect } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="left">
            <div className="fade" data-aos="fade-right">
             <h1 className="header-text">
              weestep <br /> be bigger
            </h1>
            <div className="left-container">
              <p className="header-description">
                For children as well as for adults. Even better.
              </p>
              <div className="flex-end">
                <button className="btn">Sandals</button>
              </div> 
            </div>
            </div>
          </div>
          <div className="right" data-aos="fade-left">
            <img src={assets.photo_1} alt="" className="header-image" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
