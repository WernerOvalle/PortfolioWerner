import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../../styles/GlobalComponents";

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4
    }
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 150
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: "easeOut"
    }
  })
};

const AnimatedTitle = ({ 
  children, 
  delay = 0, 
  animation = "letter", // "letter", "slide", "bounce", "fade"
  ...props 
}) => {
  const renderContent = () => {
    if (animation === "letter" && typeof children === 'string') {
      return children.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    }
    return children;
  };

  const getAnimation = () => {
    switch (animation) {
      case "slide":
        return {
          initial: { opacity: 0, x: -100 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8, delay }
        };
      case "bounce":
        return {
          initial: { opacity: 0, scale: 0 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { 
            duration: 0.6, 
            delay,
            type: "spring",
            bounce: 0.6
          }
        };
      case "fade":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8, delay }
        };
      default: // letter animation
        return {
          variants: titleVariants,
          initial: "hidden",
          whileInView: "visible",
          whileHover: "hover"
        };
    }
  };

  return (
    <motion.div
      viewport={{ once: true, margin: "-100px" }}
      style={{ 
        transformOrigin: 'center',
        overflow: 'visible',
        padding: '0 10px'
      }}
      {...getAnimation()}
    >
      <SectionTitle {...props}>
        {renderContent()}
      </SectionTitle>
    </motion.div>
  );
};

export default AnimatedTitle;
