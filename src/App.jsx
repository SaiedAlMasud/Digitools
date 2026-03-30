import React, { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import BannerSection from './components/bannerSection/BannerSection'
import StatsSection from './components/statsSection/StatsSection'
import ToolsSection from './components/PremiumToolsSection/ToolsSection'
import TutorialSection from './components/tutorialSection/TutorialSection'
import PricingSection from './components/pricingSection/PricingSection'
import Footer from './components/footerSection/Footer'
import { ToastContainer } from 'react-toastify'

const fetchTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const[selectedProduct, setSelectedProduct] = useState([]);
  const toolsPromise = fetchTools();
  return (
    <div>
      <div className="sm:w-full md:w-10/12 mx-auto">
        <Navbar selectedProduct={selectedProduct} />
        <BannerSection />
      </div>
      <StatsSection />
      <ToastContainer/>
      <div className="sm:w-full md:w-10/12 mx-auto">
        <Suspense fallback={<h1 className="text-4xl font-bold text-center text-error mt-10">Loading tools...</h1>}>
          <ToolsSection toolsPromise={toolsPromise} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
        </Suspense>
        <TutorialSection />
        <PricingSection />
      </div>
      <Footer />
      
    </div>
  )
}

export default App
