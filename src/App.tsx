import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Corporate from "./pages/Cooperate";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Private from "./pages/Private";
import Services from "./pages/Services";
import WeddingPlanning from "./pages/WeddingPlanning";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/wedding-planning" element={<WeddingPlanning />} />
        <Route path="/services/corporate-events" element={<Corporate />} />
        <Route path="/services/private-parties" element={<Private />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
