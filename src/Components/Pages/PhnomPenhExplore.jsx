// PhnomPenhExplore.jsx
import React, { useEffect } from "react";
import { PhnomPenhTourist } from "../data";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Benner_pp from '../../assets/Images/Benner_pp-Explore.jpg';
const PhnomPenhExplore = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true, // animate only once
      offset: 100, // scroll offset before animation
    });
  }, []);

  return (
    <div className="w-full bg-gray-50 py-2 px-2 md:px-0 md:py-0.5 font-roboto">
      {/* Header Section */}
      {/* Header Section */}
            <div
              className="relative bg-cover bg-center bg-gray-400 h-[60vh] md:h-[80vh] flex items-center justify-center text-center mb-6"
              style={{ backgroundImage: `url(${Benner_pp})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
      
              {/* Header Content */}
              <div className="relative z-10 px-4 max-w-3xl text-gray-400" data-aos="fade-up">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md" data-aos="fade-down">
                 Explore Phnom Penh
                </h1>
                <p className="text-lg md:text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                  From ancient temples to vibrant markets and serene riverfronts, discover the heart of Cambodia's capital city.
                </p>
                
                {/* 🔙 Back Button (Below text, centered) */}
                <div className="mt-6 flex justify-center z-0">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-6 py-2 bg-[#8BC34A] bg-opacity-80 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
                  >
                    <span className="text-lg font-semibold">&larr;</span> Back
                  </button>
                </div>
              </div>
            </div>
      

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto md:pt-8 mt-6">
        {PhnomPenhTourist.map((place, index) => (
          <div
            key={place.id}
            className="flex flex-col items-center w-full sm:w-[48%] lg:w-[30%]"
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger animation per card
          >
            {/* Card */}
            <div className="relative w-full rounded-0 hover:rounded-md overflow-hidden shadow-2xl group md:h-[300px] h-[320px]">
              {/* Image */}
              <img
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700">
                {/* Description center (slide-up) */}
                <div className="flex-1 flex items-center justify-center px-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="bg-black/60 text-gray-200 text-md p-1 rounded-md">
                    {place.description}
                  </p>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-black/80 md:p-7 p-4 rounded-t-lg gap-4">
                  {/* Name */}
                  <span className="font-semibold md:text-[#8BC34A] text-gray-700">{place.name}</span>
                  {/* Button */}
                  <Link
                    to={`/PhnomPenhExplore/${place.id}`}
                    className="bg-[#8BC34A] hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    View Detail
                  </Link>
                </div>
              </div>

              {/* Category Badge (Top-Right) */}
              <div className="absolute top-3 right-3 z-20 bg-white text-red-600 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-sm shadow-md backdrop-blur-sm">
                {place.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhnomPenhExplore;
