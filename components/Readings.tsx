"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";
import { Cinzel_Decorative } from "next/font/google";
import EnglishRedings from "./EnglishRedings";
import IgboRedings from "./IgboReadings";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: "700" });

const Readings = () => {
  return (
    <div
      id='mass'
      className='min-h-screen bg-gray-50 dark:bg-[#020817] scroll-mt-20'>
      {/* Hero Section */}
      <header
        className='relative py-16 bg-cover bg-center text-center bg-gray-50'
        style={{ backgroundImage: "url('/mass.webp')" }}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`text-3xl sm:text-4xl font-bold text-amber-400 drop-shadow-lg ${cinzel.className}`}>
          Order of Mass
        </motion.h1>
      </header>
      <div className='lg:hidden w-full flex justify-center py-12'>
        <Tabs defaultValue='english' className=''>
          <TabsList className='flex gap-3 justify-center items-center'>
            <TabsTrigger
              value='english'
              className='py-2 rounded-xl border border-gray-300 text-gray-700 dark:text-gray-200 transition-colors 
                 data-[state=active]:bg-amber-500 data-[state=active]:text-white text-lg data-[state=active]:border-transparent 
                 dark:data-[state=active]:bg-amber-400'>
              English Version
            </TabsTrigger>
            <TabsTrigger
              value='igbo'
              className='py-2 rounded-xl border border-gray-300 text-gray-700 dark:text-gray-200 transition-colors 
                 data-[state=active]:bg-amber-500 data-[state=active]:text-white text-lg data-[state=active]:border-transparent 
                 dark:data-[state=active]:bg-amber-400'>
              Igbo Version
            </TabsTrigger>
          </TabsList>
          <TabsContent value='english' className=' w-full'>
            <EnglishRedings />
          </TabsContent>
          <TabsContent value='igbo'>
            <IgboRedings />
          </TabsContent>
        </Tabs>
      </div>
      <div className='max-w-5xl mx-auto hidden lg:flex gap-4'>
        <EnglishRedings />
        <IgboRedings />
      </div>
    </div>
  );
};

export default Readings;
