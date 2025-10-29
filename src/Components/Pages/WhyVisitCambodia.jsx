import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaHotel, FaCar, FaRegClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import why from '../../assets/Images/Why_pic.jpg'
const WhyVisitCambodia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* --- Image Section --- */}
        <div
          className="lg:w-[45%] w-full flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative">
            <img
            src={why} // 👉 ដាក់រូបអ្នកអាប់ឡូដនៅទីនេះ
              alt="Cambodia landscape"
              className="rounded-0 shadow-lg w-[450px] h-[330px] object-cover object-center hover:shadow-2xl transition-transform duration-500 group-hover:scale-110"
            />
            {/* បន្ថែមបន្ទះលើរូបស្អាតបន្តិច */}
            <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
          </div>
        </div>

        {/* --- Text Section --- */}
        <div
          className="lg:w-[55%]"
          data-aos="fade-left"
        >
          <h5 className="text-[#8BC34A] uppercase font-semibold tracking-wide mb-2 mt-3">
            About Cambodia
          </h5>
          <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-4">
           Why Visit <span className="text-[#8BC34A]">Cambodia ?</span>
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Cambodia is a land where ancient temples and modern cities coexist beautifully.
            From Angkor Wat’s sunrise to Phnom Penh’s lively culture, every journey tells a story.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Discover the charm of Khmer traditions, warm hospitality, and breathtaking scenery.
            Whether you love adventure, culture, or peace, Cambodia has it all.
          </p>

          {/* --- Travel Highlights --- */}
          <div className="grid grid-cols-2 gap-x-6 text-gray-800 mb-6">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPlane className="text-[#8BC34A]" /> <span>World-Class Flights</span>
              </li>
              <li className="flex items-center gap-2">
                <FaHotel className="text-[#8BC34A]" /> <span>Luxury Hotels</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCar className="text-[#8BC34A]" /> <span>Modern Transport</span>
              </li>
              <li className="flex items-center gap-2">
                <FaRegClock className="text-[#8BC34A]" /> <span>24/7 Service</span>
              </li>
            </ul>
          </div>

          {/* --- Button --- */}
          <Link to="/about">
            <button className="bg-[#8BC34A] text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-[#6aa72e] transition duration-300">
              Learn More About Cambodia
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyVisitCambodia;