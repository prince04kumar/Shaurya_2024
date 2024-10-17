import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// import { assets1 } from '../../assets/assets';

const Cards = ({img, name}) => {
  return (
    <div className='h-80 w-64 bg-white flex flex-col justify-between items-center rounded-2xl overflow-hidden group relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
      <div className='w-full h-64 bg-cover bg-center'
           style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className='details w-full flex flex-col items-center space-y-2 bg-white p-3'>
        <span className='text-black text-lg font-kaushan font-bold'>{name}</span>
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
  )
}

export default Cards
