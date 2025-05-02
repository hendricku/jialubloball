'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="flex justify-between items-center mb-24 relative"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="w-10 h-10 relative group">
        <Image
          src="/jialogo.png"
          alt="Jesus Is Alive Logo"
          width={40}
          height={40}
          className="w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">Home</Link>
        <Link href="/churches" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">Churches</Link>
        <Link href="/about" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">About</Link>
        <Link href="/contact" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">Contact</Link>
        <Link href="/give" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">Tithes</Link>
        <Link href="/testimony" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">Testimony</Link>
        <Link href="/media-gallery" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">Highlights</Link>
        <Link href="/announcements" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full">Announcements</Link>
      
      </div>

      {/* Mobile Burger Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-300"
      >
        <motion.svg
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </motion.svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl md:hidden z-50"
            >
              <div className="p-5 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* Mobile Menu Links */}
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/churches" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Churches
                  </Link>
                
                  <Link 
                    href="/about" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/give" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Tithes
                  </Link>
                  <Link 
                    href="/testimony" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Testimony
                  </Link>
                  <Link 
                    href="/announcements" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Announcements
                  </Link>
                  <Link 
                    href="/media-gallery" 
                    className="px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Highlights
                  </Link>
                </div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}