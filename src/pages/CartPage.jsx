import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import FeaturesBanner from '../components/FeaturesBanner';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80';

export default function CartPage() {
  const shopContext = useShop();
  const cartItems = shopContext?.cartItems || [];
  const removeFromCart = shopContext?.removeFromCart || (() => {});
  const updateQuantity = shopContext?.updateQuantity || (() => {});

  const subtotal = cartItems.reduce((acc, item) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 250000;
    return acc + itemPrice * (item.quantity || 1);
  }, 0);

  const formatPrice = (val) => `Rs. ${val.toLocaleString('en-US')}.00`;

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
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">Cart</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">Cart</span>
          </p>
        </div>
      </div>

      {/* CART CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: CART ITEMS TABLE */}
            <div className="lg:col-span-8 overflow-x-auto">
              <div className="bg-[#F9F1E7] py-4 px-6 rounded-md grid grid-cols-12 gap-4 text-center font-medium text-base text-black mb-6">
                <div className="col-span-4 text-left">Product</div>
                <div className="col-span-3">Price</div>
                <div className="col-span-2">Quantity</div>
                <div className="col-span-2">Subtotal</div>
                <div className="col-span-1"></div>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => {
                  const itemPrice = typeof item.price === 'number' ? item.price : 250000;
                  const itemQty = item.quantity || 1;
                  const itemSubtotal = itemPrice * itemQty;
                  const itemImg = item.image || item.thumbnail || FALLBACK_IMAGE;

                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 gap-4 items-center px-2 py-4 text-center text-[#9F9F9F] font-normal text-sm sm:text-base border-b border-gray-100"
                    >
                      <div className="col-span-4 flex items-center gap-4 text-left">
                        <div className="w-20 h-20 bg-[#F9F1E7] rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                          <img
                            src={itemImg}
                            alt={item.title || item.name}
                            className="w-full h-full object-cover rounded-md"
                            onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                          />
                        </div>
                        <span className="text-[#9F9F9F] font-medium truncate">
                          {item.title || item.name}
                        </span>
                      </div>

                      <div className="col-span-3 text-[#9F9F9F]">
                        {formatPrice(itemPrice)}
                      </div>

                      <div className="col-span-2 flex justify-center">
                        <input
                          type="number"
                          min="1"
                          value={itemQty}
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10);
                            if (!isNaN(val) && val > 0) {
                              updateQuantity(item.id, val);
                            }
                          }}
                          className="w-12 h-10 border border-[#9F9F9F] rounded text-center text-black font-medium text-sm focus:outline-none focus:border-[#B88E2F]"
                        />
                      </div>

                      <div className="col-span-2 text-black font-medium">
                        {formatPrice(itemSubtotal)}
                      </div>

                      <div className="col-span-1 flex justify-center">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#B88E2F] hover:text-red-500 transition p-1 cursor-pointer"
                          aria-label="Remove Item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: CART TOTALS BOX */}
            <div className="lg:col-span-4">
              <div className="bg-[#F9F1E7] rounded-md p-8 sm:p-12 text-center">
                <h2 className="text-3xl font-semibold text-black mb-10">Cart Totals</h2>

                <div className="flex justify-between items-center text-base mb-6 px-4">
                  <span className="font-medium text-black">Subtotal</span>
                  <span className="text-[#9F9F9F] font-normal">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between items-center text-base mb-10 px-4">
                  <span className="font-medium text-black">Total</span>
                  <span className="text-xl font-semibold text-[#B88E2F]">{formatPrice(subtotal)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="border border-black rounded-2xl px-12 py-3.5 text-xl text-black font-normal hover:bg-black hover:text-white transition inline-block shadow-xs"
                >
                  Check Out
                </Link>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-20 bg-[#F9F1E7] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#B88E2F] shadow-xs">
              <ShoppingBag size={32} />
            </div>
            <h2 className="text-3xl font-bold text-black mb-3">Your Cart is Empty</h2>
            <p className="text-[#9F9F9F] text-base mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/shop"
              className="bg-[#B88E2F] text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-[#a17b27] transition inline-block shadow-sm"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      <FeaturesBanner />
    </div>
  );
}