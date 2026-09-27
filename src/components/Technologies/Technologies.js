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
  Chip,
} from "./TechnologiesStyles";

const stack = [
  { title: "Back-End", Icon: TbBrandCSharp, items: ["C#", "ASP.NET", "Entity Framework", "Node.js"] },
  { title: "Database", Icon: TbDatabase, items: ["SQL Server", "T-SQL", "PostgreSQL", "Prisma"] },
  { title: "Front-End", Icon: TbBrandReact, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "DevOps", Icon: TbBrandDocker, items: ["Azure DevOps", "Microsoft Azure", "Docker", "CI/CD"] },
  { title: "Agentic AI", Icon: TbSparkles, items: ["Claude Code", "GitHub Copilot", "Agent Skills", "Prompt Engineering"] },
];

const Technologies = () => (
  <Section id="tech">
    <AnimatedTitle eyebrow="02 — Stack">Technologies</AnimatedTitle>
    <AnimatedText delay={0.3}>
      The stack I work with most. I learn whatever a project needs, but this is where I have shipped the most: .NET and SQL, modern front ends, cloud and AI-assisted workflows.
    </AnimatedText>

    <AnimatedContainer animation="stagger" delay={0.5} staggerDelay={0.2}>
      <List>
        {stack.map(({ title, Icon, items }) => (
          <motion.div key={title} whileHover={{ y: -6 }}>
            <ListItem>
              <ListIconWrapper>
                <Icon />
              </ListIconWrapper>
              <ListContainer>
                <ListTitle>{title}</ListTitle>
                <ListParagraph>
                  {items.map((item) => (
                    <Chip key={item}>{item}</Chip>
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
