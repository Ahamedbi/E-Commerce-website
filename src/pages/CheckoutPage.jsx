import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import FeaturesBanner from '../components/FeaturesBanner';

export default function CheckoutPage() {
  const shopContext = useShop();
  const cartItems = shopContext?.cartItems || [];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    townCity: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('directBank');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculatedSubtotal = cartItems.reduce((acc, item) => {
    const priceNum = typeof item.price === 'number' ? item.price : 250000;
    return acc + priceNum * (item.quantity || 1);
  }, 0);

  const finalTotal = calculatedSubtotal > 0 ? calculatedSubtotal : 250000;

  const formatPrice = (val) => `Rs. ${val.toLocaleString('en-US')}.00`;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Thank you! Your order has been placed successfully.');
  };

  // Reusable style string to enforce white inputs across all browsers and autofill states
  const inputStyleClass =
    'w-full bg-white !bg-white text-black !text-black border border-[#9F9F9F] rounded-lg p-3.5 focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] appearance-none';

  return (
    <div className="font-poppins text-black bg-white min-h-screen">
      
      {/* CSS Override to stop Browser Autofill from making input backgrounds black/gray */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        select:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-text-fill-color: #000000 !important;
          -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>

      {/* HEADER BANNER */}
      <div className="bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')] bg-cover bg-center py-20 text-center relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-8 mb-2 flex items-center justify-center">
            <svg viewBox="0 0 50 32" className="w-8 h-8 fill-[#B88E2F]">
              <path d="M25 0L50 32H0L25 0Z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">Checkout</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">Checkout</span>
          </p>
        </div>
      </div>

      {/* CHECKOUT FORM */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: BILLING DETAILS */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-semibold text-black mb-8">Billing details</h2>

            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={{ colorScheme: 'light' }}
                  className={inputStyleClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={{ colorScheme: 'light' }}
                  className={inputStyleClass}
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Company Name (Optional)</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Country / Region</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              >
                <option value="Sri Lanka" className="bg-white text-black">Sri Lanka</option>
                <option value="Indonesia" className="bg-white text-black">Indonesia</option>
                <option value="United States" className="bg-white text-black">United States</option>
              </select>
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Street address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              />
            </div>

            {/* Town / City */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Town / City</label>
              <input
                type="text"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                required
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              />
            </div>

            {/* Province */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              >
                <option value="Western Province" className="bg-white text-black">Western Province</option>
                <option value="Central Province" className="bg-white text-black">Central Province</option>
                <option value="Southern Province" className="bg-white text-black">Southern Province</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">ZIP code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ colorScheme: 'light' }}
                className={inputStyleClass}
              />
            </div>

            {/* Additional Info */}
            <div>
              <input
                type="text"
                name="additionalInfo"
                placeholder="Additional information"
                value={formData.additionalInfo}
                onChange={handleChange}
                style={{ colorScheme: 'light' }}
                className={`${inputStyleClass} placeholder-gray-400`}
              />
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="lg:col-span-5 pt-4">
            <div className="pb-6 border-b border-[#D9D9D9] mb-6">
              <div className="flex justify-between items-center text-2xl font-medium text-black mb-6">
                <span>Product</span>
                <span>Subtotal</span>
              </div>

              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm mb-4">
                    <span className="text-[#9F9F9F]">
                      {item.title || item.name} <strong className="text-black font-medium">x {item.quantity || 1}</strong>
                    </span>
                    <span className="font-light text-black">
                      {formatPrice((typeof item.price === 'number' ? item.price : 250000) * (item.quantity || 1))}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-[#9F9F9F]">
                    Asgaard sofa <strong className="text-black font-medium">x 1</strong>
                  </span>
                  <span className="font-light text-black">Rs. 250,000.00</span>
                </div>
              )}

              <div className="flex justify-between items-center text-sm mb-4">
                <span className="text-black font-medium">Subtotal</span>
                <span className="font-light text-black">{formatPrice(finalTotal)}</span>
              </div>

              <div className="flex justify-between items-center text-sm pt-2">
                <span className="text-black font-medium">Total</span>
                <span className="text-2xl font-bold text-[#B88E2F]">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Payment Radios */}
            <div className="space-y-4 mb-6 text-sm">
              <div>
                <label className="flex items-center gap-3 cursor-pointer font-medium text-black mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value="directBank"
                    checked={paymentMethod === 'directBank'}
                    onChange={() => setPaymentMethod('directBank')}
                    className="accent-[#B88E2F] w-4 h-4 cursor-pointer"
                  />
                  <span>Direct Bank Transfer</span>
                </label>
                {paymentMethod === 'directBank' && (
                  <p className="text-[#9F9F9F] font-light leading-relaxed pl-7">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer text-[#9F9F9F] hover:text-black">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-[#B88E2F] w-4 h-4 cursor-pointer"
                  />
                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full border border-black rounded-2xl py-4 font-normal text-black text-xl hover:bg-black hover:text-white transition cursor-pointer"
            >
              Place order
            </button>
          </div>

        </form>
      </div>

      <FeaturesBanner />
    </div>
  );
}