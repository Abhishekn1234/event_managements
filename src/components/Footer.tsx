"use client";

import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 pt-28 pb-10 overflow-hidden 
    bg-gradient-to-b from-black via-[#050505] to-black">

      {/* 🔥 TOP GLOW OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-40 
      bg-gradient-to-b from-pink-500/20 via-transparent to-transparent 
      blur-2xl pointer-events-none" />

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* BRAND */}
        <div className="md:col-span-2 p-8 rounded-2xl 
        bg-white/5 border border-white/10 backdrop-blur-xl 
        hover:border-white/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition">

          <h1 className="text-3xl font-semibold text-white tracking-wide mb-4">
            Aalizah{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Events
            </span>
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-md mb-6">
            Designing timeless celebrations with refined elegance and creative excellence.
            We craft immersive experiences that turn moments into lifelong memories.
          </p>

          {/* Social */}
          <div className="flex gap-5">
            {[FaYoutube, FaInstagram, FaFacebookF].map((Icon, i) => (
              <div
                key={i}
                className="group w-10 h-10 bg-white/5 border border-white/10 
                flex items-center justify-center rounded-full cursor-pointer 
                transition hover:border-white/30 
                hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
              >
                <Icon className="text-gray-300 group-hover:text-pink-400 transition" />
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
        hover:border-white/30 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] transition">
          <h3 className="text-white text-lg font-semibold mb-5">Services</h3>

          <ul className="space-y-3">
            {[
              { name: "Wedding Events", link: "/services/wedding-planning" },
              { name: "Corporate Events", link: "/services/corporate-events" },
              { name: "Private Parties", link: "/services/private-parties" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="relative inline-block text-gray-400 hover:text-white transition"
                >
                  <span className="after:absolute after:left-0 after:-bottom-1 after:h-[1px] 
                  after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-yellow-500 
                  after:transition-all hover:after:w-full">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
        hover:border-white/30 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] transition">
          <h3 className="text-white text-lg font-semibold mb-5">Company</h3>

          <ul className="space-y-3">
            {[
              { name: "About Us", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="relative inline-block text-gray-400 hover:text-white transition"
                >
                  <span className="after:absolute after:left-0 after:-bottom-1 after:h-[1px] 
                  after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-yellow-500 
                  after:transition-all hover:after:w-full">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
        hover:border-white/30 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] transition">

          <h3 className="text-white text-lg font-semibold mb-5">Contact</h3>

          <div className="space-y-3 text-sm">
            <p>
              <span className="text-pink-400">Email:</span><br />
              info@aalizahevents.com
            </p>

            <p>
              <span className="text-pink-400">Phone:</span><br />
              +971-521775669
            </p>

            <p>
              <span className="text-pink-400">Location:</span><br />
              Dubai, UAE
            </p>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
        flex flex-col md:flex-row items-center justify-between gap-6 
        hover:border-white/30 transition">

          <p className="text-gray-400">
            Get curated event ideas, trends & exclusive invites
          </p>

          <div className="flex items-center border-b border-gray-600 w-full md:w-96 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 outline-none text-gray-300 placeholder-gray-500"
            />
            <button className="text-pink-400 text-xl hover:translate-x-1 transition">
              →
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-sm">

        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-pink-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-pink-400">
            Terms of Service
          </Link>
        </div>

        <p>
          © {new Date().getFullYear()} Aalizah Events. All Rights Reserved
        </p>
      </div>

      {/* SCROLL TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-11 h-11 
        bg-gradient-to-br from-pink-500 to-yellow-500 
        text-black rounded-full flex items-center justify-center text-xl 
        shadow-lg hover:scale-110 
        hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition"
      >
        ↑
      </button>
    </footer>
  );
}