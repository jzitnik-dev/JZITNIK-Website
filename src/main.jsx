import React, {lazy, Suspense, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css"
import 'boxicons'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Loading from "./components/loading/Loading"
import ErrorPage from "./pages/error/Error"
import ErrorBoundary from "./components/errorboundary/ErrorBoundary"

// Pages
const Index =           lazy(() => import("./pages/index/main"))
const FourOFour =       lazy(() => import("./pages/404/404"))
const Legal =           lazy(() => import("./pages/legal/legal"))
const CertifikatyMain = lazy(() => import("./pages/certifikaty/main"))
const About =           lazy(() => import("./pages/about/about"))
const Blog =            lazy(() => import("./pages/blog/Blog/"))
const BlogPost =        lazy(() => import("./pages/blog/BlogPost/"))
const UrlShortener =    lazy(() => import("./components/urlshortener/UrlShortener"))
const Technologie =     lazy(() => import("./pages/technologie/Technologie"))
const Health =          lazy(() => import("./pages/health/Body"))
const Cloud =           lazy(() => import("./pages/cloud/Body"))


function Router() {
  useEffect(() => {
    if (window.location.hostname == "jzitnik.is-a.dev") {
      const url = new URL(window.location.href);
      url.hostname = "jzitnik.dev";
      url.port = 80;
      window.location.replace(url.href)
    }
  }, [])
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
        <Route path='/blog/:blog' element={<BlogPost />} />

        {/* Url shortener */}
        <Route path='/link/:link' element={<UrlShortener />} />

        {/* Legal */}
        <Route path='/legal' element={<Legal />} />

        {/* Technologie */}
        <Route path='/technologies' element={<Technologie />} />

        {/* Health */}
        <Route path='/health' element={<Health />} />

        {/* Cloud */}
        <Route path='/cloud/:file' element={<Cloud />} />

        {/* 404 page */}
        <Route path='*' element={<FourOFour />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loading fallback />}>
        <Router />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
)
console.log('%cWhat are you doing here? You sneaky developer.', 'color: #32ffce');
