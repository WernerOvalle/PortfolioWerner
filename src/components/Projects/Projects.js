import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
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
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
            
            { p.visit !='' && <ExternalLinks href={p.visit}>Visit</ExternalLinks> }
            {/* {/* { p.source !='' && <ExternalLinks href={p.source}>Code</ExternalLinks> } */}
            { p.visitpreview !='' && <ExternalLinks href={p.visitpreview}>Visit Preview</ExternalLinks> } 
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider divider/>
  </Section>
);

export default Projects;