import React, { useRef } from 'react';
import WordGlobe from '../components/WordGlobe';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaUsers, FaMedal } from 'react-icons/fa';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import logo from "../assets/shaurya.png"
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export const Home = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const featuredRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const featuredEvents = [
    {
      title: "SAMAR 2024",
      date: "March 15-20",
      category: "Annual Sports Fest",
      image: "/samar-homepage.jpeg",
      description: "The biggest sporting extravaganza of Central India"
    },
    {
      title: "Inter Branch Tournament",
      date: "Ongoing",
      category: "Cricket Championship",
      image: "/cricket-tournament.jpeg",
      description: "Battle of branches for cricket supremacy"
    }
  ];

  const achievements = [
    { number: "50+", label: "Tournaments", icon: <FaTrophy className="text-yellow-500" /> },
    { number: "1000+", label: "Athletes", icon: <FaUsers className="text-blue-400" /> },
    { number: "20+", label: "Annual Events", icon: <FaCalendarAlt className="text-red-500" /> },
    { number: "100+", label: "Medals", icon: <FaMedal className="text-yellow-500" /> }
  ];

  const AnimatedStat = ({ number, label, icon, delay }) => {
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
        className="relative group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFD700]/20 to-white/20 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />

        {/* Content Container */}
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: delay + 0.2
            }}
            className="mb-6"
          >
            <span className="text-6xl text-[#FFD700] transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
              {icon}
            </span>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-amber-200 bg-clip-text text-transparent mb-3">
              {inView && (
                <CountUp
                  start={0}
                  end={parseInt(number)}
                  duration={2.5}
                  separator=","
                />
              )}
              <span className="text-[#FFD700]">+</span>
            </div>

            <motion.div
              className="text-xl text-amber-100 font-medium relative"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.6 }}
            >
              {label}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Unique Hero Section with Dynamic Elements */}
      <div ref={heroRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-[#8B0000] via-[#6B0F1A] to-black">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'url("/pattern.png")',
              backgroundSize: '30px'
            }}
          />
        </div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-[#FFD700]/10 rounded-full blur-xl"
              animate={{
                x: ['0%', '100%', '0%'],
                y: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Left Content */}
              <div className="text-left space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[#FFD700] font-medium tracking-wider">WELCOME TO</span>
                  <h1 className="text-8xl font-bold mt-2 bg-gradient-to-r from-[#FFD700] via-amber-200 to-[#FFD700] bg-clip-text text-transparent">
                    SHAURYA
                  </h1>
                  <div className="h-1 w-32 bg-[#FFD700] mt-4 rounded-full" />
                </motion.div>

                <motion.p
                  className="text-xl text-amber-100/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Unleash your potential with NIT Raipur's premier sports committee.
                  Where passion meets excellence and champions are forged.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/register"
                    className="px-8 py-4 bg-[#FFD700] text-[#8B0000] rounded-full font-bold hover:bg-white transition-all shadow-lg flex items-center gap-2 group"
                  >
                    Join Now
                    <IoIosArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/events"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] rounded-full font-bold hover:bg-[#FFD700]/10 transition-all flex items-center gap-2 group"
                  >
                    Explore Events
                    <IoIosArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Content - Logo Animation */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.img
                  src={logo}
                  alt="Shaurya Logo"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                  animate={{
                    y: [0, -20, 0],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IoIosArrowForward className="text-[#FFD700] text-3xl rotate-90" />
        </motion.div>
      </div>

      {/* Featured Events with Modern Cards */}
      <div ref={featuredRef} className="relative py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5" />
        <motion.div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-[#8B0000] font-semibold mb-4 block">UPCOMING</span>
            <h2 className="text-5xl font-bold text-[#8B0000]">Featured Events</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '5%']) }}
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <div className="bg-[#FFD700] text-[#8B0000] text-sm font-bold px-4 py-1 rounded-full w-fit mb-4">
                    {event.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-200 mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-[#FFD700]">
                    <FaCalendarAlt />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievement Stats with Modern Design */}
      <div className="py-24 bg-gradient-to-b from-[#8B0000] to-[#6B0F1A] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("/pattern.png")',
            backgroundSize: '30px'
          }}
        />

        {/* Content Container */}
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-[#FFD700] font-medium tracking-wider mb-4 block">OUR IMPACT</span>
            <h2 className="text-5xl font-bold text-white">
              Achievements in Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <AnimatedStat
                key={item.label}
                number={item.number}
                label={item.label}
                icon={item.icon}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#FFD700]/30 rounded-full"
              animate={{
                y: [0, -100],
                x: [0, Math.random() * 50 - 25],
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-20px',
              }}
            />
          ))}
        </div>
      </div>

      {/* Sports Globe with Modern Layout */}
      <div className="py-24 bg-amber-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2 text-center"
            >
              <div className="relative ">
                <BiSolidQuoteAltLeft className="text-6xl text-[#8B0000]/20 absolute -top-8 -left-8" />
                <h2 className="text-4xl font-bold text-[#8B0000] mb-6">
                  Discover Our Sports Universe
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  From traditional sports to modern competitions, we offer a diverse range of athletic pursuits.
                  Find your passion and excel with us.
                </p>
                <BiSolidQuoteAltRight className="text-6xl text-[#8B0000]/20 absolute -bottom-8 -right-8" />
              </div>
              <WordGlobe />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <img src="/collage.jpeg" alt="Sports Collage" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Call to Action */}
      <div className="relative py-24 bg-gradient-to-br from-[#8B0000] to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-8 text-white">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-amber-100 mb-12 leading-relaxed">
              Join Shaurya and be part of a legacy of sporting excellence at NIT Raipur
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/join"
              className="inline-flex items-center gap-2 px-12 py-5 bg-[#FFD700] text-[#8B0000] rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl"
            >
              Join Shaurya <IoIosArrowForward className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
