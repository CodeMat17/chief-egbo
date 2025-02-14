"use client";

import {  motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
import {  ArrowRight, ArrowLeft } from "lucide-react";
import { TributeModal } from "@/components/core/TributeModal";
import Subheadings from "../Subheadings";

// Define the Tribute type interface
interface Tribute {
  id: number;
  name: string;
  position: string;
  image: string;
  tribute: string;
}

// Mock data (can also be imported from '@/data')
const childrenTributes: Tribute[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Eldest Son",
    image: "/children/child_1.jpeg",
    tribute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dictum sem, at dignissim arcu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nSuspendisse potenti. Donec nec laoreet ligula. Sed sed nisl at nunc faucibus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dictum sem, at dignissim arcu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nSuspendisse potenti. Donec nec laoreet ligula. Sed sed nisl at nunc faucibus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dictum sem, at dignissim arcu.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nSuspendisse potenti. Donec nec laoreet ligula. Sed sed nisl at nunc faucibus dignissim.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Youngest Daughter",
    image: "/children/child_1.jpeg",
    tribute:
      "Consectetur adipiscing elit. Nulla facilisi. Mauris dictum justo sit amet urna fermentum, sit amet hendrerit dui dictum.",
  },
  // Add more tributes as needed
];

export const ChildrenTribute = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedTribute, setSelectedTribute] = useState<Tribute | null>(null);
  const [atEnd, setAtEnd] = useState(false);

  // Update the state to indicate if we've scrolled to the end.
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setAtEnd(scrollLeft >= scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className='py-12 px-4 md:px-8 bg-background text-foreground'>
      <div className='max-w-7xl mx-auto'>
      

        <Subheadings text='Loving Memories from the Children' />

        <div className='relative'>
          {/* Horizontal scroll container for all screens */}
          <div
            ref={scrollRef}
            className='flex space-x-2 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide'>
            {childrenTributes.map((tribute) => (
              <motion.div
                key={tribute.id}
                className='snap-center flex-shrink-0 w-[300px] mx-4 bg-card rounded-xl shadow-lg p-6 border border-gray-300 dark:border-gray-800 transition-transform hover:scale-105 cursor-pointer'
                onClick={() => setSelectedTribute(tribute)}>
                <div className='flex justify-center items-center'>
                  <div className='relative w-32 aspect-square'>
                    <Image
                      src={tribute.image}
                      alt={tribute.name}
                      fill
                      className='object-cover rounded-full mb-4'
                      loading='lazy'
                    />
                  </div>
                </div>
                <h3 className='text-center text-xl font-semibold mt-4 mb-2'>
                  {tribute.name}
                </h3>
                <p className='text-center text-muted-foreground text-sm mb-4'>
                  {tribute.position}
                </p>
                <button className='w-full py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors'>
                  Read Tribute
                </button>
              </motion.div>
            ))}
          </div>

          {/* Animated arrow indicator */}
          <motion.div
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500'
            animate={{ x: atEnd ? [0, -5, 0] : [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}>
            {atEnd ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
          </motion.div>
        </div>
        <TributeModal
          isOpen={!!selectedTribute}
          onClose={() => setSelectedTribute(null)}
          tribute={selectedTribute}
        />
      </div>
    </section>
  );
};
