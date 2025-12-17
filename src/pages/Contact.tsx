import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import DripSection from "./Drip";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xdkqqdzl", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111827",
            color: "#fff",
          },
        }}
      />

      <section className="w-full bg-black text-white py-20 px-6">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Share your vision—whether it’s a wedding, corporate gala, or private
            celebration—and we’ll make it unforgettable.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-900 rounded-xl p-8 text-center shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className="text-gray-300">
              info@aalizahevents.com
              <br />
              aalizahmoments@gmail.com
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-center shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="text-gray-300">
              +971-502037669
              <br />
              +971-551084366
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex justify-center py-16">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl w-full max-w-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-black font-semibold py-4 rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <DripSection />
    </>
  );
}
