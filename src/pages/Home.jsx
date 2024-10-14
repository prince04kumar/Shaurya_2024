import React from 'react'
import WordGlobe from './WordGlobe'
import ImageCarousel from './ImageCaraousel'

export const Home = () => {
  return (
    <div className='semi-amber min-h-screen'>
      <div className='h-96 '>
         <ImageCarousel/>
      </div>
      <div className="flex md:flex-row sm:flex-col flex-col justify-around items-center">
        <div className=""> 
          <WordGlobe/>
        </div>
        
        <div className='md:w-[40%] sm:w-[90%] w-[90%] stle  text-2xl'>
          <span className=''>
          <p className='text-red-500 text-3xl inline'>Shaurya </p>
            <p className='inline'>is the Sports Committee of NIT Raipur, dedicated to promoting 
          a culture of <p className='inline font-bold text-blue-500'>sports       </p><p className='football w-16 inline'>⚽</p> <p className='font-bold text-purple-800'>and physical fitness🏋️.</p> 
          The committee
           organizes and manages various sports <p className='inline text-fuchsia-500'>activities💪</p>, <p className='inline text-pink-600'>tournaments🏅</p>, and <p className='inline text-violet-700'>events🌃</p>  
           throughout the academic year, fostering team spirit🤝, leadership, and a se
           nse of healthy competition. 
           <p>
           Shaurya's primary event is <p className='font-bold text-3xl bg-yellow-400 text-red-600 inline'>Samar</p>, the annual sports fest, which attracts participation from colleges across India, featuring a wide range of sports including <p className='inline text-indigo-700'>cricket, football, basketball, volleyball, and athletics</p>. Shaurya also conducts intramural sports tournaments to encourage participation from all levels and skill sets, ensuring that sports are an integral part of campus life. 
           </p>
           </p>
           </span> 
        </div>
      </div>

        <p className="text-center flex justify-center text-3xl text-red-950 font-bold font-mono">Our Faculty</p>
        <div className="grid sm:grid-cols-2 grid-col-1 gap-14 my-11 md:mx-[25%] sm:mx-[6%] mx-[25%] w-[50%] sm:w-[90%] md:w-[50%]">
          <div className="grid-cols-1 faculty relative">
            <div className='h-96'>
              <img src="Independence_01.jpg" className='h-96' alt="" />
            </div>
            <div className='h-96 w-full absolute top-6 name'>
              <p className='text-center mt-60 text-white py-10 w-full bg-black'>Mr Ramanna rao</p>
            </div>
          </div>
          <img src="director.png" className="grid-cols-2 faculty h-96 w-80" alt="" />


          {/* <img src="Independence_01.jpg" className="grid-cols-3" alt="" /> */}

        </div>

        <p className="text-center flex justify-center text-3xl text-red-950 font-bold font-mono my-4">Mission</p>
        <img src="image.png" className="md:w-[50%] sm:w-[100%]  w-[100%] my-7   md:mx-[25%] " alt="" />


        <div className='relative bg-black'>
          <div className='flex h-32 opacity-45'>
          <img src="flamingo3.png" className="object-fill w-[50%] h-32" alt="" />
          <img src="Image4.jpg" className="object-fill w-[50%] h-32" alt="" />
          </div>
          <a href='/' className='text-white font-bold underline absolute text-3xl top-2'> Previous Events </a>
          <a href='/' className='text-white font-bold absolute underline text-3xl right-1 top-2'> Next Event </a>
        </div>

</div>

  )
}
