import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedText, AnimatedDivider, EASE_OUT } from '../AnimatedComponents';

import {
  Milestone,
  MilestoneDot,
  MilestoneNow,
  MilestoneText,
  MilestoneYear,
  Track,
  TrackLine,
  TrackProgress,
  TrackWrap,
} from './TimeLineStyles';
import { Section } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const LAST_INDEX = TimeLineData.length - 1;

// The line draws itself across the track in DRAW seconds, at a steady speed,
// and each milestone lights up as the line reaches its dot (dot i sits about
// i/n of the way along, one per grid column).
const DRAW = 1.6;
const reachedAt = (i) => DRAW * (i / TimeLineData.length);

const lineVariants = {
  hidden: { '--progress': 0 },
  visible: { '--progress': 1, transition: { duration: DRAW, ease: 'linear' } },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: [0, 1.35, 1],
    opacity: 1,
    transition: { delay: reachedAt(i), duration: 0.5, times: [0, 0.6, 1], ease: EASE_OUT },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: reachedAt(i) + 0.1, duration: 0.5, ease: EASE_OUT },
    transitionEnd: { filter: 'none' },
  }),
};

const nowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: DRAW + 0.2, type: 'spring', stiffness: 400, damping: 18 },
  },
};

const Timeline = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(7);

  useEffect(() => {
    // Calculate years of experience on client side only to avoid hydration mismatch
    // Started working in February 2019
    const now = new Date();
    const startDate = new Date(2019, 1); // February 2019 (month is 0-indexed)
    const years = Math.floor((now - startDate) / (365.25 * 24 * 60 * 60 * 1000));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only value; computing it during render would mismatch the static HTML
    setYearsOfExperience(years);
  }, []);

  return (
    <Section id="about">
      <AnimatedDivider divider />

      <AnimatedTitle eyebrow="01 — About">About Me</AnimatedTitle>

      <AnimatedText delay={0.3}>
        Full-Stack Software Engineer with {yearsOfExperience}+ years turning business needs into working software. I build CRM systems for banks and credit cooperatives across Central America, working remotely from Guatemala, and I pick up whatever stack the problem needs.
      </AnimatedText>

      <TrackWrap
        initial="hidden"
        whileInView="visible"
        // start once the track is well into view (top above ~65% of the screen),
        // so on phones, where About sits near the fold, it draws as you arrive
        viewport={{ once: true, margin: '0px 0px -35% 0px' }}
      >
        <TrackLine aria-hidden="true" />
        <TrackProgress aria-hidden="true" variants={lineVariants} />
        <Track>
          {TimeLineData.map((item, index) => {
            const current = index === LAST_INDEX;
            return (
              <Milestone key={index}>
                <MilestoneDot $current={current} custom={index} variants={dotVariants} />
                <motion.div custom={index} variants={contentVariants}>
                  <MilestoneYear $current={current}>
                    {item.year}
                    {current && <MilestoneNow variants={nowVariants}>Now</MilestoneNow>}
                  </MilestoneYear>
                  <MilestoneText>{item.text}</MilestoneText>
                </motion.div>
              </Milestone>
            );
          })}
        </Track>
      </TrackWrap>

      <AnimatedDivider colorAlt />
    </Section>
  );
};

export default Timeline;
