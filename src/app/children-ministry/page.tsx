'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { childrenMinistryMembers } from '@/data/childrenMinistryMembers'; // You'll need to create this data file

export default function ChildrenMinistryPage() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="container-custom min-h-screen py-6">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container-custom">

          <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-600">
            Children&apos;s Ministry
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 leading-relaxed">
              Our Children&apos;s Ministry team is dedicated to nurturing young hearts and minds,
              helping children grow in their relationship with God through fun and engaging activities.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="font-semibold mb-2">Age-Appropriate Learning</h3>
                <p className="text-gray-600">Teaching biblical truths in ways children understand</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-semibold mb-2">Safe Environment</h3>
                <p className="text-gray-600">Providing a secure and loving space for children</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-semibold mb-2">Fun Activities</h3>
                <p className="text-gray-600">Engaging programs that make learning exciting</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <motion.section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {childrenMinistryMembers.map((member, index) => (
              <div
                key={index}
                className={`flip-card cursor-pointer ${flippedCards.includes(index) ? 'flipped' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="flip-card-inner shadow-lg">
                  <div className="flip-card-front bg-white">
                    <div className="flex flex-col justify-center h-full text-center p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-green-600">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flip-card-back bg-white">
                    <div className="flex flex-col justify-center h-full text-center p-6">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <motion.section className="py-16 ">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate volunteers to help shape young lives!
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
            Get Involved →
          </button>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer various programs designed to meet children at their spiritual level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="font-semibold">Nursery</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">🧒</div>
              <h3 className="font-semibold">Sunday School</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold">Creative Arts</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">⛺</div>
              <h3 className="font-semibold">Vacation Bible School</h3>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}