import { useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button';

const Intro = () => {

const [intro, setIntro] = useState(false)

  return (
    <section>
      {" "}
      <motion.section
        className='mb-16'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}>
        <h2 className='text-3xl font-bold mb-6 text-amber-600 dark:text-amber-400 border-b-2 border-amber-600 dark:border-amber-400 pb-2 '>
          INTRODUCTION
        </h2>
        <div className='space-y-4'>
          <p
            className={`transition-all duration-300 ${
              !intro ? "line-clamp-[18]" : ""
            }`}>
            Join me on a journey through the pages ahead, where I&apos;ll share
            the ups and downs, the twists and turns that have shaped my life.
            I&apos;ll dive into the threads of family and relationships,
            exploring the connections that define who we are. One pivotal
            chapter unfolds as we revisit the Biafra War, a moment that left a
            lasting impact on my family for generations.
            <br /> <br />
            But this isn&apos;t just a history lesson; it&apos;s a peek into my
            educational pursuits, the jobs I&apos;ve taken, and the skills
            I&apos;ve honed along the way. I&apos;ll pull back the curtain on my
            hobbies, those little escapes that add color to life and provide
            much-needed moments of peace and fulfilment.
            <br /> <br />
            In a community known as Nomeh Unataeze in Nkanu East Local
            Government Area of Enugu State, there is a philanthropist, wisdom
            consultant and a perfect gentleman. His name is Chief Denis Anih
            (Ozuo-omee 1 of Nome Nnataeze).
            <br /> <br />
            As we move into the realm of marriage, I&apos;ll share the intimate
            details of love, the challenges faced, and the growth experienced
            within the confines of a committed relationship. From there,
            I&apos;ll explore the art of building a family, not just based on
            blood ties but on shared dreams, values, and aspirations.
            <br /> <br />
            Triumphs and trials are the building blocks of character, and
            I&apos;ll lay them bare for you. Every victory a testament to
            resilience, every trial a refining fire for the soul. Through these
            stories, you&apos;ll get a glimpse of a life fully lived—a mosaic of
            relationships, learning, passion, and the relentless pursuit of a
            fulfilled existence.
            <br /> <br />
            This narrative is my journey, an exploration of the human experience
            from the close-knit bonds of family to the broader impact we can
            have on society. So, let&apos;s embark on this adventure together.
            May the pages turn with excitement, and may the tales within
            resonate with the echoes of our shared humanity.
          </p>

          <Button
            variant='outline'
            onClick={() => setIntro(!intro)}
            className='text-amber-600 dark:text-amber-400 font-semibold rounded-xl'>
            {!intro ? "Read More" : "Read Less"}
          </Button>
        </div>
      </motion.section>
    </section>
  );
}

export default Intro