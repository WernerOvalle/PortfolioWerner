import React from 'react';
import { FaEye } from "react-icons/fa";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ResearchStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { research } from '../../constants/constants';

const Research = () => (
  <Section nopadding id="research">
    
    <SectionTitle main>Research</SectionTitle>
    <GridContainer>
      {research.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
           
              <Hr />
            
            <CardInfo className="card-info">{p.description}</CardInfo>
            
            <UtilityList>
            
            { p.visit !='' && <ExternalLinks href={p.visit}> <FaEye size="3rem" /></ExternalLinks> }
           
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider divider/>
  </Section>
);

export default Research;