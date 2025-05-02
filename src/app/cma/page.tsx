'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { cmaMembers } from '@/data/cmaMembers';

export default function CMAPage() {
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
      
  
      <motion.section
        className="py-24 bg-gradient-to-r from-blue-50 to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container-custom">
          <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Christian Minstrels & Artists
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 leading-relaxed">
              Our Christian Minstrels &amp; Artists (CMA) team is dedicated to creating an atmosphere of worship 
              where people can encounter God&apos;s presence through music and creative expression.
            </p>
          </div>
        </div>
      </motion.section>

   
      <motion.section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cmaMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative h-[220px] cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className={`
                  w-full h-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] 
                  ${flippedCards.includes(index) ? '[transform:rotateY(180deg)]' : ''}
                `}>
                  {/* Front of card */}
                  <div className="absolute inset-0 bg-white shadow-lg rounded-xl p-6 [backface-visibility:hidden]">
                    <div className="flex flex-col justify-center h-full text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg rounded-xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col justify-center h-full text-center">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

 
      <motion.section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you passionate about worship and have musical talents to share? 
            We&apos;d love to have you join our CMA family!
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Get Involved →
          </button>
        </div>
      </motion.section>
    </main>
  );
}