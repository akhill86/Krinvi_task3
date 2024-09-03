
import React, { useState } from 'react'



export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        './Images/bg1.png',
        './Images/bg2.png',
        './Images/bg3.png'

    ];

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };
    return (
        <>
        <div className="nav bg-black px-10 py-5 flex gap-20 items-center justify-between">
            <img className='w-[116px]' src="./Images/logo.svg" alt="" />
            <ul
            class=' lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                class=' text-white font-semibold block text-[15px]'>Home</a></li>
            <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                <a href='javascript:void(0)'
                    class='hover:text-[#007bff] hover:text-white text-white font-semibold text-[15px] block'>SERVICES<svg
                        xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                        viewBox="0 0 24 24">
                        <path className='hover:text-white'
                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                            data-name="16" data-original="#000000" />
                    </svg>
                </a>
                <ul
                    class='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg  max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                    <li class=' py-3'>
                        <a href='javascript:void(0)'
                            class='hover:bg-black hover:fill-[#007bff] text-white font-semibold text-[15px] block'>
                            UI/UX Designing
                        </a>
                    </li>
                    <li class=' py-3'>
                        <a href='javascript:void(0)'
                            class='hover:bg-black hover:fill-[#007bff] text-white font-semibold text-[15px] block'>
                            Web Design and Development
                        </a>
                    </li>
                    <li class=' py-3'>
                        <a href='javascript:void(0)'
                            class='hover:bg-black hover:fill-[#007bff] text-white font-semibold text-[15px] block'>
                            Mobile App Development
                        </a>
                    </li>
                    <li class=' py-3'>
                        <a href='javascript:void(0)'
                            class='hover:bg-black hover:fill-[#007bff] text-white font-semibold text-[15px] block'>
                            LOGO DESIGN
                        </a>
                    </li>
                    <li class=' py-3'>
                        <a href='javascript:void(0)'
                            class='hover:bg-black hover:fill-[#007bff] text-white font-semibold text-[15px] block'>
                            SEO
                        </a>
                    </li>
                    <li class=' py-3'>
                        <a href='javascript:void(0)'
                            class='hover:bg-black hover:fill-[#007bff] text-white font-semibold text-[15px] block'>
                            Digital Marketing
                        </a>
                    </li>
                </ul>
            </li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                class=' text-white font-semibold text-[15px] block'>Hire Developers</a></li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                class=' text-white font-semibold text-[15px] block'>About Us</a></li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                class=' text-white font-semibold text-[15px] block'>Contact Us</a></li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                class=' text-white font-semibold text-[15px] block'>Blogs</a></li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                class=' text-white font-semibold text-[15px] block'>Career</a></li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
                class='text-white font-semibold text-[15px] block'>Zestire</a></li>
        </ul>
    </div>

    <div id="toggleOpen" class='flex ml-auto lg:hidden'>
        <button>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
    </div>
<div className="container">
    <div className="relative w-full	h-screen overflow-hidden">
        {images.map((image, index) => (
            <img
                src={image}
                alt="Slide"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                key={index}
            />
        ))}
        <div className="absolute bottom-0 left-0 w-full flex justify-between p-4">
            <button
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer"
                onClick={handlePrevSlide}></button>
            <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer" onClick={handleNextSlide}></button>
        </div>
    </div>
    <div className="text absolute top-[40%] left-[10%]">
        <h1 className='text-white text-6xl text-tighter font-semibold' id='h1'>Build Your Business With Us</h1>
    </div>
    <div className="text absolute top-[52%] left-[10%]">
<h3 className='text-white text-3xl font-semibold' id='h3'>Krinvi Technologies are here to give you the best IT support & <br/>service with best developers & digital marketing team.</h3>
</div>
<div className="button absolute top-[70%] left-[10%] text-white">
<button class="bg-orange-500 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded" id='button'>
  Contact us
</button>

</div>
</div>         
        </>
    )
}
