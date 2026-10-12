import React from "react";
import { motion } from "framer-motion";
import { AnimatedTitle, AnimatedText, AnimatedContainer, AnimatedDivider } from '../AnimatedComponents';
import {
  TbBrandCSharp,
  TbBrandDocker,
  TbBrandReact,
  TbDatabase,
  TbSparkles,
} from "react-icons/tb";
import {
  Section,
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
  { title: "Agentic AI", Icon: TbSparkles, items: ["Claude Code", "GitHub Copilot", "Agent Skills"] },
];

// Card hover lifts the card and gives the icon a small playful turn.
const cardVariants = {
  hover: { y: -6 },
};

const iconVariants = {
  visible: { rotate: 0, scale: 1 },
  hover: { rotate: -8, scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 14 } },
};

// Once a card has revealed, its chips pop in one after another.
const chipListVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.25, staggerChildren: 0.05 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 420, damping: 22 } },
};

const Technologies = () => (
  <Section id="tech">
    <AnimatedTitle eyebrow="02 — Stack">Technologies</AnimatedTitle>
    <AnimatedText delay={0.3}>
      The stack I work with most. I learn whatever a project needs, but this is where I have shipped the most: .NET and SQL, modern front ends, cloud and AI-assisted workflows.
    </AnimatedText>

    <AnimatedContainer animation="stagger" delay={0.5} staggerDelay={0.2}>
      <List>
        {stack.map(({ title, Icon, items }) => (
          <motion.div key={title} variants={cardVariants} whileHover="hover">
            <ListItem>
              <ListIconWrapper variants={iconVariants}>
                <Icon />
              </ListIconWrapper>
              <ListContainer>
                <ListTitle>{title}</ListTitle>
                <ListParagraph variants={chipListVariants}>
                  {items.map((item) => (
                    <Chip key={item} variants={chipVariants}>{item}</Chip>
                  ))}
                </ListParagraph>
              </ListContainer>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </AnimatedContainer>

    <AnimatedDivider colorAlt />
  </Section>
);

export default Technologies;
