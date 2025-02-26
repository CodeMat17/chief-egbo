"use client";

import { motion } from "framer-motion";
import { FacebookIcon } from "lucide-react";
import Link from "next/link";

export default function FBLive() {
  return (
    <div className='fixed flex flex-col items-center justify-center bottom-4 right-4 md:bottom-6 md:right-6 z-50'>
      {/* Pulsating Effect */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className='absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-500 opacity-50 blur-md'
      />

      {/* Facebook Button */}
      <Link
        href='https://facebook.com/events/s/burial-of-chief-dennis-okeke-e/959065976294151/'
        target='_blank'
        className='relative flex items-center justify-center text-white bg-blue-600 rounded-full w-14 h-14 shadow-lg hover:bg-blue-700 transition-all duration-300'>
        <FacebookIcon size={32} />
      </Link>


      {/* "Live" Text Badge */}
      <span className='absolute justify-center text-center -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse '>
        LIVE
      </span>
      {/* <p className="text-xs">Streaming</p> */}
      {/* Streaming Text */}
      <p className='text-center text-xs font-semibold  mt-1'>Streaming</p>
    </div>
  );
}
