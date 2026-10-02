import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Calendar, Tag } from 'lucide-react';
import FeaturesBanner from '../components/FeaturesBanner';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Blog Posts List matching 13027_2.png
  const posts = [
    {
      id: 1,
      title: 'Going all-in with millennial design',
      author: 'Admin',
      date: '14 Oct 2022',
      category: 'Wood',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&q=80',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.',
    },
    {
      id: 2,
      title: 'Exploring new ways of decorating',
      author: 'Admin',
      date: '14 Oct 2022',
      category: 'Handicraft',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&q=80',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.',
    },
    {
      id: 3,
      title: 'Handmade pieces that took time to make',
      author: 'Admin',
      date: '14 Oct 2022',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1000&q=80',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.',
    },
  ];

  // Categories Sidebar Data
  const categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 6 },
  ];

  // Recent Posts Sidebar Data
  const recentPosts = [
    {
      id: 1,
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&q=80',
    },
    {
      id: 2,
      title: 'Exploring new ways of decorating',
      date: '03 Aug 2022',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&q=80',
    },
    {
      id: 3,
      title: 'Handmade pieces that took time to make',
      date: '03 Aug 2022',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&q=80',
    },
    {
      id: 4,
      title: 'Modern home in Milan',
      date: '03 Aug 2022',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&q=80',
    },
    {
      id: 5,
      title: 'Colorful office redesign',
      date: '03 Aug 2022',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&q=80',
    },
  ];

  return (
    <div className="font-poppins text-black bg-white min-h-screen">
      
      {/* -------------------------------------------------------------
          1. HEADER BANNER
      ------------------------------------------------------------- */}
      <div className="bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')] bg-cover bg-center py-20 text-center relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-8 mb-2 flex items-center justify-center">
            <svg viewBox="0 0 50 32" className="w-8 h-8 fill-[#B88E2F]">
              <path d="M25 0L50 32H0L25 0Z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2 text-black">Blog</h1>
          <p className="text-sm font-medium">
            <Link to="/" className="font-bold text-black hover:text-[#B88E2F]">Home</Link>{' '}
            &gt; <span className="text-gray-600">Blog</span>
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. MAIN BLOG LAYOUT (LEFT ARTICLES + RIGHT SIDEBAR)
      ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: ARTICLES LIST */}
          <div className="lg:col-span-8 space-y-16">
            {posts.map((post) => (
              <article key={post.id} className="group">
                {/* Featured Image */}
                <div className="overflow-hidden rounded-xl mb-4 bg-[#F9F1E7]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[500px] object-cover rounded-xl group-hover:scale-102 transition duration-500"
                  />
                </div>

                {/* Meta Information (Author, Date, Category) */}
                <div className="flex flex-wrap items-center gap-6 text-[#9F9F9F] text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-[#9F9F9F]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-[#9F9F9F]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={18} className="text-[#9F9F9F]" />
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <Link
                  to="#"
                  className="inline-block text-black text-base font-normal border-b-2 border-black pb-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition"
                >
                  Read more
                </Link>
              </article>
            ))}

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-8 pt-10">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`w-14 h-14 rounded-lg font-medium text-xl transition-all ${
                    currentPage === page
                      ? 'bg-[#B88E2F] text-white shadow-md'
                      : 'bg-[#FAF3EA] text-black hover:bg-[#B88E2F] hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => {
                  if (currentPage < 3) {
                    setCurrentPage(currentPage + 1);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === 3}
                className="px-8 h-14 rounded-lg font-medium text-xl bg-[#FAF3EA] text-black hover:bg-[#B88E2F] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <div className="lg:col-span-4 space-y-12 pl-0 lg:pl-6">
            
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-[#9F9F9F] rounded-lg p-3.5 pr-12 focus:outline-none focus:border-[#B88E2F]"
              />
              <Search
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black cursor-pointer"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8">Categories</h3>
              <div className="space-y-6">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[#9F9F9F] text-base cursor-pointer hover:text-black transition">
                    <span>{cat.name}</span>
                    <span>{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#F9F1E7]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-black group-hover:text-[#B88E2F] transition leading-snug mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-xs text-[#9F9F9F]">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------
          3. FEATURES BANNER
      ------------------------------------------------------------- */}
      <FeaturesBanner />
    </div>
  );
}