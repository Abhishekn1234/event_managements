import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import { Helmet } from "react-helmet";
// import snowfall
// import Snowfall from "react-snowfall";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import WeddingPlanning from "./pages/WeddingPlanning";
import Cooperate from "./pages/Cooperate";
import Private from "./pages/Private";
import Contact from "./pages/Contact";
// import MouseFollower from "./pages/MouseFollower";
function App() {
  return (
    <>
      <Helmet>
        {/* Google Verification */}
        <meta name="google-site-verification" content="GEIPQgG5TRdsfNM-nI7H5hWB1wWCMLSkufxpuNHtCwA" />

        {/* Basic Meta */}
        <title>Aalizah Events - Event Management</title>
        <meta name="description" content="Plan and manage events easily with Aalizah Events. Wedding planning, corporate events, parties, and more." />
        <meta name="keywords" content="event management, wedding planner, corporate events, party planner, Aalizah Events" />
        <meta name="author" content="Aalizah Events" />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/Aalizah Events Logo.svg" type="image/svg+xml" />

        {/* Open Graph */}
        <meta property="og:title" content="Aalizah Events - Event Management" />
        <meta property="og:description" content="Plan and manage events easily with Aalizah Events." />
        <meta property="og:image" content="https://aalizahevents.com/social-preview.png" />
        <meta property="og:url" content="https://aalizahevents.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aalizah Events - Event Management" />
        <meta name="twitter:description" content="Plan and manage events easily with Aalizah Events." />
        <meta name="twitter:image" content="https://aalizahevents.com/social-preview.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://aalizahevents.com/" />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/wedding-planning" element={<WeddingPlanning />} />
        <Route path="/services/corporate-events" element={<Cooperate />} />
        <Route path="/services/private-parties" element={<Private />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;



