'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import bibleVerses from '@/data/bibleVerses.json';
import { useState, useEffect } from 'react';
// import debounce from 'lodash.debounce';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const bannerSlides = [
  {
    image: '/boat.png',
    title: 'Special Announcement',
    subtitle: 'WELCOME BACK',
    heading: 'Doulus Hope is Back',
    description: 'Join us in welcoming the return of Doulos Hope to La Union this April 2025',
    buttonText: 'Learn More',
    buttonLink: '/announcements'
  },
  // {
  //   image: '/image.png',
  //   title: 'New Series',
  //   subtitle: 'SPIRITUAL DISCIPLINES',
  //   heading: 'Rhythms of Grace',
  //   description: 'Spiritual disciplines—before our Father.',
  //   buttonText: 'Read More',
  //   buttonLink: '/series'
  // },
  {
    image: '/expansion.png',
    title: 'Church Theme 2024',
    subtitle: 'ISAIAH 54:2',
    heading: 'EXPANSION: Stretch Your Influence',
    description: 'Enlarge, Stretch, Lengthen, Strengthen - Join us as we expand God\'s kingdom together.',
    buttonText: 'Join Us',
    buttonLink: '/announcements'
  },
  {
    image: '/boat.png',
    title: 'Special Announcement',
    subtitle: 'WELCOME BACK',
    heading: 'Doulus Hope is Back',
    description: 'Join us in welcoming the return of Doulos Hope to La Union this April 2025',
    buttonText: 'Learn More',
    buttonLink: '/announcements'
  }
];


const ministriesData = [
  {
    icon: "📖",
    title: "Bible Reading",
    description: "Daily Bible reading schedule for spiritual growth",
    link: "/bible-reading"
  },
  {
    icon: "🎵",
    title: "CMA",
    description: "Leading the congregation in praise and worship",
    link: "/cma"
  },
  {
    icon: "👶",
    title: "Children's Ministry",
    description: "Nurturing young hearts in faith and values",
    link: "/children-ministry"
  },
  
  {
    icon: "📹",
    title: "Media Team",
    description: "Media and communication support",
    link: "/media-team"
  },
  {
    icon: "👩‍🍳",
    title: "Kitchen Ministry",
    description: "Serving with love through food preparation and fellowship meals",
    link: "/kitchen-ministry"
  }
];

