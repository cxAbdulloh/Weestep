import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <footer>
       <div className="footer" id='footer-container'>
      <div className="footer-content">
        <div className="footer-content-left">

          <img src={assets.navbar} alt="" />

        </div>
        <div className="footer-content-center">
           <ul>
            <li>About Us</li>
            <li>Catalog</li>
            <li>Blog</li>
            <li>Where to buy</li>
            <li>Contact</li>
            <li>Find your fit</li>
           </ul>
        </div>
        <div className="footer-content-center">
           <ul>
            <li>tik tok</li>
            <li>instagram</li>
            <li>facebook</li>
            <li>youtube</li>
           </ul>
        </div>
        <div className="footer-content-right">
            <ul>
                <li>Private policy</li>
                <li>Terms & conditions</li>
            </ul>
        </div>
      </div>
      <div className="footer-end">
        <p className="footer-copyright">(с) 2021 All rigths reserved</p>
        <p className='footer-copyright'>Website: Other Land</p>        
      </div>
    </div>    
    </footer>
    </>
  )
}

export default Footer