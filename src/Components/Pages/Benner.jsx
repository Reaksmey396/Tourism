import React, { useEffect, useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'

const Benner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Updated Benefits List
  const benefits = [
    "Currency exchange and Tourist SIM cards",
    "Explore temples and famous attractions",
    "Special restaurants and cozy cafés",
    "Luxury spa and massage services",
    "Unique local experiences and activities",
    "High-quality transportation and accommodation",
  ]

  // Right-side images
  const rightImages = [
    "https://i.pinimg.com/736x/d6/50/23/d65023b800b0e114f43719dbbb9b5baa.jpg",
    "https://i.pinimg.com/736x/dc/ca/2f/dcca2f81249659d8fd01cad603677dce.jpg",
    "https://i.pinimg.com/1200x/3e/bd/8b/3ebd8ba955e74807f0a8e1af9d9020b3.jpg",
  ]

  return (
    <div className="w-full relative overflow-hidden lg:h-full">

      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/d3/b2/14/d3b21418fbbf6c2975263fa8f25d23fd.jpg"
          alt="Palm trees background in Cambodia"
          className="w-full h-full object-cover object-center opacity-70 filter saturate-150 brightness-110"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-24 gap-12">

        {/* LEFT SIDE */}
        <div
          className={`max-w-xl space-y-6 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-black/40 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-teal-500 px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-white font-extrabold text-xl md:text-2xl tracking-wider">TOURISM</p>
            </div>
            <h2 className="text-yellow-400 text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-md">TARGET</h2>
          </div>

          {/* Titles */}
          <div className="space-y-1 pt-2">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-lg">
              <span className="italic text-yellow-300">Your Life Map!</span> <br /> Discover Cambodia
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide">
              Save time & enjoy 50+ exclusive tourism services across the country.
            </p>
          </div>

          {/* Benefits */}
          <ul className="space-y-3 pt-3">
            {benefits.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 text-white ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="bg-yellow-400/90 rounded-full p-1.5 shadow-md">
                  <Check className="w-5 h-5 text-black" strokeWidth={3} />
                </div>
                <span className="text-lg md:text-xl font-medium text-white/95">{item}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-black/90 text-white animate-float px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-2xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                alt="App Store"
                width={20}
                height={20}
              />
              <div className="text-left">
                <div className="text-xs md:text-sm">Download on</div>
                <div className="text-sm md:text-base font-semibold">App Store</div>
              </div>
            </button>

            <button className="bg-black/90 animate-float text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-2xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/1856px-Google_Play_2022_icon.svg.png"
                alt="Google Play"
                width={20}
                height={20}
              />
              <div className="text-left">
                <div className="text-xs md:text-sm">Get it on</div>
                <div className="text-sm md:text-base font-semibold">Google Play</div>
              </div>
            </button>

            <Link to="/provinces" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 text-black font-extrabold text-xl md:text-2xl px-8 py-3 rounded-xl hover:scale-[1.03] hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 group">
                Learn More
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={`relative w-full lg:w-[45%] grid grid-cols-3 gap-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
          {rightImages.map((src, index) => (
            <div
              key={index}
              className="col-span-1 rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/30 hover:ring-yellow-400 transition-all duration-300 hover:scale-[1.05] animate-float"
            >
              <img
                src={src}
                alt={`Tour Image ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benner
