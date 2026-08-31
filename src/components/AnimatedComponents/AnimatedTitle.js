import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../../styles/GlobalComponents";

// The title animates as ONE block, and deliberately so.
//
// This used to render a <motion.span> per letter to fake a typing effect. But
// SectionTitle paints its text through -webkit-background-clip: text with
// -webkit-text-fill-color: transparent, and giving its descendants their own
// transform/opacity layers makes Chrome briefly paint every glyph stacked at the
// element origin — a dark blob above the title on each reveal.
//
// Hero animates its wrapper this same way, around the same SectionTitle, and has
// never shown the artifact. Animate the wrapper, never the text inside it.
//
// delay lives inside the variant: passing it as a `transition` prop on the
// motion.div would override the variant's own duration and easing.
const buildTitleVariants = (delay) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut"
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
});

const AnimatedTitle = ({
  children,
  delay = 0,
  animation = "block", // "block", "slide", "bounce", "fade"
  ...props
}) => {
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
      default: // block
        return {
          variants: buildTitleVariants(delay),
          initial: "hidden",
          whileInView: "visible",
          whileHover: "hover"
        };
    }
  };

  return (
    <motion.div
      viewport={{ once: true, amount: 0.5 }}
      style={{
        transformOrigin: 'center',
        overflow: 'visible',
        padding: '0 10px'
      }}
      {...getAnimation()}
    >
      <SectionTitle {...props}>
        {children}
      </SectionTitle>
    </motion.div>
  );
};

export default AnimatedTitle;
