import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";

const Education = () => {

const [construction, setConstruction] = useState(false)
const [orthopaedic, setOrthopaedic] = useState(false)

  return (
    <section>
      {/* Education and Career */}
      <motion.section
        className='mb-16'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}>
        <h2 className='text-3xl font-bold mb-6 text-amber-500 dark:text-amber-600 border-b-2 border-amber-500 dark:border-amber-600 pb-2'>
          EDUCATION, APPRENTICESHIP, AND PROFESSIONAL CAREER
        </h2>
        <div className='space-y-8'>
          <div>
            <h3 className='text-xl font-semibold mb-1'>Early Education</h3>
            <p>
              My formal education commenced at Ezere, Awgu Local Government Area
              of Enugu State, under the guidance of a Reverend Father. My uncle,
              Mr Cyril Egbo who was the first Nomeh Indigene to obtain Standard
              Six Certificate, was posted as a teacher to Ezere in Awgu Local
              Government Area of Enugu State, he took me along to start my
              elementary education. Unfortunately, he died after a while. This
              made me to return home. Subsequently, I progressed to the
              Community School in Obeagu Ugbawka, where I completed Standard 1
              and 2. Unfortunately, the absence of financial support compelled
              me to discontinue my formal education at that juncture.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Apprenticeship in Masonry:
            </h3>
            <p>
              Undeterred by the challenges, I embarked on a journey of
              vocational training, becoming an apprentice in masonry under the
              tutelage of my relative, Ugwu George Egbo, in 1957. Over the
              course of two years, I honed my skills, emerging as a proficient
              mason. With the completion of my apprenticeship, I transitioned
              into freelancing, leveraging my acquired expertise to secure
              opportunities in the construction industry.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Career in Construction:
            </h3>
            <p
              className={`transition-all duration-300 ${
                !construction ? "line-clamp-[11]" : ""
              }`}>
              In 1965, my professional trajectory took a significant turn when I
              secured employment with Costain Construction Company. A year
              later, I joined Tarrywood Construction and Furniture Company, only
              to witness an interruption due to the Civil War in 1967.
              <br />
              <br />I stayed with my elder brother Mr Batholomew Anih at no4
              Okpatu Street, Coal Camp, Enugu before the civil war started and
              immediately after the war, I went back to Okpatu street where I
              was staying with my brother, for greener pasture. On my arrival at
              coal camp, I discovered that all our belongings had been looted by
              unidentified hoodlums who took advantage of the war to further
              cause pain.
              <br /> <br />
              The only thing that came to my mind was to start Ogbono business
              as it was very lucrative at the time but my uncle, Mr Egbo
              Chukwuegbo advised me to join builders as it was a very respected
              profession at the time. I heeded to his advice and joined the
              builders and that was how I developed myself in the field haven
              been trained by European Contractors. Meanwhile, I had done my
              apprenticeship in masonry before then.
              <br />
              <br />I was later employed by the Nigeria Construction and
              Furniture Company (NCFC) with my Trade Test Certificate in 1972. I
              was posted to Idumuje Ugboko in Delta State and Alor in Nnewi,
              Anambra State to represent my boss who was the secretary of the
              NCFC. Later on, I was posted to Owerri in Imo State, and finally
              returned to Calabar where I resigned on 10th May, 1974 as foreman
              grade level one.
            </p>
            <Button
              variant='outline'
              onClick={() => setConstruction(!construction)}
              className='text-amber-600 font-semibold rounded-xl mt-2'>
              {!construction ? "Read More" : "Read Less"}
            </Button>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Broadcasting Career and Post-War Ventures:
            </h3>
            <p>
              In 1974, my professional journey led me to the Nigeria
              Broadcasting Corporation in Calabar, a shift that broadened my
              experience beyond construction. The ensuing years saw me navigate
              the landscape of the Nigerian workforce, fostering connections and
              showcasing my multi-talented nature. Having traversed the country
              while working for influential figures, my reputation as a skilled
              and versatile professional continued to grow.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Dedication to the National Orthopaedic Hospital
            </h3>
            <p
              className={`transition-all duration-300 ${
                !orthopaedic ? "line-clamp-[11]" : ""
              }`}>
              On 16th May, 1976 after my resignation from NCFC, my brother who
              was a staff of National Orthopedic Hospital Enugu, asked me to
              bring my application letter to the hospital, which I did, and
              after passing the recruitment exercise, I was subsequently
              employed by the hospital as a foreman and was promoted to the
              position of foreman grade level one, a position I held for more
              than four years. I became frustrated and wanted to resign from the
              job as promotion was not forthcoming, but was later promoted to
              assistant supervisor in early 80s.
              <br />
              <br />
              My 29 years in the National Orthorpaedic Hospital, Enugu was
              characterized by unwavering dedication, diligence, and an
              unblemished record, having never received a single query till my
              retirement. Throughout my service, I shared camaraderie with
              notable colleagues such as Ukachi from Abia State, Mr. Unodiazi,
              Mr. Chieto, and Mr. Aneke, individuals who contributed to the
              enjoyable atmosphere within the hospital.
              <br />
              <br />
              During breaks, a group of us would gather under the shade of a
              mango tree within the hospital premises. Our discussions centred
              on matters of national importance, fostering constructive
              arguments and critical analyses of prevailing issues. Notably, our
              conversations avoided gossip, focusing instead on topics that
              contributed to both personal and professional growth. This
              communal engagement became a cornerstone of our shared experience
              at the National Orthopaedic Hospital.
            </p>
            <Button
              variant='outline'
              onClick={() => setOrthopaedic(!orthopaedic)}
              className='text-amber-600 font-semibold rounded-xl mt-2'>
              {!orthopaedic ? "Read More" : "Read Less"}
            </Button>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Versatility and Professional Acclaim:
            </h3>
            <p>
              My tenure at the hospital showcased not only my commitment to duty
              but also my inherent versatility. Possessing the ability to
              perform tasks beyond my formal training, I garnered admiration
              from both colleagues and influential figures in the hospital and
              beyond. This multifaceted skill set opened doors for me to work
              with and for prominent individuals, allowing me to traverse the
              length and breadth of Nigeria.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Mastery of Tiling and Divine Gift:
            </h3>
            <p>
              Among my diverse skills, I became one of the pioneers of tiling, a
              craft I mastered without formal training. This innate ability,
              often referred to by our people as &quot;Onatara Chi&quot; or a
              gift from God, set me apart in the field. Clients and colleagues
              alike recognized and appreciated my proficiency, further
              solidifying my standing in the construction space.
              <br />
              <br />
              My life&apos;s narrative reflects a journey shaped by resilience,
              adaptability, and an unyielding commitment to personal and
              professional growth. From the challenges of interrupted formal
              education to the heights of a distinguished career, I have
              embraced each chapter with determination. My legacy, forged
              through dedication to duty, camaraderie with colleagues, and a
              diverse skill set, stands as a testament to the power of
              perseverance in the pursuit of excellence.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Education;
