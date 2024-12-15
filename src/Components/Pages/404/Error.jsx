import React from "react";
import "./Error.css";
import { assets } from "../../../assets/assets";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="error-container">
        <div className="error-top">
          <img src={assets.photo_8} alt="" className="error-image" />
        </div>

        <div className="error-content">
          <h1 className="error-text">404</h1>
          <ul>
            <li className="error_text">
              The page was not found, moved, changed, or no longer exists.
            </li>
          </ul>
          <div className="error-button">
            <button className="error-btn">
              <Link to={"/"}>Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
