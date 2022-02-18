import React from 'react';
import { FaEye } from "react-icons/fa";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './CertificatesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { certficates } from '../../constants/constants';
import { Span } from '../Header/HeaderStyles';

const Certificates = () => (
  <Section nopadding id="certificates">
    
    <SectionTitle main>Certificates</SectionTitle>
    <GridContainer>
      {certficates.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
          <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            
           
            <UtilityList>
            
            { p.visit !='' && <ExternalLinks href={p.visit}> <FaEye size="3rem" /></ExternalLinks> }
         
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider colorAlt/>
  </Section>
);

export default Certificates;