import ScrollReveal from "@/components/Home/Scroll";
import HeroSection from "@/components/Home/Herosection";
import AboutUs from "@/components/Home/About";
// import ServicesSection from "@/components/Home/Services";

import ScrollHighlight from "@/components/Home/Servdk";
import { useEffect } from "react";

import DripSection from "./Drip";
import CelebrateLove from "@/components/Home/Celebrate";

export default function Home() {
  const handlePlanClick = () => {
    const reachUs = document.getElementById("reach-us");
    if (reachUs) reachUs.scrollIntoView({ behavior: "smooth" });
    const phoneNumber = "+971521775669"; // WhatsApp number without dashes
  const message = encodeURIComponent("Hello! I want to get in touch."); // optional pre-filled message
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank"); // opens in a new tab
  };
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
}, []); 
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white  overflow-hidden">
      <HeroSection onPlanClick={handlePlanClick} />

      <ScrollReveal><CelebrateLove/></ScrollReveal>
     {/* <ServicesSection /> */}
      <ScrollReveal delay={0.2}><ScrollHighlight/></ScrollReveal>
      <DripSection/>
    </div>
  );
}

