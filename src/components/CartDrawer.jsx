import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80';

export default function CartDrawer({ isOpen, onClose }) {
  const shopContext = useShop();
  const cartItems = shopContext?.cartItems || [];
  const removeFromCart = shopContext?.removeFromCart || (() => {});
  const updateQuantity = shopContext?.updateQuantity || (() => {});

  if (!isOpen) return null;

  // Calculate Subtotal only from actual cart items
  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = typeof item.price === 'number' ? item.price : 250000;
    return acc + numericPrice * (item.quantity || 1);
  }, 0);

  const formatPrice = (val) => `Rs. ${val.toLocaleString('en-US')}.00`;

  return (
    <div className="fixed inset-0 z-50 font-poppins">
      
      {/* BACKDROP OVERLAY */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* SLIDE-OVER DRAWER */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10">
        
        {/* HEADER */}
        <div className="flex justify-between items-center pb-6 border-b border-[#D9D9D9]">
          <h2 className="text-2xl font-semibold text-black">
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-[#9F9F9F] hover:text-black transition cursor-pointer"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* ITEMS LIST / EMPTY STATE */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 pr-1">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const itemImg = item.image || item.thumbnail || FALLBACK_IMAGE;
              const itemPrice = typeof item.price === 'number' ? item.price : 250000;

              return (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  {/* Thumbnail */}
                  <div className="w-[85px] h-[85px] bg-[#F9F1E7] rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                    <img
                      src={itemImg}
                      alt={item.title || item.name}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                    />
                  </div>

                  {/* Title & Quantity */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-black mb-1 truncate">
                      {item.title || item.name}
                    </h3>
                    <p className="text-sm font-medium flex items-center gap-2 mb-1">
                      <span className="text-[#B88E2F] font-semibold">
                        {formatPrice(itemPrice)}
                      </span>
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center font-bold text-black hover:bg-gray-100 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-semibold px-2 text-sm">{item.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center font-bold text-black hover:bg-gray-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-6 h-6 rounded-full bg-[#9F9F9F] text-white flex items-center justify-center text-xs hover:bg-red-500 transition flex-shrink-0 cursor-pointer"
                    aria-label="Remove item"
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag size={48} className="text-[#9F9F9F] mb-4 stroke-1" />
              <p className="text-lg font-medium text-black mb-2">Your cart is empty</p>
              <p className="text-sm text-[#9F9F9F] mb-6">Add products from our shop to view them here.</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="bg-[#B88E2F] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#a17b27] transition"
              >
                Explore Shop
              </Link>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="pt-6 border-t border-[#D9D9D9]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-base font-normal text-black">Subtotal</span>
            <span className="text-[#B88E2F] text-base font-semibold">
              {formatPrice(subtotal)}
            </span>
          </div>

          <hr className="border-[#D9D9D9] mb-6" />

          {/* Quick Route Links */}
          <div className="grid grid-cols-3 gap-2">
            <Link
              to="/cart"
              onClick={onClose}
              className="border border-black rounded-full py-2 px-2 text-xs text-center font-normal text-black hover:bg-black hover:text-white transition"
            >
              Cart
            </Link>
            <Link
              to="/checkout"
              onClick={onClose}
              className="border border-black rounded-full py-2 px-2 text-xs text-center font-normal text-black hover:bg-black hover:text-white transition"
            >
              Checkout
            </Link>
            <Link
              to="/comparison"
              onClick={onClose}
              className="border border-black rounded-full py-2 px-2 text-xs text-center font-normal text-black hover:bg-black hover:text-white transition"
            >
              Comparison
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}