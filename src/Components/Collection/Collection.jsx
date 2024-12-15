import React from "react";
import "./Collection.css";
import { assets } from "../../assets/assets";

const Collection = () => {
  return (
    <>
      <div className="collection-container">
        <h1 className="collection-text">new collection</h1>
        <div className="collection-content">
          <div className="top">
            <img src={assets.photo_5} alt="" className="left-image" />
          </div>
          <div className="bottom">
            <img src={assets.photo_6} alt="" className="right-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
