import { ArrowUpRight, Instagram, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="coming-soon__glow" aria-hidden="true" />
      <header className="coming-soon__header">
        <Link to="/" aria-label="Aalizah Events home" className="coming-soon__brand">
          <img src="/Aalizah Events Logo.svg" alt="Aalizah Events" />
        </Link>
        <a className="coming-soon__contact" href="mailto:hello@aalizahevents.com">
          <Mail size={16} /> <span>Get in touch</span>
        </a>
      </header>

      <section className="coming-soon__content" aria-labelledby="coming-soon-title">
        <div className="coming-soon__copy">
          <p className="coming-soon__eyebrow"><Sparkles size={15} /> SOMETHING BEAUTIFUL IS ON ITS WAY</p>
          <h1 id="coming-soon-title">The next great<br /><em>celebration</em> starts here.</h1>
          <p className="coming-soon__description">
            We’re creating a new home for unforgettable moments. Thoughtful details, extraordinary occasions, and memories that stay with you.
          </p>
          <div className="coming-soon__actions">
            <a href="https://wa.me/971521775669?text=Hello%21%20I%27d%20like%20to%20plan%20an%20event." target="_blank" rel="noreferrer" className="coming-soon__button">Plan your event <ArrowUpRight size={17} /></a>
            <a className="coming-soon__social" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Follow Aalizah Events on Instagram"><Instagram size={19} /></a>
          </div>
          <p className="coming-soon__note">Planning something special? <a href="tel:+971521775669">Let’s make it happen.</a></p>
        </div>

        <div className="coming-soon__visual" role="img" aria-label="An elegant celebration table set for a special occasion">
          <div className="coming-soon__image" />
          <div className="coming-soon__image-shade" />
          <div className="coming-soon__image-caption"><span>MADE FOR YOUR MOMENT</span><span>01 / 01</span></div>
          <div className="coming-soon__stamp"><span>THE ART OF</span><strong>Celebrating</strong><span>WITH AALIZAH</span></div>
        </div>
      </section>

      <footer className="coming-soon__footer">
        <span>© {new Date().getFullYear()} Aalizah Events</span>
        <span>WEDDINGS · EVENTS · EXTRAORDINARY MOMENTS</span>
      </footer>
    </main>
  );
}
