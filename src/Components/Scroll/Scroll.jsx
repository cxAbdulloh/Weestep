import React from 'react'
import './Scroll.css'

const Scroll = () => {
  return (
    <div className="scroll-container">
        <h2 className='scroll-text'>Where to buy?</h2>
      <marquee behavior="scroll" direction="left" scrollamount="9"><span style={{color:"#D9B89A", padding:"0 1.5rem"}}>Estonia</span> <span style={{color:"#115E67", padding:"0 1.5rem"}}>Bulgaria</span> <span style={{color:"#8eecf5", padding:"0 1.5rem"}}>Latvia</span> <span style={{color:"#FF7C2A", padding:"0 1.5rem"}}>Lithuania</span> <span style={{color:"#9D2B2E", padding:"0 1.5rem"}}>Slovakia</span> <span style={{color:"#D9B89A", padding:"0 1.5rem"}}>Greece</span> <span style={{color:"", padding:"0 1.5rem"}}>Poland</span></marquee>
      <marquee behavior="" direction="right" scrollamount="9"><span style={{color:"#fdf0d5", padding:"0 1.5rem"}}>England</span> <span style={{color:"#3d405b", padding:"0 1.5rem"}}>Uzbekistan</span> <span style={{color:"#FF7C2A", padding:"0 1.5rem"}}>France</span> <span style={{color:"#06AB0C", padding:"0 1.5rem"}}>Qatar</span> <span style={{color:"black", padding:"0 1.5rem"}}>Dubai</span> <span style={{color:"grey", padding:"0 1.5rem"}}>Kiribati</span> <span style={{color:"#bc6c25", padding:"0 1.5rem"}}>Canada</span></marquee>
      <div className="end">
      <button className='scroll-btn'>Choose</button>  
      </div>
    </div>
  )
}

export default Scroll