import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

// Pages
import Index from "./pages/index/main"
import FourOFour from "./pages/404/404"
import Legal from "./pages/legal/legal"
import CertifikatyMain from "./pages/certifikaty/main"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/certificates' element={<CertifikatyMain js html python linux/>} />
        <Route path='/certificates/js' element={<CertifikatyMain js/>} />
        <Route path='/certificates/html' element={<CertifikatyMain html/>} />
        <Route path='/certificates/python' element={<CertifikatyMain python/>} />
        <Route path='/certificates/linux' element={<CertifikatyMain linux/>} />

        <Route path='*' element={<FourOFour />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
