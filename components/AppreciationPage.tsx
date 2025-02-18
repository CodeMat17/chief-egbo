"use client";

import { Cinzel_Decorative } from "next/font/google";

import { motion } from "framer-motion";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: "700" });

// const appreciationMessages = [
//   {
//     id: 1,
//     title: "Grateful for Distant Guests",
//     message:
//       "We are deeply thankful to all those who traveled from far and wide to join us in remembering our beloved Chief. Your journey, sacrifice, and presence enriched the memorial and united our hearts in solidarity.",
//     image: "/appreciation-distant.jpg",
//   },
//   {
//     id: 2,
//     title: "Honoring Our Helpers",
//     message:
//       "Our sincere gratitude goes out to everyone who contributed their time, effort, and resources to ensure that the burial service was a success. Your selfless assistance in every detail made a difficult day a little easier.",
//     image: "/appreciation-helpers.jpg",
//   },
//   {
//     id: 3,
//     title: "A Community United",
//     message:
//       "In our hour of loss, the community came together like never before. The compassion, warmth, and unity you all displayed remind us that even in sorrow, there is hope and togetherness.",
//     image: "/appreciation-community.jpg",
//   },
// ];

const AppreciationPage: React.FC = () => {
  return (
    <div id='appreciation' className=' scroll-mt-20'>
      {/* Hero Section */}
      <header
        className='relative bg-cover bg-center py-12'
        style={{ backgroundImage: "url('/carousel/img_5.webp')" }}>
        <div className='absolute inset-0 bg-black/80'></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`text-3xl sm:text-4xl text-amber-400 font-bold mb-4 ${cinzel.className}`}>
            Appreciation
          </motion.h1>
        </div>
        <main className='max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 '>
          {" "}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='drop-shadow-2xl text-white'>
            During moments of profound loss, the presence of friends and family
            brings a comforting sense of solace and support. We extend our
            deepest gratitude to each and everyone of you for making out time
            for our family not minding the period we are in economically,
            security and many other things. <br />
            <br />
            We appreciate your supports, your advices and especially your
            prayers at this painful time in our family. The shared tears and
            heartfelt condolences have shown us that we are not alone in our
            grief, and for that, we are eternally grateful. <br />
            <br /> As we continue to mourn and heal, we are comforted by the
            knowledge that we are supported by such a compassionate and caring
            community. <br />
            <br /> May God bless you all, provide you peace and safety as
            throughout this period and always. <br />
            <br />
            Signed <br />
            <br />
            <strong>Dr. Chief Onyekaozulu Okolie Jr. ANIH</strong>
          </motion.p>
        </main>
      </header>

      {/* Appreciation Cards */}
    </div>
  );
};

export default AppreciationPage;
