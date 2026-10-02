import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Share2, ArrowLeftRight, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import FeaturesBanner from '../components/FeaturesBanner';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80';

// Extended Catalog with 32 Products
const SHOP_PRODUCTS = Array.from({ length: 32 }, (_, i) => {
  const baseItems = [
    { title: 'Syltherine', subtitle: 'Stylish cafe chair', price: 2500000, originalPrice: 3500000, discount: '-30%', tag: 'discount', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
    { title: 'Leviosa', subtitle: 'Stylish cafe chair', price: 2500000, image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=600&q=80' },
    { title: 'Lolito', subtitle: 'Luxury big sofa', price: 7000000, originalPrice: 14000000, discount: '-50%', tag: 'discount', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { title: 'Respira', subtitle: 'Outdoor bar table and stool', price: 500000, tag: 'new', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80' },
    { title: 'Asgaard Sofa', subtitle: 'Luxury sectional sofa', price: 2500000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { title: 'Casaliving Wood', subtitle: 'Modern wooden armchair', price: 2700000, image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=600&q=80' },
    { title: 'Outdoor Sofa Set', subtitle: 'Weatherproof patio set', price: 2240000, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
    { title: 'Modern Dining Table', subtitle: 'Solid oak 6-seater', price: 1800000, image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80' },
  ];

  const item = baseItems[i % baseItems.length];
  return {
    ...item,
    id: 101 + i,
    title: i >= 8 ? `${item.title} ${Math.floor(i / 8) + 1}` : item.title,
  };
});

export default function ShopPage() {
  const navigate = useNavigate();
  const shopContext = useShop();

  const addToCart = shopContext?.addToCart || (() => {});
  const toggleWishlist = shopContext?.toggleWishlist || (() => {});
  const isInWishlist = shopContext?.isInWishlist || (() => false);

  const [viewType, setViewType] = useState('grid');
  const [sortBy, setSortBy] = useState('default');
  const [itemsPerPage, setItemsPerPage] = useState(16); // 16 items per page (32 total results = 2 pages)
  const [currentPage, setCurrentPage] = useState(1);

  const formatPrice = (val) => `Rp ${val.toLocaleString('id-ID')}`;

  // Sort Products
  const sortedProducts = [...SHOP_PRODUCTS].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  // Pagination Calculations
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-poppins text-black bg-white min-h-screen">
      
      {/* HEADER BANNER */}
      <div className="bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')] bg-cover bg-center py-20 text-center relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-8 mb-2 flex items-center justify-center">
            <svg viewBox="0 0 50 32" className="w-8 h-8 fill-[#B88E2F]">
              <path d="M25 0L50 32H0L25 0Z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">Shop</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">Shop</span>
          </p>
        </div>
      </div>

      {/* FILTER & TOOLBAR BAR */}
      <div className="bg-[#F9F1E7] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-normal">
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-3 text-black font-medium hover:text-[#B88E2F] transition cursor-pointer">
              <SlidersHorizontal size={18} />
              <span>Filter</span>
            </button>

            <div className="flex items-center gap-3 border-l border-[#9F9F9F] pl-6 text-black">
              <button
                onClick={() => setViewType('grid')}
                className={`p-1 transition cursor-pointer ${viewType === 'grid' ? 'text-black' : 'text-[#9F9F9F]'}`}
                title="Grid View"
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-1 transition cursor-pointer ${viewType === 'list' ? 'text-black' : 'text-[#9F9F9F]'}`}
                title="List View"
              >
                <List size={20} />
              </button>
            </div>

            {/* DYNAMIC RESULT COUNT: Showing 1–16 of 32 results */}
            <span className="border-l border-[#9F9F9F] pl-6 text-black font-normal hidden sm:inline">
              Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, sortedProducts.length)} of {sortedProducts.length} results
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span>Show</span>
              <input
                type="number"
                min="1"
                max={sortedProducts.length}
                value={itemsPerPage}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val > 0) {
                    setItemsPerPage(val);
                    setCurrentPage(1);
                  }
                }}
                className="w-16 h-10 bg-white border border-gray-200 text-center text-black font-medium focus:outline-none focus:border-[#B88E2F] rounded-md"
              />
            </div>

            <div className="flex items-center gap-3">
              <span>Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 bg-white border border-gray-200 px-4 text-black font-medium focus:outline-none focus:border-[#B88E2F] rounded-md cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div
          className={
            viewType === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
              : 'space-y-6'
          }
        >
          {currentProducts.map((product) => {
            const isLiked = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="bg-[#F4F5F7] rounded-lg overflow-hidden group relative transition duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => { e.target.src = FALLBACK_IMG; }}
                  />

                  {product.tag === 'discount' && (
                    <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white text-sm font-medium flex items-center justify-center">
                      {product.discount}
                    </span>
                  )}
                  {product.tag === 'new' && (
                    <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#2EC1AC] text-white text-sm font-medium flex items-center justify-center">
                      New
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs p-2.5 rounded-full shadow-md transition hover:scale-110 cursor-pointer z-20"
                    title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart
                      size={18}
                      className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'}
                    />
                  </button>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-4 p-4 z-10">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-white text-[#B88E2F] font-semibold text-base px-10 py-3 rounded-md hover:bg-[#B88E2F] hover:text-white transition w-4/5 text-center shadow-md cursor-pointer"
                    >
                      Add to cart
                    </button>

                    <div className="flex items-center gap-6 text-white text-sm font-medium">
                      <button className="flex items-center gap-1 hover:text-[#B88E2F] transition cursor-pointer">
                        <Share2 size={16} /> Share
                      </button>

                      <button
                        onClick={() => navigate('/comparison')}
                        className="flex items-center gap-1 hover:text-[#B88E2F] transition cursor-pointer"
                      >
                        <ArrowLeftRight size={16} /> Compare
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product);
                        }}
                        className={`flex items-center gap-1 transition cursor-pointer ${
                          isLiked ? 'text-red-500 font-bold' : 'hover:text-red-400'
                        }`}
                      >
                        <Heart
                          size={16}
                          className={isLiked ? 'fill-red-500 text-red-500' : ''}
                        />
                        {isLiked ? 'Liked' : 'Like'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-2xl text-black mb-1 truncate">
                      <Link to={`/product/${product.id}`} className="hover:text-[#B88E2F] transition">
                        {product.title}
                      </Link>
                    </h3>
                    <p className="text-[#898989] text-base font-medium mb-3">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold text-xl text-[#3A3A3A]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[#B0B0B0] text-sm line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-5 h-12 rounded-lg bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white transition font-medium text-base cursor-pointer"
              >
                Prev
              </button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-12 h-12 rounded-lg font-medium text-base transition cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-[#B88E2F] text-white shadow-md'
                    : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
                }`}
              >
                {pageNum}
              </button>
            ))}

            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-5 h-12 rounded-lg bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white transition font-medium text-base cursor-pointer"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>

      <FeaturesBanner />
    </div>
  );
}