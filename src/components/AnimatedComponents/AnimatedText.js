import React from "react";
import { motion } from "framer-motion";
import { SectionText } from "../../styles/GlobalComponents";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};

const AnimatedText = ({ 
  children, 
  delay = 0, 
  animation = "fade", // "fade", "slide", "words"
  ...props 
}) => {
  const renderContent = () => {
    if (animation === "words" && typeof children === 'string') {
      return children.split(' ').map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ));
    }
    return children;
  };

  const getAnimation = () => {
    switch (animation) {
      case "slide":
        return {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay }
        };
      case "words":
        return {
          variants: textVariants,
          initial: "hidden",
          whileInView: "visible"
        };
      default: // fade animation
        return {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay }
        };
    }
  };

  return (
    <motion.div
      viewport={{ once: true, margin: "-100px" }}
      {...getAnimation()}
    >
      <SectionText {...props}>
        {renderContent()}
      </SectionText>
    </motion.div>
  );
};

export default AnimatedText;
