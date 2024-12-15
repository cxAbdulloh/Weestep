import React, { useState } from "react";
import "./Map.css";
import Navbar from "../../Navbar/Navbar";

const Map = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508419!2d144.95373631531676!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1616546885783!5m2!1sen!2sus";


  return (
    <>
      <Navbar />
      <div className="toggle-container">
        <div className="toggleMap">
          <div style={{ width: "100%", height: "500px" }}>
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius:"2rem" }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <div className="toggleDescription">
          <ul>
            <li className="toggleText">Our headquarters is in <span className="toggleSpan">Poland</span></li>
          </ul>
        </div>
        <div className="contacts">
          
        </div>
      </div>
      <hr />
      <div className="download-container">
      <div className="qr-code">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" className="qr-image"/>
      </div>
      <p className="download-description">For Better Experience Download <span className="download-span">Weestep!</span></p>  
      </div>
    </>
  );
};

export default Map;
