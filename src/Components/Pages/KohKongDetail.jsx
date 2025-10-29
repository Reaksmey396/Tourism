import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { provinceKohKong } from '../data';
const KohKongDetail = () => {
  const { id } = useParams();
    const navigate = useNavigate();

    // Find the selected place info
    const result =provinceKohKong.find((p) => p.id === parseInt(id));
  
  if (!result) {
    return (
      <div className="text-center py-32 text-gray-600 text-xl">
        Location not found.
      </div>
    );
  }

  return (
     <div className="font-sans bg-gray-50 text-gray-800">
      {/* 🌇 Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh]">
        <img
          src={result.imageUrl}
          alt={result.name}
          className="w-full h-full object-cover object-center"
        />

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-gray-200 bg-opacity-80 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition z-10"
        >
          <span className="text-lg font-semibold">&larr;</span> Back
        </button>

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
          <span className="bg-red-600 px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-wider mb-3 shadow-md">
            {result.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-lg">
            {result.name}
          </h1>
          <p className="max-w-2xl text-gray-200 text-sm sm:text-base leading-relaxed">
            {result.description}
          </p>
        </div>
      </div>

      {/* 🏛 About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#8BC34A] mb-6 border-l-4 border-[#8BC34A] pl-3">
          About {result.name}
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{result.content}</p>
        {result.tip && (
          <p className="text-gray-700 mt-5 leading-relaxed text-lg italic">
            💡 {result.tip}
          </p>
        )}
      </div>

      {/* 🖼 Gallery Section */}
      {result.gallery && result.gallery.length > 0 && (
        <div className="bg-white py-16">
          <h2 className="text-3xl font-bold text-center text-amber-600 mb-10">
            Gallery
          </h2>
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-between gap-5">
            {result.gallery.map((img, i) => (
              <div
                key={i}
                className="flex-1 min-w-[48%] md:min-w-[30%] overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`${result.name} ${i + 1}`}
                  className="w-full h-[220px] md:h-[250px] object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🗺 Map Section */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-amber-600 mb-8 text-center">
          Location
        </h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title={result.name + " Map"}
            src={result.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.898410988831!2d104.91740617441847!3d11.577640388622623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517e0ee5f7a9%3A0xe9fdbd8357e8f05a!2sWat%20Phnom!5e0!3m2!1sen!2skh!4v1697034509708!5m2!1sen!2skh"}
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 🕐 Info Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Opening Hours", detail: result.openingHours || "Everyday: 7:00 AM - 6:00 PM" },
          { title: "Entrance Fee", detail: result.entranceFee || "Foreigners: $1 USD • Locals: Free" },
          { title: "Address", detail: result.address || `${result.name}, Siem Reap, Cambodia` },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* 📩 CTA Section */}
      <div className="bg-gradient-to-b from-emerald-100 via-green-50 to-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Visit {result.name}?
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Plan your trip today and discover the beauty of {result.name}.
        </p>
        <Link to="/contect">
          <button className="px-8 py-3 bg-[#8BC34A] text-white font-bold rounded-lg shadow hover:bg-gray-200 transition">
            Plan Your Trip
          </button>
        </Link>
      </div>
    </div>
  );
}

export default KohKongDetail