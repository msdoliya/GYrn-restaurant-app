import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './container/header/Header'
import './App.css'
import AboutUs from './container/aboutus/AboutUs'
import SpecialMenu from './container/Menu/SpecialMenu'
import Chef from './container/Chef/Chef'
import Intro from './container/Intro/Intro'
import Laurels from './container/Laurels/Laurels'
import Gallery from './container/Gallery/Gallery'
import FindUs from './container/Findus/FindUs'
import Footer from './container/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
  )
}

export default App
