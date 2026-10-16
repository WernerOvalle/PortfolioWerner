import React from "react";
import { motion } from "framer-motion";
import { AnimatedTitle, AnimatedText, AnimatedDivider, staggeredReveal } from '../AnimatedComponents';
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
  { title: "Back-End", Icon: TbBrandCSharp, items: ["C#", ".NET", "Entity Framework", "Node.js"] },
  { title: "Database", Icon: TbDatabase, items: ["SQL Server", "T-SQL", "PostgreSQL", "Prisma"] },
  { title: "Front-End", Icon: TbBrandReact, items: ["React", "Next.js", "TypeScript", "ASP.NET"] },
  { title: "DevOps", Icon: TbBrandDocker, items: ["Azure DevOps", "Microsoft Azure", "Docker", "CI/CD"] },
  { title: "Agentic AI", Icon: TbSparkles, items: ["Claude Code", "Agent Skills", "SDD"], stacked: true },
];

// Cards reveal one after another, then each card's chips pop in one by one.
// Hover is a plain object (not a variant label) so the cards keep inheriting
// the list's reveal; the icon's turn on hover lives in TechnologiesStyles.
const CARD_DELAY = 0.4;
const CARD_STEP = 0.12;

const cardVariants = staggeredReveal(CARD_DELAY, CARD_STEP);

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: ({ card, chip }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: CARD_DELAY + card * CARD_STEP + 0.25 + chip * 0.05,
      type: "spring",
      stiffness: 420,
      damping: 22,
    },
  }),
};

const Technologies = () => (
  <Section id="tech">
    <AnimatedTitle eyebrow="02 — Stack">Technologies</AnimatedTitle>
    <AnimatedText delay={0.3}>
      The stack I work with most. I learn whatever a project needs, but this is where I have shipped the most: .NET and SQL, modern front ends, cloud and AI-assisted workflows.
    </AnimatedText>

    <List
      as={motion.ul}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "200px" }}
    >
      {stack.map(({ title, Icon, items, stacked }, i) => (
        <ListItem
          as={motion.li}
          key={title}
          custom={i}
          variants={cardVariants}
          whileHover={{ y: -6 }}
        >
          <ListIconWrapper>
            <Icon />
          </ListIconWrapper>
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            <ListParagraph $stacked={stacked}>
              {items.map((item, j) => (
                <Chip key={item} custom={{ card: i, chip: j }} variants={chipVariants}>
                  {item}
                </Chip>
              ))}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>

    <AnimatedDivider />
  </Section>
);

export default Technologies;
