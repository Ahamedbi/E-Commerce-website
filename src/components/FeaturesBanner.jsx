import React from 'react';
import { Trophy, ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function FeaturesBanner() {
  return (
    <div className="bg-[#FAF3EA] py-16 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center gap-4">
          <Trophy size={48} className="text-[#242424]" />
          <div>
            <h4 className="font-bold text-xl text-[#242424]">High Quality</h4>
            <p className="text-gray-500 text-sm">crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ShieldCheck size={48} className="text-[#242424]" />
          <div>
            <h4 className="font-bold text-xl text-[#242424]">Warranty Protection</h4>
            <p className="text-gray-500 text-sm">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Truck size={48} className="text-[#242424]" />
          <div>
            <h4 className="font-bold text-xl text-[#242424]">Free Shipping</h4>
            <p className="text-gray-500 text-sm">Order over $150</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Headphones size={48} className="text-[#242424]" />
          <div>
            <h4 className="font-bold text-xl text-[#242424]">24 / 7 Support</h4>
            <p className="text-gray-500 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}