import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Card = (props) => {
    let review = props.review;
    return (
        <div className='flex flex-col md: relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto2'>

                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
                src={review.image} />
                <div className='w-[140px] h-[140px] bg-violet-600 rounded-full  absolute top-[-6px] z-[-20] left-[10px]'></div>
            </div>
            <div className='text-center mt-7 '>
                <p className='font-bold text-2xl capitalize underline'>{review.name}</p>
            </div>
            <div className='text-center mt-7'>
                <p className='text-violet-900 uppercase text-sm'>{review.Place}</p>
            </div>
            <div className='text-violet-800 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-4 text-slate-700'>
                {review.text}
            </div>
            <div className='text-violet-800 mx-auto mt-5'>
                <FaQuoteRight />
            </div>
            <div className='flex text-3xl mt-5 gap-3 text-violet-600 font-bold mx-auto'>
                <button className='cursor-pointer hover:text-violet-800'>
                    <FiChevronLeft/>
                </button>
                <button className='cursor-pointer  hover:text-violet-800'>
                    <FiChevronRight/>
                </button>
            </div>
            <div>
                <button className='bg-violet-400 hover:bg-violet-700 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold  text-white text-lg'>
                    Tourism Place
                </button>
            </div>
        </div>
    )
}

export default Card;