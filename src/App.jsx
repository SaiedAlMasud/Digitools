import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import BannerSection from './components/bannerSection/BannerSection'

function App() {

  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <BannerSection />
    </div>
  )
}

export default App
