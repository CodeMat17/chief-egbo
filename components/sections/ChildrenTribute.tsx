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
    name: "Chief Dr. Onyekaozulu Okolie Jr. Anih",
    position: "Son.",
    image: "/user.avif",
    tribute:
      "A Tribute to My Peaceful & Beloved Father.\n\n In Loving Memory\n\n Life is in chapters and stages, from the moment you were born to the moment you take your last breath, you do pass through this chapters or stages. For Chief Dennis Okeke Egbonwafogo ANIH, his last breath on earth was his last physical space and chapter on mother earth and a new chapter for the rest of the family and all those who has come to know him or related to him, we have no option than to face what is next for us all.\n\n I actually thought when this time come that I will be strong enough to receive it but alas emotion betrayed me, nature betrayed me and strength failed me. The shock was obvious and probably because I had many wishes for my dad and many other things we hold together and still planned to accomplish hunted me (how do we accomplish them together when you are no more). These are moments in our lives when we are compelled to pause, reflect, and honor the memory of those who have profoundly influenced our journey.\n\n Today, I write this tribute to celebrate the life and legacy of my dear loving father, peace loving father, whose presence and wisdom continue to guide me, even in his absence.\n\n A Man of Integrity\n\n My father was a man of unwavering integrity. His principles and values were the bedrock upon which he built his life and raised his family. He taught me the importance of honesty, hard work, and treating others with respect and kindness. These lessons were not merely imparted through words but demonstrated through the countless actions that defined his character.\n\n Early Years and Family\n\n Born in a small town called Nomeh Unateze, my father's early years were marked by simplicity and a deep sense of community. He often spoke of the tight-knit neighborhood where everyone knew each other and looked out for one another. His father's early death, struggle with life and the support from relatives and the community around him, his beautiful relationship with his siblings though he is the last of them to exit mother earth even when he was not the youngest. The support he got from the Egbochukwuegbo family (Egbochifuegbo himself, Eshiri, Nwekengene) and countless many others. His childhood stories were filled with adventures, agony, laughter, and the bonds that would shape his understanding of family and friendship.\n\n As he grew older, he met my mother, and their love story was one for the ages. They were partners in every sense of the word, facing life's challenges together with grace and resilience. Their love was a testament to the power of companionship and mutual respect. Together, they created a home filled with warmth, love, and endless support. In fact he gave everything to his family without holding back.\n\n Professional Accomplishments\n\n My father's professional life was nothing short of inspiring. He was dedicated to his career, always striving for excellence and never settling for mediocrity. His work ethic was unparalleled, and he earned the respect and admiration of his colleagues and peers. He believed in the importance of giving his best in everything he did, a philosophy that he instilled in me from a young age.\n\n His accomplishments were many, but he never sought recognition or accolades. Instead, he found fulfilment in knowing that he had made a positive impact through his work. Whether it was mentoring a young colleague, solving a complex problem, or simply being a reliable team member, my father's contributions were invaluable.\n\n Legacy of Love\n\n If there is one word that encapsulates my father's legacy, it is love. His love for his family was boundless and unconditional. He was always there for us, offering a listening ear, a comforting space, or words of wisdom when we needed them most. His love was a constant source of strength and reassurance, a reminder that we were never alone.\n\n He had a unique ability to make everyone around him feel valued and appreciated. Whether it was a kind word to a stranger or a gesture of support to a friend in need, my father's kindness knew no bounds. He believed in the goodness of people and made it his mission to spread positivity wherever he went.\n\n His appreciation of people and most often very quiet but always secretly giving back to the community around him. He spent a good amount of his resources in almsgiving and supporting the less privileged without announcement or public display.\n\n Lessons That Endure\n\n Though my father is no longer with us in the physical sense, his lessons continue to resonate in my life. I strive to live by the principles he taught me, to honor his memory by being the best version of myself. His guidance has shaped me into the person I am today, and for that, I am eternally grateful.\n\n He taught me the value of perseverance in the face of adversity, the importance of humility, and the power of empathy. His wisdom was profound, and his words often come to mind when I encounter life's challenges. In moments of doubt, I find solace in his teachings, knowing that his spirit lives on in the values he imparted.\n\n Tradition & Religion\n\n He was a baptized Catholic, married in the Catholic church where he remained till death. He is blessed to have married from the family that produced one of the finest and precious Catholic Priest east of the Niger Rev. Fr Patrick Animba who happen to be the first Nkanu Catholic Priest.\n\n All his children were baptised in the Catholic Church, trained using the teaching of the church while holding his customs and traditions dear to his heart.\n\n Most of the things I have come to learn about our customs and traditions were taught by my dad. He was a living encyclopaedia of Nomeh customs and traditions and by extension Igbo customs and traditions and history. He was a great farmer who proved his worth and strength during his days.\n\n A Final Farewell\n\n As I end this tribute, I am filled with a mix of emotions—gratitude for the time we shared, sorrow for the moments we will never have, and a deep sense of admiration for the incredible man my father was. Though his absence leaves a void that cannot be filled, his memory is a source of comfort and inspiration.\n\n To my beloved father, I say thank you. Thank you for your love, your guidance, and the countless memories that will forever be etched in my heart. Your legacy lives on in those who were fortunate enough to know you, and your spirit will continue to guide us on our journeys.\n\n Rest in peace, dearest dad, you are deeply missed, and you will never be forgotten.",
  },
  {
    id: 2,
    name: "Nneka Anih (Ugo Di be Eze)",
    position: "Daughter in Law.",
    image: "/user.avif",
    tribute:
      "It was difficult to write this tribute as words failed me. My Father in Law, Ozuome as his name implies wants everything complete and he loved me with such completeness. He welcomed me into his Family with open arms, whenever he felt I didn't do right, he would call me, we would speak and resolve issues amicably. My Father in Law understood life in many ways, he was full of wisdom. The news of his demise broke my heart because I loved him dearly.\n\n We had good memories together especially during his last days, we stood by him through thick and thin, in sickness and death...WE WERE THERE. I thank God for the opportunity to have met him and the Love we shared. I pray that God gives us the grace to heal in places that we do not know we are hurting and also gives us peace that passeth all understanding to bear this irreparable loss. Adieu Papa. Gaa nke oma. It is well.\n\n 'Goodbye is the loneliest word I know, so please don't say Goodbye' so put your hands in mine and say...My Darling, I will come back to you someday. Goodbye is the loneliest word I know, so please don't say Good bye.\n\n Till we meet again Daddy.\n\n I Love you.",
  },
  {
    id: 3,
    name: "Justina Mercelina Mgbeke Anih",
    position: "Wife.",
    image: "/user.avif",
    tribute:
      "Tribute to My Late Husband\n\n Our coming together was ordained by God and our journey through the earthly space is one with so much together. From the first moments in Nomeh Station where we met to the toils, struggles and success we saw in over fifty three years together.\n\n My heart brims with an ocean of memories, emotions, and love that I shared with you. Your presence in my life was akin to a guiding star, always illuminating my path and filling my world with warmth and joy. Our journey together was a tapestry woven with threads of laughter, trust, adventures, and boundless love.\n\n In the wake of your passing, I have found strength in the memories we created together and especially for our children. Your love is a constant presence in my life, guiding me through the darkest of days and reminding me of the beauty of our journey together. Although there are moments of profound sadness, there are also moments of deep gratitude for the time we shared and the love we experienced.\n\n May your soul rest peacefully with the Lord Jesus.\n\n May you continue to be there for us even from the heavens.\n\n May your love, sincerity of heart and peace continue to dwell with our children.\n\n Adieu",
  },
  {
    id: 4,
    name: "Ngozika Okafor",
    position: "Daughter.",
    image: "/user.avif",
    tribute:
      "TRIBUTE TO A LOVING DADDY, CHIEF EGBO NWAFOGO (OZUOME 1 NOMEH)\n\n As I sit here trying to find the right words to say, my heart inches with the realization that this is my farewell message to you (Daddy). The pain of losing you is immeasurable, and I struggle to comprehend a world without your presence. It's a bittersweet farewell as I must accept that you are no longer here with us. But I am grateful that you were my Dad and grateful for the memories we shared.\n\n Though you are physically no longer here, your spirit will always be present in my life. I will carry your love, your warmth and your precious moments. Your absence will be deeply felt, but I will find solace in knowing that you are now at peace, free from pain and suffering.\n\n Daddies Daddy as i have fondly call you, Mr. Anu farewell my dear beloved daddy. Your departure leaves an emptiness that cannot be filled but I take comfort in knowing that you are in a better place watching over us.\n\n May you find eternal happiness and serenity in the realm beyond.\n\n Adieu Daddies Daddy\n Adieu Egbo Nwafogo\n Adieu Chief Ozuome 1\n Adieu Oke Mmadu",
  },
  {
    id: 5,
    name: "Okafor Chiebuka Mike ",
    position: "Grand Son",
    image: "/user.avif",
    tribute:
      "A Tribute to My GrandFather Chief Dennis Okeke Anih (1935-2024) \n\n As I celebrate the life of my beloved grandfather, I'm filled with gratitude for the values he instilled in me and the memories we shared. Though our time together was limited, his wisdom and kindness left a lasting impact on me.\n\n I fondly remember our visits, especially the day he took me to the market and surprised me with a range. Those moments may seem small, but they speak volumes about his character and love.\n\n As a respected community leader and family patriarch, Grandpa your legacy extends far beyond our family. His 89 years on earth were a testament to his strength, resilience, and dedication to those around him. \n\n Rest in peace, dear grandfather. Your love, guidance, and memory will continue to inspire me and our family.\n\n May your legacy be a blessing to us all.\n\n Okafor Chiebuka Mike",
  },
  {
    id: 6,
    name: "Nneka Mbah (Nee ANIH)",
    position: "Daughter.",
    image: "/user.avif",
    tribute:
      "Daddy, I will forever miss your kindness, peaceful nature, hospitality and all the wonderful memories.\n\n I love you dearly and will forever miss you.\n\n At the heart of our family, daddy you stood as the unshakable pillar, the foundation upon which we build our lives. Your strength and resilience have carried us through the storms of life, providing a safe harbor during times of turbulence. You were a loving husband to my mother, a devoted father to my siblings and me.\n\n You did your best and was very hardworking!\n\n I will miss you daddy.",
  },
  {
    id: 7,
    name: "Chief Theophilus Sunday Nwachinemelu Mba",
    position: "Your humble son-in-law",
    image: "/user.avif",
    tribute:
      "TRIBUTE TO MY LATE FATHER IN LAW, CHIEF DENNIS ANIH (OZUOME 1 OF NOMEH UNATEZE).\n\n A Tribute to Chief Dennis Anih-Ozuome 1\n\n Today and always, we remember and celebrate the life of an extraordinary individual, Chief Dennis Anih-Ozuome 1 of Nomeh Unateze. Your passing has left an unfillable void in our lives, but your legacy continues to inspire and guide us.\n\n A Life of Service and Leadership\n\n As a respected leader in your community, you dedicated your life to serving others. Your wisdom, kindness, and generosity earned you the admiration and respect of all who knew you. Your commitment to the well-being of your immediate family members and by extension, the Umuegbonu people was evident in everything you did.\n\n A Pillar of Strength and Wisdom\n\n To our family, you were more than just a father-in-law; you were a pillar of strength, wisdom, and love. Your guidance and counsel helped shape us into the people we are today. Your unwavering support and encouragement gave us the confidence to pursue our dreams.\n\n A Lasting Legacy\n\n Though you may be gone, your legacy lives on through us. We will continue to draw strength from the values you instilled in us: hard work, integrity, and compassion. We will strive to make you proud and honour your memory in all that we do.\n\n A Heartfelt Thank You\n\n I want to express my deepest gratitude to you, dear father-in-law, for the precious gift of my wonderful wife, Mrs. Nneka Victoria Mba. You, together with your indefatigable wife, Mrs. Justina Anih groomed her into a well-mannered woman she is today. Her self-discipline and good nature has brought peace to me and my family as she is not only a hard workerbutalso a very dedicated and God fearing wife.\n\n A Source of Inspiration and Guidance\n\n Your wealth of experience was a constant source of inspiration and guidance for me. I often sought your counsel, and you were always willing to share your wisdom and insights. Your guidance helped shape me into the man I am today as I was very inexperienced when I came to marry your daughter many years ago; and I will always cherish the lessons you taught me.\n\n A Dream Realized\n\n I will never forget how your guidance and physical support enabled me to build a house in our village. It was a dream that seemed impossible, but with your invaluable advice and support, together with my amiable mother-in-law, we were able to make it a reality as you brought your wealth of experience and expertise in masonry to bear in achieving that feat.  Your contribution to our family's progress will never be forgotten.\n\n Your Legacy Lives On\n\n Though you may be gone, your legacy lives on through the countless lives you touched, including mine. I will continue to draw strength from the values you instilled in me, and I will strive to make you proud. Rest in peace, dear father-in-law. Your memory will be a blessing to us all.\n\n As I bid you farewell, I want to thank you once again for being an extraordinary father-in-law. Your impact on my life has been immense, and I will strive to make you proud.\n\n Rest in peace, dear Ozuome. May your soul find eternal rest in the loving arms of our Creator.\n From your humble son-in-law\n From your humble son-in-law",
  },
  {
    id: 8,
    name: "Chiamaka Okafor (Chidima)",
    position: "Grand Daughter",
    image: "/user.avif",
    tribute:
      "Tribute to My Beloved Grandfather. \n\n Though we may not have been as close as I would have liked, the memories I have of you, Granddad, are truly special. You always called me Chidima, and that nickname remains a cherished reminder of our bond. \n\n I admire the peaceful and gentle soul that you were. Your ability to bring our family together and create a sense of unity and love is a legacy that will live on through us. Your kindness and generosity of spirit extended beyond family ties, as you welcomed friends into our lives with open arms.\n\n I was fascinated to discover that you had explored my area of study, and though we never discussed it, I feel a deeper connection to you because of it. \n\n I still smile when I think of your beloved bicycle, which you would ride with such joy and freedom. Your warnings to us not to touch it only made it more intriguing! \n\n As I reflect on your life, I'm grateful for the values you instilled in us: peace, love, and unity. You may not have been one for grand gestures, but your quiet strength and gentle guidance have had a profound impact on our family. \n\n Rest in peace, dear Granddad. Your memory will continue to inspire and guide me. \n\n With love, \n\n Chiamaka Okafor (Chidima) Grand Daughter.",
  },

  {
    id: 9,
    name: "Anih Chimereze",
    position: "Grand Son",
    image: "/user.avif",
    tribute:
      "TRIBUTE TO MY LOVING GRAND PA \n\n Grand-pa, you are special and No one can replace you. You always had time for me, you brought me gifts, even if I didn’t tell you to. You always wanted to surprise me. I met you almost every morning to talk to you, on the last day I didn’t know it will be the last time I will see you; I thought you and I were going to have more time before you died.\n\n I wanted to have more time with you but I didn’t know it will be the last time. I will never see you again.\n\n I always thought there was going to be more time, before you passed away and went to heaven, because of my rigorous prayers, I didn’t know you were going to die so soon. I was planning to do a lot with you but before I knew it, the news came that you had passed on. Just five (5) years ago, you were strong and healthy, but last year I found out you were weak, you didn’t tell me about your condition and I didn’t even know what was happening until it was too late. Few years you were strong and able, but now may your soul rest in peace. I will always remember YOU Grand pa. \n\n Your Loving Grand Son – Anih Chimereze.",
  },
  {
    id: 10,
    name: "Anih Chibuzor",
    position: "GRAND SON",
    image: "/user.avif",
    tribute:
      "A TRIBUTE TO MY LOVING GRAND FATHER.\n\n My grandfather was a unique man who loved me & my siblings dearly he always tried to show us love the best way he could, he bought bicycles for us and told my father to make sure we learn it, that it will be very crucial in our day to day lives.\n\n He was calm & ensured that things were done the right way, the same character my father inherited also my little brother. \n\n My grandpa advised me and told me what to do. He is part of what made me what I am today. He made sure that any time he was happy, we were happy. He had a close relationship with every part of our family on his side and stretched out to those he could reach.  He had a special name for all of us, it was unique and great. My special memory with Grandpa, was when I killed a goat and a chicken signifying chief that I was a man. This impacted me, he told me that I should strive in what I do, become the best and make it work. This and many more I would miss about my late grand father. \n\n  By Your loving grandson, Anih Chibuzo.",
  },
  {
    id: 11,
    name: "Anih Nnenna",
    position: "Grand Daughter",
    image: "/user.avif",
    tribute:
      "TRIBUTE TO MY GRAND FATHER.\n\n My Grand Father Mr. Dennis Anih was a good man. A great man in his own way. I may not have seen him in his younger years. I am glad I met him in his later years due to our annual visits to the village.\n\n I remember those days he would ride his bicycle to the farm and wear his farmer’s hat and bag, a few years before he gradually became weak.\n\n He loved sharing his food and eating with his grandkids. I even remember sharing a plate of sumptuous water yam and Okro soup with him.\n\n My morning visits to his room, his wrinkling smile, tender skin, stout nature and funny walk, will forever remain bared in my heart. \n\n My Grand Father had a special name for me- Ada-Jie. No one will call me this name anymore.  Not sad, but happy memories to dwell on, as we go on with our various lives. I will sincerely miss my lovely Grand Father.\n\n Yours Truly,\n\n Anih Nnenna ",
  },
  {
    id: 12,
    name: "Kossiso Okafor",
    position: "Grand Daughter",
    image: "/user.avif",
    tribute:
      "TRIBUTE TO MY GRAND FATHER\n\n Grand father losing you was a sorrowful one and a great loss for the entire family.\n\n I will miss you grandpa.\n\n We will meet again in heaven.",
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
        <Subheadings text='Loving Memories from the immediate family.' />

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
                <h3 className='text-center text-lg font-semibold mt-4 mb-2'>
                  {tribute.name}
                </h3>
                <p className='text-center text-muted-foreground text-sm mb-4'>
                  {tribute.position}
                </p>
                <button className='w-full py-2 bg-amber-600/20 dark:bg-amber-400/10  rounded-xl text-amber-600  hover:bg-primary/20 transition-colors'>
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
