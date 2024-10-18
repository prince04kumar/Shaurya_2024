import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// import { assets1 } from '../../assets/assets';

const Cards = ({img, name}) => {
  return (
    <div className='h-64 w-64 bg-white flex flex-col justify-between items-center p-3 rounded-2xl overflow-hidden group relative'>
      <div className='absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-300 ease-in-out'
           style={{backgroundImage: `url(${img})`, opacity: 1}}>
      </div>
      <div className='relative z-10 w-full h-full flex flex-col justify-between items-center'>
        <div className='w-full flex flex-col items-center space-y-2 bg-white bg-opacity-80 p-2 rounded mt-auto'>
          <span className='text-black text-lg font-kaushan font-bold z-10'>{name}</span>
          <div className='flex justify-center space-x-4'>
            <a href="#" className='text-slate-500 hover:text-black hover:scale-110 transition-colors'>
              <InstagramIcon />
            </a>
            <a href="#" className='text-slate-500 hover:text-black hover:scale-110 transition-colors'>
              <LinkedInIcon />
            </a>
            <a href="#" className='text-slate-500 hover:text-black hover:scale-110 transition-colors'>
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards

