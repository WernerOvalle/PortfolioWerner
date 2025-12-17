import React from "react";
import { motion } from "framer-motion";
import { AnimatedTitle, AnimatedText, AnimatedContainer } from '../AnimatedComponents';
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiDocker,
  DiNodejsSmall,
  DiScrum,
} from "react-icons/di";
import { FaDocker, FaEthereum } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  Section,
  SectionDivider,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <AnimatedTitle>Technologies</AnimatedTitle>
    <AnimatedText delay={0.3}>
      I&apos;ve worked with a range of technologies in the web development world. From Back-end To Design
    </AnimatedText>
    
    <AnimatedContainer animation="stagger" delay={0.5} staggerDelay={0.2}>
      <List>
        <motion.div whileHover={{ scale: 1.05, y: -5 }}>
          <ListItem>
            <picture>
              <DiReact size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Knowledge in <br />
                ASP.NET<br />
                React.js <br />
                NextJS
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05, y: -5 }}>
          <ListItem>
            <picture>
              <DiNodejsSmall size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Knowledge in <br />
                .NET <br />
                C# <br />
                NodeJS
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05, y: -5 }}>
          <ListItem>
            <picture>
              <AiOutlineConsoleSql size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>Database</ListTitle>
              <ListParagraph>
                Knowledge in <br />
                SQL Server <br />
                MariaDB <br />
                PostgreSQL
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05, y: -5 }}>
          <ListItem>
            <picture>
              <FaDocker size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>DevOps</ListTitle>
              <ListParagraph>
                Knowledge in <br />
                Azure DevOps <br />
                Docker <br />
                Git
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>
      </List>
    </AnimatedContainer>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
