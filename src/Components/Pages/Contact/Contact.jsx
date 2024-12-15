import React from 'react'
import './Contact.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import { assets } from '../../../assets/assets'


const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
        <div className="contactLeft">
            <h1 className='contactText'>Contacts</h1>
        </div>
        <div className="contactRight">
            <div className="topContainer">
                <h2 className='contact-text'>weestep sp. z o.o.</h2>
                <ul>
                    <li className='contact-description'>Wolka Kosowska, ul. Nadrzeczna 16,Hala1, lok. C026. 05-552 Jablonowo. Poland.+48728888569 (Viber, WhatsApp)</li>
                </ul>
                <p className='contact-email'>sale@weestep.pl</p>
            </div>
            <div class="form-container">
            <h3>Write to us, we will respond as soon as possible!</h3>
            <form method='POST' className='form'>
                <input type="text" placeholder='Name*' required/><br />
                <input type="email" placeholder='Email*' required/><br />
                <input type="password" placeholder='Password*' required/>
            </form>
            <button className='contactButton'>Sumbit</button>
            <div className="share">
            <h3>Share</h3>
            <div className="iconImages">
            <img src={assets.facebook} alt="" className="icon"/>
            <img src={assets.instagram} alt="" className="icon"/>
            <img src={assets.tiktok} alt="" className="icon"/>
            <img src={assets.youtube} alt="" className="icon"/>    
            </div>
        </div> 
    </div>
    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact