import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Loading from "./components/loading/Loading"
const Redirect = lazy(() => import("./components/redirect/redirect"))
import 'boxicons'

// Pages
const Index = lazy(() => import("./pages/index/main"))
const FourOFour = lazy(() => import("./pages/404/404"))
const Legal = lazy(() => import("./pages/legal/legal"))
const CertifikatyMain = lazy(() => import("./pages/certifikaty/main"))
const About = lazy(() => import("./pages/about/about"))
const Blog = lazy(() => import("./pages/blog/Blog/"))
const BlogPost = lazy(() => import("./pages/blog/BlogPost/"))


function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Index */} 
        <Route path='/' element={<Index />} />

        {/* About section */} 
        <Route path='/about' element={<About />} />

        {/* Certificates */} 
        <Route path='/certificates' element={<CertifikatyMain js html python linux/>} />
        <Route path='/certificates/js' element={<CertifikatyMain js/>} />
        <Route path='/certificates/html' element={<CertifikatyMain html/>} />
        <Route path='/certificates/python' element={<CertifikatyMain python/>} />
        <Route path='/certificates/linux' element={<CertifikatyMain linux/>} />

        {/* Blog */} 
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/*' element={<BlogPost />} />

        {/* Url shortener */} 
        <Route path='/link/*' element={<Redirect url-shortener />} />

        {/* Legal */} 
        <Route path='/legal' element={<Legal />} />

        {/* 404 page */} 
        <Route path='*' element={<FourOFour />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading fallback />}>
      <Router />
    </Suspense>
  </React.StrictMode>
)