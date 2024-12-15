import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import Collection from './Components/Collection/Collection'
import Scroll from './Components/Scroll/Scroll'
import Footer from './Components/Footer/Footer'
import Summary from './Components/Summary/Summary'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Error from './Components/Pages/404/Error'
import Map from './Components/Pages/Map/Map'
import Contact from './Components/Pages/Contact/Contact'
import Blog from './Components/Pages/Blog/Blog'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/error' element={<Error/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </>
  )
}

export default App
