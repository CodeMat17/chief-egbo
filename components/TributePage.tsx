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
// import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Import tributes data from your data source.
import { tributeData } from "@/data";
import Subheadings from "./Subheadings";

export interface Tribute {
  id: string;
  title: string;
  content: string; 
  from: string;
  type: "text" | "image";
}

const TributePage: React.FC = () => {
  const [tributes] = useState<Tribute[]>(tributeData);
  const [selectedTribute, setSelectedTribute] = useState<Tribute | null>(null);

  // For horizontal scroll tracking.
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Disable background scrolling when modal is open.
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
        <Subheadings text='Other Tributes' />

        {/* Horizontal scroll container for all screens */}
        <div className='relative'>
          <div
            ref={scrollContainerRef}
            className='flex space-x-4 overflow-x-auto scrollbar-hide py-4'>
            {tributes.map((tribute) => (
              <motion.div
                key={tribute.id}
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                whileHover={{ scale: 1.02 }}
                className='flex-shrink-0 w-11/12 max-w-xs'>
                <Card className='flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow border-gray-300 dark:border-gray-800'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <FileText className='text-gray-600 shrink-0' />
                      {tribute.title}
                    </CardTitle>
                    <CardDescription>
                      <p>- {tribute.from}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex-1'>
                    {tribute.type === "text" ? (
                      // Truncated preview using Tailwind's line-clamp-5.
                      <div className='prose prose-sm overflow-hidden scrollbar-hide line-clamp-5'>
                        {tribute.content}
                      </div>
                    ) : (
                      // Display an image thumbnail.
                      <div className='relative h-36 bg-gray-100 rounded-lg overflow-hidden scrollbar-hide'>
                        <Image
                          src={tribute.content}
                          alt={tribute.title}
                          fill
                          className='object-cover'
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className='flex justify-end'>
                    <Button
                      variant='outline'
                      onClick={() => setSelectedTribute(tribute)}
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

        {/* Modal dialog for full preview */}
        {/* <Dialog
          open={!!selectedTribute}
          onOpenChange={(open) => !open && setSelectedTribute(null)}>
          <AnimatePresence>
            {selectedTribute && (
              <DialogContent className='max-w-6xl h-[80vh] rounded-xl p-4 shadow-2xl overflow-hidden'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className='relative h-[90vh]'>
                  {selectedTribute.type === "text" ? (
                    <div className='p-2 mb-6 h-full overflow-y-auto scrollbar-hide prose prose-base max-w-none'>
                      <p className='text-lg font-medium'>
                        {selectedTribute.title}
                      </p>
                      <p className='mt-2 mb-4 italic'>
                        - {selectedTribute.from}
                      </p>
                      {selectedTribute.content.split("\n").map((para, idx) => (
                        <p key={idx} className='mb-4 '>
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className='relative w-full h-full overflow-auto scrollbar-hide'>
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='w-full max-w-[800px] mx-auto'>
                        <Image
                          src={selectedTribute.content}
                          alt={selectedTribute.title}
                          width={1200}
                          height={2339}
                          className='object-contain'
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </DialogContent>
            )}
          </AnimatePresence>
        </Dialog> */}

        {/* Custom Modal Implementation */}
        <AnimatePresence>
          {selectedTribute && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'
              onClick={() => setSelectedTribute(null)}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2 }}
                className='absolute inset-0 flex items-center justify-center p-4'
                onClick={(e) => e.stopPropagation()}>
                <div
                  ref={modalContentRef}
                  className='bg-background rounded-xl shadow-2xl w-full max-w-3xl max-h-[90dvh] flex flex-col'>
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedTribute(null)}
                    className='sticky top-0 z-10 ml-auto p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full m-2 transition-colors'
                    aria-label='Close'>
                    <X className='h-6 w-6 text-red-500' />
                  </button>

                  {/* Content Area */}
                  <div className='relative overflow-y-auto flex-1 pb-6 mx-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-amber-500/50 scrollbar-hide'>
                    {selectedTribute.type === "text" ? (
                      <div className='prose prose-base max-w-none'>
                        <h2 className='text-2xl font-semibold mb-2'>
                          {selectedTribute.title}
                        </h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-6 italic'>
                          From - {selectedTribute.from}
                        </p>
                        {selectedTribute.content
                          .split("\n")
                          .map((para, idx) => (
                            <p
                              key={idx}
                              className='mb-4 text-gray-700 dark:text-gray-300'>
                              {para}
                            </p>
                          ))}
                      </div>
                    ) : (
                      <div>
                      
                        <p className="italic mb-3">From - {selectedTribute.from}</p>
                        <motion.div
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          className='relative w-full aspect-[3/4] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden'>
                          <Image
                            src={selectedTribute.content}
                            alt={selectedTribute.title}
                            fill
                            className='object-contain'
                            sizes='(max-width: 768px) 100vw, 800px'
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TributePage;
