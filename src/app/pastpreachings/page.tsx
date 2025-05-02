'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function PastPreachings() {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const sermons = [
    {
      title: "Jesus Is Alive & He's with us to the End of the Age",
      preacher: "Rev. Gary Ariz",
      date: "April 20, 2025",
      month: "april",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjiac.launion%2Fvideos%2F653935940759659%2F&show_text=false&width=560&t=0"
    },
    {
      title: "The Returning Home (The Journey of Consecration)",
      preacher: "Ptra. Marie Viray",
      date: "April 13, 2025",
      month: "april",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjiac.launion%2Fvideos%2F1023190293099154%2F&show_text=false&width=560&t=0"
    },
    {
      title: "Topic: The Jubilee Call (Consecration and freedom)",
      preacher: "Ptr. Arman Claveria",
      date: "April 6, 2025",
      month: "april",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjiac.launion%2Fvideos%2F1245467920504856%2F&show_text=false&width=560&t=0"
    },
    {
      title: "Help For Our Unbelief",
      preacher: "Ptr. Allan Capistrano",
      date: "March 30, 2025",
      month: "march",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjiac.launion%2Fvideos%2F679640914625711%2F&show_text=false&width=560&t=0"
    },
    {
      title: "Advancing Gods Kingdom With Purpose",
      preacher: "Ptra Rich Ariz",
      date: "March 23, 2025",
      month: "march",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjiac.launion%2Fvideos%2F560431536421531%2F&show_text=false&width=560&t=0"
    }
  ];

  const filteredSermons = selectedMonth === 'all' 
    ? sermons 
    : sermons.filter(sermon => sermon.month === selectedMonth);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container-custom py-12">
        <Navbar />
        
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Past Preachings
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Revisit our previous services and be blessed by the Word of God.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedMonth('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedMonth === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedMonth('april')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedMonth === 'april' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              April
            </button>
            <button
              onClick={() => setSelectedMonth('march')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedMonth === 'march' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              March
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-video bg-gray-200">
                <iframe 
                  src={sermon.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{sermon.date}</p>
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {sermon.title}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {sermon.preacher}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}