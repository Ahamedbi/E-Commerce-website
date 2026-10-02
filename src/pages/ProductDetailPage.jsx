import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Share2, ArrowRightLeft, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';


export default function ProductDetailPage() {
  const { addToCart } = useShop();

  // Product Gallery Images
  const galleryImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
  ];

  // Interactive Component States
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('#816DFA');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const mainProduct = {
    id: 101,
    title: 'Asgaard sofa',
    price: 250000,
    priceFormatted: 'Rs. 250,000.00',
    rating: 5,
    reviewsCount: 5,
    description:
      'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.',
    sku: 'SS001',
    category: 'Sofas',
    tags: 'Sofa, Chair, Home, Shop',
  };

  const relatedProducts = [
    { id: 1, title: 'Syltherine', subtitle: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', discount: '-30%', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80' },
    { id: 2, title: 'Leviosa', subtitle: 'Stylish cafe chair', price: 'Rp 2.500.000', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
    { id: 3, title: 'Lolito', subtitle: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '-50%', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { id: 4, title: 'Respira', subtitle: 'Outdoor bar table and stool', price: 'Rp 500.000', isNew: true, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80' },
  ];

  return (
    <div className="font-poppins text-[#000000] bg-white">
      
      {/* -------------------------------------------------------------
          1. BREADCRUMB BAR (#F9F1E7)
      ------------------------------------------------------------- */}
      <div className="bg-[#F9F1E7] py-8 px-6 md:px-16 text-sm font-medium flex items-center gap-3">
        <Link to="/" className="text-[#9F9F9F] hover:text-black">Home</Link>
        <span className="text-[#9F9F9F]">&gt;</span>
        <Link to="/shop" className="text-[#9F9F9F] hover:text-black">Shop</Link>
        <span className="text-[#9F9F9F]">&gt;</span>
        <span className="text-[#9F9F9F]">|</span>
        <span className="font-semibold text-black">{mainProduct.title}</span>
      </div>

      {/* -------------------------------------------------------------
          2. MAIN PRODUCT SECTION
      ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: GALLERY THUMBNAILS & MAIN DISPLAY */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-8">
            
            {/* Thumbnails Stack */}
            <div className="flex sm:flex-col gap-4">
              {galleryImages.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-xl overflow-hidden bg-[#F9F1E7] p-2 transition-all border-2 ${
                    selectedImage === imgUrl ? 'border-[#B88E2F]' : 'border-transparent'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>

            {/* Main Preview Box */}
            <div className="bg-[#F9F1E7] rounded-xl p-8 flex-1 flex items-center justify-center min-h-[450px]">
              <img
                src={selectedImage}
                alt={mainProduct.title}
                className="w-full max-h-[420px] object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS & PURCHASING */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="text-4xl sm:text-[42px] font-medium text-black mb-2">{mainProduct.title}</h1>
            <p className="text-2xl font-medium text-[#9F9F9F] mb-4">{mainProduct.priceFormatted}</p>

            {/* Ratings */}
            <div className="flex items-center gap-3 mb-4 text-xs text-[#9F9F9F]">
              <div className="flex text-[#FFC700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
                ))}
              </div>
              <span className="text-[#9F9F9F]">|</span>
              <span>{mainProduct.reviewsCount} Customer Review</span>
            </div>

            {/* Short Description */}
            <p className="text-sm text-black leading-relaxed mb-8 pr-4">{mainProduct.description}</p>

            {/* Size Selector */}
            <div className="mb-6">
              <span className="text-sm text-[#9F9F9F] block mb-3">Size</span>
              <div className="flex gap-4">
                {['L', 'XL', 'XS'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded-md text-xs font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-[#B88E2F] text-white'
                        : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <span className="text-sm text-[#9F9F9F] block mb-3">Color</span>
              <div className="flex gap-4">
                {[
                  { id: 'purple', hex: '#816DFA' },
                  { id: 'black', hex: '#000000' },
                  { id: 'gold', hex: '#B88E2F' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-8 h-8 rounded-full transition-transform ${
                      selectedColor === c.hex ? 'ring-2 ring-offset-2 ring-[#B88E2F] scale-110' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Action Bar: Quantity & Buttons */}
            <div className="flex flex-wrap items-center gap-4 pb-10 border-b border-[#D9D9D9] mb-10">
              
              {/* Quantity Counter */}
              <div className="flex items-center justify-between border border-[#9F9F9F] rounded-xl px-4 py-3 w-32 font-medium text-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="hover:text-[#B88E2F] px-1"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="hover:text-[#B88E2F] px-1"
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button
                onClick={() =>
                  addToCart({
                    id: mainProduct.id,
                    title: mainProduct.title,
                    price: mainProduct.price,
                    image: selectedImage,
                    thumbnail: selectedImage,
                  }, quantity)
                }
                className="border border-black rounded-xl px-8 py-3 font-medium text-sm hover:bg-black hover:text-white transition"
              >
                Add To Cart
              </button>

              {/* Compare Button */}
              <Link
                to="/comparison"
                className="border border-black rounded-xl px-8 py-3 font-medium text-sm hover:bg-black hover:text-white transition inline-block text-center"
              >
                + Compare
              </Link>
            </div>

            {/* Product Meta Info */}
            <div className="space-y-3 text-sm text-[#9F9F9F]">
              <div className="flex">
                <span className="w-24">SKU</span>
                <span className="text-black">: {mainProduct.sku}</span>
              </div>
              <div className="flex">
                <span className="w-24">Category</span>
                <span className="text-black">: {mainProduct.category}</span>
              </div>
              <div className="flex">
                <span className="w-24">Tags</span>
                <span className="text-black">: {mainProduct.tags}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Share</span>
                <div className="flex items-center gap-4 text-black">
                  <span className="cursor-pointer hover:text-[#B88E2F]"><Facebook size={18} /></span>
                  <span className="cursor-pointer hover:text-[#B88E2F]"><Linkedin size={18} /></span>
                  <span className="cursor-pointer hover:text-[#B88E2F]"><Twitter size={18} /></span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------
          3. DESCRIPTION / ADDITIONAL INFO / REVIEWS TABS
      ------------------------------------------------------------- */}
      <div className="border-t border-[#D9D9D9] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Tab Navigation */}
          <div className="flex justify-center gap-8 sm:gap-14 mb-8 text-lg sm:text-2xl font-medium">
            <button
              onClick={() => setActiveTab('description')}
              className={`${
                activeTab === 'description' ? 'text-black font-semibold' : 'text-[#9F9F9F]'
              } hover:text-black transition`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`${
                activeTab === 'additional' ? 'text-black font-semibold' : 'text-[#9F9F9F]'
              } hover:text-black transition`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`${
                activeTab === 'reviews' ? 'text-black font-semibold' : 'text-[#9F9F9F]'
              } hover:text-black transition`}
            >
              Reviews [{mainProduct.reviewsCount}]
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto text-[#9F9F9F] text-sm leading-relaxed space-y-6 mb-12">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>

          {/* Featured Showcase Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F9F1E7] rounded-xl p-6 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Showcase 1"
                className="rounded-lg object-cover w-full h-[348px]"
              />
            </div>
            <div className="bg-[#F9F1E7] rounded-xl p-6 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Showcase 2"
                className="rounded-lg object-cover w-full h-[348px]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------
          4. RELATED PRODUCTS
      ------------------------------------------------------------- */}
      <div className="border-t border-[#D9D9D9] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-[#3A3A3A] mb-12">Related Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group relative bg-[#F4F5F7] overflow-hidden transition-all">
                
                {/* Badges */}
                {p.discount && (
                  <span className="absolute top-6 right-6 bg-[#E97171] text-white text-sm font-medium w-12 h-12 rounded-full flex items-center justify-center z-10">
                    {p.discount}
                  </span>
                )}
                {p.isNew && (
                  <span className="absolute top-6 right-6 bg-[#2EC4B6] text-white text-sm font-medium w-12 h-12 rounded-full flex items-center justify-center z-10">
                    New
                  </span>
                )}

                {/* Product Image */}
                <img src={p.image} alt={p.title} className="w-full h-[301px] object-cover" />

                {/* Body */}
                <div className="p-4 bg-[#F4F5F7]">
                  <h3 className="font-bold text-2xl text-[#3A3A3A] mb-1">{p.title}</h3>
                  <p className="text-[#898989] text-base font-medium mb-2">{p.subtitle}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-xl text-[#3A3A3A]">{p.price}</span>
                    {p.oldPrice && <span className="text-sm text-[#B0B0B0] line-through">{p.oldPrice}</span>}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#3A3A3A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-6 p-4">
                  <button
                    onClick={() => addToCart(p)}
                    className="bg-white text-[#B88E2F] px-10 py-3 font-semibold text-base hover:bg-[#B88E2F] hover:text-white transition-all shadow-sm"
                  >
                    Add to cart
                  </button>
                  <div className="flex items-center gap-6 text-white text-sm font-semibold">
                    <button className="flex items-center gap-1 hover:text-[#B88E2F] transition">
                      <Share2 size={16} /> Share
                    </button>
                    <Link to="/comparison" className="flex items-center gap-1 hover:text-[#B88E2F] transition">
                      <ArrowRightLeft size={16} /> Compare
                    </Link>
                    <button className="flex items-center gap-1 hover:text-[#B88E2F] transition">
                      <Heart size={16} /> Like
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center">
            <Link
              to="/shop"
              className="border border-[#B88E2F] text-[#B88E2F] px-20 py-3 font-semibold text-base hover:bg-[#B88E2F] hover:text-white transition inline-block"
            >
              Show More
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}