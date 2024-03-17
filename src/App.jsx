import { useState } from 'react'
// import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Feedback from './pages/Feedback'
import Homepage from './pages/Homepage'
import HistoricHacks from './pages/HistoricHacks'
import Navbar from './components/Navbar'

function App() {
  const rpcUrl = "https://eth-mainnet.g.alchemy.com/v2/ooCgISQdaFZebdi2ElN7OBPnKG_f248I"

  const getBalance = async () => {
    const address = "0x6d2e03b7EfFEae98BD302A9F836D0d6Ab0002766"
    const provider = new ethers.JsonRpcProvider(rpcUrl)
    const balance = await provider.getBalance(address)
    console.log(ethers.formatEther(balance))
  }
  return (
    <BrowserRouter>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/breach" element={<HistoricHacks />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