export default function Home() {
  const [showAllMinistries, setShowAllMinistries] = useState(false);
  const [dailyVerse, setDailyVerse] = useState(bibleVerses.verses[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const today = new Date().toDateString();
    const index = Math.floor(
      ((new Date(today).getTime() / 86400000) + bibleVerses.verses.length) % bibleVerses.verses.length
    );
    setDailyVerse(bibleVerses.verses[index]);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Add this useEffect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="container-custom min-h-screen py-6">
      <Navbar />

    
      <motion.div 
        className="mb-12 relative overflow-hidden rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative h-[400px]">
          {bannerSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
                <div className="text-white max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-serif mb-4">{slide.title}</h2>
                  <p className="text-lg sm:text-xl text-white/90 uppercase tracking-wider mb-2">
                    {slide.subtitle}
                  </p>
                  <h3 className="text-4xl sm:text-5xl font-bold mb-4">{slide.heading}</h3>
                  <p className="text-lg mb-8">{slide.description}</p>
                  <a href={slide.buttonLink}>
                    <button className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-base font-medium">
                      {slide.buttonText}
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: 'url(/subtle-pattern.png)',
          backgroundAttachment: 'fixed'
        }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}>
          <span className="inline-flex items-center gap-2 text-gray-600 mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Welcome to JIA San Fernando
          </span>

          <h1 className="heading-xl mb-6">
            A Church Alive
            <br />
            Is Worth the Drive
          </h1>

          <p className="text-body mb-8">
            Where Jesus is ALIVE in every heart, every home, every generation.
          </p>

          <div className="flex gap-4">
            <button className="button-primary">
              Join Us This Sunday →
            </button>
            <Link href="/pastpreachings" className="button-secondary">
              Past Preachings
            </Link>
         
          </div>
        </motion.div>

        <motion.div 
          className="rounded-image-container aspect-[4/3]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
          <Image
            src="/image.png"
            alt="Worship Service"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.section 
        className="py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">About Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  Our Vision
                </h3>
                <div className="prose prose-lg">
                  <p className="text-gray-600 leading-relaxed">
                    CHOSEN and APPOINTED to GO, and BEAR FRUIT that REMAINS
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  Our Mission
                </h3>
                <div className="prose prose-lg">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To ESTABLISH strong community cell churches<br />
                    To TRAIN every member to become disciple and cell leader<br />
                    To EQUIP every member for mission involvement
                  </p>
                  <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
                    &quot;Jesus said to him, &apos;I am the way, and the truth, and the life. 
                    No one comes to the Father except through me.&apos;&quot; - John 14:6
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>


      <motion.section
        className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  Verse of the Day
                </span>
                <span className="text-sm font-medium px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                  {dailyVerse.testament} Testament
                </span>
              </div>
              
              <p className="text-2xl sm:text-3xl font-serif text-gray-800 mb-6 leading-relaxed">
                &ldquo;{dailyVerse.verse}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-blue-600">
                  - {dailyVerse.reference}
                </p>
                <button 
                  onClick={async () => {
                    try {
                      if (!('speechSynthesis' in window)) {
                        alert('Text-to-speech is not supported in your browser');
                        return;
                      }

                      const synth = window.speechSynthesis;
                      const utterance = new SpeechSynthesisUtterance(`${dailyVerse.verse} From ${dailyVerse.reference}`);
                      
                      if (synth.speaking) {
                        if (synth.paused) {
                          synth.resume();
                        } else {
                          synth.pause();
                        }
                        return;
                      }
                      
                      utterance.onerror = (event) => {
                        console.error('Speech error:', event.error);
                        alert('Error playing audio. Please try again or check browser permissions.');
                      };

                      utterance.volume = 1;
                      utterance.rate = 1;
                      utterance.pitch = 1;
                      
                      synth.speak(utterance);
                      
                    } catch (error) {
                      console.error('Error with speech synthesis:', error);
                      alert('Could not play audio. Please try again.');
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  aria-label="Listen to verse"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Listen</span>
                </button>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 opacity-5 text-9xl font-serif">
              &ldquo;
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ministries Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-blue-50 to-purple-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <h2 className="text-6xl font-bold text-center mb-8 heading-gradient">
          Our Ministries
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Discover how you can grow and serve in our various ministry opportunities
        </p>
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministriesData
            .slice(0, showAllMinistries ? ministriesData.length : 3)
            .map((ministry, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}

                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  transition: {
                    rotate: {
                      repeat: 0,
                      duration: 0.3
                    }
                  }
                }}
              >
                <div className="text-5xl mb-6">{ministry.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{ministry.title}</h3>
                <p className="text-gray-600 mb-6">{ministry.description}</p>
                <a 
                  href={ministry.link} 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Learn More 
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllMinistries(!showAllMinistries)}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="text-blue-600 font-medium">
              {showAllMinistries ? 'Show Less' : 'See More Ministries'}
            </span>
            <svg 
              className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${showAllMinistries ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </motion.section>

      <motion.section 
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container-custom">
          <h2 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Latest Service
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Experience the power of worship and the Word through our latest service recordings.
          </p>
          <div className="video-container aspect-video relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjiac.launion%2Fvideos%2F1023190293099154%2F&show_text=false&width=560&t=0"
              title="Church Service"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://www.facebook.com/jiac.launion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span>Visit Our Facebook Page</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Visit Us Section */}
      <section className="py-16">
        <h2 className="heading-lg mb-12 text-center">Visit Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="heading-md mb-4">JIA San Fernando</h3>
              <p className="text-gray-600">
                GSMA Building<br />
                MacArthur Highway<br />
                San Fernando, La Union
              </p>
            </div>

            <div>
              <h3 className="heading-md mb-4">Service Times</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">⏰</span>
                  <div>
                    <strong>First Service:</strong>
                    <p className="text-gray-600">8:00 AM - 10:00 AM</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">⏰</span>
                  <div>
                    <strong>Second Service:</strong>
                    <p className="text-gray-600">10:00 AM - 12:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="heading-md mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.94957162310715!2d120.3138280769856!3d16.61707288422635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33918e6a050acf51%3A0xd644eb99507ec33b!2sGSMA%20BUILDING!5e0!3m2!1sen!2sph!4v1744688998908!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>


      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Footer Section */}
      <motion.footer 
        className="bg-gradient-to-r from-blue-50 to-purple-50 pt-16 pb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold mb-6">About JIA</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Where Jesus is ALIVE in every heart, every home, every generation. Join us in our mission to spread God's love throughout La Union and beyond.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/churches" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Our Churches
                  </Link>
                </li>
                <li>
                  <Link href="/pastpreachings" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Past Preachings
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-2xl font-bold mb-6">Connect With Us</h4>
              <div className="space-y-4">
                <a href="mailto:info@jiasanfernando.com" 
                   className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  info@jiasanfernando.com
                </a>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://facebook.com/jiac.launion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-gray-200 pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl font-serif text-gray-700 mb-4">&quot;To God be the glory!&quot;</p>
            <p className="text-gray-600">© {new Date().getFullYear()} Jesus Is Alive San Fernando. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}