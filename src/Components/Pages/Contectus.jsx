import React, { useEffect, useState } from 'react'
import Contect from '../../assets/Images/Contect.jpg'
import { useNavigate } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"

const ContactUs = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="bg-gray-50 py-4 md:py-0.5 px-2 md:px-16 lg:px-0">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[38vh] md:h-[80vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${Contect})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-0 max-w-3xl px-4 flex flex-col items-center gap-4">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Contact Us
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl mb-8 text-gray-200">
            Everything you need to know for your Cambodia adventure
          </p>
        </div>

        {/* Back Button */}
        <div data-aos="fade-right" data-aos-delay="400" className="absolute bottom-4 left-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-1 bg-gray-200 bg-opacity-80 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            <span className="text-lg font-semibold">&larr;</span> Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-12">
        {/* Left: Form */}
        <div data-aos="fade-right" data-aos-delay="200" className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Send us a Message</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              required
            />
            <button
              type="submit"
              className="bg-red-800 text-white py-2 px-4 rounded-md mt-2 hover:bg-red-900 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div data-aos="fade-left" data-aos-delay="400" className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact Information</h2>

          <div className="bg-white p-4 rounded-md shadow">
            <p className="font-semibold flex items-center gap-2"><span>📧</span> Email</p>
            <p className="text-gray-600 text-sm mt-1">
              info@cambodia-tourism.com
              <br />
              support@cambodia-tourism.com
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <p className="font-semibold flex items-center gap-2"><span>📞</span> Phone</p>
            <p className="text-gray-600 text-sm mt-1">
              +855 23 123 456
              <br />
              +855 63 987 654
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <p className="font-semibold flex items-center gap-2"><span>📍</span> Office</p>
            <p className="text-gray-600 text-sm mt-1">
              123 Sisowath Quay
              <br />
              Phnom Penh, Cambodia
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-md text-gray-600 text-sm">
            <p className="font-semibold mb-1">Office Hours</p>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              ✅ Your information has been submitted!
            </h2>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
