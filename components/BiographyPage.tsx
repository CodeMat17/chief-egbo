"use client";

import { motion } from "framer-motion";
import Biafra from "./biography/Biafra";
import Education from "./biography/Education";
import Faith from "./biography/Faith";
import Family from "./biography/Family";
import Intro from "./biography/Intro";
import Marital from "./biography/Marital";
import Triumphs from "./biography/Triumphs";
import Wife from "./biography/Wife";

const BiographyPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-[#020817]'>
      {/* Hero Section */}
      <header
        className='relative py-20 bg-cover bg-center text-center bg-gray-50'
        style={{ backgroundImage: "url('/logo.webp')" }}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='text-4xl font-bold mb-4 text-amber-500 drop-shadow-lg'>
          MEMOIRS OF CHIEF DENNIS ANIH
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-2xl font-semibold text-white drop-shadow-sm z-30'>
          OZUO-OMEE 1 OF NOMEH UNATAEZE
        </motion.h2>
      </header>

      <div className='max-w-4xl mx-auto px-4 py-12'>
        {/* Dedication */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold mb-6 text-amber-500 dark:text-amber-600 border-b-2 border-amber-500 dark:border-amber-600 pb-2'>
            DEDICATION
          </h2>
          <div className='space-y-4'>
            <p>
              This is dedicated to my lovely wife, my children and all my
              relations far and near.
            </p>
          </div>
        </motion.section>

        {/* Introduction */}
        <Intro />

        {/* Education and Career */}
        <Education />

        {/* BIAFRA WAR AND THE CONSEQUENCES */}
        <Biafra />

        {/*  MY MARITAL JOURNEY */}
        <Marital />

        {/* BUILDING  A STRONG AND  ACCOMPLISHED FAMILY */}
        <Family />

        {/*  TRIUMPHS AND TRIALS*/}
        <Triumphs />

        {/* A JOURNEY OF FAITH: MY DEVOTION TO CATHOLICISM */}
        <Faith />

        {/* MY WIFE - A BEACON OF SUPPORT. */}
        <Wife />

        {/* Genealogy */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}>
          <h2 className='text-3xl font-bold mb-6 text-amber-500 dark:text-amber-600 border-b-2 border-amber-500 dark:border-amber-600 pb-2'>
            GENEALOGY
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <p>
                Late Mr Egbonwaegbo was born alone. He married and gave birth to
                Aniegbo who later became the father of Chief Denis Anih.
                <br />
                <br />
                Chief Denis who is the only surviving person among his siblings,
                had late Bartholomew and Victoria as brother and sister. <br />
                <br />
                His grandfather, late Mr Egbonwaegbo was known as an epitome of
                wisdom, a capacity builder and a peacemaker.
                <br />
                <br />
                His father, late Mr Aniegbo was a very rich and famous farmer.
                It was through farming business that he was able to train the
                first standard six graduate in entire Nomeh Unataeze in the
                person of late Mr Cyril Egbo.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BiographyPage;
