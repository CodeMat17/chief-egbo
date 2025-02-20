"use client";

import Image from "next/image";
import Link from "next/link";
import Subheadings from "./Subheadings";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Location = () => {
  const googleMapsLink =
    "https://www.google.com/maps/place/Nomeh+Unateze/@6.4513584,7.5077458,17z/data=!3m1!4b1!4m6!3m5!1s0x1044adeed650b3a3:0x6c3e5a7a3a0a0a0a!8m2!3d6.4513531!4d7.5103207!16s%2Fg%2F11ryq9zq9y?entry=ttu";

  return (
    <div
      id='direction'
      className='w-full px-4 py-8 sm:px-6 lg:px-8 scroll-mt-20'>
      <Subheadings text='Direction' />
      <div className='flex justify-center mb-6'>
        <Link
          href={googleMapsLink}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 rounded-full bg-white dark:bg-gray-300 px-5 py-3 shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-red-600'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
              clipRule='evenodd'
            />
          </svg>
          <span className='text-sm font-semibold text-gray-700'>
            Open in Google Maps
          </span>
        </Link>
      </div>
      <div className='mx-auto max-w-[890px] rounded-2xl shadow-xl border'>
        {/* Image Container with Aspect Ratio */}
        <div className='relative h-0 pt-[140.35%]'>
          <div className='touch-pan-y pinch-zoom absolute inset-0 rounded-xl overflow-hidden'>
            {/* Wrap the Image with Zoom so users can tap to zoom in */}
            <Zoom>
              <div className='relative w-full'>
                <Image
                  alt='Detailed event directions map for Nomeh Unateze'
                  src='/direction.webp'
                  width={912}
                  height={1280}
                  className='w-full h-auto object-contain rounded-xl'
                  sizes='100vw'
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
                />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
