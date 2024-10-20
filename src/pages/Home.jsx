import React from 'react'
import WordGlobe from '../components/WordGlobe'
import ImageCarousel from '../components/ImageCaraousel'
import ImageCarousel2 from '../components/ImageCaraousel2'

export const Home = () => {
  return (
    <div className='semi-amber min-h-screen'>
      <div className='h-screen'>
        <ImageCarousel />
      </div>
      <div className="flex md:flex-row sm:flex-col flex-col justify-around items-center bg-black py-20">
        <div className=" text-white sm:text-base text-sm">
          <WordGlobe />
        </div>

        <div className='flex flex-col bg-orange-900 m-9 md:w-[70%] rounded-2xl  py-10'>
          <div className='md:w-[90%] sm:w-[90%] w-[90%] stle  sm:text-xl text-xl mx-6 px-5'>
            <span className=''>
              <p className='text-red-500 text-2xl inline'>Shaurya </p>
              <p className="text-white inline "> is the Sports Committee of NIT Raipur, dedicated to promoting
                a culture of sports and physical fitness
                The committee
                organizes and manages various sports activities, and events
                throughout the academic year, fostering team spirit, leadership, and a sense of healthy competition.
                <p>
                  Shaurya's primary event is <p className='font-bold text-2xl bg-yellow-400 text-red-600 inline'>Samar</p>, the annual sports fest, which attracts participation from colleges across India, featuring a wide range of sports including <p className='inline'>cricket, football, basketball, volleyball, and athletics</p>. Shaurya also conducts intramural sports tournaments to encourage participation from all levels and skill sets, ensuring that sports are an integral part of campus life.
                </p>
              </p>
            </span>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <p className="text-center flex justify-center text-3xl text-red-950 font-bold font-mono my-4">Mission</p>
            <img src="image.png" className="md:w-[50%] sm:w-[90%] w-[90%]" alt="" />
          </div>

        </div>
      </div>

      <div className='w-[70%] m-auto py-16'>
        <p className="text-center flex justify-center text-3xl text-red-950 font-bold font-mono">Our Faculty</p>
        <ImageCarousel2 />
      </div>


      <div className='relative bg-black'>
        <div className='flex md:h-screen h-96 opacity-45'>
          <img src="flamingo 31.png" className="object-cover w-[50%] md:h-screen h-96" alt="" />
          <img src="Image4.jpg" className="object-cover w-[50%] md:h-screen h-96" alt="" />
        </div>
        <a href='/' className='text-white font-bold underline absolute md:text-3xl text-xl md:top-80 top-44 hover:text-red-950'> Previous Events </a>
        <a href='/' className='text-white font-bold absolute underline md:text-3xl text-xl right-1  md:top-80 top-44 hover:text-red-950'> Next Event </a>
      </div>

    </div>

  )
}
