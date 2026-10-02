import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, ArrowRightLeft, Heart, ArrowRight, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import FeaturesBanner from '../components/FeaturesBanner';

// Room Inspiration Slider Data
const roomSlides = [
  {
    id: 1,
    num: '01',
    category: 'Bed Room',
    title: 'Inner Peace',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    id: 2,
    num: '02',
    category: 'Dining Room',
    title: 'Modern Harmony',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    id: 3,
    num: '03',
    category: 'Living Room',
    title: 'Cozy Wooden Elegance',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
];

export default function HomePage() {
  const { products, loading, addToCart } = useShop();

  // State for Product Pagination (Page 1 vs Page 2 on Home Page)
  const [productPage, setProductPage] = useState(1);
  const itemsPerPage = 8;

  // State for Room Inspiration Slider
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  // Fallback products if API has fewer than 16 items
  const fallbackProducts = [
    { id: 1, title: 'Syltherine', subtitle: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: '-30%', thumbnail: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=600&q=80' },
    { id: 2, title: 'Leviosa', subtitle: 'Stylish cafe chair', price: 2500000, thumbnail: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
    { id: 3, title: 'Lolito', subtitle: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, discount: '-50%', thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { id: 4, title: 'Respira', subtitle: 'Outdoor bar table and stool', price: 500000, isNew: true, thumbnail: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80' },
    { id: 5, title: 'Grifo', subtitle: 'Night lamp', price: 1500000, thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80' },
    { id: 6, title: 'Muggo', subtitle: 'Small mug', price: 150000, isNew: true, thumbnail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80' },
    { id: 7, title: 'Pingky', subtitle: 'Cute bed set', price: 7000000, oldPrice: 14000000, discount: '-50%', thumbnail: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80' },
    { id: 8, title: 'Potty', subtitle: 'Minimalist sofa', price: 500000, isNew: true, thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    { id: 9, title: 'Nordic Chair', subtitle: 'Minimalist wood chair', price: 1800000, discount: '-15%', thumbnail: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=600&q=80' },
    { id: 10, title: 'Asgaard Sofa', subtitle: 'Luxury sectional sofa', price: 12000000, thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { id: 11, title: 'Modern Desk', subtitle: 'Workstation table', price: 3400000, isNew: true, thumbnail: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80' },
    { id: 12, title: 'Bamboo Stool', subtitle: 'Eco seating', price: 450000, thumbnail: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80' },
    { id: 13, title: 'Velvet Armchair', subtitle: 'Comfy living chair', price: 3200000, discount: '-20%', thumbnail: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
    { id: 14, title: 'Pendant Lamp', subtitle: 'Warm ceiling lighting', price: 850000, thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80' },
    { id: 15, title: 'King Size Bed', subtitle: 'Master bedroom frame', price: 15000000, isNew: true, thumbnail: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80' },
    { id: 16, title: 'Coffee Table', subtitle: 'Solid oak center table', price: 2100000, thumbnail: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80' },
  ];

  const allProductList = products && products.length >= 8 ? products : fallbackProducts;
  const totalPages = Math.ceil(allProductList.length / itemsPerPage);

  // Get current page slice
  const startIndex = (productPage - 1) * itemsPerPage;
  const currentProducts = allProductList.slice(startIndex, startIndex + itemsPerPage);

  const formatCurrency = (val) => {
    if (typeof val === 'number') {
      return `Rp ${val.toLocaleString('id-ID')}`;
    }
    return val;
  };

  const handleNextRoom = () => {
    setCurrentRoomIndex((prev) => (prev + 1) % roomSlides.length);
  };

  const activeRoom = roomSlides[currentRoomIndex];
  const nextRoom = roomSlides[(currentRoomIndex + 1) % roomSlides.length];

  return (
    <div className="font-poppins text-[#333333]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')] bg-cover bg-center h-[716px] flex items-center justify-end px-6 md:px-16 lg:px-24">
        <div className="bg-[#FFF3E3] p-8 sm:p-12 md:p-14 rounded-xl max-w-[643px] w-full z-10 shadow-sm">
          <span className="text-sm font-semibold tracking-[3px] text-[#333333] uppercase block mb-3">
            New Arrival
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-[#B88E2F] leading-[1.2] mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-[#333333] text-sm sm:text-base font-medium mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[#B88E2F] text-white px-14 py-6 font-bold text-sm tracking-wider uppercase hover:bg-[#a17b27] transition-all"
          >
            BUY NOW
          </Link>
        </div>
      </section>

      {/* 2. BROWSE THE RANGE */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#333333]">Browse The Range</h2>
        <p className="text-[#666666] text-base mt-1 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="overflow-hidden rounded-xl h-[480px] w-full">
              <img
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80"
                alt="Dining"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <span className="font-semibold text-2xl text-[#333333] mt-6">Dining</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="overflow-hidden rounded-xl h-[480px] w-full">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                alt="Living"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <span className="font-semibold text-2xl text-[#333333] mt-6">Living</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="overflow-hidden rounded-xl h-[480px] w-full">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80"
                alt="Bedroom"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <span className="font-semibold text-2xl text-[#333333] mt-6">Bedroom</span>
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-12" id="our-products">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#3A3A3A] mb-2">
          Our Products
        </h2>
        <p className="text-center text-sm text-gray-500 mb-10">
          Showing Page {productPage} of {totalPages}
        </p>

        {loading ? (
          <p className="text-center py-10 text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProducts.map((p) => {
              const mainImg = p.thumbnail || p.image;
              const title = p.title;
              const subtitle = p.subtitle || 'Stylish furniture';
              const priceFormatted = formatCurrency(p.price);
              const oldPriceFormatted = p.oldPrice || p.originalPrice ? formatCurrency(p.oldPrice || p.originalPrice) : null;
              const discountTag = p.discount;
              const isNewTag = p.isNew;

              return (
                <div
                  key={p.id}
                  className="group relative bg-[#F4F5F7] overflow-hidden transition-all duration-300"
                >
                  {discountTag && (
                    <span className="absolute top-6 right-6 bg-[#E97171] text-white text-sm font-medium w-12 h-12 rounded-full flex items-center justify-center z-10">
                      {discountTag}
                    </span>
                  )}
                  {isNewTag && !discountTag && (
                    <span className="absolute top-6 right-6 bg-[#2EC4B6] text-white text-sm font-medium w-12 h-12 rounded-full flex items-center justify-center z-10">
                      New
                    </span>
                  )}

                  <img src={mainImg} alt={title} className="w-full h-[301px] object-cover" />

                  <div className="p-4 bg-[#F4F5F7]">
                    <h3 className="font-bold text-2xl text-[#3A3A3A] mb-1 truncate">{title}</h3>
                    <p className="text-[#898989] text-base font-medium mb-2">{subtitle}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-xl text-[#3A3A3A]">{priceFormatted}</span>
                      {oldPriceFormatted && (
                        <span className="text-sm text-[#B0B0B0] line-through">{oldPriceFormatted}</span>
                      )}
                    </div>
                  </div>

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
              );
            })}
          </div>
        )}

        {/* Home Page Dynamic Pagination Buttons (Page 1 / Page 2 / Next) */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setProductPage(1)}
            className={`w-12 h-12 rounded-lg font-semibold transition ${
              productPage === 1 ? 'bg-[#B88E2F] text-white' : 'bg-[#FAF3EA] text-black hover:bg-[#B88E2F] hover:text-white'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setProductPage(2)}
            className={`w-12 h-12 rounded-lg font-semibold transition ${
              productPage === 2 ? 'bg-[#B88E2F] text-white' : 'bg-[#FAF3EA] text-black hover:bg-[#B88E2F] hover:text-white'
            }`}
          >
            2
          </button>
          <button
            onClick={() => setProductPage((prev) => (prev % totalPages) + 1)}
            className="px-8 h-12 rounded-lg bg-[#FAF3EA] text-black font-semibold hover:bg-[#B88E2F] hover:text-white transition"
          >
            {productPage === 1 ? 'Next (Page 2)' : 'Page 1'}
          </button>
        </div>
      </section>

      {/* 4. 50+ BEAUTIFUL ROOMS INSPIRATION (Interactive Slider) */}
      <section className="bg-[#FCF8F3] py-16 my-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3A3A3A] leading-tight mb-3">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[#616161] text-sm sm:text-base font-medium mb-6">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <Link
              to="/shop"
              className="bg-[#B88E2F] text-white px-9 py-3 font-semibold text-base hover:bg-[#a17b27] transition inline-block"
            >
              Explore More
            </Link>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 items-center relative">
            
            {/* Active Interactive Slide */}
            <div className="relative w-full sm:w-[404px] h-[582px] overflow-hidden rounded transition-all duration-500">
              <img
                src={activeRoom.image}
                alt={activeRoom.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 flex items-end">
                <div className="bg-white/90 backdrop-blur-sm p-6 max-w-[217px]">
                  <span className="text-[#616161] text-sm font-medium flex items-center gap-2">
                    {activeRoom.num} <span className="w-7 h-[1px] bg-[#616161] inline-block"></span> {activeRoom.category}
                  </span>
                  <h3 className="text-[#3A3A3A] font-semibold text-2xl mt-1">{activeRoom.title}</h3>
                </div>
                <button
                  onClick={handleNextRoom}
                  className="bg-[#B88E2F] text-white p-3 flex items-center justify-center hover:bg-[#a17b27] transition"
                  title="Next Room"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            {/* Next Preview Slide (Clicking it also rotates to next room) */}
            <div
              onClick={handleNextRoom}
              className="relative w-full sm:w-[372px] h-[486px] overflow-hidden rounded hidden sm:block cursor-pointer group"
            >
              <img
                src={nextRoom.image}
                alt={nextRoom.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              
              {/* Golden Circle Next Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextRoom();
                }}
                className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-white text-[#B88E2F] rounded-full shadow-lg flex items-center justify-center hover:bg-[#B88E2F] hover:text-white transition z-20"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. #FUNIROFURNITURE MOSAIC GALLERY
          Layout matched to the supplied reference image:
          - centered heading
          - 5 images across the top
          - 4 smaller images positioned underneath
          - no rounded corners
          - tight, uneven masonry-style spacing
      ------------------------------------------------------------- */}
      <section className="bg-white py-10 sm:py-12 text-center overflow-hidden">
        <p className="text-[#616161] text-[10px] sm:text-xs font-medium mb-0">
          Share your setup with
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-5 sm:mb-6">
          #FuniroFurniture
        </h2>

        {/* Desktop / tablet reference-style mosaic */}
        <div className="relative mx-auto w-full max-w-[1120px] h-[270px] sm:h-[330px] px-4 sm:px-6">
          {/* Top-left */}
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=85"
            alt="Funiro furniture setup 1"
            className="absolute left-[3%] top-0 w-[14%] h-[128px] sm:h-[155px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Sofa/1.png'; }}
          />

          {/* Top-center-left */}
          <img
            src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=85"
            alt="Funiro furniture setup 2"
            className="absolute left-[19%] top-[25px] w-[21.5%] h-[145px] sm:h-[170px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png'; }}
          />

          {/* Middle */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=85"
            alt="Funiro furniture setup 3"
            className="absolute left-[42.5%] top-[55px] w-[14%] h-[145px] sm:h-[170px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Wooden%20Table/1.png'; }}
          />

          {/* Top-center-right */}
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=85"
            alt="Funiro furniture setup 4"
            className="absolute left-[58.5%] top-[18px] w-[14%] h-[128px] sm:h-[150px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png'; }}
          />

          {/* Top-right */}
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=85"
            alt="Funiro furniture setup 5"
            className="absolute right-[2%] top-[10px] w-[20%] h-[145px] sm:h-[170px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png'; }}
          />

          {/* Bottom-left small */}
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=85"
            alt="Funiro furniture setup 6"
            className="absolute left-[8%] top-[145px] sm:top-[170px] w-[9%] h-[100px] sm:h-[125px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Bed/1.png'; }}
          />

          {/* Bottom-center-left */}
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=85"
            alt="Funiro furniture setup 7"
            className="absolute left-[21%] top-[155px] sm:top-[180px] w-[17%] h-[90px] sm:h-[105px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Sofa/1.png'; }}
          />

          {/* Bottom-center-right small */}
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=85"
            alt="Funiro furniture setup 8"
            className="absolute left-[59%] top-[155px] sm:top-[165px] w-[8.5%] h-[78px] sm:h-[92px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Wooden%20Table/1.png'; }}
          />

          {/* Bottom-right small */}
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=85"
            alt="Funiro furniture setup 9"
            className="absolute right-[11%] top-[160px] sm:top-[175px] w-[13%] h-[90px] sm:h-[105px] object-cover"
            onError={(e) => { e.currentTarget.src = 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png'; }}
          />
        </div>

        {/* Mobile: keep the same visual idea without making the tiny desktop
            coordinates unusable on small screens. */}
        <div className="grid grid-cols-3 gap-2 px-4 sm:hidden">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=85"
            alt="Funiro furniture setup 1"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&q=85"
            alt="Funiro furniture setup 2"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=85"
            alt="Funiro furniture setup 3"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&q=85"
            alt="Funiro furniture setup 4"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=85"
            alt="Funiro furniture setup 5"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=85"
            alt="Funiro furniture setup 6"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=85"
            alt="Funiro furniture setup 7"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=85"
            alt="Funiro furniture setup 8"
            className="w-full h-28 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=85"
            alt="Funiro furniture setup 9"
            className="w-full h-28 object-cover"
          />
        </div>
      </section>

      <FeaturesBanner />
    </div>
  );
}