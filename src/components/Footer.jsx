import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-12 pb-8 px-6 md:px-12 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-2xl mb-6 text-black">Funiro.</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-gray-400 font-medium mb-6 text-sm">Links</h4>
          <ul className="space-y-4 font-medium text-sm text-black">
            <li><Link to="/" className="hover:text-[#B88E2F]">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[#B88E2F]">Shop</Link></li>
            <li><Link to="/blog" className="hover:text-[#B88E2F]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#B88E2F]">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-gray-400 font-medium mb-6 text-sm">Help</h4>
          <ul className="space-y-4 font-medium text-sm text-black">
            <li><a href="#" className="hover:text-[#B88E2F]">Payment Options</a></li>
            <li><a href="#" className="hover:text-[#B88E2F]">Returns</a></li>
            <li><a href="#" className="hover:text-[#B88E2F]">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gray-400 font-medium mb-6 text-sm">Newsletter</h4>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="border-b border-black text-sm pb-1 focus:outline-none flex-1 text-black placeholder-gray-400"
            />
            <button className="border-b border-black font-semibold text-sm pb-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 text-sm text-black">
        2023 furino. All rights reserved
      </div>
    </footer>
  );
}