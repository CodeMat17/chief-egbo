"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const appreciationMessages = [
  {
    id: 1,
    title: "Grateful for Distant Guests",
    message:
      "We are deeply thankful to all those who traveled from far and wide to join us in remembering our beloved Chief. Your journey, sacrifice, and presence enriched the memorial and united our hearts in solidarity.",
    image: "/appreciation-distant.jpg",
  },
  {
    id: 2,
    title: "Honoring Our Helpers",
    message:
      "Our sincere gratitude goes out to everyone who contributed their time, effort, and resources to ensure that the burial service was a success. Your selfless assistance in every detail made a difficult day a little easier.",
    image: "/appreciation-helpers.jpg",
  },
  {
    id: 3,
    title: "A Community United",
    message:
      "In our hour of loss, the community came together like never before. The compassion, warmth, and unity you all displayed remind us that even in sorrow, there is hope and togetherness.",
    image: "/appreciation-community.jpg",
  },
];

const AppreciationPage: React.FC = () => {
  return (
    <div id='appreciation' className='min-h-screen scroll-mt-20'>
      {/* Hero Section */}
      <header
        className='relative h-96 bg-cover bg-center'
        style={{ backgroundImage: "url('/bg_2.webp')" }}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-4xl font-bold mb-4'>
            In Appreciation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-xl max-w-2xl'>
            Honoring everyone who traveled far to join us and those who helped
            make the memorial a beautiful celebration of life.
          </motion.p>
        </div>
      </header>

      {/* Appreciation Cards */}
      <main className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            Our Heartfelt Thanks
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {appreciationMessages.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className='flex flex-col'>
                <Card className='shadow-lg hover:shadow-xl transition-shadow border-gray-400 dark:border-gray-700'>
                  <CardHeader>
                    <CardTitle className='text-2xl font-bold'>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='p-4'>
                    <p className='mb-4'>{item.message}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AppreciationPage;
