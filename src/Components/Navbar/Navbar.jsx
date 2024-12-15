import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu, setMenu] = useState("About Us")

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <>
    <nav id='desktop-nav'>
        <div className="nav-logo"><Link to={'/'}><img src={assets.navbar} alt="" className='nav-image'/></Link></div>
       <div className="nav-links">
          <ul>
            <li><Link to={"/error"} style={{color:"#D3B599"}} onClick={()=>setMenu("About Us")} className={ menu==="About Us"?"active":""}>About Us</Link></li>
            <li><Link to={"/error"} style={{color:"#115E67"}} onClick={()=>setMenu("Catalog")} className={ menu==="Catalog"?"active":""}>Catalog</Link></li>
            <li><Link to={"/map"} style={{color:"#9D2B2E"}} onClick={()=>setMenu("Where to buy")} className={ menu==="Where to buy"?"active":""}>Where to buy</Link></li>
            <li><Link to={"/blog"} style={{color:"#FD6B28"}} onClick={()=>setMenu("Blog")} className={ menu==="Blog"?"active":""}>Blog</Link></li>
            <li><Link to={"/contacts"} style={{color:"#D3B599"}} onClick={()=>setMenu("Contacts")} className={ menu==="Contacts"?"active":""}>Contacts</Link></li>
            <li><Link to={"/error"} style={{color:"#9D2B2E"}} onClick={()=>setMenu("Find your fit")} className={ menu ==="Find your fit"?"active":""}>Find your fit</Link></li>
          </ul>
        </div>   
    </nav>
    <nav id='hamburger-nav'>
    <div className="nav-logo"><Link to={'/'}><img src={assets.navbar} alt="" className='nav-image'/></Link></div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <ul>
            <li><Link to={'/error'} style={{color:"#D3B599"}} onClick={toggleMenu}>About Us</Link></li>
            <li><Link to={"/error"} style={{color:"#115E67"}} onClick={toggleMenu}>Catalog</Link></li>
            <li><Link to={"/map"} style={{color:"#9D2B2E"}} onClick={toggleMenu}>Where to buy</Link></li>
            <li><Link to={"/blog"} style={{color:"#FD6B28"}} onClick={toggleMenu}>Blog</Link></li>
            <li><Link to={"/contacts"} style={{color:"#D3B599"}} onClick={toggleMenu}>Contacts</Link></li>
            <li><Link to={"/error"} style={{color:"#9D2B2E"}} onClick={toggleMenu}>find yor fit</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar