import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import FeaturesBanner from '../components/FeaturesBanner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">Contact</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">Contact</span>
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. MIDDLE SECTION (GET IN TOUCH - CLEAN WHITE BACKGROUND)
      ------------------------------------------------------------- */}
      <div className="bg-white py-20 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-3">
            Get In Touch With Us
          </h2>
          <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-10 pl-2 sm:pl-8">
            
            {/* Address */}
            <div className="flex items-start gap-6">
              <MapPin size={28} className="text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-2xl text-black mb-1">Address</h3>
                <p className="text-black text-base leading-relaxed">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6">
              <Phone size={28} className="text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-2xl text-black mb-1">Phone</h3>
                <p className="text-black text-base leading-relaxed">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-6">
              <Clock size={28} className="text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-2xl text-black mb-1">Working Time</h3>
                <p className="text-black text-base leading-relaxed">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-2 sm:p-6 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Your Name */}
              <div>
                <label className="block text-base font-medium text-black mb-3">Your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Abc"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#9F9F9F] rounded-lg p-4 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-[#B88E2F]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-base font-medium text-black mb-3">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Abc@def.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#9F9F9F] rounded-lg p-4 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-[#B88E2F]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-base font-medium text-black mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="This is an optional"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-[#9F9F9F] rounded-lg p-4 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-[#B88E2F]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-base font-medium text-black mb-3">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Hi! i’d like to ask about..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#9F9F9F] rounded-lg p-4 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-[#B88E2F]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#B88E2F] text-white px-20 py-3.5 rounded-md font-normal text-base hover:bg-[#a17b27] transition shadow-xs"
                >
                  Submit
                </button>
              </div>

            </form>
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