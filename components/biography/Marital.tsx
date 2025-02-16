import { useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button';

const Marital = () => {

const [marital, setMarital] = useState(false)

  return (
    <section>
      <motion.section
        className='mb-16'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}>
        <h2 className='text-3xl font-bold mb-6 text-amber-500 dark:text-amber-600 border-b-2 border-amber-500 dark:border-amber-600pb-2'>
          MY MARITAL JOURNEY
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p
              className={`transition-all duration-300 ${
                !marital ? "line-clamp-[11]" : ""
              }`}>
              Embarking on the journey of marriage, I recall the timeless wisdom
              from the Bible: &quot;It is not good for man to be alone.&quot;
              This sentiment began to resonate within me, prompting a profound
              realization that I needed a life partner. My quest for
              companionship commenced in the post-war era, leading me to a
              fateful encounter with a remarkable woman named Justina Mgbeke
              Animba, a skilled seamstress stationed at Nomeh.
              <br />
              <br />
              Our connection initially revolved around business transactions,
              but as time unfolded, a deeper bond blossomed. Justina&apos;s
              warmth and grace captivated my heart, and gradually, love took
              root. After careful consideration, I mustered the courage to
              express my feelings, and to my joy, she reciprocated, accepting my
              proposal. <br />
              <br />
              With excitement and anticipation, I shared the news with my
              family. Emissaries were dispatched to her elder brother, Okolie
              Animba, who resided in Enugu at the time. The journey to unite our
              lives began, guided by tradition and familial blessings. Although
              Justina&apos;s father, Ben Nweke Animba, had sadly passed away
              during the Biafra War, her mother, Nwanzi Roseline Animba, played
              an integral role in the unfolding narrative. <br />
              <br />
              Notably, my beloved wife, Justina, held a special place in her
              family as the fifth child and the first daughter. Her eldest
              brother, the late Reverend Father Patrick Animba, achieved a
              historic milestone by becoming the first indigenous Nkanu man
              ordained as a Roman Catholic Priest worldwide—an accolade that
              added a unique dimension to our family narrative. <br />
              <br />
              The ceremonial rites, a harmonious blend of tradition and
              spirituality, unfolded seamlessly. The auspicious occasion took
              place at St. Patrick&apos;s Catholic Church in Agbani, Nkanu West
              Local Government Area, marking the union of two souls on 25th
              July, 1971. As we exchanged vows and sought the blessings of both
              earthly and divine authorities, little did we know the rich
              tapestry that our marital journey would weave over the years.
              <br />
              <br />
              Our union has been blessed with the laughter and joy of seven
              wonderful children, each a unique thread in the intricate fabric
              of our family legacy. They are:
            </p>
                      {marital && <ul className='list-disc pl-6 my-4 uppercase'>
                          <li>Amoge</li>
                          <li>Chika</li>
                          <li>Ngozi</li>
                          <li>Chibuzo (late)</li>
                          <li>Nneka</li>
                          <li>Ijeoma</li>
                          <li>Chief Onyekaozulu</li>
                      </ul>
                          
                      }
                      {marital && <p>
                          As we navigated the ebb and flow of life together, our family
                          became a testament to the enduring power of love, resilience, and
                          shared commitment. Though we faced the sorrow of losing our dear
                          Chibuzo, the strength of our familial bonds remained unwavering, a
                          testament to the enduring spirit that unites us.
                          <br />
                          <br />
                          In recounting this chapter of my life, I am filled with gratitude
                          for the blessings and challenges that shaped our journey. The
                          narrative of our marital union is a reflection of the love that
                          transcends time, a love that has weathered storms and celebrated
                          triumphs—a love that continues to be the guiding force in the rich
                          tapestry of our shared existence. <br />
                          <br />
                          My marriage with my wife is 53 years old this year and it is a
                          product of commitment, respect for each other, forbearance, love,
                          etc.
                      </p>
                      }
            <Button
              variant='outline'
              onClick={() => setMarital(!marital)}
              className='text-amber-600 font-semibold rounded-xl mt-2'>
              {!marital ? "Read More" : "Read Less"}
            </Button>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default Marital