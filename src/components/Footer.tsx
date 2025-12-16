import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-28 pb-14 overflow-hidden">

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col sm:flex-row gap-20">

          {/* Our Services */}
          <div>
            <h2 className="text-xl font-semibold text-[#D4AF37] mb-6">Our Services</h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><Link to="/services/wedding-planning" className="hover:text-[#D4AF37] transition">Wedding Events</Link></li>
              <li><Link to="/services/corporate-events" className="hover:text-[#D4AF37] transition">Corporate Events</Link></li>
              <li><Link to="/services/private-parties" className="hover:text-[#D4AF37] transition">Private Parties</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-[#D4AF37] mb-6">Quick Links</h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><Link to="/about" className="hover:text-[#D4AF37] transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-10">

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Get exclusive updates on our latest events, special offers, and
            behind-the-scenes stories from{" "}
            <span className="text-[#8cffd5]">Aalizah Events</span>.
          </p>

          {/* Contact Info (NO CARDS) */}
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              <span className="text-[#D4AF37] font-medium">Email:</span>{" "}
              info@aalizahevents.com, aalizahmoments@gmail.com
            </p>
            <p>
              <span className="text-[#D4AF37] font-medium">Call:</span>{" "}
              +971 50 203 7669 · +971 55 108 4366
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-4">
              <img src="/enter your email.jpg" alt="" className="w-9 h-9 object-contain" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-2xl text-gray-300 font-light w-full focus:outline-none placeholder-gray-500"
              />
              <span className="text-3xl">→</span>
            </div>
            <div className="border-b border-gray-600 mt-3"></div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4">
            {[FaYoutube, FaInstagram, FaFacebookF].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-[#D4AF37] text-black flex items-center justify-center rounded-full text-2xl hover:scale-110 transition cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between gap-6 text-gray-400 text-sm">
        <div className="space-x-8">
          <Link to="/privacy-policy" className="hover:text-[#D4AF37]">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#D4AF37]">Terms of Service</Link>
        </div>

        <div>
          © {new Date().getFullYear()} Aalizah Events – All Rights Reserved
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition z-50"
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </footer>
  );
}
