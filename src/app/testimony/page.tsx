'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { testimonies } from '@/data/testimonies';
import ShareTestimonyModal from '@/components/ShareTestimonyModal';

export default function TestimonyPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const categories = ['All', 'Spiritual Growth', 'Faith', 'Ministry'];

  const filteredTestimonies = selectedCategory === 'All' 
    ? testimonies 
    : testimonies.filter(t => t.category === selectedCategory);

  return (
    <main className="container-custom min-h-screen py-6">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="py-24 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container-custom text-center">
          <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Testimonies of Faith
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read inspiring stories of God&apos;s faithfulness in the lives of our church members.
            These testimonies remind us that our God is still working miracles today.
          </p>
        </div>
      </motion.section>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 my-12 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-blue-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Testimonies Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12"
        layout
      >
        {filteredTestimonies.map((testimony) => (
          <motion.div
            key={testimony.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">
                  {testimony.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{testimony.name}</h3>
                <p className="text-sm text-gray-500">{testimony.date}</p>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4 text-blue-600">{testimony.title}</h2>
            <p className="text-gray-600 leading-relaxed">{testimony.testimony}</p>
            <div className="mt-6">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                {testimony.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Share Testimony Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Share Your Story</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Has God done something amazing in your life? Share your testimony to encourage others 
          and glorify His name.
        </p>
        <button 
          onClick={() => setIsShareModalOpen(true)}
          className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Share Your Testimony →
        </button>
      </section>

      <ShareTestimonyModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </main>
  );
}