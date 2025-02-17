"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Subheadings from "./Subheadings";
import { condolenceData } from "@/data";

export interface Tribute {
  id: string;
  title: string;
  content: string; // For text: full text; for image: the image URL (in public)
  from: string; // Author or source name
  type: "text" | "image";
}

const CondolencePage: React.FC = () => {
  const [condolences] = useState<Tribute[]>(condolenceData);
  const [selectedTribute, setSelectedTribute] = useState<Tribute | null>(null);

  // Disable background scroll when modal is open.
  useEffect(() => {
    if (selectedTribute) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTribute]);

  // For horizontal scroll tracking.
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setAtEnd(scrollLeft >= scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initial check.
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Framer Motion variants for card animations.
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id='other-tributes'
      className='py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
      <div className='max-w-7xl mx-auto relative'>
        <Subheadings text='Condolence Messages' />

        {/* Horizontal scroll container */}
        <div className='relative'>
          <div
            ref={scrollContainerRef}
            className='flex space-x-4 overflow-x-auto scrollbar-hide py-4'>
            {condolences.map((condo) => (
              <motion.div
                key={condo.id}
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                whileHover={{ scale: 1.02 }}
                className='flex-shrink-0 w-11/12 max-w-xs'>
                <Card className='flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow border-gray-300 dark:border-gray-800'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <FileText className='text-gray-600 shrink-0' />
                      {condo.title}
                    </CardTitle>
                    <CardDescription>
                      <p>- {condo.from}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex-1'>
                    {condo.type === "text" ? (
                      <div className='prose prose-sm overflow-hidden scrollbar-hide line-clamp-5'>
                        {condo.content}
                      </div>
                    ) : (
                      <div className='relative h-36 bg-gray-100 rounded-lg overflow-hidden scrollbar-hide'>
                        <Image
                          src={condo.content}
                          alt={condo.title}
                          fill
                          className='object-cover'
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className='flex justify-end'>
                    <Button
                      variant='outline'
                      onClick={() => setSelectedTribute(condo)}
                      className='text-sm rounded-xl'>
                      View Tribute
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Animated arrow indicator */}
          <motion.div
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500'
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}>
            {atEnd ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
          </motion.div>
        </div>

        {/* Modal dialog for full preview using AnimatePresence */}
        <AnimatePresence>
          {selectedTribute && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'
              onClick={() => setSelectedTribute(null)}>
               <div className='absolute inset-0 flex items-center justify-center p-4'>

         
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2 }}
                className='absolute inset-0 flex items-center justify-center p-4'
                onClick={(e) => e.stopPropagation()}>
                <div className='bg-background rounded-xl shadow-2xl w-full max-w-3xl max-h-[90dvh] flex flex-col'>
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedTribute(null)}
                    className='sticky top-0 z-10 ml-auto p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full m-2 transition-colors'
                    aria-label='Close'>
                    <X className='h-6 w-6 text-red-500' />
                  </button>

                  {/* Content Area */}
                  <div className='overflow-y-auto flex-1 px-4 pb-6 mx-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-amber-500/50 scrollbar-hide'>
                    {selectedTribute.type === "text" ? (
                      <div className='prose prose-base max-w-none'>
                        <h2 className='text-2xl font-semibold mb-2'>
                          {selectedTribute.title}
                        </h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-4 italic'>
                          From - {selectedTribute.from}
                        </p>
                        {selectedTribute.content
                          .split("\n")
                          .map((para, idx) => (
                            <p key={idx} className='mb-4'>
                              {para}
                            </p>
                          ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='relative w-full overflow-auto scrollbar-hide'>
                        <Image
                          src={selectedTribute.content}
                          alt={selectedTribute.title}
                          width={1653}
                          height={2339}
                          className='w-full h-auto object-contain'
                          sizes='(max-width: 768px) 100vw, 800px'
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
                </motion.div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CondolencePage;
