import React from "react";
import "./Blog.css";
import Navbar from "../../Navbar/Navbar";
import { assets } from "../../../assets/assets";
import Footer from "../../Footer/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="blogContainer">   
        <h1 className="blogText">Weestep <br /> be bigger</h1>
        <div className="container-image">
           <img src={assets.photo_10} alt="" className="blogImg"/>  
        </div>
        <div className="firstBlogDescription">
          <ul>
            <li>

              On the side of the sole of colorful shoes, it is preferable to
              apply the logo: <br /> – in relief, without color, <br /> – in
              white, <br /> – in black. <br /> <br /> If the shoes are of a neutral
              color, the option of applying a colored logo can be <br />
              considered. <br /> <br /> On the insole and tongue, the symbolic and
              textual parts of the logo can be alternated. <br /> The colors may
              adhere to the design of the specific shoe model.
            </li>
          </ul>
        </div>
        <h2 className="__text">Weestep</h2>
        <div className="secondBlogDescription">
          <ul>
            <li>
              
              The Weestep font was specifically developed for the brand in two
              styles: <span className="blogSpan">Regular</span> and
               <span className="blogSpan"> Bold</span> . <br /> Use it in all
              communication layouts. <br /> <br /> Weestep <span className="blogSpan">Regular</span> is used for setting the
              main text. <br /> <br /> Weestep <span className="blogSpan">Bold</span> is
              intended for large headlines.
            </li>
          </ul>
        </div>
        <div className="thirdBlogDescription">
          <ul>
            <li>
              <br />Our SPA package includes: <br /> <br /> 1. Two nights of accommodation{" "}
              <br /> 2. Two 50-minute SPA treatments of your choice <br /> 3.
              Breakfast in the room for two <br /> 4. A welcome gift basket upon
              arrival{" "}
            </li>
          </ul>
        </div>
        <h2 className="__text">Weestep</h2>
        <div className="lastBlogDescription">
          <ul>
            <li>
              Take the following items to camp: <br /> - Sleeping bag; <br /> - Sunscreen; <br /> -
              Swimsuit; <br /> - Raincoat;
            </li>
          </ul>
        </div>
        <h1 className="bottomText">Also read</h1>
        <div className="blogImages">
            <div className="blogTop">
              <img src={assets.photo_11} alt="" className="blogImage"/>   
              <p className="imgText">Weestep. Be bigger</p>
            </div>
           <div className="blogBottom">
            <img src={assets.photo_12} alt=""   className="blogImage"/>
            <p className="imgText">Weestep. Be bigger</p>
           </div>
        </div>   
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
