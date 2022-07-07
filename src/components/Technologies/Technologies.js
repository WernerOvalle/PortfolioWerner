import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiDocker,
  DiNodejsSmall,
  DiScrum,
} from "react-icons/di";
import { FaDocker, FaEthereum } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Knowledge in <br />
            JQuery <br />
            React.js
            <br />
            Angular
            <br />
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
            Knowledge in <br />
            Node <br />
            PHP <br />
            .NET <br />
         
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineConsoleSql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Knowledge in <br />
            MySQL <br />
            SQL Server <br />
            Oracle <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Knowledge in <br />
            Docker <br />
            Git <br />
            Kubernetes <br />
            Jenkins <br />
            AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
   
     
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
