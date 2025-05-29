import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedContainer } from '../AnimatedComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ResearchStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { research } from '../../constants/constants';

const Research = () => (
  <Section nopadding id="research">
    <AnimatedTitle main>Theses</AnimatedTitle>
    
    <AnimatedContainer animation="stagger" delay={0.3} staggerDelay={0.2}>
      <GridContainer>
        {research.map((p, i) => {
          return (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
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
                
                <Hr />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CardInfo className="card-info">{p.description}</CardInfo>
                </motion.div>
                
                <UtilityList>
                  { p.visit !='' && 
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLinks href={p.visit}>
                        View Thesis
                      </ExternalLinks>
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

export default Research;