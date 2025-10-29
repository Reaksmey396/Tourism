import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaMountain,
  FaUsers,
  FaUmbrellaBeach,
  FaSmileBeam,
  FaStar,
} from "react-icons/fa";

const FunStats = () => {
  const stats = [
    { id: 1, icon: FaMapMarkerAlt, value: "25", label: "Provinces & Cities" },
    { id: 2, icon: FaMountain, value: "1000+", label: "Tourist Attractions" },
    { id: 3, icon: FaUsers, value: "17M", label: "Population" },
    { id: 4, icon: FaUmbrellaBeach, value: "50+", label: "Amazing Destinations" },
    { id: 5, icon: FaSmileBeam, value: "1000+", label: "Happy Travelers" },
    { id: 6, icon: FaStar, value: "4.9★", label: "Average Rating" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-neutral-50 py-20 lg:mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center bg-white p-8 hover:bg-[#8BC34A] hover:text-white transition-all duration-300 transform hover:scale-105">
                {/* Icon */}
                {Icon && (
                  <div className="mb-4">
                    <Icon
                      className={`${
                        stat.id === 4
                          ? "text-[#8BC34A]"
                          : stat.id === 5
                          ? "text-[#8BC34A]"
                          : stat.id === 6
                          ? "text-[#8BC34A]"
                          : "text-[#8BC34A]"
                      } transition-colors duration-300`}
                      size={48}
                    />
                  </div>
                )}

                {/* Value */}
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 transition-colors duration-300">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="mt-2 text-gray-600 text-lg font-medium transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FunStats;
