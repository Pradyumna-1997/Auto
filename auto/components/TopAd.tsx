'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function TopAd2() {
  const slides = [
    {
      src: '/TopAd1.png',alt: 'TopAd1',href: '/Services'
    },
    {
      src: '/TopAd2.png',alt: 'TopAd2',href: '/Services'
    },
    {
      src: '/TopAd3.png',alt: 'TopAd3',href: '/Services'
    },

    {
      src: '/TopAd4.png',alt: 'TopAd4',href: '/Services'
    },
    {
      src: '/TopAd5.png',alt: 'TopAd5',href: '/Services'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  setTimeout(nextSlide,5000)

  return (
    <div className='max-w-[1400px] h-[200px] flex-column w-full m-auto relative group'>
      <Link href={slides[currentIndex].href} key={slides[currentIndex].alt}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})`, backgroundRepeat: "no-repeat" }}
        className='w-full h-full rounded-2xl bg-center bg-contain duration-500'
      ></div>
      </Link>
      {/* Left Arrow */}
      {/* <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div> */}
      {/* Right Arrow */}
      {/* <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
      <div className='flex top-4 justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopAd2;