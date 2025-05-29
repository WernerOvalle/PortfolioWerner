import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedContainer } from '../AnimatedComponents';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <AnimatedTitle main>Projects</AnimatedTitle>
    
    <AnimatedContainer animation="stagger" delay={0.3} staggerDelay={0.2}>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <motion.div
              key={i}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <BlogCard>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Img src={p.image} />
                </motion.div>
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <br></br>
                  <TitleContent><strong>Stack</strong></TitleContent>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Tag>{t}</Tag>
                        </motion.div>
                      );
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  { p.visit !='' && 
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                    </motion.div>
                  }
                  { p.visitpreview !='' && 
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <ExternalLinks href={p.visitpreview}>Visit Preview</ExternalLinks>
                    </motion.div>
                  }
                </UtilityList>
              </BlogCard>
            </motion.div>
          );
        })}
      </GridContainer>
    </AnimatedContainer>
    
    <SectionDivider divider/>
  </Section>
);

export default Projects;