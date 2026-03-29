import React, { Suspense } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import BannerSection from './components/bannerSection/BannerSection'
import StatsSection from './components/statsSection/StatsSection'
import ToolsSection from './components/PremiumToolsSection/ToolsSection'

const fetchTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const toolsPromise = fetchTools();
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <BannerSection />
      <StatsSection />
      <Suspense fallback={<div>Loading tools...</div>}>
        <ToolsSection toolsPromise={toolsPromise} />
      </Suspense>

    </div>
  )
}

export default App
