import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    
    <LeftSection>
      
      <SectionTitle main center>
     Werner Ovalle <br />
     Full Stack Developer
      </SectionTitle>
      <SectionText>
      Hello there, welcome to my portfolio, if you want to see my resume, you can click on the following button
      </SectionText>
      <Button onClick={() => window.location ='holamundo.com'}>Download</Button>
    </LeftSection>
  </Section>
</>
);

export default Hero;