import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import PlayPage from "./pages/PlayPage.tsx"
import DancePage from "./pages/DancePage.tsx"
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PlayPage />} />
        <Route path="/dance" element={<DancePage />} />
      </Routes>
    </>
  )


}

export default App
