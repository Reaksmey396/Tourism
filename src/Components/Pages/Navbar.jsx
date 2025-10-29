import React, { useState, useEffect } from 'react';
import { AllDataprovice, menu } from '../data';
import { FaRegUser, FaBars } from "react-icons/fa";
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [opensidebar, setOpensidebar] = useState(false);
  const [opensearch, setOpensearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track scroll

   // find product in search 
    const [searchData,setSearchData]= useState("");

    const FilterProduct=AllDataprovice.filter((s)=>
    s.name.toLowerCase().includes(searchData.toLowerCase()));

  // Listen to scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`font-poppins w-full shadow-md sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white' : 'bg-black'
      }`}
    >      
      {/* Navbar */}
      <div className="w-full h-[80px] px-6 md:px-14 flex justify-between items-center relative">
        {/* Logo + Menu */}
        <div className="flex items-center gap-130">
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-3xl font-bold transition-colors duration-300 ${scrolled ? 'text-[#8BC34A]' : 'text-[#8BC34A]'}`}>
              Tourism
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="lg:flex hidden gap-10 items-center font-medium">
            {menu.map((u) => (
              <li className="group relative" key={u.id}>
                <Link
                  to={u.link}
                  className={`text-xl transition-all duration-300 ${
                    scrolled ? 'text-gray-800 hover:text-[#8BC34A]' : 'text-white hover:text-[#8BC34A]'
                  }`}
                >
                  {u.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons + Login */}
        <div className="flex items-center gap-6">
          {/* Desktop Search Icon */}
          <IoSearch
            onClick={() => setOpensearch(!opensearch)}
            className={`hidden lg:flex text-xl cursor-pointer transition-colors duration-300 ${
              scrolled ? 'text-gray-700' : 'text-gray-200'
            }`}
          />

          {/* Desktop Login Button */}
          <button
            onClick={() => setOpenLogin(true)}
            className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl shadow-md font-semibold transition-all ${
              scrolled
                ? 'bg-[#8BC34A] text-white hover:opacity-90'
                : 'bg-[#8BC34A] text-white hover:opacity-90'
            }`}
          >
            <FaRegUser className="text-lg" />
            Login
          </button>

          {/* Mobile Icons */}
          <div className="lg:hidden flex items-center gap-4">
            <IoSearch
              onClick={() => setOpensearch(!opensearch)}
              className={`text-2xl transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
            />
            <FaBars
              onClick={() => setOpensidebar(!opensidebar)}
              className={`text-2xl transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
            />
          </div>
        </div>

        {/* Search Dropdown */}
        <div
          className={`absolute top-0 left-0 w-full z-50 flex justify-center bg-gray-200 md:bg-black/80 px-5 md:px-10 border-b border-gray-200 md:h-[220px] h-[200px]
            shadow-md overflow-hidden transition-all duration-300
            ${opensearch ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          <div className="relative w-85 md:w-[600px] flex items-center h-full ">
            <IoSearch className="absolute left-3 text-gray-500 text-xl" />
            <input
              onChange={(e)=>setSearchData(e.target.value)}
              value={searchData}
              type="text"
              placeholder="Search for your perfect place..."
              className="w-full h-[45px] md:h-[52px] border border-gray-300 px-10 md:px-10 rounded-2xl 
                          text-base md:text-lg text-gray-100 placeholder-gray-400 focus:border-blue-500
                          shadow-sm transition-all outline-none"
            />
            <IoCloseSharp
              onClick={() => setOpensearch(false)}
              className="absolute right-3 text-gray-500 text-xl cursor-pointer"
            />
            
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`w-[75%] md:w-1/2 h-full fixed z-50 top-0 left-0 bg-gradient-to-b from-purple-600 to-pink-500 text-white lg:hidden shadow-black/5
          ${opensidebar ? 'translate-x-0' : '-translate-x-full'} transition-all duration-400 ease-in-out`}
      >
        <div className="w-full h-[80px] px-4 flex items-center justify-between border-b border-white">
          <a href="/" className="text-3xl font-bold text-white hover:text-gray-100 transition-colors duration-300">
            Tourist
          </a>
          <IoCloseSharp
            className="text-white text-3xl md:text-4xl cursor-pointer"
            onClick={() => setOpensidebar(false)}
          />
        </div>

        <ul>
          {menu.map((u) => (
            <li
              className="p-4 py-3 hover:bg-emerald-500/30 rounded-lg transition-all duration-300 ease-in-out"
              key={u.id}
            >
              <a
                href={u.link}
                className="text-xl text-white hover:text-emerald-200 transition-all duration-300 ease-in-out"
              >
                {u.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="p-4">
          <button
            onClick={() => setOpenLogin(true)}
            className="w-[80%] mx-auto mt-6 py-2 bg-white text-gray-800 font-semibold rounded-xl shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white transition-all duration-300"
          >
            Login
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {openLogin && (
        <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-2xl w-[90%] sm:w-[400px] p-8 relative shadow-lg">
            <IoCloseSharp
              onClick={() => setOpenLogin(false)}
              className="absolute top-4 right-4 text-3xl text-gray-500 cursor-pointer hover:text-red-500 transition-all"
            />
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Welcome Back 👋
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Log In
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
