import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsMoon, BsSun } from 'react-icons/bs';
import styled from 'styled-components';
import { useThemeContext } from '../../contexts/ThemeContext';

const Pill = styled(motion.button)`
  position: relative;
  width: 58px;
  height: 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 3px;
  flex-shrink: 0;
  outline: none;
  background: ${({ isDark }) => isDark ? '#1a2847' : '#C8D8E8'};
  transition: background 0.4s ease;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ isDark }) => isDark ? '#4a90d9' : '#f5a623'};
  }
`;

const Circle = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ isDark }) => isDark ? '#e8f0fe' : '#fff7e0'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: ${({ isDark }) =>
    isDark
      ? '0 0 8px rgba(74, 144, 217, 0.7)'
      : '0 0 8px rgba(245, 166, 35, 0.7)'};
`;

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <Pill
      isDark={isDark}
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <Circle
        isDark={isDark}
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ marginLeft: isDark ? 0 : 'auto' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsMoon size="13px" color="#4a90d9" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -30 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BsSun size="13px" color="#f5a623" />
            </motion.span>
          )}
        </AnimatePresence>
      </Circle>
    </Pill>
  );
};

export default ThemeToggle;
