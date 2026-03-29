import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import BannerSection from './components/bannerSection/BannerSection'
import StatsSection from './components/statsSection/StatsSection'

function App() {

  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <BannerSection />
      <StatsSection />
    </div>
  )
}

export default App
