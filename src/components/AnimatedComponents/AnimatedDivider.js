import React from "react";
import { motion } from "framer-motion";
import { SectionDivider } from "../../styles/GlobalComponents";
import { EASE_OUT } from "./easing";

// The accent bar between sections, drawn from left to right as it scrolls in.
const AnimatedDivider = (props) => (
  <SectionDivider
    as={motion.div}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, amount: 1 }}
    transition={{ duration: 0.7, ease: EASE_OUT }}
    style={{ transformOrigin: "left center" }}
    {...props}
  />
);

export default AnimatedDivider;
