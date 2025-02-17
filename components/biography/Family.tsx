import { useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button';

const Family = () => {

    const [edu, setEdu] = useState(false)
    const [independence, setIndependence] = useState(false);

  return (
    <section>
      {" "}
      <motion.section
        className='mb-16'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}>
        <h2 className='text-3xl font-bold mb-6 text-amber-600 dark:text-amber-400 border-b-2 border-amber-600 dark:border-amber-400 pb-2'>
          BUILDING A STRONG AND ACCOMPLISHED FAMILY
        </h2>
        <div className='space-y-8'>
          <p>
            Family is everything to me. My wife and I were committed to raising
            our children to become reliable and outstanding citizens. We had
            zero tolerance for laziness and unproductivity.
            <br />
            <br />
            The most profound and fulfilling journey has been the art of
            building a resilient and accomplished family. This narrative unfolds
            the chapters of my life, revealing the intricate balance of joys and
            sorrows that paved the way for a family of five grown-up daughters
            and two sons. Through love, endurance, and steadfast commitment, I
            emerged as the architect of a family that thrived against all odds.
          </p>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Early Years and Values
            </h3>
            <p>
              From the early days of parenthood, I recognized the importance of
              instilling strong moral and ethical values. Integrity, respect,
              and kindness became the guiding stars, shaping the character of
              each family member. These principles laid the foundation for a
              close-knit family that weathered storms with grace.
              <br />
              <br />
              We made sure that the right values were inculcated in them because
              the Holy Bible said “Train up a child in the way he should go, so
              that when he grows up, he will not depart from it”. It was not
              easy raising children in that kind of environment but our economy
              did not give us a better option.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Education as Empowerment:
            </h3>
            <p
              className={`transition-all duration-300 ${
                !edu ? "line-clamp-[11]" : ""
              }`}>
              In my unwavering commitment to empower my children, I recognized
              the transformative power of education as a guiding beacon in life
              and destiny. It surpassed the conventional pursuit of academic
              excellence; it became a holistic journey aimed at fostering
              critical thinking, igniting creativity, and instilling a profound,
              lifelong love for learning. <br />
              <br />
              The educational philosophy within our family was a departure from
              the traditional, emphasizing the development of not only
              intellectual prowess but also the cultivation of essential life
              skills. I encouraged my children to view education as a dynamic
              process, one that extends beyond the confines of textbooks and
              classrooms. This approach aimed to equip them with the tools
              necessary to navigate the complexities of the world with
              resilience and adaptability. <br />
              <br />
              Crucially, the emphasis on education in our family was
              gender-neutral. Each child, regardless of gender, was not only
              permitted but actively encouraged to explore and pursue their
              passions and aspirations. By dismantling gender stereotypes, we
              sought to create an environment where talents were recognized and
              nurtured irrespective of societal expectations. <br />
              <br />
              Education became a vehicle for self-discovery, allowing each child
              to unearth their unique strengths and interests. It was not a
              one-size-fits-all approach but a personalized journey that
              acknowledged and celebrated the individuality of each family
              member. This approach not only contributed to their academic
              success but, more importantly, cultivated a sense of
              self-awareness and purpose. <br />
              <br />
              Beyond the formal curriculum, we encouraged experiential learning
              and curiosity-driven exploration. Visits to museums, Zoo,
              engagement in creative projects, and participation in
              extracurricular activities were integral components of their
              education. These experiences were not just about acquiring
              knowledge; they were about fostering a passion for discovery,
              innovation, and the joy of continual growth. <br />
              <br />
              The overarching goal was to nurture well-rounded individuals who
              could contribute meaningfully to society. Education was not viewed
              as a means to an end but as a lifelong journey. I aimed to instil
              in my children the understanding that learning is a continuous
              process, an ever-evolving adventure that enriches the mind and
              soul. <br />
              <br />
              As a result, my children emerged from their educational journey
              not only academically proficient but also with a profound sense of
              self-confidence and a natural curiosity about the world. They
              developed the ability to think critically, solve problems
              creatively, and adapt to the ever-changing landscape of life.{" "}
              <br />
              <br />
              In retrospect, the emphasis on education as empowerment has been
              one of the cornerstones of our family&apos;s success. It has not
              only equipped my children with the knowledge and skills needed to
              navigate the challenges of the world but has also fostered a
              deep-seated love for learning that continues to shape their
              personal and professional endeavours. Education, in our family,
              became a powerful force that not only opened doors but empowered
              each child to carve out their unique paths. This extends to even
              members of our extended families, family and friends.
            </p>
            <Button
              variant='outline'
              onClick={() => setEdu(!edu)}
              className='text-amber-600 dark:text-amber-400 font-semibold rounded-xl mt-2'>
              {!edu ? "Read More" : "Read Less"}
            </Button>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-1'>Navigating Loss:</h3>
            <p>
              Life&apos;s journey is unpredictable, and our family faced a
              profound loss with the departure of our firstborn son who died on
              the 5th day of April, 2005. On that faithful day, my son,
              Onyekaozulu sent someone to call me that some important visitors
              came to see me at home, I excused myself from the office and came
              back home to meet some people in my house, I could not phantom
              what was going on until I was told. Everywhere became dark for me
              in broad day light.
              <br />
              <br />
              This tragedy became a crucible, testing the strength of our
              familial bonds. Rather than succumbing to despair, we channelled
              our grief into a wellspring of strength, teaching us that even in
              the darkest moments, love and support can endure.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Shattering Stereotypes:
            </h3>
            <p>
              In a society entrenched in gender norms, I took pride in breaking
              barriers and promoting equality within our family. Daughters were
              not just encouraged but expected to pursue their dreams with the
              same fervour as their brothers. Through actions, not just words,
              we dismantled stereotypes, creating a space where every family
              member felt empowered to chase greatness. There was nothing like,
              this is for men or this is for women. Even the boys were not
              excluded from house chores. We were intentional about that.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Cultivating Independence:
            </h3>
            <p
              className={`transition-all duration-300 ${
                !independence ? "line-clamp-[11]" : ""
              }`}>
              As my children transitioned into the threshold of adulthood, I
              embraced the pivotal role of cultivating their independence. It
              was a profound recognition that, much like the branches of a tree
              reaching for the sky, my children needed the space to grow and
              explore their individuality. In creating an environment that
              celebrated autonomy, I aimed not only to preserve our family
              legacy but also to empower each child to forge distinctive and
              meaningful paths in the vast world.
              <br />
              <br />
              This phase of fostering independence wasn&apos;t merely a
              practical necessity; it was a deliberate and thoughtful process of
              allowing my children to spread their wings and discover the depths
              of their own potential. It involved recognizing and respecting
              their unique identities, aspirations, and dreams.
              <br />
              <br />
              The foundation of this approach lay in instilling a sense of
              self-awareness and confidence in each child. I encouraged them to
              reflect on their values, interests, and goals, facilitating a
              deeper understanding of who they were and what they wanted to
              achieve. This self-discovery wasn&apos;t just an individual
              journey; it was a collective endeavour that contributed to the
              rich diversity within our family.
              <br />
              <br />
              In practical terms, this meant creating an open and non-judgmental
              space for dialogue. I actively listened to their perspectives,
              ideas, and concerns, fostering an environment where they felt not
              only heard but also understood. This mutual understanding formed
              the basis for the autonomy they needed to make decisions aligned
              with their unique journeys. <br />
              <br />
              Encouraging autonomy also involved allowing them to make choices,
              even if those choices differed from my own preferences. This
              wasn&apos;t an abdication of parental responsibility but a
              conscious effort to instil a sense of responsibility and
              accountability in each child. From selecting academic paths to
              making decisions about their personal lives, I aimed to impart the
              skills necessary for them to navigate the complexities of
              adulthood. <br />
              <br />
              Moreover, this journey towards independence was not without its
              challenges. There were moments of uncertainty, missteps, and even
              occasional setbacks. However, these experiences were integral to
              the process of growth and development. I was there not to shield
              them from every obstacle but to provide a supportive framework
              that enabled them to learn from both successes and failures.{" "}
              <br />
              <br />
              As my children embraced their newfound autonomy, I witnessed the
              blossoming of their individual potentials. They pursued diverse
              interests, ventured into uncharted territories, and, most
              importantly, contributed unique threads to the fabric of our
              family story. The collective strength of our family was not in
              uniformity but in the celebration of each member&apos;s
              distinctiveness. <br />
              <br />
              Ultimately, the cultivation of independence became a cornerstone
              of our family philosophy. It wasn&apos;t about severing ties but
              about empowering my children to carry the essence of our family
              values into their own narratives. By fostering their autonomy, I
              aimed to equip them with the resilience, adaptability, and
              self-assurance needed to navigate the intricacies of life,
              ensuring that they not only continued our family legacy but also
              crafted their own compelling chapters in the grand tapestry of
              existence.
            </p>
            <Button
              variant='outline'
              onClick={() => setIndependence(!independence)}
              className='text-amber-600 dark:text-amber-400 font-semibold rounded-xl mt-2'>
              {!independence ? "Read More" : "Read Less"}
            </Button>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Celebrating Together:
            </h3>
            <p>
              The measure of our family&apos;s success extended beyond
              individual accomplishments to collective triumphs. I took immense
              joy in celebrating each family member&apos;s achievements,
              fostering a culture of mutual support and encouragement. From
              academic successes to personal milestones, our family became a
              tight-knit community that revelled in each other&apos;s victories.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Reflections on Legacy:
            </h3>
            <p>
              This journey encapsulates the story of a father who, through
              unwavering commitment, resilience, and love, forged a family
              legacy. My legacy transcends time, echoing through the lives of my
              five grown-up daughters and a son. In the face of adversity, I
              emerged as a beacon of strength, demonstrating that a
              family&apos;s true wealth lies not in material possessions but in
              the enduring bonds forged through shared values, mutual support,
              and a commitment to building a brighter future together.
              <br />
              <br />
              As I reflect on this journey, I am filled with gratitude for the
              opportunity to shape a legacy that extends beyond myself. The
              story of our family is one of triumphs over tribulations, of love
              prevailing in the face of loss, and of breaking societal norms to
              foster equality and empowerment. The mosaic of our lives, though
              intricate and diverse, is held together by the unbreakable bonds
              of family. It is my hope that this narrative inspires others to
              embark on their own journeys of building strong, resilient
              families, grounded in love, values, and a shared commitment to a
              brighter future.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default Family