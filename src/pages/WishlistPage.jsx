import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import FeaturesBanner from '../components/FeaturesBanner';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80';

export default function WishlistPage() {
  const shopContext = useShop();
  const wishlistItems = shopContext?.wishlistItems || [];
  const removeFromWishlist = shopContext?.removeFromWishlist || (() => {});
  const addToCart = shopContext?.addToCart || (() => {});

  const formatPrice = (val) => {
    const num = typeof val === 'number' ? val : 250000;
    return `Rs. ${num.toLocaleString('en-US')}.00`;
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
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">My Wishlist</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">Wishlist</span>
          </p>
        </div>
      </div>

      {/* WISHLIST GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {wishlistItems.length > 0 ? (
          <div>
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-black">
                Saved Items ({wishlistItems.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlistItems.map((product) => {
                const img = product.image || product.thumbnail || FALLBACK_IMG;

                return (
                  <div
                    key={product.id}
                    className="bg-[#F4F5F7] rounded-xl overflow-hidden group flex flex-col justify-between shadow-xs hover:shadow-lg transition"
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <img
                        src={img}
                        alt={product.title || product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        onError={(e) => { e.target.src = FALLBACK_IMG; }}
                      />
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition shadow-sm cursor-pointer"
                        title="Remove from Wishlist"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-1 truncate">
                          {product.title || product.name}
                        </h3>
                        <p className="text-[#898989] text-sm mb-3">Saved Furniture Item</p>
                      </div>

                      <div>
                        <p className="text-black font-semibold text-lg mb-4">
                          {formatPrice(product.price)}
                        </p>

                        <button
                          onClick={() => addToCart(product)}
                          className="w-full bg-[#B88E2F] text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#a17b27] transition cursor-pointer"
                        >
                          <ShoppingCart size={18} />
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F9F1E7] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#B88E2F] shadow-xs">
              <Heart size={32} />
            </div>
            <h2 className="text-3xl font-bold text-black mb-3">Your Wishlist is Empty</h2>
            <p className="text-[#9F9F9F] text-base mb-8 max-w-md mx-auto">
              Explore our furniture collection and save your favorite items to your wishlist for later.
            </p>
            <Link
              to="/shop"
              className="bg-[#B88E2F] text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-[#a17b27] transition inline-flex items-center gap-2 shadow-sm"
            >
              Explore Shop <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>

      <FeaturesBanner />
    </div>
  );
}