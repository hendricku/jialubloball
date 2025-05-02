'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Give() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen">
      <div className="container-custom py-6">
        <Navbar />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Give Online
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Support our ministry through your generous giving. Your tithes and offerings help us continue spreading God&apos;s word.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
       
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/gcash.png"
                alt="GCash"
                width={160}
                height={50}
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">GCash Transfer</h3>
            <div className="flex justify-center mb-8">
              <div className="relative w-56 h-56 bg-white p-4 rounded-2xl shadow-inner">
                <Image
                  src="/qrcode.png"
                  alt="GCash QR Code"
                  fill
                  className="object-contain p-3"
                  style={{ filter: 'invert(1)' }}
                />
              </div>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-gray-600 font-medium">Scan QR code or send to:</p>
              <p className="text-blue-600 font-bold text-2xl tracking-wide">1234 5678 9012</p>
              <div className="text-gray-600">
                Account Name: <span className="font-semibold">Jesus Is Alive Church</span>
              </div>
            </div>
          </motion.div>

        
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2-2v16h14V4H5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8m-4-4h8" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Bank Transfer</h3>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-600 font-bold text-lg">BDO</span>
                  <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                  <span className="text-gray-500">San Fernando, La Union</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Account Number: <span className="font-semibold">1234 5678 9012</span></p>
                  <p className="text-gray-600">Account Name: <span className="font-semibold">Jesus Is Alive Church</span></p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-600 font-bold text-lg">BPI</span>
                  <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                  <span className="text-gray-500">San Fernando, La Union</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Account Number: <span className="font-semibold">1234 5678 9012</span></p>
                  <p className="text-gray-600">Account Name: <span className="font-semibold">Jesus Is Alive Church</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Important Note</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            After making your donation, please take a screenshot of your transaction and send it to our church office
            for proper recording and issuance of receipt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <a href="mailto:info@jiasanfernando.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@jiasanfernando.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:(123)456-7890" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (123) 456-7890
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}