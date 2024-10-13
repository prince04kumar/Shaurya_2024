import React, { useState } from 'react';
import '../App.css';


export const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted!');
    };

    
    
    

    return (
        <div className='xl:bg-[url("../Assets/aboutbg.jpeg")] bg-[url("../Assets/mob.jpg")]   bg-cover bg-fixed min-h-screen overflow-hidden'>
            <div className='backdrop-blur'>
            <div className='flex justify-center  overflow-hidden'>
                <div className='w-3/4'>
                    <div className='bgs text-amber-900 rounded-full flex items-center  justify-center pt-2 pb-2 mb-10 mt-20 xl:h-[10vh] h-[5vh]'>
                        <h1 className='xl:text-5xl text-6xl font-semibold'>About Us</h1>
                    </div>
                </div>
            </div>

            <div className=' xl:flex-row flex-col flex mx-10 items-center justify-center xl:mt-10 '>
                 
                <div className='bgs text-amber-900  xl:h-[50vh] h-[30vh] w-[60vw] my-5 xl:w-[25vw] rounded-3xl xl:mx-10 flex justify-center items-center'>
                    <p className='text-3xl flex justify-center items-center px-10'>Shaurya, the sports committee of NIT Raipur, fosters athletic talent, organizes events, and promotes teamwork and sportsmanship among students.</p>
                </div>
                <div className='bgs text-amber-900 xl:h-[50vh] h-[30vh] w-[60vw] my-5 xl:w-[25vw] rounded-3xl xl:mx-10 flex justify-center items-center'>
                    <p className='text-3xl flex justify-center items-center px-10'>Shaurya, the sports committee of NIT Raipur, fosters athletic talent, organizes events, and promotes teamwork and sportsmanship among students.</p>
                </div>
                <div className='bgs text-amber-900 xl:h-[50vh] h-[30vh] w-[60vw] my-5 xl:w-[25vw] rounded-3xl xl:mx-10 flex justify-center items-center'>
                    <p className='text-3xl flex justify-center items-center px-10'>Shaurya, the sports committee of NIT Raipur, fosters athletic talent, organizes events, and promotes teamwork and sportsmanship among students.</p>
                </div>
            </div>

            {/* Full-screen overlay section */}
            <div className='relative flex justify-center items-center xl:h-screen h-[60vh]  w-screen absolute top-0 z-2 left-0 mt-20'>
                {/* Center Box */}
                <div className='relative z-9 flex items-center justify-center xl:h-[20vh] xl:w-[20vw] h-[10vh] w-[40vw]  bgs text-amber-900  rounded-full'>
                    <p className='text-bold text-4xl text-bold text-center'>About Shaurya</p>
                </div>

                {/* Corner Boxes */}
                <div className='absolute xl:top-8 xl:left-40 top-20 left-32 xl:h-[40vh] xl:w-[25vw] h-[20vh] w-[30vw]  bgs text-amber-900 rounded-3xl'>
                    <p className='text-2xl  flex justify-center items-center p-10'>Shaurya, the sports committee of NIT Raipur, fosters athletic talent, organizes events, and promotes teamwork and sportsmanship among students.</p>
                </div>
                <div className='absolute xl:top-8 xl:right-40 top-20 right-32 xl:h-[40vh] xl:w-[25vw] h-[20vh] w-[30vw] bgs text-amber-900 rounded-3xl'>
                    <p className='text-2xl  flex justify-center items-center p-10'>Shaurya, the sports committee of NIT Raipur, fosters athletic talent, organizes events, and promotes teamwork and sportsmanship among students.</p>
                </div>
                <div className='absolute xl:bottom-8 xl:left-40 bottom-20 left-32  xl:h-[40vh] xl:w-[25vw] h-[20vh] w-[30vw] bgs text-amber-900 rounded-3xl'>
                    <p className='text-2xl  flex justify-center items-center p-10'>Shaurya, the sports committee of NIT Raipur, fosters athletic talent, organizes events, and promotes teamwork and sportsmanship among students.</p>
                </div>
                <div className='absolute xl:bottom-8 xl:right-40 bottom-20 right-32 xl:h-[40vh] xl:w-[25vw] h-[20vh] w-[30vw] bgs text-amber-900 rounded-3xl'>
                    <p className='text-2xl  flex justify-center items-center p-10'>Shaurya, the sports committee of NIT Raipur, fosters athletic talent, organizes events, and promotes teamwork and sportsmanship among students.</p>
                </div>
            </div>

            <div className='relative flex justify-center items-center xl:h-screen h-[60vh] w-screen absolute top-0 left-0 mt-20'>
                <div className='xl:h-[80vh] xl:w-[70vw] h-[40vh] w-[80vw] bgs  rounded-3xl flex xl:flex-row flex-col justify-center items-center '>
                    <div className='mx-5 my-5'>
                        <h1 className='text-7xl text-amber-900 ml-20 font-bold'>Contact Details</h1>


                    </div>
                    <div className='xl:h-[65vh] xl:w-[35vw] h-[20vh] w-[60vw] xl:mx-10 text-orange-300 bg-amber-900 rounded-3xl flex flex-col items-center '>
                        <h2 className='text-3xl  font-semibold mt-5'>Contact Us</h2>
                        <hr className="w-96 h-0.5 mx-auto  bg-orange-300 border-0 rounded  my-1" />
                         <div className="max-w-sm mx-auto p-4  rounded shadow">
            <h2 className="text-lg  font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 bg-transparent text-white rounded mb-2"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 bg-transparent text-white rounded mb-2"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 bg-transparent text-white rounded mb-4"
                ></textarea>
                <button type="submit" className="w-full bg-orange-300 text-amber-900 p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
                    
        <hr className="w-96 h-0.5 mx-auto  bg-orange-300 border-0 rounded  my-1" />
        <div className='flex justify-center  items-center '>
            <img src='../Assets/ins.svg'  alt='Vector' height={50} width={50} className='mx-5 my-5'/>
            <img src='../Assets/fac.svg'  alt='Vector' height={20} width={30} className='mx-5 my-5'/>
            <img src='../Assets/lin.svg'  alt='Vector' height={50} width={50} className='mx-5 my-5'/>



        </div>

                    </div>


                </div>
            </div>
            </div>
        </div>
    );
};


