import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  const stats = [
    { id: 1, value: "50+", label: "Amazing Destinations" },
    { id: 2, value: "1000+", label: "Happy Travelers" },
    { id: 3, value: "4.9★", label: "Average Rating" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true, // animate once
      easing: "ease-out-cubic",
    });
  }, []);
  // bg-[#fef9f4]
  return (
    <div className="bg-white py-16 lg:mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            data-aos="fade-up"
            data-aos-delay={index * 150} // staggered animation
            className="hover:text-white flex flex-col items-center bg-white hover:bg-[#8BC34A] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
          >
            <span className="text-4xl md:text-5xl font-extrabold text-[#8BC34A] transition-transform duration-300 hover:scale-110">
              {stat.value}
            </span>
            <span className="mt-3 text-gray-700 text-lg font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
