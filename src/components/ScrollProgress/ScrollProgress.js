import React from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { Bar } from './ScrollProgressStyles';

// Fills from left to right as the page is scrolled. A light spring smooths
// out wheel steps so the bar glides instead of jumping.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return <Bar aria-hidden="true" style={{ scaleX }} />;
};

export default ScrollProgress;
