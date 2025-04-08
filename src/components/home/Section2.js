// import React from 'react'

// function Section2() {
//   return (
//     <div className='w-full flex flex-col md:flex-row gap-2 mt-10 lg:mt-[64px] px-[16px] md:px-[20px] xl:px-[80px] 2xl:px-[195px]'>
//        <div className='flex  md:w-[62%] rounded-[15px] overflow-hidden'>
// <img className=' object-cover' src='/nurse.svg'></img>

//         </div> 
//         <div className='md:w-[38%] space-y-2 flex flex-row md:flex-col overflow-hidden overflow-x-scroll gap-2'>
//             <div className='min-w-[320px] md:w-auto border border-[#999999] rounded-[15px] p-[33px]  '>
//                 <h1 className='text-[24px] text-[#333333] leading-[120%] font-medium'>Healthcare service <br/>
//                 at your home</h1>
//                 <p className='text-[14px] leading-[140%]'>Join Mediqx to get matched with full-time, part-time</p>
                
//             </div>
//             <div className='min-w-[320px] md:w-auto border border-[#999999] rounded-[15px] p-[33px]  '>
//                 <h1 className='text-[24px] font-medium text-[#333333] leading-[120%]'>Healthcare Products
//               </h1>
//                 <p className='text-[14px] leading-[140%]'>Join Mediqx to get matched with full-time, part-time, and freelance healthcare opportunities near you.</p>
                
//             </div> <div className='min-w-[320px] md:w-auto border border-[#999999] rounded-[15px] p-[33px]  '>
//                 <h1 className='text-[24px] text-[#333333] leading-[120%] font-medium'>Pharmacy
//                </h1>
//                 <p className='text-[14px] leading-[140%]'>Join Mediqx to get matched with full-time, part-time, and freelance healthcare opportunities near you.</p>
                
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Section2




"use client"
import React, { useEffect, useRef, useState } from 'react';

const cards = [
  {
    title: 'Healthcare service at your home',
    text: 'Join Mediqx to get matched with full-time, part-time',
  },
  {
    title: 'Healthcare Products',
    text: 'Join Mediqx to get matched with full-time, part-time, and freelance healthcare opportunities near you.',
  },
  {
    title: 'Pharmacy',
    text: 'Join Mediqx to get matched with full-time, part-time, and freelance healthcare opportunities near you.',
  },
];

function Section2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Slide every 3s

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className='w-full flex flex-col md:flex-row gap-2 mt-10 lg:mt-[64px] px-[16px] md:px-[20px] xl:px-[80px] 2xl:px-[195px]'>
      <div className='flex md:w-[62%] rounded-[15px] overflow-hidden'>
        <img className='object-cover w-full' src='/nurse.svg' alt='nurse' />
      </div>

      {/* Carousel wrapper */}
      <div className=' md:w-[38%] overflow-hidden relative'>
        <div
          className={` flex transition-transform duration-700   ease-in-out ${
            isMobile ? 'w-[100%]' : 'flex-col space-y-2'
          }`}
          style={{
            transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none',
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`${
                isMobile ? 'w-full min-w-full' : 'md:w-auto'
              } border border-[#999999] rounded-[15px] p-[33px] shrink-0`}
            >
              <h1 className='text-[24px] text-[#333333] leading-[120%] font-medium'>{card.title}</h1>
              <p className='text-[14px] text-[#333333]  leading-[140%]'>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
