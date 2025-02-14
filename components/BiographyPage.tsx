"use client";

import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

const BiographyPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-[#020817] '>
      {/* Hero Section */}
      <header
        className='relative py-20 bg-cover bg-center bg-gray-50'
        style={{ backgroundImage: "url('/logo.webp')" }}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-4xl font-bold mb-4'>
            Biography of Late Chief Dennis Okeke Anih
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-xl max-w-2xl'>
            A visionary leader, philanthropist, and community trailblazer whose
            legacy continues to inspire.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        {/* Biography Sections */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            Early Life &amp; Education
          </h2>
          <p className='mb-6 leading-relaxed'>
            Born in [Birth Year] in [Birth Place], Chief Dennis Okeke Anih
            exhibited exceptional promise from an early age. Educated at
            prestigious institutions, he excelled in academics while developing
            a strong sense of community and leadership.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Community Leadership</h2>
          <p className='mb-6 leading-relaxed'>
            As a passionate community leader, Chief Dennis Okeke Anih
            spearheaded initiatives in education, healthcare, and economic
            development that transformed lives and uplifted entire communities.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Legacy &amp; Impact</h2>
          <p className='mb-6 leading-relaxed'>
            His unwavering commitment to social justice and community
            empowerment left an indelible mark on the lives of many. Chief
            Dennis Okeke Anih’s legacy continues to guide and inspire community
            leaders across the region.
          </p>
        </motion.section>

        {/* Timeline Cards */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
          <Card className='border-gray-400 dark:border-gray-700'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold'>1970 - 1980</CardTitle>
              <CardDescription>Formative Years</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The early years of Chief Dennis Okeke Anih, where his innate
                leadership qualities began to shine.
              </p>
            </CardContent>
          </Card>
          <Card className='border-gray-400 dark:border-gray-700'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold'>1980 - 1990</CardTitle>
              <CardDescription>Rise to Prominence</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                A transformative period during which he emerged as a trusted
                community figure and advocate for change.
              </p>
            </CardContent>
          </Card>
          <Card className='border-gray-400 dark:border-gray-700'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold'>1990 - 2000</CardTitle>
              <CardDescription>Community Transformation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                His leadership led to groundbreaking projects that improved the
                lives of many.
              </p>
            </CardContent>
          </Card>
          <Card className='border-gray-400 dark:border-gray-700'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold'>2000 - 2010</CardTitle>
              <CardDescription>Lasting Legacy</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                In his later years, he devoted himself to mentoring emerging
                leaders and ensuring his vision lived on.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  );
};

export default BiographyPage;
