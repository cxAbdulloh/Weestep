import React, { useEffect } from 'react'
import './JustScan.css'
import { assets } from '../../assets/assets'
import AOS from 'aos'
import "aos/dist/aos.css";

const JustScan = () => {
    useEffect(()=> {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true,
        });
    }, [])
  return (
    <>
      <div className="just-container">
            <div className="justLeft" data-aos="fade-right">
            <h1 className='just-text'>Just scan</h1>
            <ul>
                <li className='just-description'>Everyone talks about durability, but we offer mileage. Our sneakers are guaranteed for 100 kilometers. When purchasing our pair of shoes, scan the QR code on the box or tag to find out the details.</li>
            </ul>
        </div>
        <div className="justRight" data-aos="fade-left">
            <img src={assets.photo_9} alt="" className='just-image'/>
        </div>
    </div>
    </>
  )
}

export default JustScan