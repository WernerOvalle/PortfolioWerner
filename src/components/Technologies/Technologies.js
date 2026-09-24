import React from "react";
import { motion } from "framer-motion";
import { AnimatedTitle, AnimatedText, AnimatedContainer } from '../AnimatedComponents';
import {
  TbBrandCSharp,
  TbBrandDocker,
  TbBrandReact,
  TbDatabase,
  TbSparkles,
} from "react-icons/tb";
import {
  Section,
  SectionDivider,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListIconWrapper,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const stack = [
  { title: "Back-End", Icon: TbBrandCSharp, items: ["C#", "ASP.NET", "Entity Framework", "Node.js"] },
  { title: "Database", Icon: TbDatabase, items: ["SQL Server", "T-SQL", "PostgreSQL", "Prisma"] },
  { title: "Front-End", Icon: TbBrandReact, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "DevOps", Icon: TbBrandDocker, items: ["Azure DevOps", "TFS", "Docker", "CI/CD"] },
  { title: "Agentic AI", Icon: TbSparkles, items: ["Claude Code", "GitHub Copilot", "Agent Skills", "Prompt Engineering"] },
];

const Technologies = () => (
  <Section id="tech">
    <AnimatedTitle>Technologies</AnimatedTitle>
    <AnimatedText delay={0.3}>
      7+ years building .NET systems for banks and financial institutions, backed by a modern front-end stack and AI-powered workflows.
    </AnimatedText>

    <AnimatedContainer animation="stagger" delay={0.5} staggerDelay={0.2}>
      <List>
        {stack.map(({ title, Icon, items }) => (
          <motion.div key={title} whileHover={{ scale: 1.05, y: -5 }}>
            <ListItem>
              <ListIconWrapper>
                <Icon size="4rem" />
              </ListIconWrapper>
              <ListContainer>
                <ListTitle>{title}</ListTitle>
                <ListParagraph>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </ListParagraph>
              </ListContainer>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </AnimatedContainer>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
