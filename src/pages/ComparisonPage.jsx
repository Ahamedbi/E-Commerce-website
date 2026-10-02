import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import FeaturesBanner from '../components/FeaturesBanner';

// Store catalog available for comparison
const PRODUCTS_CATALOG = [
  {
    id: 101,
    title: 'Asgaard Sofa',
    price: 250000,
    priceFormatted: 'Rs. 250,000.00',
    rating: 4.7,
    reviewsCount: 204,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    salesPackage: '1 sectional sofa',
    modelNumber: 'TFCBLIGRBL6SRHS',
    secondaryMaterial: 'Solid Wood',
    configuration: 'L-shaped',
    upholsteryMaterial: 'Fabric + Cotton',
    upholsteryColor: 'Bright Grey & Blue',
    fillingMaterial: 'Foam',
    finishType: 'Bright Grey & Blue',
    adjustableHeadrest: 'No',
    maxLoad: '300 KG',
    origin: 'India',
    width: '265.32 cm',
    height: '76 cm',
    depth: '167.76 cm',
    weight: '45 KG',
    warrantySummary: '1 Year Manufacturing Warranty',
  },
  {
    id: 102,
    title: 'Outdoor Sofa Set',
    price: 224000,
    priceFormatted: 'Rs. 224,000.00',
    rating: 4.2,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
    salesPackage: '1 Three Seater Sofa',
    modelNumber: 'DTUBLIGRBL566',
    secondaryMaterial: 'Teak Wood',
    configuration: '3 Seater',
    upholsteryMaterial: 'Waterproof Polyester',
    upholsteryColor: 'Beige & Charcoal',
    fillingMaterial: 'High Density Foam',
    finishType: 'Matte Teak Finish',
    adjustableHeadrest: 'Yes',
    maxLoad: '280 KG',
    origin: 'Indonesia',
    width: '240.00 cm',
    height: '80 cm',
    depth: '150.00 cm',
    weight: '52 KG',
    warrantySummary: '1.2 Year Manufacturing Warranty',
  },
  {
    id: 103,
    title: 'Casaliving Wood Sofa',
    price: 270000,
    priceFormatted: 'Rs. 270,000.00',
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=600&q=80',
    salesPackage: '1 Wooden Frame Sofa',
    modelNumber: 'CSWWD99281',
    secondaryMaterial: 'Mahogany Wood',
    configuration: 'Modular 4-Piece',
    upholsteryMaterial: 'Velvet Soft Linen',
    upholsteryColor: 'Warm Camel',
    fillingMaterial: 'Memory Foam + Down',
    finishType: 'Natural Mahogany Polish',
    adjustableHeadrest: 'Yes',
    maxLoad: '350 KG',
    origin: 'India',
    width: '280.00 cm',
    height: '82 cm',
    depth: '175.00 cm',
    weight: '60 KG',
    warrantySummary: '2 Year Comprehensive Warranty',
  },
  {
    id: 104,
    title: 'Modern Dining Table',
    price: 180000,
    priceFormatted: 'Rs. 180,000.00',
    rating: 4.5,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80',
    salesPackage: '1 Dining Table + 6 Chairs',
    modelNumber: 'MDT6CH9912',
    secondaryMaterial: 'Oak Wood & Steel',
    configuration: '6-Seater Dining',
    upholsteryMaterial: 'Faux Leather Cushions',
    upholsteryColor: 'Espresso Brown',
    fillingMaterial: 'Medium Density Foam',
    finishType: 'Matte Walnut',
    adjustableHeadrest: 'N/A',
    maxLoad: '200 KG',
    origin: 'Malaysia',
    width: '180.00 cm',
    height: '75 cm',
    depth: '90.00 cm',
    weight: '48 KG',
    warrantySummary: '1 Year Frame Warranty',
  },
];

