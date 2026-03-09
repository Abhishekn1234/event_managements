import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 pt-24 pb-10 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-black to-[#050505]">

      {/* GOLD TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* BRAND */}
        <div className="md:col-span-2 p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#D4AF37]/40 transition">

          <h1 className="text-3xl font-semibold text-white tracking-wide mb-4">
            Aalizah <span className="text-[#D4AF37]">Events</span>
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-md mb-6">
            Creating unforgettable celebrations with elegance and creativity.
            From luxury weddings to corporate galas, Aalizah Events transforms
            your vision into extraordinary experiences.
          </p>

          {/* Social */}
          <div className="flex gap-5">
            {[FaYoutube, FaInstagram, FaFacebookF].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-[#D4AF37] text-black flex items-center justify-center rounded-full hover:scale-110 transition cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>

        </div>

        {/* SERVICES */}
        <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#D4AF37]/40 transition">
          <h3 className="text-white text-lg font-semibold mb-5">
            Services
          </h3>

          <ul className="space-y-3">
            <li>
              <Link to="/services/wedding-planning" className="hover:text-[#D4AF37] transition">
                Wedding Events
              </Link>
            </li>
            <li>
              <Link to="/services/corporate-events" className="hover:text-[#D4AF37] transition">
                Corporate Events
              </Link>
            </li>
            <li>
              <Link to="/services/private-parties" className="hover:text-[#D4AF37] transition">
                Private Parties
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#D4AF37]/40 transition">
          <h3 className="text-white text-lg font-semibold mb-5">
            Company
          </h3>

          <ul className="space-y-3">
            <li>
              <Link to="/about" className="hover:text-[#D4AF37] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#D4AF37] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#D4AF37] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#D4AF37]/40 transition">

          <h3 className="text-white text-lg font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-sm">
            <p>
              <span className="text-[#D4AF37]">Email:</span><br />
              info@aalizahevents.com
            </p>

            <p>
              <span className="text-[#D4AF37]">Phone:</span><br />
              +971 50 203 7669
            </p>

            <p>
              <span className="text-[#D4AF37]">Location:</span><br />
              Dubai, UAE
            </p>
          </div>

        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">

        <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-400">
            Subscribe for event inspiration & exclusive updates
          </p>

          <div className="flex items-center border-b border-gray-600 w-full md:w-96 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 outline-none text-gray-300 placeholder-gray-500"
            />
            <button className="text-[#D4AF37] text-xl hover:translate-x-1 transition">
              →
            </button>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-sm">

        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-[#D4AF37]">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-[#D4AF37]">
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
        className="fixed bottom-6 right-6 w-11 h-11 bg-[#D4AF37] text-black rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-110 transition"
      >
        ↑
      </button>

    </footer>
  );
}