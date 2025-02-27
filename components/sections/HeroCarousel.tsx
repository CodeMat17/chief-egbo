"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const HeroCarousel = () => {
  const items = [
    {
      id: 1,
      img: "/carousel/img_2.webp",
      text: "A visionary leader & philanthropist",
      altText: "Memorial flowers arrangement",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAAAAXNSR0IArs4c6QAAAS1JREFUKFMVzT0vQ1EYwPH/c8657fUSgrJIxGCTsIkvYBObBWEzER/OIpHYCNqUBr1NUVGvUdIiSHvvPY90/yU/qUcFFVWMZqDxhY6NYocGMSJkjEHqlaLS/CI5KdEsXfE9MMzUziZBXy/OCFKPiho/vfBdrdH6fKNUeWBha5vcxDi2C+6jgv69vnJ1eMT7+wfRc4vFlVVm5udw3eI+ymvabvOYP+a38cFuocrK2hKT07NkB4aRu3JRFWhcnnGwt89P3wgb68uEYYiTFKmVz1RFIPG8PD8RZLPkciMEzmJ8B7m+OFUbhASZHvAd4jjGGIszIOqRm4u8urAfYwzqU9IkBgHjE5ymyG35XBGLdQ5Q0qQD3iNJm8Ba5LZyqZrEuGwP4PFdoB7/90MmDPkHyWSQ16L3OG0AAAAASUVORK5CYII=",
    },
    {
      id: 2,
      img: "/carousel/img_1.webp",
      text: "Forever in Our Hearts",
      altText: "Memorial flowers arrangement",
    },

    {
      id: 3,
      img: "/carousel/img_3.webp",
      text: "A trailblazer",
      altText: "Memorial flowers arrangement",
    },
    {
      id: 4,
      img: "/carousel/img_4.webp",
      text: "Your legacy will continue to inspire",
      altText: "Memorial flowers arrangement",
    },

    {
      id: 5,
      img: "/carousel/img_5.webp",
      text: "Rest In Peace, Daddy.",
      altText: "Memorial flowers arrangement",
    },
  ];

  const autoRotate = 5;
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Check if user prefers reduced motion
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);

    // Only auto-rotate if not paused and there's an interval
    if (!isPaused && autoRotate) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, autoRotate * 1000);

      return () => clearInterval(interval);
    }
  }, [autoRotate, items.length, isPaused]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Pause on hover for better readability
  // const handleMouseEnter = () => setIsPaused(true);
  // const handleMouseLeave = () => setIsPaused(false);

  if (!mounted) return null;

  return (
    <section
      id='home'
      {...handlers}
      className='relative h-[75vh] md:h-[90vh] w-full overflow-hidden bg-white scroll-mt-20'
      aria-label='Hero Carousel'
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false} mode='wait'>
        {items.map(
          (item, index) =>
            activeIndex === index && (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.8, ease: "easeInOut" }
                }
                className='absolute inset-0'>
                <div className='relative w-full h-full'>
                  {/* Image with responsive sizing */}
                  <motion.div
                    className='absolute inset-0'
                    initial={{ scale: shouldReduceMotion ? 1 : 1 }}
                    animate={{ scale: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 1.2, ease: "easeOut" }
                    }>
                    <Image
                      src={item.img}
                      alt={item.altText}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={100}
                      className='object-cover md:object-contain object-center'
                      sizes='(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw'
                      placeholder={index === 0 ? "blur" : undefined}
                      blurDataURL={item.blurDataURL}
                    />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/50' />

                  {/* Text content */}
                  <motion.div
                    className='absolute bottom-20 right-0 text-right p-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { delay: 0.4, duration: 0.5 }
                    }>
                    <div className='max-w-4xl mx-auto space-y-6'>
                      <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide leading-tight text-white drop-shadow-2xl'>
                        {item.text}
                      </h1>
                      <motion.div
                        className=' h-px bg-amber-500 mx-auto'
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { delay: 0.8, duration: 1.2 }
                        }
                        style={{ maxWidth: "400px" }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 items-center'>
        <button
          onClick={handlePrev}
          className='p-3 rounded-full bg-amber-500/50 hover:bg-amber-500/20 backdrop-blur-sm  transition-all duration-300 hover:scale-110'
          aria-label='Previous slide'>
          <svg
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className='flex items-center gap-3 mx-2'>
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-amber-500 scale-125"
                  : "bg-white/70 border border-amber-500 hover:bg-white/70"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className='p-3 rounded-full bg-amber-500/50 hover:bg-amber-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110'
          aria-label='Next slide'>
          <svg
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>

        {/* New: Pause/Resume Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className={`p-3 rounded-full bg-amber-500/50 hover:bg-amber-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isPaused ? "ring ring-amber-500" : ""
          }`}
          aria-label={isPaused ? "Resume carousel" : "Pause carousel"}
          aria-pressed={isPaused}>
          {isPaused ? (
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              {/* Play icon */}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              {/* Pause icon */}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 9v6m4-6v6'
              />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
