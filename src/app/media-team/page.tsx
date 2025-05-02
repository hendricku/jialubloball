'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { mediaTeamMembers } from '@/data/mediaTeamMembers';

export default function MediaTeamPage() {
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
        className="py-24 bg-gradient-to-r from-blue-50 to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container-custom">
          <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Media Ministry
          </h1>
          
          {/* Update text with proper apostrophes */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 leading-relaxed">
              Our Media Ministry team serves through technology and creativity, 
              enhancing worship experiences and spreading God&apos;s message digitally.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Purpose</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="font-semibold mb-2">Technical Excellence</h3>
                <p className="text-gray-600">Delivering high-quality audio-visual experiences</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-semibold mb-2">Creative Ministry</h3>
                <p className="text-gray-600">Using design to communicate God&apos;s message</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="font-semibold mb-2">Digital Outreach</h3>
                <p className="text-gray-600">Extending our reach through online platforms</p>
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
            {mediaTeamMembers.map((member, index) => (
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
                      <p className="text-sm text-blue-600">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flip-card-back">
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
      <motion.section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you passionate about technology and creativity? We&apos;d love to have you 
            join our Media Ministry team!
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Get Involved →
          </button>
        </div>
      </motion.section>

      {/* Equipment Section */}
      <motion.section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Our Equipment</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We use professional-grade equipment to ensure the highest quality 
            production for both in-person and online experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="font-semibold">Cameras</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎚️</div>
              <h3 className="font-semibold">Audio Console</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-semibold">Computers</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="font-semibold">Displays</h3>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}