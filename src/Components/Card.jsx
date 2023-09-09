import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

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
                <p className='tracking-wider  font-bold text-2xl capitalize underline'>{review.name}</p>
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
           
        </div>
    )
}

export default Card;