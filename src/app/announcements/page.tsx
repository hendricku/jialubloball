'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Announcements() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const announcementGroups = [
    {
      title: "Elders",
      announcements: [
        {
          date: "Every First and Last Saturday",
          title: "Prayer and Intercession",
          description: "Join us in prayer and intercession as we seek God's presence and guidance for our church and community.",
          time: "6:00 AM - 9:00 AM",
          location: "Baywalk"
        },
        {
          date: "Every Tuesday",
          title: "Bible Study",
          description: "Weekly Bible study for deeper understanding and spiritual growth.",
          time: "6:00 PM - 9:00 PM",
          location: "Church Area"
        }
      ]
    },
    {
      title: "Youth with a Vision",
      announcements: [
        {
          date: "Every Saturday",
          title: "Youth Fellowship",
          description: "Join us for our weekly youth fellowship! A time of worship, learning, and building relationships with other young believers.",
          time: "2:00 PM - 4:30 PM",
          location: "Conference | Church Area "
        }
      ]
    },
    {
      title: "Jesus is Alive",
      announcements: [
        {
          date: "Every Sunday",
          title: "Doulus Hope is Back!",
          description: "We are excited to announce the return of Doulus Hope! Join us for this special ministry time of worship and fellowship.",
          time: "9:00 AM & 4:00 PM",
          location: "Main Sanctuary"
        },
        {
          date: "Every Sunday",
          title: "Sunday Service",
          description: "Join us for our weekly worship service as we gather together to praise and learn from God's Word.",
          time: "9:00 AM & 4:00 PM",
          location: "Main Sanctuary"
        },
        {
          date: "Every Wednesday",
          title: "Bible Study",
          description: "Mid-week Bible study focusing on the Book of Acts.",
          time: "7:00 PM",
          location: "Church Area"
        }
      ]
    },
    {
      title: "ACTS",
      announcements: [
        {
          date: "Every Thursday",
          title: "ACTS Open Cell",
          description: "Young Professionals (24 and above) gathering for fellowship, Bible study, and spiritual growth.",
          time: "6:00 PM",
          location: "GSMA Building 3rd Floor"
        }
      ]
    }
  ];




  

  <div className="relative h-[500px] bg-gray-900">
  <Image
    src="/doulus.jpeg"
    alt="Doulus Hope Event"
    fill
    className="object-cover object-center"
    sizes="(max-width: 768px) 100vw, 1200px"
    quality={100}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20">
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="animate-pulse text-red-500 text-2xl">●</span>
          <span className="bg-red-500/20 px-6 py-2 rounded-full text-sm font-medium text-white">
            Special Event
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          Doulus Hope is Back!
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join us for an extraordinary journey of worship and spiritual growth. 
          Experience the powerful presence of God as we come together to celebrate 
          His faithfulness and transformative power.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-white">
          <div className="flex items-center gap-3 bg-black/30 px-6 py-3 rounded-full">
            <span className="text-2xl">🕒</span>
            <span>Every Sunday, 9:00 AM & 4:00 PM</span>
          </div>
          <div className="flex items-center gap-3 bg-black/30 px-6 py-3 rounded-full">
            <span className="text-2xl">📍</span>
            <span>Main Sanctuary</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  return (
    <main className="min-h-screen py-6">
      <div className="container-custom">
        <Navbar />
        

        <motion.div 
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl bg-white"
          variants={fadeIn}
        >
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] bg-gray-900">
            <Image
              src="/boat.png" 
              alt="Doulus Hope Event" 
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="animate-pulse text-red-500 text-xl">●</span>
              <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Special Event
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Doulus Hope <br/>
              <span className="text-2xl sm:text-3xl md:text-4xl text-gray-600">is Back!</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
              Join us for an extraordinary journey of worship and spiritual growth. 
              Experience the powerful presence of God as we come together to celebrate 
              His faithfulness and transformative power.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 text-sm sm:text-base">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-xl">🕒</span>
                <span>Starting April 20, 2025 | Open Daily 9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-xl">📍</span>
                <span>Baywalk</span>
              </div>
            </div>
          </div>
        </motion.div>

  
        <motion.div 
          className="container-custom"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">Announcements</h1>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              Stay updated with the latest events and announcements from our church community.
            </p>
          </div>
  
          <div className="space-y-12">
            {announcementGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.2 }}
              >
                <h2 className="heading-lg mb-6">{group.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.announcements.map((announcement, index) => (
                    <motion.div
                      key={index}
                      className="card hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {announcement.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                          {announcement.date.startsWith('Every') 
                            ? announcement.date 
                            : new Date(announcement.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{announcement.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <span>🕒</span>
                          {announcement.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <span>📍</span>
                          {announcement.location}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}