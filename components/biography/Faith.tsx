import { useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button';

const Faith = () => {

const [faith, setFaith] = useState(false)

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
          A JOURNEY OF FAITH: MY DEVOTION TO CATHOLICISM
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p
              className={`transition-all duration-300 ${
                !faith ? "line-clamp-[11]" : ""
              }`}>
              From the very beginning of my life, I have been immersed in the
              rich traditions of the Catholic Church, a devout Christian, and a
              committed member of the Catholic faith. Born into the faith, I was
              baptized and received my First Holy Communion during the time of
              Reverend Father Mark Mahor, who served as the guiding light for
              the Mmaku parish within the expansive Awgu diocese.
              <br />
              <br />
              My connection with the church ran deep, fuelled by an unwavering
              commitment to the principles and teachings of Catholicism. The
              time under the spiritual guidance of Rev. Fr. Mark was especially
              formative for me. His leadership not only deepened my faith but
              also inspired me to actively engage in the church community. I
              became one of the interpreters during his time, bridging the
              linguistic gaps to ensure that the message of love and faith
              reached every corner of the parish. <br />
              <br />
              As Christmas approached each year, a season of joy and giving, I
              found a profound sense of fulfilment in spreading cheer and warmth
              to those less fortunate. It became a tradition for me to purchase
              gifts for the children and other underprivileged individuals.
              <br />
              <br />
              What fuelled these acts of kindness was not a desire for
              recognition or self-aggrandizement but rather a genuine, selfless
              love for others—a love that I believed was at the core of my
              Catholic upbringing. The spirit of giving during Christmas was not
              just a seasonal occurrence but a year-round commitment. Whether it
              was through charitable acts or simple acts of kindness, I sought
              to embody the teachings of Christ in every facet of my life.{" "}
              <br />
              <br />
              My dedication to the Church and the community extended beyond the
              walls of the parish. The role of an interpreter allowed me to
              connect with people on a personal level, breaking down language
              barriers and fostering a sense of unity among the diverse members
              of our congregation. It was through these interactions that I
              witnessed the transformative power of faith, bringing people
              together in a shared journey toward spiritual enlightenment.
              <br />
              <br />
              As I reflect on those years under the guidance of Rev. Fr. Mark
              Mahor, I am reminded of the profound impact he had on my spiritual
              journey. His leadership was characterized by humility, compassion,
              and an unwavering commitment to the teachings of Christ. Inspired
              by his example, I began contemplating the possibility of
              dedicating my life to the service of the Church in an even more
              profound way. <br />
              <br />
              The idea of becoming a Catholic priest started to take root within
              me. The thought of fully committing myself to a life of service
              and devotion became increasingly appealing. The prospect of
              guiding others in their faith journey, just as Rev. Fr. Mark had
              done for me, fuelled my aspiration to enter the priesthood.
              <br />
              <br />
              However, life has a way of unfolding in unexpected ways. While my
              heart remained steadfast in its commitment to the Catholic Church,
              the path towards priesthood took a different turn. Circumstances
              beyond my control led me down a different vocational path. Yet,
              the commitment to my faith persisted, and the lessons learned
              under the guidance of Rev. Fr. Mark continued to shape my values
              and actions. <br />
              <br />
              My time at the Mmaku parish was a pivotal one—a period marked by
              deepening faith, acts of kindness, and an enduring commitment to
              the principles instilled by the Catholic Church which became an
              integral part of me thereafter. <br />
              <br />
              As I navigate the currents of life, my unwavering vow to remain a
              Catholic until my last breath stands strong. The roots planted
              during those formative years continue to bear fruit, shaping the
              person I am today—a person dedicated to love, service, and the
              enduring values of the Catholic faith. In every act of kindness,
              in every moment of prayer, and in every step taken on this
              journey, I carry with me the indelible imprint of my Catholic
              upbringing—a journey that continues to unfold, guided by the light
              of faith and the teachings of Christ.
            </p>
            <Button
              variant='outline'
              onClick={() => setFaith(!faith)}
              className='text-amber-600 font-semibold rounded-xl mt-2'>
              {!faith ? "Read More" : "Read Less"}
            </Button>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default Faith