export default function ComparisonPage() {
  const shopContext = useShop();
  const addToCart = shopContext?.addToCart || (() => {});

  const [prod1, setProd1] = useState(PRODUCTS_CATALOG[0]);
  const [prod2, setProd2] = useState(PRODUCTS_CATALOG[1]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectProduct = (product) => {
    setProd2(product);
    setIsDropdownOpen(false);
  };

  return (
    <div className="font-poppins text-black bg-white min-h-screen">
      
      {/* 1. HEADER BANNER */}
      <div className="bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')] bg-cover bg-center py-20 text-center relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-8 mb-2 flex items-center justify-center">
            <svg viewBox="0 0 50 32" className="w-8 h-8 fill-[#B88E2F]">
              <path d="M25 0L50 32H0L25 0Z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">Product Comparison</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">Comparison</span>
          </p>
        </div>
      </div>

      {/* 2. PRODUCT SELECTOR & COMPARISON HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12 overflow-x-auto">
        <div className="grid grid-cols-4 min-w-[800px] gap-8 pb-8 border-b border-[#E8E8E8] items-start">
          
          {/* Column 1: Action Header */}
          <div className="pr-4">
            <h2 className="text-2xl font-semibold leading-snug mb-3">
              Go to Product page for more Products
            </h2>
            <Link
              to="/shop"
              className="text-[#727272] text-base underline underline-offset-4 hover:text-[#B88E2F] transition font-medium"
            >
              View More
            </Link>
          </div>

          {/* Column 2: Product 1 */}
          <div>
            <div className="bg-[#F9F1E7] rounded-xl p-4 mb-4 flex items-center justify-center h-44 overflow-hidden">
              <img
                src={prod1.image}
                alt={prod1.title}
                className="max-h-full w-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-xl mb-1">{prod1.title}</h3>
            <p className="text-base font-medium text-black mb-2">{prod1.priceFormatted}</p>
            <div className="flex items-center gap-2 text-xs text-[#9F9F9F]">
              <span className="font-bold text-black">{prod1.rating}</span>
              <div className="flex text-[#FFC700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="currentColor" />
                ))}
              </div>
              <span>|</span>
              <span>{prod1.reviewsCount} Reviews</span>
            </div>
          </div>

          {/* Column 3: Selected Product 2 */}
          <div>
            <div className="bg-[#F9F1E7] rounded-xl p-4 mb-4 flex items-center justify-center h-44 overflow-hidden">
              <img
                src={prod2.image}
                alt={prod2.title}
                className="max-h-full w-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-xl mb-1">{prod2.title}</h3>
            <p className="text-base font-medium text-black mb-2">{prod2.priceFormatted}</p>
            <div className="flex items-center gap-2 text-xs text-[#9F9F9F]">
              <span className="font-bold text-black">{prod2.rating}</span>
              <div className="flex text-[#FFC700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="currentColor" />
                ))}
              </div>
              <span>|</span>
              <span>{prod2.reviewsCount} Reviews</span>
            </div>
          </div>

          {/* Column 4: DYNAMIC SELECTOR TO CHANGE COMPARISON PRODUCT */}
          <div className="relative">
            <h3 className="font-semibold text-2xl text-black mb-4">Add A Product</h3>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[#B88E2F] text-white px-5 py-3.5 rounded-lg font-semibold text-sm flex items-center justify-between shadow-xs hover:bg-[#a17b27] transition cursor-pointer"
            >
              <span>{prod2.title || 'Choose a Product'}</span>
              <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Options List */}
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-30 overflow-hidden divide-y divide-gray-100">
                {PRODUCTS_CATALOG.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectProduct(item)}
                    className="w-full text-left px-4 py-3 hover:bg-[#F9F1E7] transition flex items-center gap-3 cursor-pointer"
                  >
                    <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded-md" />
                    <div>
                      <p className="font-medium text-sm text-black">{item.title}</p>
                      <p className="text-xs text-[#B88E2F]">{item.priceFormatted}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* 3. DYNAMIC SPECIFICATIONS TABLE */}
        <div className="min-w-[800px] mt-12 text-sm space-y-12">
          
          {/* CATEGORY 1: GENERAL */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-black">General</h3>
            <div className="space-y-5 border-b border-[#E8E8E8] pb-8">
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Sales Package</span>
                <span className="text-[#9F9F9F]">{prod1.salesPackage}</span>
                <span className="text-[#9F9F9F]">{prod2.salesPackage}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Model Number</span>
                <span className="text-[#9F9F9F]">{prod1.modelNumber}</span>
                <span className="text-[#9F9F9F]">{prod2.modelNumber}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Secondary Material</span>
                <span className="text-[#9F9F9F]">{prod1.secondaryMaterial}</span>
                <span className="text-[#9F9F9F]">{prod2.secondaryMaterial}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Configuration</span>
                <span className="text-[#9F9F9F]">{prod1.configuration}</span>
                <span className="text-[#9F9F9F]">{prod2.configuration}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Upholstery Material</span>
                <span className="text-[#9F9F9F]">{prod1.upholsteryMaterial}</span>
                <span className="text-[#9F9F9F]">{prod2.upholsteryMaterial}</span>
                <span></span>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: PRODUCT SPECIFICATIONS */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-black">Product</h3>
            <div className="space-y-5 border-b border-[#E8E8E8] pb-8">
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Filling Material</span>
                <span className="text-[#9F9F9F]">{prod1.fillingMaterial}</span>
                <span className="text-[#9F9F9F]">{prod2.fillingMaterial}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Finish Type</span>
                <span className="text-[#9F9F9F]">{prod1.finishType}</span>
                <span className="text-[#9F9F9F]">{prod2.finishType}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Adjustable Headrest</span>
                <span className="text-[#9F9F9F]">{prod1.adjustableHeadrest}</span>
                <span className="text-[#9F9F9F]">{prod2.adjustableHeadrest}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Maximum Load</span>
                <span className="text-[#9F9F9F]">{prod1.maxLoad}</span>
                <span className="text-[#9F9F9F]">{prod2.maxLoad}</span>
                <span></span>
              </div>
            </div>
          </div>

          {/* CATEGORY 3: DIMENSIONS */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-black">Dimensions</h3>
            <div className="space-y-5 border-b border-[#E8E8E8] pb-8">
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Width</span>
                <span className="text-[#9F9F9F]">{prod1.width}</span>
                <span className="text-[#9F9F9F]">{prod2.width}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Height</span>
                <span className="text-[#9F9F9F]">{prod1.height}</span>
                <span className="text-[#9F9F9F]">{prod2.height}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Depth</span>
                <span className="text-[#9F9F9F]">{prod1.depth}</span>
                <span className="text-[#9F9F9F]">{prod2.depth}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Weight</span>
                <span className="text-[#9F9F9F]">{prod1.weight}</span>
                <span className="text-[#9F9F9F]">{prod2.weight}</span>
                <span></span>
              </div>
            </div>
          </div>

          {/* CATEGORY 4: WARRANTY & ADD TO CART */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-black">Warranty</h3>
            <div className="space-y-5 pb-8">
              <div className="grid grid-cols-4 gap-8">
                <span className="font-normal text-black">Warranty Summary</span>
                <span className="text-[#9F9F9F]">{prod1.warrantySummary}</span>
                <span className="text-[#9F9F9F]">{prod2.warrantySummary}</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-8 pt-6">
                <span></span>
                <div>
                  <button
                    onClick={() => addToCart(prod1)}
                    className="bg-[#B88E2F] text-white px-8 py-3 text-sm font-medium hover:bg-[#a17b27] transition cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => addToCart(prod2)}
                    className="bg-[#B88E2F] text-white px-8 py-3 text-sm font-medium hover:bg-[#a17b27] transition cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
                <span></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FeaturesBanner />
    </div>
  );
}