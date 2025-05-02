'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { churchVideos } from '@/data/churchVideos';

export default function MediaGallery() {
  return (
    <main className="min-h-screen py-6 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="container-custom">
        <Navbar />
        
        {/* Main Highlight Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl font-serif font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-900">
            Church Highlights
          </h1>
          
          <div className="max-w-[1280px] mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-white"
            >
              <div className="aspect-video w-full">
                <video 
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="/videos/jiacsflu-thumbnail.jpg"
                >
                  <source src="/videos/jiacsflu.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-8 bg-gradient-to-r from-amber-50 to-white">
                <h2 className="text-4xl font-serif text-amber-900 mb-4">
                  JIA CSFLU PRESENTS: MAGA-ALAB PARIN SA 2025
                </h2>
                <p className="text-2xl text-gray-600 font-serif">
                  Worship highlights from our church community
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {churchVideos.slice(1).map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-xl overflow-hidden shadow-xl bg-white"
            >
              <div className="aspect-video">
                {!video.isYouTube ? (
                  <video 
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={video.embedUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={video.embedUrl}
                    width={video.width}
                    height={video.height}
                    style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif text-amber-900">{video.title}</h3>
                <p className="text-gray-600 mt-2">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}