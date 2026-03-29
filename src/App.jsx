import React, { Suspense } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import BannerSection from './components/bannerSection/BannerSection'
import StatsSection from './components/statsSection/StatsSection'
import ToolsSection from './components/PremiumToolsSection/ToolsSection'
import TutorialSection from './components/tutorialSection/TutorialSection'

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
      {/*
      <Suspense fallback={<h1 className="text-4xl font-bold text-center text-error mt-10">Loading tools...</h1>}>
        <ToolsSection toolsPromise={toolsPromise} />
      </Suspense>
      */}

      <TutorialSection />

    </div>
  )
}

export default App
