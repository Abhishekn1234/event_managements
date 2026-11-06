import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Layout/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Carrer";
import Contact from "./pages/Contact";
import ServiceItemPage from "./pages/ServiceItemPage";
import CategoryPage from "./pages/CategoryPage";
import './App.css'
import { useEffect, useRef } from "react";
import SplashCursor from "./components/SplashCursor";
import { MouseFollower } from "./components/Home/MouseFollower";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const posRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {/* Default meta tags for all pages */}
        <title>Aalizah Technologies</title>
        <meta
          name="description"
          content="Aalizah Technologies"
        />
        <meta
          name="keywords"
          content="Aalizah Technologies"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aalizah Technologies",
              "url": "https://www.aalizahtechnologies.com",
              "logo": "https://www.aalizahtechnologies.com/3.svg"
            }
          `}
        </script>
      </Helmet>

      {!isHomePage && <SplashCursor BACK_COLOR={{ r: 0, g: 0, b: 0 }} COLOR_UPDATE_SPEED={10} />}
      {!isHomePage && <MouseFollower />}

      {!isHomePage && <Navbar />}

      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:categorySlug" element={<CategoryPage />} />
          <Route path="/services/:categorySlug/:itemSlug" element={<ServiceItemPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {!isHomePage && <Footer />}
    </HelmetProvider>
  );
}

export default App;

