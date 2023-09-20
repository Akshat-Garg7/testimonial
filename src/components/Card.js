import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'


export const Card = (props) => {
    let review=props.review;
  return (
    <div className='flex flex-col md:relative '>
        <img className='aspext-square rounded-full w-[140px] h-[140px] z-25 absolute top-[-7rem] mx-auto' src={review.image}></img>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-150px] z-[-20] left-[10px]'></div>
        <p className='text-center font-bold text-2xl capitalize mt-7'>{review.name}</p>
        <p className='text-center text-violet-300 uppercase text-sm mt-7'>{review.job}</p>
        <div className='text-violet-400 mx-auto'>
            <FaQuoteLeft/>
        </div>
        <p className='text-center mt-4 text-slate-500 '>{review.text}</p>
        <div className='text-violet-400 mx-auto'>
            <FaQuoteRight/>
        </div>

        
    </div>
  );
}

export default Card;
