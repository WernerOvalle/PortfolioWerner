import styled from 'styled-components';
import { motion } from 'framer-motion';

// Right-hand column of the hero: the profile photo with the orbiting lights
// behind it. Below 1150px there is no room for it next to the text, so it is
// hidden (it used to be cropped on tablets).
export const HeroVisual = styled.div`
  position: relative;
  height: 100%;
  min-height: 460px;

  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;

// The photo is 420px, placed 120px in and 20px down from the column's corner.
// The orbit is a little larger and centred on the photo, so the lights circle
// around its edge instead of hiding behind it.
const PHOTO = 420;
const PHOTO_LEFT = 120;
const PHOTO_TOP = 20;
const ORBIT = 540;

export const PhotoWrap = styled(motion.div)`
  position: absolute;
  left: ${PHOTO_LEFT}px;
  top: ${PHOTO_TOP}px;
  z-index: 10;
`;

export const Orbit = styled(motion.svg)`
  position: absolute;
  left: ${PHOTO_LEFT + PHOTO / 2 - ORBIT / 2}px;
  top: ${PHOTO_TOP + PHOTO / 2 - ORBIT / 2}px;
  width: ${ORBIT}px;
  height: ${ORBIT}px;
  pointer-events: none;
`;
