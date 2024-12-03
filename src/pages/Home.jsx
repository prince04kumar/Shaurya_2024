import React from 'react'
import WordGlobe from '../components/WordGlobe'
import ImageCarousel from '../components/ImageCaraousel'
import ImageCarousel2 from '../components/ImageCaraousel2'
import { motion } from 'framer-motion'
import { FaTrophy, FaCalendarAlt, FaUsers } from 'react-icons/fa'

export const Home = () => {
  const stats = [
    { icon: <FaTrophy />, number: "50+", label: "Tournaments" },
    { icon: <FaUsers />, number: "1000+", label: "Participants" },
    { icon: <FaCalendarAlt />, number: "20+", label: "Annual Events" },
  ]

  return (
    <div className='bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen'>
      <div className='h-screen relative'>
        <ImageCarousel />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30"
        >
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">SHAURYA</h1>
            <p className="text-xl md:text-2xl">Where Champions Are Made</p>
          </div>
        </motion.div>
      </div>

      <div className="bg-gradient-to-b from-amber-100 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl text-orange-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex md:flex-row sm:flex-col flex-col justify-around items-center bg-gradient-to-b from-gray-900 to-black py-20 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-amber-100 sm:text-base text-sm max-w-md"
        >
          <WordGlobe />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='flex flex-col bg-gradient-to-br from-orange-800 to-orange-950 rounded-2xl py-10 max-w-3xl w-full mx-4 md:mx-0 transition-transform hover:scale-[1.02] shadow-xl'
        >
          <div className='md:w-[90%] sm:w-[90%] w-[90%] sm:text-xl text-xl mx-6 px-5'>
            <span>
              <p className='text-red-400 text-2xl font-bold inline'>Shaurya </p>
              <p className="text-amber-50 inline">is the Sports Committee of NIT Raipur, dedicated to promoting
                a culture of sports and physical fitness...</p>
              <p className="mt-4">
                Our flagship event <span className='font-bold text-2xl bg-gradient-to-r from-yellow-300 to-yellow-500 text-red-700 inline px-2 py-1 rounded'>Samar</span>
                {' '}brings together the best athletic talent from across the region.
              </p>
            </span>
          </div>
          <div className='flex justify-center items-center flex-col mt-8'>
            <p className="text-center text-3xl text-amber-100 font-bold font-mono mb-6">Our Mission</p>
            <img src="image.png" className="md:w-[50%] sm:w-[90%] w-[90%] rounded-lg shadow-lg hover:scale-105 transition-transform" alt="Mission" />
          </div>
        </motion.div>
      </div>

      <div className='w-[70%] m-auto py-16 bg-gradient-to-b from-amber-100 to-amber-50'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-center text-3xl text-orange-950 font-bold font-mono mb-4">Our Faculty</h2>
          <p className="text-center text-gray-700 mb-8">Meet the mentors who guide our sporting excellence</p>
          <ImageCarousel2 />
        </motion.div>
      </div>

      <div className='relative bg-gradient-to-b from-gray-900 to-black group overflow-hidden'>
        <div className='flex md:h-screen h-96 opacity-45 group-hover:opacity-60 transition-opacity duration-500'>
          <img src="flamingo 31.png" className="object-cover w-[50%] md:h-screen h-96 transform group-hover:scale-105 transition-transform duration-700" alt="" />
          <img src="Image4.jpg" className="object-cover w-[50%] md:h-screen h-96 transform group-hover:scale-105 transition-transform duration-700" alt="" />
        </div>
        <div className='absolute inset-0 flex justify-between items-center px-8'>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href='/' 
            className='text-amber-50 font-bold px-6 py-3 bg-black/60 rounded-lg hover:bg-black/80 transition-colors md:text-2xl text-xl border border-orange-800/30 hover:border-orange-700'
          >
            Previous Events
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href='/' 
            className='text-amber-50 font-bold px-6 py-3 bg-black/60 rounded-lg hover:bg-black/80 transition-colors md:text-2xl text-xl border border-orange-800/30 hover:border-orange-700'
          >
            Next Event
          </motion.a>
        </div>
      </div>
    </div>
  )
}
