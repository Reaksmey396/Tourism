import React, { useEffect } from "react";
import { discoverCards } from "../data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const PhnomPenh = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // only animate once per scroll
      offset: 100, // how early it starts animating
    });
  }, []);

  const cards = [
    ...discoverCards.slice(0, 3),
    {
    id: 4,
    title: "Contact Us",
    description: "Get in touch with us to plan your Cambodian adventure.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000",
    linkUrl: "/contact",
    buttonText: "Contact Us",
    category: "Information",
  },

  ];

  return (
    <div className="w-full bg-gray-50 py-10 px-2 mt-2">
      {/* Title Section */}
      <div className="text-center my-10" data-aos="fade-up">
        {/* Subtitle */}
        <div className="flex justify-center items-center mb-2" data-aos="fade-up">
          {/* Left lines */}
          <div className="flex flex-col items-end mr-2">
            <span className="w-6 h-[2px] bg-[#8BC34A] mb-[3px]"></span>
            <span className="w-12 h-[2px] bg-[#8BC34A]"></span>
          </div>

          {/* Text */}
          <p
            className="text-[#8BC34A] font-semibold tracking-widest uppercase text-2xl"
            data-aos="zoom-in"
          >
            Destination
          </p>

          {/* Right lines */}
          <div className="flex flex-col items-start ml-2">
            <span className="w-8 h-[2px] bg-[#8BC34A] mb-[3px]"></span>
            <span className="w-14 h-[2px] bg-[#8BC34A]"></span>
          </div>
        </div>

        {/* Main Title */}
        <h2
          className="text-3xl md:text-2xl font-bold text-gray-800"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Popular Destination
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto md:pt-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="flex flex-col items-center w-full sm:w-[48%] lg:w-[30%]"
            data-aos="fade-up"
            data-aos-delay={index * 150} // delay each card for staggered effect
          >
            {/* Card */}
            <div className="relative w-full lg:rounded-0 hover:rounded-md overflow-hidden shadow-lg group h-[330px]">
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
               {/* Category Label */}
               
             <div className="absolute top-3 right-3 z-20 bg-white text-[#8BC34A] text-xs md:text-sm font-semibold px-3 py-1.5 rounded-sm shadow-md backdrop-blur-sm">
              {card.category}
             </div>


              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  to={card.linkUrl}
                  className="bg-[#8BC34A] text-gray-900 px-4 py-2 rounded-md font-medium shadow hover:text-white hover:bg-[#8BC34A] transition"
                >
                  {card.buttonText}
                </Link>
              </div>

              {/* Hover Text */}
              <div className="absolute left-0 right-0 bottom-0 bg-black/50 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-lg">
                <h3 className="text-lg font-semibold text-[#8BC34A] text-center">
                  Welcome to {card.title}
                </h3>
                {/* text-gray-700 */}
                <p className="text-sm text-[#8BC34A] mt-1 text-center font-medium">
                  {card.id === 4
                    ? card.description
                    : "Discover the capital city of Cambodia — a vibrant blend of culture, history, and modern life."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhnomPenh;