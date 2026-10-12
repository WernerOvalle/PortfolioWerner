import styled from 'styled-components';
import { motion } from 'framer-motion';

// Thin reading-progress bar along the bottom edge of the fixed navbar.
export const Bar = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 3px;
  background: ${(props) => props.theme.colors.accentGradient};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.accentGlow};
  transform-origin: 0% 50%;
  pointer-events: none;
`;
