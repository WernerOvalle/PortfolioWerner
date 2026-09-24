import styled from 'styled-components'
import { SectionText, SectionTitle } from '../../styles/GlobalComponents'

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const TypedContainer = styled.span`
  font-weight: 800;
  background: ${props => props.theme.colors.accentTextGradient};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease-in-out infinite;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 1.2em;
  
  > * {
    grid-column: 1;
    grid-row: 1;
  }
  
  &::before {
    content: "Software Engineer_";
    grid-column: 1;
    grid-row: 1;
    visibility: hidden;
    font-weight: 800;
    white-space: nowrap;
  }
  
  .typed-cursor {
    -webkit-text-fill-color: ${props => props.theme.colors.accent};
    font-weight: 100;
    animation: blink 1s infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;


// Kept narrower than the hero's grid column so the copy never runs
// underneath the profile photo on desktop.
export const HeroText = styled(SectionText)`
  max-width: 540px;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 800px;
  }
`;

export const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-top: 4.8rem;
  padding: 0.7rem 1.6rem 0.7rem 1.3rem;
  border-radius: 999px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: ${(props) => props.theme.colors.textMuted};
  background: ${(props) => props.theme.colors.chipBg};
  border: 1px solid ${(props) => props.theme.colors.chipBorder};
  backdrop-filter: blur(6px);

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.success};
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.success};
    animation: availabilityPulse 2s ease-out infinite;
  }

  @keyframes availabilityPulse {
    0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55); }
    70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
    100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 3.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;

// The availability pill sits above the name, so the title drops the large
// top padding it normally uses as the first element of the page.
export const HeroTitle = styled(SectionTitle)`
  && {
    padding-top: 2rem;
  }
`;
