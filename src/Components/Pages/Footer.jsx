// Footer.jsx
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172B] text-white pt-10 pb-6 px-6 md:px-12 lg:px-20 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 - Brand / About */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <IoLocationOutline className="text-3xl text-yellow-400" />
            <span className="text-xl font-bold">Discover Cambodia</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Discover the wonders of Cambodia — from ancient temples to stunning beaches. 
            Your unforgettable journey starts here.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-yellow-400 transition duration-300 text-xl"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-400 transition duration-300 text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition duration-300 text-xl"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <LuExternalLink className="text-2xl text-yellow-400" />
            <h3 className="text-lg font-semibold">Quick Links</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Provinces</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">About Cambodia</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Gallery</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <MdOutlineCleaningServices className="text-2xl text-yellow-400" />
            <h3 className="text-lg font-semibold">Services</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Tour Packages</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Local Guides</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Hotels & Resorts</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Transportation</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <FiPhoneCall className="text-2xl text-yellow-400" />
            <h3 className="text-lg font-semibold">Contact Info</h3>
          </div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: info@discovercambodia.com</li>
            <li>Phone: (+855) 97 232 5094</li>
            <li>Location: Phnom Penh, Cambodia</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Discover Cambodia. All rights reserved. <br />
        Made with ❤️ in Cambodia 🇰🇭
      </div>
    </footer>
  );
};

export default Footer;
