import React from 'react';
import { Link } from 'react-router-dom';
import FeaturesBanner from '../components/FeaturesBanner';

export default function AboutPage() {
  return (
    <div className="font-poppins text-black bg-white min-h-screen">
      
      {/* -------------------------------------------------------------
          1. HEADER BANNER
      ------------------------------------------------------------- */}
      <div className="bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')] bg-cover bg-center py-20 text-center relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-8 mb-2 flex items-center justify-center">
            <svg viewBox="0 0 50 32" className="w-8 h-8 fill-[#B88E2F]">
              <path d="M25 0L50 32H0L25 0Z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">About</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">About</span>
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. ABOUT US STORY SECTION
      ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-[#B88E2F] font-semibold text-sm tracking-wider uppercase mb-2 block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 leading-snug">
              Crafting Elegance & Comfort For Your Living Space
            </h2>
            <p className="text-[#9F9F9F] text-base leading-relaxed mb-6">
              Founded with a vision to transform houses into homes, Furniro combines timeless craftsmanship with modern design aesthetics. Every piece in our collection is curated with attention to durability, ergonomic support, and effortless style.
            </p>
            <p className="text-[#9F9F9F] text-base leading-relaxed mb-8">
              Whether you are looking to furnish a cozy minimalist apartment or redesign a spacious living room, our selection offers sustainable materials and tailored elegance built to last generations.
            </p>
            <Link
              to="/shop"
              className="bg-[#B88E2F] text-white px-8 py-3.5 rounded-md font-medium text-base hover:bg-[#a17b27] transition inline-block shadow-sm"
            >
              Explore Collection
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden bg-[#F9F1E7] p-4">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
              alt="Furniro Living Room Design"
              className="w-full h-[450px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* STATS HIGHLIGHT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#F9F1E7] rounded-2xl p-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-1">10+</h3>
            <p className="text-sm font-medium text-black">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-1">12K+</h3>
            <p className="text-sm font-medium text-black">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-1">150+</h3>
            <p className="text-sm font-medium text-black">Furniture Designs</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-1">24/7</h3>
            <p className="text-sm font-medium text-black">Dedicated Support</p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          3. FEATURES BANNER
      ------------------------------------------------------------- */}
      <FeaturesBanner />
    </div>
  );
}