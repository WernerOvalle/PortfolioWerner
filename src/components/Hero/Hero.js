import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

import {
  Section,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { Availability, HeroText, HeroTitle, LeftSection, TypedContainer } from "./HeroStyles";
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
            <Availability>Open to remote work</Availability>
            <HeroTitle main center>
              Werner Ovalle <br />
              <TypedContainer>
                <ReactTyped
                  strings={[
                    "Software Engineer",
                    ".NET Specialist",
                    "Backend Engineer",
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  backDelay={2000}
                  startDelay={500}
                  loop
                />
              </TypedContainer>
            </HeroTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <HeroText>
              Building CRM and lending platforms for banks across Central America. 7+ years in .NET, now shipping faster with agentic AI.
            </HeroText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1HOPuUsdMT8opDl6zbX_MwAnotSYjW13G/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
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
