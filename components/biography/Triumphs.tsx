import { useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button';

const Triumphs = () => {

const [triumphs, setTriumphs] = useState(false)

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
          TRIUMPHS AND TRIALS
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p
              className={`transition-all duration-300 ${
                !triumphs ? "line-clamp-[11]" : ""
              }`}>
              Life has been a journey filled with both triumphs and trials, a
              narrative that unfolded against the backdrop of dreams and
              unforeseen challenges. Growing up, I harboured grand aspirations
              for myself, fuelled by the boundless optimism that youthfulness
              brings. However, the untimely departure of my father cast a shadow
              over those dreams, thrusting me into the uncertain early years of
              adulthood.
              <br />
              <br />
              In my quest to find my bearings, I made a pivotal decision to
              carve a niche for myself in the construction space. The early days
              were marked by relentless struggle, but my determination to forge
              ahead remained unwavering. Yet, just as my career gained momentum,
              the Civil War shattered all hopes. Those tumultuous three-plus
              years were characterized by a sense of hopelessness, as I
              witnessed the loss of loved ones, friends, and associates, often
              succumbing to the harsh realities of hunger and malnutrition.{" "}
              <br />
              <br />
              Surviving the war felt like a miraculous feat, a stark reminder of
              the fragility of life. In the aftermath, the daunting question of
              where to rebuild and restart lingered in the air. Still, with an
              unyielding faith in God and an insatiable desire to succeed, I
              pivoted to agriculture, cultivating and marking produce within
              Nkanu and later venturing into the bustling Enugu metropolis. I
              have also travelled to various parts of the world including United
              Kingdom and many other parts of Nigeria.
              <br />
              <br />
              My journey took an unexpected turn when I secured employment with
              the Nigeria Construction and Furniture Company (NCFC). Later, I
              found myself at the Nigeria Broadcasting Corporation in Calabar
              before returning to Enugu in 1976, where I joined the National
              Orthopaedic Hospital. It was here that I concluded my civil
              service career in 2005, a year marred by the profound loss of my
              first son, Chibuzo. His departure, in the prime of his life, was a
              devastating blow that left an indelible mark on my soul. The pain
              was overwhelming, but I summoned the strength to press on, finding
              solace in the presence of his surviving siblings. <br />
              <br />
              The challenges that followed sought to discourage and derail my
              journey, but I remained steadfast in my resolve. Life&apos;s
              inherent unfairness tested my resilience, yet with unwavering
              faith in God, I emerged triumphant. Each victory, a testament to
              the human spirit&apos;s capacity to endure and overcome, paved the
              way for the next chapter of my life.
              <br />
              <br />
              Those were the building blocks of my character. <br />
              <br />
              The chieftaincy title, OZUO-OMEE of Nomeh Unataeze was because of
              my benevolence and kind-heartedness as more than forty people have
              benefited in one way or the other from my gesture. Today, by the
              grace of Almighty God I am the eldest man in Umuegbonu family in
              Nomeh Unataeze.
            </p>
            <Button
              variant='outline'
              onClick={() => setTriumphs(!triumphs)}
              className='text-amber-600 font-semibold rounded-xl mt-2'>
              {!triumphs ? "Read More" : "Read Less"}
            </Button>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default Triumphs