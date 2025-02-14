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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Import tributes data from your data source.
import { tributeData } from "@/data";
import Subheadings from "./Subheadings";

export interface Tribute {
  id: string;
  title: string;
  content: string; // For text: full text; for image: the image URL (in public)
  from: string; // Author or source name
  type: "text" | "image";
}

const TributePage: React.FC = () => {
  // Use the imported tributeData.
  const [tributes] = useState<Tribute[]>(tributeData);
  const [selectedTribute, setSelectedTribute] = useState<Tribute | null>(null);

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
    <div className='py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto relative'>
        <Subheadings text='Tributes' />

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
                      <div className='prose prose-sm overflow-hidden line-clamp-5'>
                        {tribute.content}
                      </div>
                    ) : (
                      // Display an image thumbnail.
                      <div className='relative h-36 bg-gray-100 rounded-lg overflow-hidden'>
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
        <Dialog
          open={!!selectedTribute}
          onOpenChange={(open) => !open && setSelectedTribute(null)}>
          <AnimatePresence>
            {selectedTribute && (
              <DialogContent className='max-w-4xl min-h-screen rounded-xl p-6 shadow-2xl'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className='relative h-[80vh]'>
                  <p className='text-xl font-medium'>{selectedTribute.title}</p>
                  <p className='mt-2 italic'>- {selectedTribute.from}</p>
                  {selectedTribute.type === "text" ? (
                    <div className='p-6 h-full overflow-y-auto prose prose-base max-w-none'>
                      {selectedTribute.content.split("\n").map((para, idx) => (
                        <p key={idx} className='mb-4'>
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className='relative w-full h-full'>
                      <Image
                        src={selectedTribute.content}
                        alt={selectedTribute.title}
                        fill
                        className='object-contain'
                      />
                    </div>
                  )}
                </motion.div>
              </DialogContent>
            )}
          </AnimatePresence>
        </Dialog>
      </div>
    </div>
  );
};

export default TributePage;
