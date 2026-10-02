import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  const shopContext = useShop();
  const cartItems = shopContext?.cartItems || [];
  const wishlistItems = shopContext?.wishlistItems || [];

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F9F1E7] font-poppins transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-8 flex items-center justify-center">
              <svg viewBox="0 0 50 32" className="w-8 h-8 fill-[#B88E2F]">
                <path d="M25 0L50 32H0L25 0Z" />
              </svg>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-black tracking-tight font-montserrat">
              Furniro
            </span>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 font-medium text-base text-black">
            <Link to="/" className="hover:text-[#B88E2F] transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-[#B88E2F] transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-[#B88E2F] transition-colors">About</Link>
            <Link to="/blog" className="hover:text-[#B88E2F] transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-[#B88E2F] transition-colors">Contact</Link>
          </nav>

          {/* TOP RIGHT ICONS */}
          <div className="flex items-center gap-5 sm:gap-7 text-black">
            
            {/* USER ACCOUNT */}
            <Link
              to="/checkout"
              className="p-1 hover:text-[#B88E2F] transition-colors"
              title="Account / Billing"
            >
              <User size={23} />
            </Link>

            {/* SEARCH */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1 hover:text-[#B88E2F] transition-colors cursor-pointer"
              title="Search"
            >
              <Search size={23} />
            </button>

            {/* WISHLIST (HEART ICON) */}
            <Link
              to="/wishlist"
              className="p-1 hover:text-[#B88E2F] transition-colors relative cursor-pointer"
              title="View Wishlist"
            >
              <Heart size={23} className={wishlistItems.length > 0 ? "fill-red-500 text-red-500" : ""} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* SHOPPING CART */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1 hover:text-[#B88E2F] transition-colors relative cursor-pointer"
              title="Shopping Cart"
            >
              <ShoppingCart size={23} />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#B88E2F] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-black hover:text-[#B88E2F] transition cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

        </div>

        {/* SEARCH OVERLAY */}
        {isSearchOpen && (
          <div className="bg-[#F9F1E7] border-b border-[#E8E8E8] py-4 px-6">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-3">
              <input
                type="text"
                placeholder="Search furniture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="flex-1 bg-white border border-[#9F9F9F] rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-[#B88E2F]"
              />
              <button
                type="submit"
                className="bg-[#B88E2F] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#a17b27] transition"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 font-medium text-base text-black">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block">Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block">Shop</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block">About</Link>
            <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="block text-red-500">Wishlist ({wishlistItems.length})</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block">Blog</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">Contact</Link>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}