import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, TypedContainer } from "./HeroStyles";
import styles from "./hero.module.css";
const Hero = (props) => (
  <>
    <Section row nopadding>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <LeftSection>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <SectionTitle main center>
              Werner Ovalle <br />
              <TypedContainer>
                <ReactTyped
                  strings={[
                    "Software Developer",
                    "Full Stack Developer",
                    ".NET Specialist",
                    "React Expert",
                    "Backend Developer",
                    "Frontend Developer"
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  backDelay={2000}
                  startDelay={500}
                  loop
                />
              </TypedContainer>
            </SectionTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <SectionText>
              Hello there, welcome to my portfolio! If you&apos;d like to discover my experience and skills, you can view my resume by clicking the button below.
            </SectionText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() =>
              (window.location =
                "https://drive.google.com/file/d/1HOPuUsdMT8opDl6zbX_MwAnotSYjW13G/view?usp=sharing")
              }
            >
              View Resume
            </Button>
          </motion.div>
        </LeftSection>
      </motion.div>
    </Section>
  </>
);

export default Hero;
