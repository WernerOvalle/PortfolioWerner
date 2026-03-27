import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedContainer } from '../AnimatedComponents';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Badge,
  CategoryTitle,
  CategoryDesc,
} from './ProjectsStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { projectCategories } from '../../constants/constants';

const catVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Projects = () => (
  <Section nopadding id="projects">
    <AnimatedTitle main>Projects</AnimatedTitle>

    {projectCategories.map((cat, catIndex) => (
      <motion.div
        key={catIndex}
        variants={catVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "200px" }}
      >
        <CategoryTitle $color={cat.color}>{cat.category}</CategoryTitle>
        <CategoryDesc>{cat.description}</CategoryDesc>

        <AnimatedContainer animation="stagger" delay={0.2} staggerDelay={0.15}>
          <GridContainer>
            {cat.items.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transition: { duration: 0.3 },
                }}
              >
                <BlogCard>
                  {p.badge && <Badge type={p.badge}>{p.badge}</Badge>}
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title>{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <br />
                    <TitleContent>
                      <strong>Stack</strong>
                    </TitleContent>
                    <TagList>
                      {p.tags.map((t, j) => (
                        <motion.div
                          key={j}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Tag>{t}</Tag>
                        </motion.div>
                      ))}
                    </TagList>
                  </div>
                  <UtilityList>
                    {p.visit !== '' && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                      </motion.div>
                    )}
                    {p.visitpreview !== '' && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLinks href={p.visitpreview}>
                          Visit Preview
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

export default Projects;
