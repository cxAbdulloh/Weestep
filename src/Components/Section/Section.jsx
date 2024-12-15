import React from "react";
import "./Section.css";
import { assets } from "../../assets/assets";

const Section = () => {
  return (
    <>
      <section id="section">
        <div className="section-container">
          <div className="section-left">
            <img src={assets.photo_3} alt="" className="section-image"/>
          </div>
          <div className="section-right">
            <h1 className="section-text">hi, <br /> we are <br /> weestep!</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
