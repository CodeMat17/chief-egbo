import { useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button';

const Biafra = () => {

const [biafra, setBiafra] = useState(false)

  return (
    <section>
      <motion.section
        className='mb-16'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}>
        <h2 className='text-3xl font-bold mb-6 text-amber-600 dark:text-amber-400 border-b-2 border-amber-600 dark:border-amber-400 pb-2'>
          BIAFRA WAR AND THE CONSEQUENCES
        </h2>
        <div className='space-y-4'>
          <p
            className={`transition-all duration-300 ${
              !biafra ? "line-clamp-[11]" : ""
            }`}>
            In the late 1960s, Nigeria was thrown into a brutal conflict that
            would later be known as the Biafra War or the Nigerian Civil War. I
            was living in Eastern Nigeria at the time, Nomeh Unateze precisely
            and the consequences of those tumultuous years left an indelible
            mark on our lives.
            <br />
            <br />I was already preparing to be enrolled in the then Biafra
            Army, In 1965, for my desire and love for the Army, I followed other
            young boys to 82 Division of the Nigeria Army, Enugu to be recruited
            into the force. I had passed all the prerequisite tests at the time.
            We were asked to go to Okigwe to complete our training and other
            necessary preparations. My dream of becoming a Biafran Soldier was
            truncated when my elder brother, Bartholomew Anih confronted me, he
            saw how determined I was to join when he cried and said I should
            shoot him first before leaving. In his words: “ you want to go to
            war and die, leaving me without a brother”. My heart felt bad within
            me seeing my elder brother in that condition, I later changed my
            mind and stayed back.
            <br />
            <br />
            The war started on 6th July, 1967 when the southeastern region,
            predominantly occupied by the Igbo ethnic group, declared itself an
            independent state called Biafra. The Nigerian government swiftly
            responded, leading to a full-blown war that lasted until 15th
            January, 1970.
            <br />
            <br />
            One of the most heartbreaking consequences was the humanitarian
            crisis. The Nigerian government imposed a blockade on Biafra,
            resulting in widespread famine and disease. Images of starving
            children and families became synonymous with the war, bringing
            international attention to the suffering.
            <br />
            <br />
            The human toll was staggering. Millions lost their lives due to
            direct combat, starvation, or disease. Families were torn apart, and
            entire communities were displaced. I personally witnessed the
            struggles of friends and neighbours, trying to survive amidst the
            chaos.
            <br />
            <br />
            The economic devastation was palpable. Infrastructure lay in ruins,
            and the region faced economic stagnation for years. Rebuilding our
            lives and communities seemed like an insurmountable task.
            <br />
            <br />
            Because of my enterprising orientation, as the war was still going
            on, I joined my contemporaries in Salt business which was a scarce
            commodity then. I was introduced into the business by one Mr Smart
            Anih from Nomeh. We used to travel to Uburu community in Ohaozalla
            Local Government Area of then Anambra State to buy Salt from the
            women of the community.
            <br />
            <br />
            After a while, I eventually quit the salt business, and joined my
            people in rice cultivation/business. It was proceeds from rice
            business that used to sponsor my elder brother, the late Bartholomew
            Anih’s marriage, build a five bedroom bungalow and my motorcycle.
            <br />
            <br />
            The war also had profound psychological effects. The trauma of the
            violence, loss of loved ones, and the challenges of rebuilding
            weighed heavily on our collective psyche. Even after the war ended,
            the scars remained, both physically and emotionally.
            <br />
            <br />
            Politically, the consequences were significant. The federal
            government centralized power in response to the perceived threat to
            the country&apos;s unity. The aftermath saw the establishment of a
            unitary system, changing the political landscape of Nigeria. <br />
            <br /> In the years that followed, various governments attempted to
            promote national reconciliation and unity. Yet, issues of
            marginalization, resource allocation, and ethnic tensions persisted,
            contributing to the complexity of post-war Nigerian politics. <br />
            <br /> In the aftermath of the war, the world seemed to have come to
            a standstill. Confusion loomed over my family and I as we grappled
            with the uncertainties that lay ahead. Fortunately, a silver lining
            emerged in the form of a vast expanse of land within our community.
            With the guidance of my uncles and meticulous planning, we turned to
            farming, focusing primarily on cultivating yams. As the land
            responded favourably, yielding abundant crops, a ray of hope began
            to pierce through the gloom. <br />
            <br />
            The process of tending to the land and nurturing our crops became a
            therapeutic endeavour, allowing us to rebuild our lives. We embarked
            on a journey of resilience and hard work, leveraging the bountiful
            harvest to sustain ourselves. In a bid to secure our financial
            stability, we devised a plan to sell our farm produce in the nearby
            towns of Oduma and Enugu.
            <br />
            <br />
            Week after week, we undertook the arduous journey from Nomeh Unateze
            to Enugu, transporting our goods with the hope of making ends meet.
            The hustle and bustle of these excursions became the rhythm of our
            lives, a testament to our determination to overcome the challenges
            that the post-war era had thrust upon us. It was during these
            travels that the seeds of prosperity were sown, eventually
            blossoming into a success story that transcended the confines of our
            small community. <br />
            <br />
            As the years unfolded, our commitment to farming bore fruit—quite
            literally. The yam fields flourished, providing a stable source of
            income for me and by extension, our family. Despite my concurrent
            involvement in the civil service, the farm held a special place in
            my heart. The combination of bureaucratic responsibilities and
            agricultural pursuits presented a unique dichotomy, a balancing act
            that defined my life. <br />
            <br />I was a well-known yam farmer as I was popularly called Okoji.
            My farm lands were located at Egu Echara, Ngene-Igwe, Ngene-Akpakoro
            and other places. <br />
            <br />
            The recognition of my farming endeavours reached its pinnacle in the
            year 2000 when I was adjudged the second richest farmer in the
            entire Nomeh Unateze region. <br />
            <br />
            This accolade was not merely a symbol of financial success but a
            testament to the resilience, hard work, and collective effort of my
            family. It was a moment of pride and affirmation that the seeds sown
            in the aftermath of the war had flourished into a bountiful harvest.{" "}
            <br />
            <br />
            The routine of shuttling between Enugu and Nomeh became a ritual
            that embodied my commitment to efficiency and productivity. Each
            trip was not just a business venture but a pilgrimage to the roots
            of my success. The landscape between Enugu and Nomeh became
            memories, woven with the threads of toil, sacrifice, and triumph.
            The wheels of progress turned, fuelled by the synergy of my civil
            service career and agricultural pursuits. <br />
            <br />
            The farm, once a means of survival, had transformed into a symbol of
            prosperity and accomplishment. It had become a living testament to
            the indomitable spirit that had risen from the ashes of post-war
            desolation. <br />
            <br />
            In the face of adversity, we had not only survived but thrived. The
            journey from confusion and despair to recognition and success was a
            testament to the enduring human spirit. The fields that we had
            cultivated with care and dedication were not just a source of
            sustenance but a symbol of our ability to cultivate a future even in
            the harshest of circumstances. <br />
            <br />
            As the years rolled on, the tale of our farming legacy became woven
            into the fabric of Nomeh Unateze&apos;s history. It was a story of
            perseverance, hard work, and the unwavering belief that, even in the
            aftermath of destruction, new beginnings could emerge. The journey
            from the devastation of war to the title of the second richest
            farmer was not just my story but a chronicle of resilience that
            echoed through the generations of Nomeh Unateze.
          </p>
          <Button
            variant='outline'
            onClick={() => setBiafra(!biafra)}
            className='text-amber-600 dark:text-amber-400 font-semibold rounded-xl mt-2'>
            {!biafra ? "Read More" : "Read Less"}
          </Button>
        </div>
      </motion.section>
    </section>
  );
}

export default Biafra