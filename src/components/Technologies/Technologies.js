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
          Spring<br />

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
          MongoDB <br />
          MySQL <br />
          SQL Server <br />
          Oracle
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiDocker size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
          Experience with <br />
          Docker <br />
          Git <br />
          Kubernetes 
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiScrum size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Methodologies</ListTitle>
        <ListParagraph>
        Experience with <br />
        Scrum <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
