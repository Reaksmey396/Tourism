import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomePopup = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      {/* Popup Box */}
      <div className="relative bg-gradient-to-b from-white to-yellow-50 rounded-2xl shadow-2xl p-10 text-center w-[90%] md:w-[900px] md:h-[70vh] flex flex-col items-center justify-center animate-slide-up">
        {/* ប៊ូតុង X */}
        <button
          onClick={() => {
            setShow(false);
            navigate("/"); // 👉 បន្ទាប់ពីចុច X ចូលទៅ Home
          }}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X size={30} />
        </button>

        {/* អក្សរ Welcome */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 animate-bounce">
            🇰🇭  Welcome to <span className="text-yellow-500">Cambodia</span>
          </h1>
          <p className="text-5xl md:text-5xl font-extrabold text-gray-800 animate-bounce"> 🤹‍♀️🙏 🌴</p>
          {/* <p className="text-gray-700 text-lg md:text-xl max-w-2xl leading-relaxed">
            Discover the <span className="font-semibold text-amber-500">Kingdom of Wonder</span> —  
            where ancient temples meet tropical paradise 🌺.  
            <br />Let your journey begin with beauty, culture, and adventure!
          </p> */}

          {/* Optional Button */}
          <button
            onClick={() => {
              setShow(false);
              navigate("/"); // 👉 ចូលទៅ Home
            }}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full shadow-md text-lg font-semibold transition transform hover:scale-105"
          >
            Let’s Explore 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
