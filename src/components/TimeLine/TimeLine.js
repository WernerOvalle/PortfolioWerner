import React, { useState, useEffect } from 'react';
import { AnimatedTitle, AnimatedText, AnimatedContainer } from '../AnimatedComponents';

import { Milestone, MilestoneDot, MilestoneNow, MilestoneText, MilestoneYear, Track } from './TimeLineStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const LAST_INDEX = TimeLineData.length - 1;

const Timeline = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(5);

  useEffect(() => {
    // Calculate years of experience on client side only to avoid hydration mismatch
    // Started working in February 2019
    const now = new Date();
    const startDate = new Date(2019, 1); // February 2019 (month is 0-indexed)
    const years = Math.floor((now - startDate) / (365.25 * 24 * 60 * 60 * 1000));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only value; computing it during render would mismatch the static HTML
    setYearsOfExperience(years);
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />

      <AnimatedTitle eyebrow="01 — About">About Me</AnimatedTitle>

      <AnimatedText delay={0.3}>
        Software Engineer with {yearsOfExperience}+ years of experience, specialized in .NET back-end development for the banking sector. Based in Guatemala and working remotely for BDG Panama, I build and modernize the CRM and lending systems that banks and credit cooperatives across Central America run on.
      </AnimatedText>

      <AnimatedContainer animation="stagger" delay={0.5} staggerDelay={0.08}>
        <Track>
          {TimeLineData.map((item, index) => {
            const current = index === LAST_INDEX;
            return (
              <Milestone key={index} $current={current}>
                <MilestoneDot $current={current} />
                <MilestoneYear $current={current}>
                  {item.year}
                  {current && <MilestoneNow>Now</MilestoneNow>}
                </MilestoneYear>
                <MilestoneText>{item.text}</MilestoneText>
              </Milestone>
            );
          })}
        </Track>
      </AnimatedContainer>

      <SectionDivider colorAlt />
    </Section>
  );
};

export default Timeline;
