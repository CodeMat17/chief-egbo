import { useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button';

const Wife = () => {

const [wife, setWife] = useState(false)

  return (
    <section>
      {" "}
      <motion.section
        className='mb-16'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}>
        <h2 className='text-3xl font-bold mb-6 text-amber-500 dark:text-amber-600 border-b-2 border-amber-500 dark:border-amber-600pb-2'>
          MY WIFE - A BEACON OF SUPPORT.
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p
              className={`transition-all duration-300 ${
                !wife ? "line-clamp-[11]" : ""
              }`}>
              In the grand fabric of my existence, there is a thread woven with
              love, resilience, and the unwavering support of a woman who is
              more than a wife – she is a beacon sent by the divine. The wisdom
              of Proverbs 19:14 echoes in my heart as I reflect on our shared
              journey.
              <br />
              <br />
              Our story commenced with vows exchanged and hearts conjoined,
              embarking on the unpredictable journey of marriage. Little did we
              fathom the challenges that awaited us as we set forth into the
              uncharted territory of life. From the very beginning, it was
              evident that my wife possessed qualities that transcended the
              ordinary – wisdom, understanding, and prudence, gifts bestowed by
              the divine hand. <br />
              <br />
              Parenthood brought forth its own set of challenges, raising seven
              children in a world that often felt turbulent and challenging.
              <br />
              <br />
              We found ourselves both employed at the National Orthopedic
              Hospital in Enugu, facing the harsh realities of life head-on. It
              was during these trying times that my wife&apos;s unwavering
              support revealed itself as a steady anchor in the stormy seas of
              our lives. <br />
              <br />
              Financial difficulties cast shadows on our dreams, and it was then
              that my wife&apos;s indomitable spirit came to the fore. In the
              face of adversity, she turned to a skill born out of love – the
              art of making Ukpo-Oka (Corn pudding). It became her
              entrepreneurial endeavour, a testament to her resourcefulness and
              commitment to providing for our family.
              <br />
              <br />
              The early morning hours became a canvas for my wife&apos;s
              dedication. Rising at 3 am, she, along with our children, embarked
              on the meticulous preparation of Ukpo-Oka. The aroma of corn
              pudding filled our home, symbolizing her determination to overcome
              the challenges that life threw our way. Even after a taxing day at
              work, she would rush to the market, ensuring that the ingredients
              for the next day&apos;s endeavour were in place. <br />
              <br />
              In the crucible of life, my wife emerged as a woman of
              unparalleled strength. Her resilience and discipline were the
              cornerstones of our family. It was not just the physical labor but
              also the emotional fortitude that defined her character. The
              challenges of life did not break her; instead, they forged her
              into a woman of substance.
              <br />
              <br />
              As the years unfolded, it became clear that our journey was not a
              solitary endeavour. The divine presence in our lives, as mentioned
              in Proverbs 19:14, was evident in the blessings we received. The
              struggles and sacrifices were not in vain; they were part of a
              larger plan, a testament to our faith and the strength of our
              union. <br />
              <br />
              Through the twists and turns of our shared narrative, the Ukpo-Oka
              venture became more than a means of sustenance. It embodied the
              essence of our perseverance, a tangible manifestation of our joint
              effort to weather the storms. The entrepreneurial spirit displayed
              by my wife mirrored her commitment not only to our family&apos;s
              financial stability but also to the values that held us together.{" "}
              <br />
              <br />
              In the fabric of our shared existence, my wife&apos;s unwavering
              support stands as a testament to the power of love and resilience.
              As we look back on the early mornings, late nights, and the
              fragrance of Ukpo-Oka, we see not just a chapter in our lives but
              a testament to the enduring strength of a love that transcends all
              obstacles. The divine connection that guided us through the trials
              has made our shared story of love, faith, and victory.
            </p>
            <Button
              variant='outline'
              onClick={() => setWife(!wife)}
              className='text-amber-600 font-semibold rounded-xl mt-2'>
              {!wife ? "Read More" : "Read Less"}
            </Button>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default Wife