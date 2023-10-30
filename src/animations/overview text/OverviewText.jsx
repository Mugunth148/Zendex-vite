/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './OverviewText.scss';

function OverviewText() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define the animation variants
  const textVariants = {
    hidden: { opacity: 0 , x: -200},
    visible: {
      opacity: 1,
       x: 0, 
      transition: { duration: 4 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (

    <div
        className='overview-text-container' ref={ref}>

<div className="marquee-sub">
        <div className="track-sub">
        <div className="content">&nbsp;Designing Tomorrow, Today - A Creative Odyssey From Pixels to Perfection: Where Artistry Takes Flight</div>
        </div>
        </div>

        <motion.span
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className='overview-text-span'>
        I'm Here to Help You With
        </motion.span>

    
        <div className="marquee">
        <div className="track">
        <div >&nbsp;I'm Here to Help You With ? I'm Here to Help You With ?</div>
        </div>
        </div>

        <motion.span
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className='overview-text-span'>
        I'm Here to Help You With
        </motion.span>

         <div className="marquee-sub">
        <div className="track-sub">
        <div className="content">&nbsp;Crafting Digital Dreams: Where Art Meets Innovation Sculpting Worlds, Painting Dreams, Shaping Realities</div>
        </div>
        </div>

    </div>
  );
}

export default OverviewText;
