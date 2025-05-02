'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FlipCardProps {
  name: string;
  role: string;
  description: string;
}

export default function FlipCard({ name, role, description }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Get initials for the avatar
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg h-full flex flex-col items-center justify-center border border-gray-100">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">{initials}</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">{name}</h3>
            <p className="text-[#7C9B7C] font-medium text-xl">{role}</p>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg h-full flex flex-col justify-center border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
            <button className="mt-6 text-[#7C9B7C] hover:text-[#94AF94] font-medium">
              Learn More →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}