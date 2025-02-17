"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { TributeModal } from "@/components/core/TributeModal";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
    name: "Nneka Anih (Ugo Di be Eze)",
    position: "Daughter in Law.",
    image: "/user.avif",
    tribute:
      "It was difficult to write this tribute as words failed me. My Father in Law, Ozuome as his name implies wants everything complete and he loved me with such completeness. He welcomed me into his Family with open arms, whenever he felt I didn't do right, he would call me, we would speak and resolve issues amicably. My Father in Law understood life in many ways, he was full of wisdom. The news of his demise broke my heart because I loved him dearly.\n\n We had good memories together especially during his last days, we stood by him through thick and thin, in sickness and death...WE WERE THERE. I thank God for the opportunity to have met him and the Love we shared. I pray that God gives us the grace to heal in places that we do not know we are hurting and also gives us peace that passeth all understanding to bear this irreparable loss. Adieu Papa. Gaa nke oma. It is well.\n\n 'Goodbye is the loneliest word I know, so please don't say Goodbye' so put your hands in mine and say...My Darling, I will come back to you someday. Goodbye is the loneliest word I know, so please don't say Good bye.\n\n Till we meet again Daddy.\n\n I Love you.",
  },
  {
    id: 2,
    name: "Chiamaka Okafor (Chidima)",
    position: "Grand Daughter",
    image: "/user.avif",
    tribute:
      "Tribute to My Beloved Grandfather. \n\n Though we may not have been as close as I would have liked, the memories I have of you, Granddad, are truly special. You always called me Chidima, and that nickname remains a cherished reminder of our bond. \n\n I admire the peaceful and gentle soul that you were. Your ability to bring our family together and create a sense of unity and love is a legacy that will live on through us. Your kindness and generosity of spirit extended beyond family ties, as you welcomed friends into our lives with open arms.\n\n I was fascinated to discover that you had explored my area of study, and though we never discussed it, I feel a deeper connection to you because of it. \n\n I still smile when I think of your beloved bicycle, which you would ride with such joy and freedom. Your warnings to us not to touch it only made it more intriguing! \n\n As I reflect on your life, I'm grateful for the values you instilled in us: peace, love, and unity. You may not have been one for grand gestures, but your quiet strength and gentle guidance have had a profound impact on our family. \n\n Rest in peace, dear Granddad. Your memory will continue to inspire and guide me. \n\n With love, \n\n Chiamaka Okafor (Chidima) Grand Daughter.",
  },
  {
    id: 3,
    name: "Okafor Chiebuka Mike ",
    position: "Grand Son",
    image: "/user.avif",
    tribute:
      "A Tribute to My GrandFather Chief Dennis Okeke Anih (1935-2024) \n\n As I celebrate the life of my beloved grandfather, I'm filled with gratitude for the values he instilled in me and the memories we shared. Though our time together was limited, his wisdom and kindness left a lasting impact on me.\n\n I fondly remember our visits, especially the day he took me to the market and surprised me with a range. Those moments may seem small, but they speak volumes about his character and love.\n\n As a respected community leader and family patriarch, Grandpa your legacy extends far beyond our family. His 89 years on earth were a testament to his strength, resilience, and dedication to those around him. \n\n Rest in peace, dear grandfather. Your love, guidance, and memory will continue to inspire me and our family.\n\n May your legacy be a blessing to us all.\n\n Okafor Chiebuka Mike",
  },
  {
    id: 4,
    name: "ANIH CHIMEREZE",
    position: "Grand Son",
    image: "/user.avif",
    tribute:
      "TRIBUTE TO MY LOVING GRAND PA \n\n Grand-pa, you are special and No one can replace you. You always had time for me, you brought me gifts, even if I didn’t tell you to. You always wanted to surprise me. I met you almost every morning to talk to you, on the last day I didn’t know it will be the last time I will see you; I thought you and I were going to have more time before you died.\n\n I wanted to have more time with you but I didn’t know it will be the last time. I will never see you again.\n\n I always thought there was going to be more time, before you passed away and went to heaven, because of my rigorous prayers, I didn’t know you were going to die so soon. I was planning to do a lot with you but before I knew it, the news came that you had passed on. Just five (5) years ago, you were strong and healthy, but last year I found out you were weak, you didn’t tell me about your condition and I didn’t even know what was happening until it was too late. Few years you were strong and able, but now may your soul rest in peace. I will always remember YOU Grand pa. \n\n Your Loving Grand Son – Anih Chimereze.",
  },
  {
    id: 5,
    name: "ANIH CHIBUZO",
    position: "GRAND SON",
    image: "/user.avif",
    tribute:
      "A TRIBUTE TO MY LOVING GRAND FATHER.\n\n My grandfather was a unique man who loved me & my siblings dearly he always tried to show us love the best way he could, he bought bicycles for us and told my father to make sure we learn it, that it will be very crucial in our day to day lives.\n\n He was calm & ensured that things were done the right way, the same character my father inherited also my little brother. \n\n My grandpa advised me and told me what to do. He is part of what made me what I am today. He made sure that any time he was happy, we were happy. He had a close relationship with every part of our family on his side and stretched out to those he could reach.  He had a special name for all of us, it was unique and great. My special memory with Grandpa, was when I killed a goat and a chicken signifying chief that I was a man. This impacted me, he told me that I should strive in what I do, become the best and make it work. This and many more I would miss about my late grand father. \n\n  By Your loving grandson, Anih Chibuzo.",
  },
  {
    id: 6,
    name: "Anih Nnenna",
    position: "Grand Daughter",
    image: "/user.avif",
    tribute:
      "TRIBUTE TO MY GRAND FATHER.\n\n My Grand Father Mr. Dennis Anih was a good man. A great man in his own way. I may not have seen him in his younger years. I am glad I met him in his later years due to our annual visits to the village.\n\n I remember those days he would ride his bicycle to the farm and wear his farmer’s hat and bag, a few years before he gradually became weak.\n\n He loved sharing his food and eating with his grandkids. I even remember sharing a plate of sumptuous water yam and Okro soup with him.\n\n My morning visits to his room, his wrinkling smile, tender skin, stout nature and funny walk, will forever remain bared in my heart. \n\n My Grand Father had a special name for me- Ada-Jie. No one will call me this name anymore.  Not sad, but happy memories to dwell on, as we go on with our various lives. I will sincerely miss my lovely Grand Father.\n\n Yours Truly,\n\n Anih Nnenna ",
  },
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
    <section
      id='children-tributes'
      className='py-12 px-4 md:px-8 bg-background text-foreground scroll-mt-20'>
      <div className='max-w-6xl mx-auto'>
        <Subheadings text='Loving Memories from the Children' />

        <div className='relative'>
          {/* Horizontal scroll container for all screens */}
          <div
            ref={scrollRef}
            className='flex  overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide'>
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
