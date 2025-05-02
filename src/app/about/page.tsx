'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import FlipCard from '@/components/FlipCard';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="container-custom min-h-screen py-6">
      <Navbar />

      <motion.div
        className="mt-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">About JIA San Fernando</h1>
          <p className="text-body max-w-2xl mx-auto mb-6">
            Transforming lives through Christ&apos;s love and building a community of believers.
          </p>
          
       
          <div className="mt-12 space-y-6 bg-white/50 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Battle Cry</h3>
            <p className="text-xl md:text-2xl font-semibold text-[#7C9B7C] leading-relaxed">
              &ldquo;Hand in Hand, Helping One Another for the Advancement of His Kingdom&rdquo;
            </p>
            <p className="text-xl md:text-2xl italic text-gray-600 leading-relaxed">
              &ldquo;Sama-sama, Tulong tulong sa Pagsulong sa Kaharian ng Diyos&rdquo;
            </p>
          </div>
        </div>
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="rounded-xl overflow-hidden aspect-[4/3] relative"
            variants={fadeIn}
          >
            <Image
              src="/image.png"
              alt="JIA San Fernando Church"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={fadeIn}
          >
            <h2 className="heading-lg">Our Story</h2>
            <p className="text-gray-600">
              Jesus Is Alive Church started with a vision to bring hope and transformation
              to the community of San Fernando. Through faithful service and dedication,
              we&apos;ve grown into a vibrant church family committed to sharing God&apos;s love.
            </p>
            <p className="text-gray-600">
              Today, we continue to expand our reach, touching lives and making disciples
              through various ministries and community outreach programs.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={fadeIn} 
        >
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              CHOSEN and APPOINTED to GO, and BEAR FRUIT that REMAINS
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• To ESTABLISH strong community cell churches</li>
              <li>• To TRAIN every member to become disciple and cell leader</li>
              <li>• To EQUIP every member for mission involvement</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Biblical Teaching</li>
              <li>• Spirit-led Worship</li>
              <li>• Discipleship</li>
              <li>• Community Service</li>
            </ul>
          </div>
        </motion.div>

        <motion.section 
          className="mb-16"
          variants={fadeIn}
        >
          <h2 className="heading-lg text-center mb-12">Church Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <FlipCard
              name="Lorem Ipsum"
              role="President"
              
              description="As the President of JIA San Fernando, Lorem ipsum leads with vision and dedication. With over 20 years of ministry experience, they have been instrumental in growing our community and establishing multiple outreach programs."
            />
            
            <FlipCard
              name="Lorem Ipsum"
              role="First Lady"
              
              description="Serving alongside the President, our First Lady has been pivotal in developing women's ministry and youth programs. Their passion for worship and teaching has inspired many in their spiritual journey."
            />
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <FlipCard
              name="Lorem Ipsum"
              role="Senior Pastor"
              
              description="With years of dedicated service, our Senior Pastor has been instrumental in leading our congregation with wisdom and compassion. Their teachings have touched countless lives and helped establish a strong spiritual foundation in our community."
            />

            <FlipCard
              name="Lorem Ipsum"
              role="Senior Pastor"
              
              description="Bringing years of pastoral experience and a heart for ministry, they have been vital in developing our church's vision and mission. Their leadership continues to inspire and guide our growing congregation."
            />
          </div>

        
          <h3 className="text-2xl font-semibold text-center mb-8">Associate Pastors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Lorem Ipsum",
                role: "Youth Ministry",
                image: "/image.png",
                description: "Leading our youth ministry with passion and dedication. Focused on nurturing the next generation of believers through engaging programs and mentorship."
              },
              { 
                name: "Lorem Ipsum",
                role: "Worship Ministry",
                image: "/image.png",
                description: "Guiding our worship team with excellence and spiritual sensitivity. Creating an atmosphere of genuine worship and praise."
              },
              { 
                name: "Lorem Ipsum",
                role: "Children's Ministry",
                image: "/image.png",
                description: "Dedicated to building a strong foundation of faith in our children through creative and engaging biblical teaching."
              },
              { 
                name: "Lorem Ipsum",
                role: "Prayer Ministry",
                image: "/image.png",
                description: "Leading our prayer initiatives and fostering a deeper connection with God through intentional prayer programs."
              },
              { 
                name: "Lorem Ipsum",
                role: "Outreach Ministry",
                image: "/image.png",
                description: "Coordinating community outreach efforts and ensuring our church remains actively engaged in serving our community."
              },
              { 
                name: "Lorem Ipsum",
                role: "Discipleship Ministry",
                image: "/image.png",
                description: "Developing and implementing comprehensive discipleship programs to help members grow in their faith journey."
              }
            ].map((pastor, index) => (
              <FlipCard
                key={index}
                name={pastor.name}
                role={pastor.role}
              
                
                description={pastor.description}
              />
            ))}
          </div>
        </motion.section>

        {}
        <motion.section 
          className="mb-16 bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="animate-pulse text-red-500 text-2xl">●</span>
              <h2 className="text-3xl font-bold text-gray-900">Watch Us Live</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="animate-pulse text-red-500">●</span>
                    <h3 className="text-xl font-semibold text-gray-900">First Service</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">8:00 AM - 10:00 AM</p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">Available in-person and live on Facebook</span>
                  </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Second Service</h3>
                  <p className="text-lg text-gray-700 mb-2">10:00 AM - 12:00 PM</p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">In-person service only</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <a 
                  href="https://www.facebook.com/jiasanfernando" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="&quot absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="relative z-10 font-semibold text-lg">Watch Live on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="bg-gray-50 rounded-xl p-8 mb-16"
          variants={fadeIn}
        >
          <h2 className="heading-lg text-center mb-8">Join Our Community</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            We welcome you to be part of our growing family. Experience the love of Christ
            and grow in your faith journey with us.
          </p>
          <div className="text-center">
            <button className="button-primary">
              Visit Us This Sunday →
            </button>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}