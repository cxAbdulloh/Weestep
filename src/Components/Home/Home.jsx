import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Collection from '../Collection/Collection'
import Scroll from '../Scroll/Scroll'
import Footer from '../Footer/Footer'
import Summary from '../Summary/Summary'
import JustScan from '../JustScan/JustScan'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Section/>
    <Summary/>
    <Collection/>
    <JustScan/>
    <Scroll/>
    <Footer/>
    </>
  )
}

export default Home