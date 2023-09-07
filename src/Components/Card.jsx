import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
    return (
        <div className='flex flex-col md: relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto2'>

                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25"
                src={review.image} />
            </div>
            <div>
                <p>{review.name}</p>
            </div>
            <div>
                <p>{review.job}</p>
            </div>
            <div>
                <FaQuoteLeft />
            </div>
            <div>
                {review.text}
            </div>
            <div>
                <FaQuoteRight />
            </div>
            <div>
                <button>
                    +
                </button>
                <button>
                    -
                </button>
            </div>
            <div>
                <button>
                    Tourism Place
                </button>
            </div>
        </div>
    )
}

export default Card;