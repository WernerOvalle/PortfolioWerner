import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedContainer } from '../AnimatedComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './CertificatesStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { certficates } from '../../constants/constants';
import { Span } from '../Header/HeaderStyles';

const Certificates = () => (
  <Section nopadding id="certificates">
    <AnimatedTitle main>Certificates</AnimatedTitle>
    
    <AnimatedContainer animation="stagger" delay={0.3} staggerDelay={0.15}>
      <GridContainer>
        {certficates.map((p, i) => {
          return (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <BlogCard>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Img src={p.image} />
                </motion.div>
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                
                <UtilityList>
                  { p.visit !='' && 
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLinks href={p.visit}>
                        View Certificate
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

export default Certificates;