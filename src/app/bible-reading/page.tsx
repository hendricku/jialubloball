'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import toast, { Toaster } from 'react-hot-toast';

export default function BibleReading() {
  const [selectedMonth, setSelectedMonth] = useState('april');
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Verse copied!', {
      duration: 1500,
      position: 'bottom-center',
      style: {
        background: '#fef3c7',
        color: '#92400e',
        border: '1px solid #d97706',
      },
      icon: '📖',
    });
  };

  const aprilReadings = [
    { day: 1, morning: 'Luke 6:27-49', evening: 'Judges 13,14,15' },
    { day: 2, morning: '7:1-30', evening: '16,17,18' },
    { day: 3, morning: '7:31-50', evening: '19,20,21' },
    { day: 4, morning: '8:1-25', evening: 'Ruth 1,2,3,4' },
    { day: 5, morning: '8:26-56', evening: '1 Samuel 1,2,3' },
    { day: 6, morning: '9:1-17', evening: '4,5,6' },
    { day: 7, morning: '9:18-36', evening: '7,8,9' },
    { day: 8, morning: '9:37-62', evening: '10,11,12' },
    { day: 9, morning: '10:1-24', evening: '13,14' },
    { day: 10, morning: '10:25-42', evening: '15,16' },
    { day: 11, morning: '11:1-28', evening: '17,18' },
    { day: 12, morning: '11:29-54', evening: '19,20,21' },
    { day: 13, morning: '12:1-31', evening: '22,23,24' },
    { day: 14, morning: '12:32-59', evening: '25,26' },
    { day: 15, morning: '13:1-22', evening: '27,28,29' },
    { day: 16, morning: '13:23-35', evening: '30,31' },
    { day: 17, morning: '14:1-24', evening: '2 Samuel 1,2' },
    { day: 18, morning: '14:25-35', evening: '3,4,5' },
    { day: 19, morning: '15:1-10', evening: '6,7,8' },
    { day: 20, morning: '15:11-32', evening: '9,10,11' },
    { day: 21, morning: '16', evening: '12,13' },
    { day: 22, morning: '17:1-19', evening: '14,15' },
    { day: 23, morning: '17:20-37', evening: '16,17,18' },
    { day: 24, morning: '18:1-23', evening: '19,20' },
    { day: 25, morning: '18:24-43', evening: '21,22' },
    { day: 26, morning: '19:1-27', evening: '23,24' },
    { day: 27, morning: '19:28-48', evening: '1 Kings 1,2' },
    { day: 28, morning: '20:1-25', evening: '3,4,5' },
    { day: 29, morning: '20:26-47', evening: '6,7' },
    { day: 30, morning: '21:1-19', evening: '8,9' }
  ];

  const mayReadings = [
    { day: 1, morning: 'Luke 21:20-38', evening: '1 Kings 10,11' },
    { day: 2, morning: '22:1-20', evening: '12,13' },
    { day: 3, morning: '22:21-46', evening: '14,15' },
    { day: 4, morning: '22:47-71', evening: '16,17,18' },
    { day: 5, morning: '23:1-35', evening: '19,20' },
    { day: 6, morning: '23:36-56', evening: '21,22' },
    { day: 7, morning: '24:1-35', evening: '2 Kings 1,2,3' },
    { day: 8, morning: '24:36-53', evening: '4,5,6' },
    { day: 9, morning: 'John 1:1-28', evening: '7,8,9' },
    { day: 10, morning: '1:29-51', evening: '10,11,12' },
    { day: 11, morning: '2', evening: '13,14' },
    { day: 12, morning: '3:1-18', evening: '15,16' },
    { day: 13, morning: '3:19-36', evening: '17,18' },
    { day: 14, morning: '4:1-30', evening: '19,20,21' },
    { day: 15, morning: '4:31-54', evening: '22,23' },
    { day: 16, morning: '5:1-24', evening: '24,25' },
    { day: 17, morning: '5:25-47', evening: '1 Chronicles 1,2,3' },
    { day: 18, morning: '6:1-21', evening: '4,5,6' },
    { day: 19, morning: '6:22-44', evening: '7,8,9' },
    { day: 20, morning: '6:45-71', evening: '10,11,12' },
    { day: 21, morning: '7:1-27', evening: '13,14,15' },
    { day: 22, morning: '7:28-53', evening: '16,17,18' },
    { day: 23, morning: '8:1-27', evening: '19,20,21' },
    { day: 24, morning: '8:28-59', evening: '22,23,24' },
    { day: 25, morning: '9:1-23', evening: '25,26,27' },
    { day: 26, morning: '9:24-41', evening: '28,29' },
    { day: 27, morning: '10:1-23', evening: '2 Chronicles 1,2,3' },
    { day: 28, morning: '10:24-42', evening: '4,5,6' },
    { day: 29, morning: '11:1-29', evening: '7,8,9' },
    { day: 30, morning: '11:30-57', evening: '10,11,12' },
    { day: 31, morning: '12:1-26', evening: '13,14' }
  ];
  
  const januaryReadings = [
      { day: 1, morning: 'Matthew 1', evening: 'Genesis 1,2,3' },
      { day: 2, morning: '2', evening: '4,5,6' },
      { day: 3, morning: '3', evening: '7,8,9' },
      { day: 4, morning: '4', evening: '10,11,12' },
      { day: 5, morning: '5:1-26', evening: '13,14,15' },
      { day: 6, morning: '5:27-48', evening: '16,17' },
      { day: 7, morning: '6:1-18', evening: '18,19' },
      { day: 8, morning: '6:19-34', evening: '20,21,22' },
      { day: 9, morning: '7', evening: '23,24' },
      { day: 10, morning: '8:1-17', evening: '25,26' },
      { day: 11, morning: '8:18-34', evening: '27,28' },
      { day: 12, morning: '9:1-17', evening: '29,30' },
      { day: 13, morning: '9:18-38', evening: '31,32' },
      { day: 14, morning: '10:1-20', evening: '33,34,35' },
      { day: 15, morning: '10:21-42', evening: '36,37,38' },
      { day: 16, morning: '11', evening: '39,40' },
      { day: 17, morning: '12:1-23', evening: '41,42' },
      { day: 18, morning: '12:24-50', evening: '43,44,45' },
      { day: 19, morning: '13:1-30', evening: '46,47,48' },
      { day: 20, morning: '13:31-58', evening: '49,50' },
      { day: 21, morning: '14:1-21', evening: 'Exodus 1,2,3' },
      { day: 22, morning: '14:22-36', evening: '4,5,6' },
      { day: 23, morning: '15:1-20', evening: '7,8' },
      { day: 24, morning: '15:21-39', evening: '9,10,11' },
      { day: 25, morning: '16', evening: '12,13' },
      { day: 26, morning: '17', evening: '14,15' },
      { day: 27, morning: '18:1-20', evening: '16,17,18' },
      { day: 28, morning: '18:21-35', evening: '19,20' },
      { day: 29, morning: '19', evening: '21,22' },
      { day: 30, morning: '20:1-16', evening: '23,24' },
      { day: 31, morning: '20:17-34', evening: '25,26' }
    ];
  
  const februaryReadings = [
      { day: 1, morning: 'Matthew 21:1-22', evening: 'Exodus 27,28' },
      { day: 2, morning: '21:23-46', evening: '29,30' },
      { day: 3, morning: '22:1-22', evening: '31,32,33' },
      { day: 4, morning: '22:23-46', evening: '34,35' },
      { day: 5, morning: '23:1-22', evening: '36,37,38' },
      { day: 6, morning: '23:23-39', evening: '39,40' },
      { day: 7, morning: '24:1-28', evening: 'Leviticus 1,2,3' },
      { day: 8, morning: '24:29-51', evening: '4,5' },
      { day: 9, morning: '25:1-30', evening: '6,7' },
      { day: 10, morning: '25:31-46', evening: '8,9,10' },
      { day: 11, morning: '26:1-25', evening: '11,12' },
      { day: 12, morning: '26:26-50', evening: '13,14' },
      { day: 13, morning: '26:51-75', evening: '15,16' },
      { day: 14, morning: '27:1-26', evening: '19,20' },
      { day: 15, morning: '27:27-50', evening: '19,20' },
      { day: 16, morning: '27:51-66', evening: '21,22' },
      { day: 17, morning: '28', evening: '23,24' },
      { day: 18, morning: 'Mark 1:1-22', evening: '25,26' },
      { day: 19, morning: '1:23-45', evening: '27' },
      { day: 20, morning: '2', evening: 'Numbers 1,2' },
      { day: 21, morning: '3:1-19', evening: '3,4' },
      { day: 22, morning: '3:20-35', evening: '5,6' },
      { day: 23, morning: '4:1-20', evening: '7,8' },
      { day: 24, morning: '4:21-41', evening: '9,10,11' },
      { day: 25, morning: '5:1-20', evening: '12,13,14' },
      { day: 26, morning: '5:21-43', evening: '15,16' },
      { day: 27, morning: '6:1-29', evening: '17,18,19' },
      { day: 28, morning: '6:30-56', evening: '20,21' }
    ];
  
  const marchReadings = [
      { day: 1, morning: 'Mark 7:1-37', evening: 'Numbers 22,23,24' },
      { day: 2, morning: '8:1-21', evening: '25,26,27' },
      { day: 3, morning: '8:22-38', evening: '28,29,30' },
      { day: 4, morning: '9:1-29', evening: '31,32,33' },
      { day: 5, morning: '9:30-50', evening: '34,35,36' },
      { day: 6, morning: '10:1-31', evening: 'Deuteronomy 1,2' },
      { day: 7, morning: '10:32-52', evening: '3,4' },
      { day: 8, morning: '11:1-18', evening: '5,6,7' },
      { day: 9, morning: '11:19-33', evening: '8,9,10' },
      { day: 10, morning: '12:1-27', evening: '11,12,13' },
      { day: 11, morning: '12:28-44', evening: '14,15,16' },
      { day: 12, morning: '13:1-20', evening: '17,18,19' },
      { day: 13, morning: '13:21-37', evening: '20,21,22' },
      { day: 14, morning: '14:1-26', evening: '23,24,25' },
      { day: 15, morning: '14:27-53', evening: '26,27' },
      { day: 16, morning: '14:54-72', evening: '28,29' },
      { day: 17, morning: '15:1-25', evening: '30,31' },
      { day: 18, morning: '15:26-47', evening: '32,33,34' },
      { day: 19, morning: '16', evening: 'Joshua 1,2,3' },
      { day: 20, morning: 'Luke 1:1-20', evening: '4,5,6' },
      { day: 21, morning: '1:21-38', evening: '7,8,9' },
      { day: 22, morning: '1:39-56', evening: '10,11,12' },
      { day: 23, morning: '1:57-80', evening: '13,14,15' },
      { day: 24, morning: '2:1-24', evening: '16,17,18' },
      { day: 25, morning: '2:25-52', evening: '19,20,21' },
      { day: 26, morning: '3', evening: '22,23,24' },
      { day: 27, morning: '4:1-20', evening: 'Judges 1,2,3' },
      { day: 28, morning: '4:21-44', evening: '4,5,6' },
      { day: 29, morning: '5:1-16', evening: '7,8' },
      { day: 30, morning: '5:17-39', evening: '9,10' },
      { day: 31, morning: '6:1-26', evening: '11,12' }
    ];
  
  return (
    <main className="min-h-screen py-6 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="container-custom">
        <Navbar />
        <Toaster />  
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-serif font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-900">
            Daily Bible Reading
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto italic font-serif mb-8">
            &ldquo;Man shall not live on bread alone, but on every Word that comes from the mouth of God.&rdquo; - Matthew 4:4
          </p>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['january', 'february', 'march', 'april', 'may'].map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-6 py-3 rounded-lg font-serif text-lg transition-all ${
                  selectedMonth === month
                    ? 'bg-amber-800 text-white shadow-lg'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={selectedMonth}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative book-container">
            
            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-900 transform -skew-x-2 rounded-lg shadow-2xl"></div>
            
           
            <div className="relative bg-[#fff8e7] rounded-lg p-12 shadow-inner border-b border-amber-200 min-h-[800px]">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                  {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)} 2025
                </h2>
                <div className="w-32 h-1 bg-amber-700 mx-auto rounded-full opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-inner border border-amber-100">
                  <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6 text-center">Morning Reading</h3>
                  <div className="space-y-4">
                    {aprilReadings.map((reading) => (
                      <div 
                        key={`morning-${reading.day}`} 
                        className="flex items-center gap-4 p-3 hover:bg-amber-50 rounded-lg transition-colors group relative"
                      >
                        <span className="font-serif text-2xl text-amber-700 font-bold min-w-[2ch]">
                          {reading.day}
                        </span>
                        <span className="text-gray-700 font-serif flex-grow">
                          {reading.morning}
                        </span>
                        <button
                          onClick={() => handleCopy(reading.morning)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-3 text-amber-600 hover:text-amber-800"
                          title="Copy verse"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-inner border border-amber-100">
                  <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6 text-center">Evening Reading</h3>
                  <div className="space-y-4">
                    {aprilReadings.map((reading) => (
                      <div 
                        key={`evening-${reading.day}`} 
                        className="flex items-center gap-4 p-3 hover:bg-amber-50 rounded-lg transition-colors group relative"
                      >
                        <span className="font-serif text-2xl text-amber-700 font-bold min-w-[2ch]">
                          {reading.day}
                        </span>
                        <span className="text-gray-700 font-serif flex-grow">
                          {reading.evening}
                        </span>
                        <button
                          onClick={() => handleCopy(reading.evening)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-3 text-amber-600 hover:text-amber-800"
                          title="Copy verse"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-300 opacity-50"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-300 opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-300 opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-300 opacity-50"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};