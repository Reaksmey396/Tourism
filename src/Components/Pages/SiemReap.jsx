import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { provinceSiemReap } from "../data";
import AOS from 'aos';
import 'aos/dist/aos.css';
import benner_sp from '../../assets/Images/Benne_siemreap.jpg';

const SiemReap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return ( 
    <div className="bg-gray-100 px-2 md:px-0 pt-0.5 md:pb-6">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] md:h-[90vh] flex items-center justify-center text-center mb-6"
        style={{ backgroundImage: `url(${benner_sp})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-4 max-w-3xl text-gray-400" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md" data-aos="fade-down">
            Siem Reap
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Discover the ancient temples, rich Khmer heritage, and scenic countryside of Siem Reap.
          </p>
          
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

      {/* Province Flex Section */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-7 mt-16">
        {provinceSiemReap.map((p, index) => (
          <div
            key={index}
            className="group bg-white rounded-md shadow-md hover:shadow-2xl transition-all duration-300 w-full sm:w-[47%] flex flex-col overflow-hidden border border-gray-100 hover:-translate-y-1"
          >
            <div className="relative h-[260px] overflow-hidden">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 right-3 text-[#8BC34A] bg-white text-md font-semibold px-3 py-1.5 rounded-lg shadow">
                {p.category}
              </span>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-yellow-700 mb-1">
                  {p.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="mt-4">
                <Link
                  to={`/Siemreap/${p.id}`}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-5 py-2 rounded-lg shadow-sm transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiemReap;
