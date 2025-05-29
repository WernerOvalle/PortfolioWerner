import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.3
    }
  }
};

const AnimatedContainer = ({ 
  children, 
  delay = 0, 
  animation = "stagger", // "stagger", "fade", "scale", "slide"
  staggerDelay = 0.1,
  className,
  ...props 
}) => {
  const getAnimation = () => {
    switch (animation) {
      case "fade":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8, delay }
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay }
        };
      case "slide":
        return {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8, delay }
        };
      default: // stagger animation
        return {
          variants: {
            ...containerVariants,
            visible: {
              ...containerVariants.visible,
              transition: {
                ...containerVariants.visible.transition,
                staggerChildren: staggerDelay,
                delay
              }
            }
          },
          initial: "hidden",
          whileInView: "visible"
        };
    }
  };

  return (
    <motion.div
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...getAnimation()}
      {...props}
    >
      {animation === "stagger" ? (
        React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedContainer;
