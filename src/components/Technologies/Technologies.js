import React from 'react';
import { DiFirebase, DiReact, DiZend, DiDocker,DiNodejsSmall,DiScrum } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
 
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range a technologies in the web development world.
    From Back-end To Design
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiece with <br />
          JQuery <br />
          React.js<br />
          Angular<br />
          Bootstrap 
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiNodejsSmall size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node <br />
          Laravel <br />
          .NET <br />
          Java

        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
          Experience with <br />
          MySQL <br />
          SQL Server <br />
          Oracle <br />
          MongoDB <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiScrum size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Other Knowledge</ListTitle>
        <ListParagraph>
          {/* Experience with <br /> */}
          Docker <br />
          Git <br />
          Kubernetes <br />
          Adobe XD <br />
          Ethical Hacking <br />
          
          
        </ListParagraph>
      </ListContainer>
    </ListItem>
   
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
