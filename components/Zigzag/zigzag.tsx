"use client"
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FeatImage01 from '@/public/photos/pic1.jpg'
import FeatImage02 from '@/public/photos/pic2.jpeg'
import FeatImage03 from '@/public/photos/pic3.png'
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslations } from 'next-intl'
export default function Zigzag() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const t = useTranslations('home');
  useEffect(() => {
      const observer1 = new IntersectionObserver(
          ([entry]) => {
              setSection1Visible(entry.isIntersecting);
              if (entry.isIntersecting) {
                  controls1.start('visible');
              } else {
                  controls1.start('hidden');
              }
          },
          { threshold: 0.5 }
      );

      const observer2 = new IntersectionObserver(
          ([entry]) => {
              setSection2Visible(entry.isIntersecting);
              if (entry.isIntersecting) {
                  controls2.start('visible');
              } else {
                  controls2.start('hidden');
              }
          },
          { threshold: 0.5 }
      );
      const observer3 = new IntersectionObserver(
        ([entry]) => {
            setSection3Visible(entry.isIntersecting);
            if (entry.isIntersecting) {
                controls3.start('visible');
            } else {
                controls3.start('hidden');
            }
        },
        { threshold: 0.5 }
    );

      if (section1Ref.current) {
          observer1.observe(section1Ref.current);
      }
      if (section2Ref.current) {
          observer2.observe(section2Ref.current);
      }
      if (section3Ref.current) {
        observer3.observe(section3Ref.current);
    }

      return () => {
          if (section1Ref.current) {
              observer1.unobserve(section1Ref.current);
          }
          if (section2Ref.current) {
              observer2.unobserve(section2Ref.current);
          }
          if (section3Ref.current) {
            observer3.unobserve(section3Ref.current);
        }
      };
  }, [controls1, controls2, controls3]);

  const sectionVariants2 = {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="py-20 relative">
      {/* <div className="w-full text-center mt-20 pb-12 md:pb-16 text-black">
        <h1 className="text-4xl font-bold mb-4"><span className="text-yellow-400">✨</span> Instant Result Statistics: Improve with Every Step <span className="text-yellow-400">✨</span>
        </h1>
      </div> */}
      <Image 
            src="/photos/26.png" 
            className="left-0 top-0 absolute hidden lg:block"
            alt="Google Logo" width={300} height={300} 
        />
      <div className="flex gap-5 py-10 flex-col md:px-20"> 
        <motion.div
            className="w-full  overflow-clip" id="career"
        >
            <motion.div
                ref={section1Ref}
                initial="hidden"
                animate={controls1}
                variants={sectionVariants2}
                className="text-do_600 flex place-items-center justify-center h-fit flex-col md:flex-row">
                <div className="text-center md:text-left md:w-2/3 px-10 md:px-20 flex flex-col justify-between h-full w-full">
                    <div>
                        <h1 className="text-center md:text-left text-[40px] md:text-5xl lg:text-5xl w-full font-bold">
                        {t(`detailed_feedback_title`)}
                        </h1>
                        <p className="text-justify tracking-wider mb-4 text-md md:text-lg mt-4 text-black font-light">
                        {t('detailed_feedback')}
                        </p>
                    </div>
                </div>
                <Image
                    src="/photos/pic1.png"
                    alt="Image1"
                    width={200}
                    height={200}
                    className="object-cover w-fit h-fit"
                />
            </motion.div>
        </motion.div>

        <motion.div
            className="w-full  overflow-clip " id="career"
        >
            <motion.div
                ref={section2Ref}
                initial="hidden"
                animate={controls2}
                variants={sectionVariants}
                className="text-xanh_duong flex place-items-center justify-center py-[10px] h-full flex-col md:flex-row-reverse">
                <div className="text-center md:text-right md:w-2/3 px-10 md:px-20 flex flex-col justify-between h-full w-full">
                    <div>
                        <h1 className="text-center md:text-right text-[40px] md:text-5xl lg:text-5xl w-full font-bold">
                        {t(`performance_breakdown_title`)}
                        </h1>
                        <p className="text-justify tracking-wider mb-4 text-md md:text-lg mt-4 font-light text-black">
                        {t('performance_breakdown')}
                        </p>
                    </div>

                </div>
                <Image
                    src="/photos/pic2.png"
                    alt="Image1"
                    width={200}
                    height={200}
                    className="object-cover w-fit h-fit"
                />
            </motion.div>
        </motion.div>

        <motion.div
            className="w-full  overflow-clip" id="career"
        >
            <motion.div
                ref={section3Ref}
                initial="hidden"
                animate={controls3}
                variants={sectionVariants2}
                className="text-black flex place-items-center justify-center h-full flex-col md:flex-row">
                <div className="text-center md:text-left md:w-2/3 px-10 flex flex-col justify-between h-full w-full">
                    <div>
                        <h1 className="text-center md:text-left text-[40px] md:text-5xl lg:text-5xl w-full font-bold">
                        {t(`Personalized_Recommendations_title`)}
                        </h1>
                        <p className="text-justify tracking-wider font-light mb-4 text-md md:text-lg mt-4 text-black">
                        {t('Personalized_Recommendations')}
                        </p>
                    </div>
                </div>
                <Image
                    src="/photos/pic3.png"
                    alt="Image1"
                    width={200}
                    height={200}
                    className="object-cover w-fit h-fit"
                />
            </motion.div>
        </motion.div>
      </div>
      <Image 
            src="/photos/29.png" 
            className="right-0 hidden -bottom-14 absolute lg:block"
            alt="Google Logo" width={300} height={300} />
    </section>
  )
}
