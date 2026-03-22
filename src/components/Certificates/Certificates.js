import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedContainer } from '../AnimatedComponents';
import {
  BlogCard,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
  CategoryTitle,
  CategoryDesc,
  CardDesc,
} from './CertificatesStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { certificateCategories } from '../../constants/constants';

const catVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Certificates = () => (
  <Section nopadding id="certificates">
    <AnimatedTitle main>Certificates</AnimatedTitle>

    {certificateCategories.map((cat, i) => (
      <motion.div
        key={i}
        variants={catVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <CategoryTitle $color={cat.color}>{cat.category}</CategoryTitle>
        <CategoryDesc>{cat.description}</CategoryDesc>

        <AnimatedContainer animation="stagger" delay={0.2} staggerDelay={0.1}>
          <GridContainer>
            {cat.items.map((p, j) => (
              <motion.div
                key={j}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  transition: { duration: 0.3 },
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
                  {p.description && <CardDesc>{p.description}</CardDesc>}
                  <UtilityList>
                    {p.visit && p.visit.trim() !== '' && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLinks href={p.visit}>
                          {p.inProgress ? 'Learn More' : 'View Certificate'}
                        </ExternalLinks>
                      </motion.div>
                    )}
                  </UtilityList>
                </BlogCard>
              </motion.div>
            ))}
          </GridContainer>
        </AnimatedContainer>
      </motion.div>
    ))}

    <SectionDivider divider />
  </Section>
);

export default Certificates;
