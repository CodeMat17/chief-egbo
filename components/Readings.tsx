"use client";

import { motion } from "framer-motion";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: "700" });

const Readings = () => {
  return (
    <div
      id='readings'
      className='min-h-screen bg-gray-50 dark:bg-[#020817] scroll-mt-20'>
      {/* Hero Section */}
      <header
        className='relative py-16 bg-cover bg-center text-center bg-gray-50'
        style={{ backgroundImage: "url('/mass.webp')" }}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`text-3xl sm:text-4xl font-bold text-amber-400 drop-shadow-lg ${cinzel.className}`}>
          Order of Mass
        </motion.h1>
        {/* <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.3 }}
           className='text-2xl font-semibold text-white drop-shadow-sm z-30'>
           OZUO-OMEE 1 OF NOMEH UNATAEZE
         </motion.h2> */}
      </header>
      <div className='max-w-4xl mx-auto px-4 py-12 flex flex-col gap-6'>
        {/* ENTRANCE HYMN:  */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            ENTRANCE HYMN:
          </h2>
          <div className='space-y-4'>
            <p>
              As our Lord Jesus died, and risen from death, so shall our Father
              raise from death, all those that died in Christ Jesus. As all
              human have inherited death from Adam, so shall all inherit Life
              through Christ Jesus. Amen.
            </p>
          </div>
        </motion.section>
        {/* OPENING PRAYER   */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            OPENING PRAYER
          </h2>
          <div className='space-y-4'>
            <p>
              God of mercy, you are the hope of sinners and he joy of saints. We
              pray for our brother and father{" "}
              <span className='font-semibold'>Dennis Okeke Anih</span> whose
              body we honour with Christian burial. Give him happiness with your
              saints and raise up his body in glory at last day to be in your
              presence for ever, Grant this through our Lord Jesus Christ your
              Son …
            </p>
          </div>
        </motion.section>
        {/* FIRST READING
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            FIRST READING
          </h2>
          <div className=''>
            <p className=''>
              <span className='font-semibold'>
                A reading from the prophet Isaiah (25:6-9)
              </span>{" "}
              <br />
              On this mountain, the Lord of host will prepare for all people a
              banquet of rich food. And he will destroy on this mount the
              covering that is cast over all peoples, the veil that is cast over
              all nations. He will swallow up death forever and the Lord God
              will wipe away tears from all faces, and the reproach of his
              people he will take away from all the earth; for the Lord has
              spoken. It will be said on that day, &quot;Lo, this is our God, we
              have waited for Him that He might save us. This is the Lord we
              have waited for; let us be glad and rejoice in His
              salvation&quot;.
              <br /> <br />
              The word of the Lord <br />
              Thanks be to God{" "}
            </p>
          </div>
        </motion.section>
        {/* RESPONSORIAL  PSALM
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            RESPONSORIAL PSALM
          </h2>
          <div className=''>
            <p className=''>
              <span className='font-semibold'>
                (Ps 274, 8:9-13.14) <br />
                R: The Lord is my strength and my salvation.
              </span>{" "}
              <br />
            </p>
            <ol className='list-decimal pl-5 space-y-2'>
              <li className='mt-2'>
                The Lord is my light and my salvation, whom shall I fear. The
                Lord is my life&apos;s refuge, of whom shall I be afraid. (R){" "}
              </li>
              <li>
                One thing I ask of the Lord. This I seek. To dwell in the house
                of the Lord all the days of my life, and that I may gaze on the
                loveliness of the Lord and contemplates his temple. (R)
              </li>
              <li>
                Hear O Lord: the sound of my call; have pity on me, and answer
                me. Your presence O Lord, I seek. Hid not your face from me (R)
              </li>
              <li>
                I believe that I shall see the bounty of the Lord in the land of
                the living. Wait for the Lord with courage, be stouthearted and
                wait for the Lord. (R)
              </li>
            </ol>
          </div>
        </motion.section>
        {/* SECOND READING
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            SECOND READING
          </h2>
          <div className=''>
            <p className=''>
              <span className='font-semibold'>
                A reading from the letter of St. Paul to the Romans (8:14-23)
              </span>{" "}
              <br />
              Those who are led by God&apos;s spirit are God&apos;s sons. For
              what the Spirit God has given you does not make you slaves and
              cause you to be afraid; instead the Spirit makes you God&apos;s
              children and by the Spirit&apos;s power we cry out to our God,
              Abba Father! God&apos;s Spirit joins Himself to our Spirit to
              declare that we are God&apos;s children. Since we are His
              children, we will possess the blessings He keeps for his people,
              and we will also possess with Christ what God has kept for Him;
              for if we share Christ&apos;s su ering, we will also share his
              glory. <br />
              <br />I consider that what we su er at this present time cannot be
              compared at all, with the glory that is going to be revealed to
              us. All of creation waits with eager longing for God to reveal his
              sons. For creation was condemned to lose its purpose, not of its
              own will, but because God willed it to be so. Yet there was the
              hope that creation itself would one day be set free from its
              slavery to decay and would share the glorious freedom of the
              children of God. For we know that up to the present time all of
              creation groans with pain, like the pain of child birth. But it is
              not just creation alone which grown as we who have the spirit as
              the first of God&apos;s gifts also groan within ourselves as we
              wait for God to make us his sons and set our whole being free.
              <br />
              <br />
              <span className='font-semibold'>
                V: The word of the Lord
              </span>{" "}
              <br />
              <span className='font-semibold'>R: Thanks be to God</span>
              <br />
              <br />I am the resurrection and the life, says the Lord. He who
              believes in me will not die forever, but shall have eternal life.
            </p>
          </div>
        </motion.section>
        {/* GOSPEL
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            GOSPEL
          </h2>
          <div className=''>
            <p className=''>
              <span className='font-semibold'>
                A reading from the holy gospel according to Luke (12:35-40)
              </span>{" "}
              <br />
              Jesus said to his disciples: see that you are dressed for action
              and have your lamps lit. Be like a man waiting for their master to
              return from the wedding feast, ready to open the door as soon as
              he comes and knocks. Happy are those servants whom the master
              finds awake when he comes, I tell you solemnly, he will put on an
              apron, sit them down at table and wait on them. It may be in the
              second watch he comes, or in the third, but happy are those
              servants if he finds them ready. You may be quite sure of this,
              that if the house owner had known at which hour the burglar would
              come, he would not have let anyone break through the wall of his
              house. You must stand ready, because the son of man is coming at
              an hour you do not expect.
              <br />
              <br />
              <span className='font-semibold'>
                V: The Gospel of the Lord
              </span>{" "}
              <br />
              <span className='font-semibold'>
                R: The Gospel of the Lord Praise to you, Lord Jesus Christ.
              </span>
            </p>
          </div>
        </motion.section>
        {/* HOMILY
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            HOMILY
          </h2>
        </motion.section>
        {/* PRAYER OF THE FAITHFUL
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            PRAYER OF THE FAITHFUL
          </h2>
          <div className=''>
            <p className=''>
              Let us pray with faith and confidence to God our father who lives
              forever and who can do all things. As he raised his Son Jesus
              Christ from the dead, so may he give peace and salvation to both
              the living and the dead.
            </p>
            <ol className='list-decimal pl-5 space-y-2'>
              <li className='mt-2'>
                For <span className='font-semibold'>Dennis Okeke Anih</span>{" "}
                that he may share the light of Christ&apos;s resurrection, and
                come into new life of happiness and peace. We pray you, O Lord.
                <br />
                <span className='font-semibold'>
                  R. Receive him O Lord, may he rest in your Kingdom.{" "}
                </span>
              </li>
              <li>
                For those to whom this world is the be all and end-all; that
                they may come to believe the good news of salvation renew their
                lives and have faith in Christ who is the way, the truth and the
                life.{" "}
                <span className='font-semibold'>We pray you, O Lord. (R)</span>
              </li>
              <li>
                For those su ering on account of bereavement that the generosity
                of their fellow Christians may give them new unction and, help
                them to relieve their anxiety.{" "}
                <span className='font-semibold'>We pray you, O Lord. (R)</span>
              </li>
              <li>
                For all who are gathered here to pray for{" "}
                <span className='font-semibold'>Dennis Okeke Anih</span>
                that we may live, act and speak in full realization that one day
                we shall be called upon to answer for our thoughts, words and
                actions.{" "}
                <span className='font-semibold'>We pray you, O Lord. (R)</span>
              </li>
              <li>
                For the sick and the suffering that Jesus Christ who showed
                mercy to the infirm and the troubled may show them His bounteous
                mercy, bestow upon them every Heavenly blessing
              </li>
              <li>
                For those who have departed from this life, especially{" "}
                <span className='font-semibold'>Dennis Okeke Anih</span>, that
                our Lord Jesus Christ to whom it belongs to grant mercy and to
                spare may remit their sins and welcome them into his Kingdom of
                peace and glory.{" "}
                <span className='font-semibold'>We pray you, O Lord. (R)</span>
              </li>
            </ol>
          </div>
        </motion.section>
        {/*LET US PRAY
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            LET US PRAY
          </h2>
          <div className=''>
            <p className=''>
              O Lord may these our humble petition find favour in your presence
              for the salvation of{" "}
              <span className='font-semibold'>Dennis Okeke Anih,</span>
              your servant and all who have died in Christ who is Lord forever
              and ever. Amen.
            </p>
          </div>
        </motion.section>
        {/*PRAYER OVER THE GIFTS
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            PRAYER OVER THE GIFTS
          </h2>
          <div className=''>
            <p className=''>
              Lord receive the gift we o er for the salvation of{" "}
              <span className='font-semibold'>Dennis Okeke Anih.</span> May
              Christ be merciful in judging our brother and father for he
              believed in Christ as his Lord and Saviour. We ask this through
              Christ our Lord. Amen.
            </p>
          </div>
        </motion.section>
        {/* COMMUNION ANTIPHON 

         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            COMMUNION ANTIPHON
          </h2>
          <div className=''>
            <p className=''>
              I am the resurrection and life, says the Lord. If anyone believes
              in me even though he dies, he will live and He who believe in me,
              will never die. (Cf Jn. II :25-26)
            </p>
          </div>
        </motion.section>
        {/* PRAYER AFTER COMMUNION
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            PRAYER AFTER COMMUNION
          </h2>
          <div className=''>
            <p className=''>
              Lord God, Your Son Jesus Christ gave us the sacrament of His Body
              and blood to guide us on our pilgrim way to your Kingdom. May
              Dennis Okeke Anih, who shared in the Eucharist come to the banquet
              of life Christ has prepared for us, through Christ our Lord.
            </p>
          </div>
        </motion.section>
        {/*  THE FINAL COMMENDATION AND BURIAL

         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            THE FINAL COMMENDATION AND BURIAL
          </h2>
          <div className=''>
            <p className=''>
              With faith in Jesus Christ, we reverently bring the body of our
              brother <span className='font-semibold'>Dennis Okeke Anih</span>{" "}
              to be buried in its human imperfection. Let us pray with
              confidence to God, who gives life to all things that he will rise
              up this mortal body to the perfection and the company of the
              Saints. May God give him a merciful judgment and forgive him all
              his sins. May Christ the shepherd, lead him safely home to be at
              peace with Good Shepherd, lead him safely to be at peace with our
              father. And may he be happy forever with all the saints in the
              presence of the Eternal King. Amen.
            </p>
          </div>
        </motion.section>
        {/*  THE FINAL COMMENDATION AND BURIAL         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <div className=''>
            <p className=''>
              (The coffin is sprinkled with holy water and incensed)
            </p>
          </div>
        </motion.section>
        {/*  SONG OF FARE WELL
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            SONG OF FARE WELL
          </h2>
          <div className='space-y-4'>
            <div className=''>
              <div className='flex gap-2'>
                <p>V.</p> <p>Saints of God</p>
              </div>
              <div className='flex gap-2'>
                <p>R.</p>
                <p>Come to his aid</p>
              </div>
            </div>

            <div className=''>
              <div className='flex gap-2'>
                <p>V.</p> <p>Come to meet him angels of the Lord</p>
              </div>
              <div className='flex gap-2'>
                <p>R.</p>
                <p>Receive his soul and present him to God the most High.</p>
              </div>
            </div>

            <div className=''>
              <div className='flex gap-2'>
                <p>V.</p>{" "}
                <p>
                  May Christ who called you, take you to Himself, May angels
                  lead him to God the Most High.{" "}
                </p>
              </div>
              <div className='flex gap-2'>
                <p>R.</p>
                <p>Receive his soul and present him to God, the Most High.</p>
              </div>
            </div>

            <div className=''>
              <div className='flex gap-2'>
                <p>V.</p>{" "}
                <p>
                  Give him eternal rest, O Lord and may your light shine on him
                  forever.
                </p>
              </div>
              <div className='flex gap-2'>
                <p>R.</p>
                <p>
                  Receive his soul and present him to God, the Most High.Receive
                  his soul and present him to God, the Most High.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        {/* LET US PRAY
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            LET US PRAY
          </h2>
          <div className=''>
            <p className=''>
              Father into your hands we commend the soul of our brother{" "}
              <span className='font-semibold'>Dennis Okeke Anih</span>. We are
              confident that with all who have died in Christ he will be raised
              to life on the last day and live forever with Christ. We thank you
              for all the blessings you gave him in this life to show your
              motherly care for all of us and the fellowship, which is ours with
              the saints in Christ. Lord hear our prayers, welcome your servant
              <span className='font-semibold'>Dennis Okeke Anih</span> to
              paradise and help us to comfort each other with the assurance of
              our faith in Christ, to be with you and with our brother{" "}
              <span className='font-semibold'>Dennis Okeke Anih</span>
              forever.
              <br /> Through, Christ our Lord.
              <br />
              R: Amen.
            </p>
          </div>
        </motion.section>
        {/* PROCESSION TO THE GRAVE:
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            PROCESSION TO THE GRAVE
          </h2>
          <div className='flex gap-5'>
            <p className=''>V.</p>
            <p>
              May the Angels lead you into paradise, may the Martyrs welcome you
              as you draw near and lead you into Jerusalem the heavenly.{" "}
            </p>
          </div>
        </motion.section>
        {/* BLESSING OF THE GRAVE
         */}
        <motion.section
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className='text-3xl font-bold text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 pb-1'>
            BLESSING OF THE GRAVE
          </h2>
          <div className='flex flex-col gap-5'>
            <p>
              Lord Jesus Christ, by the three days you lay in the tomb, you have
              made holy the graves of all who believes in you, and even though
              their bodies lie in the earth, they trust that they, like you will
              rise again. Give your servant{" "}
              <span className='font-semibold'>Dennis Okeke Anih</span> peaceful
              rest in this grave, until that day when you the resurrection and
              the life will raise him up in glory. May he in his light of your
              countenance behold eternal light in heaven. You who live and reign
              forever and ever. Amen.
              <br />
              <br />
              <span className='italic'>
                (The grave is sprinkled with holy water and incensed)
              </span>
              <br />
              <br />
              Since Almighty God has called his servant{" "}
              <span className='font-semibold'>Dennis Okeke Anih</span> from this
              life to Himself, we commit his body to the earth from which it was
              made, Christ was the first to rise from the dead, and we know that
              He will raise up our mortal bodies to be like Him in glory. We
              commend our brother{" "}
              <span className='font-semibold'>Dennis Okeke Anih</span> to the
              Lord. May the Lord receive him into His peace and raise up his
              body on the last day.
              <br />
              <br />
              <span className='italic'>
                (The body is now lowered into the grave)
              </span>
            </p>
            <p className='pt-5'>V. Lord have mercy</p>
            <p>R. Lord have mercy</p>
            <p>V. Christ have mercy</p>
            <p>R. Christ have mercy</p>
            <div>
              <p className='mt-6 mb-2 font-semibold text-xl'>LET US PRAY </p>
              <p>
                Let us pray for our father and servant of God Dennis Okeke Anih
                to our Lord Jesus Christ who said, I am the resurrection and the
                life. The man who believes in me will live even if he dies, and
                every living person who believes in me will never die.
              </p>
              <div className='flex gap-5 mt-2'>
                <p>V.</p>
                <p>
                  Lord you wept at the death of Lazarus your friend; comfort us
                  in sorrow, we ask this in faith{" "}
                </p>
              </div>
              <div className='flex gap-5'>
                <p>R.</p>
                <p>Lord hear our prayer</p>
              </div>
              <div className='flex gap-5 mt-2'>
                <p>V.</p>
                <p>
                  You raised the death to life, give your servant{" "}
                  <span className='font-semibold'>Dennis Okeke Anih</span>{" "}
                  eternal life, we ask this in faith.
                </p>
              </div>
              <div className='flex gap-5'>
                <p>R.</p>
                <p>Lord hear our prayer</p>
              </div>
              <div className='flex gap-5 mt-2'>
                <p>V.</p>
                <p>
                  You promised paradise to the thief who repented: bring our
                  brother and father{" "}
                  <span className='font-semibold'>Dennis Okeke Anih</span> to
                  the joys of heaven. We ask in faith.
                </p>
              </div>
              <div className='flex gap-5'>
                <p>R.</p>
                <p>Lord hear our prayer</p>
              </div>
              <div className='flex gap-5 mt-2'>
                <p>V.</p>
                <p>
                  Our brother{" "}
                  <span className='font-semibold'>Dennis Okeke Anih</span> was
                  washed clean in baptism and anointed with the oil of
                  salvation, give him fellowship with all your saints. We ask
                  this in faith.
                </p>
              </div>
              <div className='flex gap-5'>
                <p>R.</p>
                <p>Lord hear our prayer</p>
              </div>
              <div className='flex gap-5 mt-2'>
                <p>V.</p>
                <p>
                  He was nourished with your body and blood, grant{" "}
                  <span className='font-semibold'>Dennis Okeke Anih</span> a
                  place at the table in your heavenly Kingdom, we ask this in
                  faith
                </p>
              </div>
              <div className='flex gap-5'>
                <p>R.</p>
                <p>Lord hear our prayer</p>
              </div>
              <div className='flex gap-5 mt-2'>
                <p>V.</p>
                <p>
                  Comfort us in our sorrow at the death of our brother{" "}
                  <span className='font-semibold'>Dennis Okeke Anih</span> let
                  your faith be our consolation, and eternal life our hope; we
                  ask this in faith.
                </p>
              </div>
              <div className='flex gap-5'>
                <p>R.</p>
                <p>Lord hear our prayer</p>
              </div>
              <p className='mt-6 mb-2 font-semibold text-xl'>LET US PRAY </p>
              <p>
                Show your mercy, Lord to your departed servant{" "}
                <span className='font-semibold'>Dennis Okeke Anih</span>
                since he strove to do your will, let him not be punished for
                wrong doing. And as he was united in true faith with all your
                faithful people let him now by your loving goodness, be united
                with your angels and saints. <br />
                Through Christ our Lord, Amen.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Readings;
