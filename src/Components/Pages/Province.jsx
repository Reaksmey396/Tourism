import React, { useEffect } from "react";
import { provinceCards } from "../data";
import { Link, useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react"; // 📍 Icon import
import AOS from "aos";
import "aos/dist/aos.css";
import benner_province from '../../assets/Images/Benner_Province.jpg';

const Province = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true,    // animate only once
      offset: 100,   // scroll offset before animation
    });
  }, []);

  return (
    <div className="font-serif md:mb-10 px-1 py-1 md:px-0 md:py-0">

      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[80vh] flex items-center justify-center text-center mb-6"
        style={{ backgroundImage: `url(${benner_province})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 max-w-3xl text-gray-400" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md" data-aos="fade-down">
            All 24 Provinces of Cambodia
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            From ancient temples to pristine beaches, explore every corner of this beautiful kingdom.
          </p>

          {/* Back Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-2 bg-[#8BC34A] bg-opacity-80 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              <span className="text-lg font-semibold">&larr;</span> Back
            </button>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center my-12" data-aos="fade-up">
        <div className="flex justify-center items-center mb-2" data-aos="fade-up">
          <div className="flex flex-col items-end mr-2">
            <span className="w-6 h-[2px] bg-[#8BC34A] mb-[3px]"></span>
            <span className="w-12 h-[2px] bg-[#8BC34A]"></span>
          </div>
          <p className="text-[#8BC34A] font-semibold tracking-widest uppercase text-xl" data-aos="zoom-in">
            Destination
          </p>
          <div className="flex flex-col items-start ml-2">
            <span className="w-8 h-[2px] bg-[#8BC34A] mb-[3px]"></span>
            <span className="w-14 h-[2px] bg-[#8BC34A]"></span>
          </div>
        </div>
        <h2 className="text-3xl md:text-2xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="200">
          Province
        </h2>
      </div>

      {/* Province Cards Section */}
      <div className="min-h-screen px-3 py-4 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-9xl">
          {provinceCards.map((province, index) => (
            <div
              key={province.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg shadow-black/30 hover:shadow-2xl transition duration-300 w-full sm:w-[48%] lg:w-[23%]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image + Hover */}
              <div className="relative group overflow-hidden">
                <img
                  src={province.imageUrl}
                  alt={province.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category */}
                <div className="absolute top-3 right-3 bg-white text-red-600 px-3 py-2 text-sm font-semibold rounded-lg shadow-md">
                  {province.category ? province.category : "No Category"}
                </div>
                {/* Name */}
                <div className="absolute bottom-4 left-4 text-white text-2xl font-extrabold drop-shadow-md">
                  {province.name}
                </div>
                {/* Hover Explore */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link
                    to={province.linkUrl}
                    className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transform hover:scale-105 duration-300"
                  >
                    Explore
                  </Link>
                </div>
              </div>

              {/* Location + Description */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-yellow-700 w-5 h-5" />
                  <h2 className="text-xl text-yellow-600 font-extrabold">{province.names}</h2>
                </div>
                <p className="text-gray-700 text-base leading-snug">{province.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Province;
