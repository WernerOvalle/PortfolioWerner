import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

import {
  Section,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { Availability, HeroText, HeroTitle, LeftSection, TypedContainer, VisuallyHidden } from "./HeroStyles";

// Same title as the CV. The typing animation is decorative (it alternates two
// shorter forms of it); the VisuallyHidden copy is the real text that crawlers
// and screen readers get.
const ROLE = "Full-Stack Software Engineer";

const Hero = () => (
  <>
    <Section $row $nopadding>
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
            <HeroTitle as="h1" $main>
              Werner Ovalle <br />
              <VisuallyHidden>{ROLE}</VisuallyHidden>
              <TypedContainer aria-hidden="true">
                <ReactTyped
                  strings={["Software Engineer", "Full-Stack Engineer"]}
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
              I build software end to end with .NET, React and SQL Server, with deep experience in systems for the financial sector. Now shipping faster with agentic AI.
            </HeroText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="https://drive.google.com/file/d/172yyV0j_3D0WizSe4Md4oPIeEBm6Flux/view?usp=sharing">
              View Resume
            </Button>
          </motion.div>
        </LeftSection>
      </motion.div>
    </Section>
  </>
);

export default Hero;
