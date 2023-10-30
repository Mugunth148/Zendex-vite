/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './OverviewText.scss';

function OverviewText() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
        <div className="track">
        <div className="content">&nbsp;Designing Tomorrow, Today - A Creative Odyssey From Pixels to Perfection: Where Artistry Takes Flight</div>
        </div>
        </div>

        <div className="marquee-sub">
        <div className="track-sub">
        <div >&nbsp;Transforming Images into Art, One Pixel at a Time Where 3D Meets WOW: Crafting Visual Wonders</div>
        </div>
        </div>

    
        <div className="marquee">
        <div className="track">
        <div >&nbsp;I'm Here to Help You With ? I'm Here to Help You With ?</div>
        </div>
        </div>

        <div className="marquee-sub">
        <div className="track-sub">
        <div >&nbsp;Crafting Magic with Pixels: Where Art Comes to Life Unveiling Your Imagination: Artistry in Every Frame</div>
        </div>
        </div>

         <div className="marquee-sub">
        <div className="track">
        <div className="content">&nbsp;Crafting Digital Dreams: Where Art Meets Innovation Sculpting Worlds, Painting Dreams, Shaping Realities</div>
        </div>
        </div>

    </div>
  );
}

export default OverviewText;
