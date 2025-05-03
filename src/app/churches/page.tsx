'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import ChurchMap from '@/components/ChurchMap';

interface Church {
  name: string;
  image: string;
  address: string;
  schedule: string;
  pastor: string;
  contact: string;
  description: string;
  mapUrl: string;
}

export default function Churches() {
  const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);

  const churches: Church[] = [
    { 
      name: 'JIA San Fernando City', 
      image: '/jiasfc.jpg',
      address: 'GSMA Building, MacArthur Highway, San Fernando, La Union',
      schedule: 'Sunday Services: 8:00 AM - 10:00 AM, 10:00 AM - 11:30 AM',
      pastor: 'Rev. Gary Ariz',
      contact: '+123 456 7890',
      description: 'Our main church in San Fernando City, serving as a beacon of hope and transformation in the heart of La Union.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.94957162310715!2d120.3138280769856!3d16.61707288422635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33918e6a050acf51%3A0xd644eb99507ec33b!2sGSMA%20BUILDING!5e0!3m2!1sen!2sph!4v1744688998908!5m2!1sen!2sph'
    },
    { 
      name: 'JIA Bauang', 
      image: '/bauang.jpg',
      address: 'National Highway, Bauang, La Union',
      schedule: 'Sunday Services: 9:00 AM - 11:00 AM',
      pastor: 'Pastor James Smith',
      contact: '+123 456 7891',
      description: 'A vibrant community of believers in Bauang, focused on family ministry and youth development.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.950786439273!2d120.33170299999999!3d16.528582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391854f4f2d54c5%3A0xf168092046dcea8e!2sJesus%20is%20Alive%20Bauang!5e0!3m2!1sen!2sph!4v1744797861363!5m2!1sen!2sph'
    },
    { 
      name: 'JIA Bangar', 
      image: '/bangar.jpg',
      address: 'Municipal Road, Bangar, La Union',
      schedule: 'Sunday Services: 8:30 AM - 10:30 AM',
      pastor: 'Pastor Michael Brown',
      contact: '+123 456 7892',
      description: 'Serving the community of Bangar with a focus on prayer and discipleship.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244513.06000295767!2d120.20325277358957!3d16.75095648019524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e5ddf0d3660d%3A0x1b8a73ce4209b93f!2sReyna%20Regente%2C%20Bangar%2C%20La%20Union!5e0!3m2!1sen!2sph!4v1744802348856!5m2!1sen!2sph'
    },
    { 
      name: 'JIA Agoo', 
      image: '/jiaagoo.png',
      address: 'Town Center, Agoo, La Union',
      schedule: 'Sunday Services: 9:30 AM - 11:30 AM',
      pastor: 'Pastor Don Cobrado',
      contact: '09561368231 || 09156450178',
      description: 'A growing church community in Agoo dedicated to spreading the Gospel and serving the local community.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.9747534937537!2d120.36688849999999!3d16.3242342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339177da74d078f3%3A0x36cb245673d4024d!2sJESUS%20IS%20ALIVE%20COMMUNITY-AGOO!5e0!3m2!1sen!2sph!4v1744802707762!5m2!1sen!2sph'
    },
    { 
      name: 'JIA Pangasinan', 
      image: '/jiapangasinan.jpg',
      address: 'Provincial Road, Pangasinan',
      schedule: 'Sunday Services: 8:00 AM - 10:00 AM',
      pastor: 'Pastor Robert Lee',
      contact: '+123 456 7894',
      description: 'Extending our ministry to Pangasinan, bringing hope and transformation to the community.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1046076437847!2d120.32859631478428!3d16.53944988860754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a4e4b4e4e4e5%3A0x9b9b9b9b9b9b9b9b!2sPangasinan!5e0!3m2!1sen!2sph!4v1621234567890!5m2!1sen!2sph'
    },
    { 
      name: 'JIA Bacnotan', 
      image: '/jiabacnotan.jpg',
      address: 'Main Street, Bacnotan, La Union',
      schedule: 'Sunday Services: 9:30 AM - 11:30 AM',
      pastor: 'Pastor William Taylor',
      contact: '+123 456 7895',
      description: 'A welcoming church family in Bacnotan focused on community outreach and spiritual growth.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1046076437847!2d120.32859631478428!3d16.53944988860754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a4e4b4e4e4e5%3A0x9b9b9b9b9b9b9b9b!2sBacnotan%2C%20La%20Union!5e0!3m2!1sen!2sph!4v1621234567890!5m2!1sen!2sph'
    },
    { 
      name: 'JIA Guinabang', 
      image: '/jiaguinabang.jpg',
      address: 'Guinabang, La Union',
      schedule: 'Sunday Services: 9:30 AM - 11:30 AM',
      pastor: 'Pastora Mary Grace Azcuna',
      contact: '+123 456 7896',
      description: 'Serving the Guinabang community with love and dedication to Christ.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.3106189404125!2d120.40045579999999!3d16.761214799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ec4fedf4591d%3A0xa6d814f183201be9!2sJesus%20is%20Alive%20Guinabang!5e0!3m2!1sen!2sph!4v1744801585137!5m2!1sen!2sph'
    },
    { 
      name: 'JIA Paraoir', 
      image: '/jiaparaoir.jpg',
      address: 'Paroir, La Union',
      schedule: 'Sunday Services: 9:00 AM - 11:00 AM',
      pastor: 'Pastor Samuel Garcia',
      contact: '+123 456 7897',
      description: 'A growing church in Paroir committed to spreading the Gospel and building strong families.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1046076437847!2d120.32859631478428!3d16.53944988860754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a4e4b4e4e4e5%3A0x9b9b9b9b9b9b9b9b!2sParoir%2C%20La%20Union!5e0!3m2!1sen!2sph!4v1621234567890!5m2!1sen!2sph'
    }
  ];

  return (
    <main className="min-h-screen py-6 bg-gray-50">
      <div className="container-custom">
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Our Church Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in worship at any of our locations across La Union and beyond. 
            Each church carries the same vision of transforming lives through Christ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {churches.map((church, index) => (
            <motion.div
              key={church.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedChurch(church)}
            >
              <div className="relative h-56">
                <Image
                  src={church.image}
                  alt={church.name}
                  fill
                  className="object-cover"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {church.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{church.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {church.address}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedChurch && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 z-40"
                onClick={() => setSelectedChurch(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-2xl p-6 z-50"
              >
                <button
                  onClick={() => setSelectedChurch(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                      <Image
                        src={selectedChurch.image}
                        alt={selectedChurch.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{selectedChurch.name}</h2>
                    <p className="text-gray-600 mb-6">{selectedChurch.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>{selectedChurch.schedule}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <p>{selectedChurch.address}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p>{selectedChurch.pastor}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p>{selectedChurch.contact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-full">
                    <div className="rounded-xl overflow-hidden h-full min-h-[300px]">
                      <iframe
                        src={selectedChurch.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  ); // Remove the extra map section and end the component properly
}
