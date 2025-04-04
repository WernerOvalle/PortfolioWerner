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
    I've worked with a range of technologies in the web development world. From Back-end To Design
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
            .NET Web<br />
            React.js <br />
            Vue.js
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
            NodeJS <br />
            PHP <br />
            .NET            
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
            SQL Server <br />
            MariaDB <br />
            PostgreSQL
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
            Azure DevOps <br />
            Docker <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
