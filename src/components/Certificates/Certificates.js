import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedTitle } from '../AnimatedComponents';
import {
  BlogCard,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
  ImgWrapper,
  CardDesc,
  CardTag,
  FilterBar,
  FilterChip,
  ChipCount,
  ShowAllRow,
  ShowAllBtn,
} from './CertificatesStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { certificateCategories } from '../../constants/constants';

const ALL = 'All';
const PREVIEW_COUNT = 6;

const Certificates = () => {
  const [active, setActive] = useState(ALL);
  const [expanded, setExpanded] = useState(false);

  const allItems = useMemo(
    () =>
      certificateCategories.flatMap((cat) =>
        cat.items.map((item) => ({
          ...item,
          category: cat.category,
          color: cat.color,
        }))
      ),
    []
  );

  const filters = useMemo(
    () => [
      { label: ALL, color: null, count: allItems.length },
      ...certificateCategories.map((cat) => ({
        label: cat.category,
        color: cat.color,
        count: cat.items.length,
      })),
    ],
    [allItems.length]
  );

  const filtered = useMemo(() => {
    if (active !== ALL) return allItems.filter((item) => item.category === active);
    // strongest credentials first in the unfiltered preview
    return [...allItems].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [active, allItems]);

  const visible = expanded ? filtered : filtered.slice(0, PREVIEW_COUNT);
  const hiddenCount = filtered.length - visible.length;

  const selectFilter = (label) => {
    setActive(label);
    setExpanded(false);
  };

  return (
    <Section nopadding id="certificates">
      <AnimatedTitle eyebrow="04 — Credentials">Certificates</AnimatedTitle>

      <FilterBar>
        {filters.map((f) => (
          <FilterChip
            key={f.label}
            $active={active === f.label}
            $color={f.color}
            onClick={() => selectFilter(f.label)}
            aria-pressed={active === f.label}
          >
            {f.label}
            <ChipCount>{f.count}</ChipCount>
          </FilterChip>
        ))}
      </FilterBar>

      <GridContainer>
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <BlogCard>
                <ImgWrapper>
                  <Img src={p.image} alt={p.title} loading="lazy" />
                </ImgWrapper>
                <TitleContent>
                  <CardTag $color={p.color}>{p.category}</CardTag>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                {p.description && <CardDesc>{p.description}</CardDesc>}
                <UtilityList>
                  {p.visit && p.visit.trim() !== '' && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLinks
                        href={p.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.inProgress ? 'Learn More' : 'View Certificate'}
                      </ExternalLinks>
                    </motion.div>
                  )}
                </UtilityList>
              </BlogCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </GridContainer>

      {(hiddenCount > 0 || expanded) && (
        <ShowAllRow>
          <ShowAllBtn onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : `Show all (${filtered.length})`}
          </ShowAllBtn>
        </ShowAllRow>
      )}

      <SectionDivider divider />
    </Section>
  );
};

export default Certificates;
