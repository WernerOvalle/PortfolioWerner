import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'

// Soft ring that keeps pulsing out of the current ("Now") milestone.
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(2.6); opacity: 0; }
`

// Horizontal track on desktop (one dot per milestone on a shared line),
// vertical list on tablet/mobile. The latest milestone is highlighted.
// TrackWrap holds the drawn line next to the list, so the <ol> only has <li>s.
export const TrackWrap = styled(motion.div)`
  position: relative;
  margin: 2rem 0 7rem;

  @media ${props => props.theme.breakpoints.md} {
    margin: 1rem 0 5rem;
  }
`

export const Track = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 1.6rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2.4rem;
    padding-left: 3rem;
  }
`

// The connecting line runs through the centre of the dots. TrackLine is the
// faint rail; TrackProgress is the bright line drawn over it, scaled by the
// --progress custom property (0..1) that TimeLine animates on reveal.
const line = css`
  position: absolute;
  top: 7px;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 2px;
  pointer-events: none;

  @media ${props => props.theme.breakpoints.md} {
    top: 0;
    bottom: 0;
    left: 7px;
    right: auto;
    width: 2px;
    height: auto;
  }
`

export const TrackLine = styled.span`
  ${line}
  background: ${props => props.theme.colors.borderSubtle};
`

export const TrackProgress = styled(motion.span)`
  ${line}
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.borderMuted} 0%,
    ${props => props.theme.colors.accent} 100%
  );
  transform: scaleX(var(--progress, 1));
  transform-origin: left center;

  @media ${props => props.theme.breakpoints.md} {
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.borderMuted} 0%,
      ${props => props.theme.colors.accent} 100%
    );
    transform: scaleY(var(--progress, 1));
    transform-origin: center top;
  }
`

export const Milestone = styled.li`
  position: relative;
  padding-top: 3.2rem;

  @media ${props => props.theme.breakpoints.md} {
    padding-top: 0;
  }
`

export const MilestoneDot = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.$current ? props.theme.colors.accent : props.theme.colors.background1};
  border: 2px solid ${props => props.$current ? props.theme.colors.accent : props.theme.colors.borderMuted};
  box-shadow: ${props => props.$current ? `0 0 0 5px ${props.theme.colors.accentSoft}, 0 0 18px ${props.theme.colors.accentGlow}` : 'none'};

  ${props => props.$current && css`
    &::after {
      content: "";
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      border: 2px solid ${props.theme.colors.accent};
      opacity: 0;
      animation: ${pulse} 2.4s ease-out 2.2s infinite;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }
  `}

  @media ${props => props.theme.breakpoints.md} {
    top: 4px;
    left: -3rem;
  }
`

export const MilestoneYear = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.8rem;
  color: ${props => props.$current ? props.theme.colors.accent : props.theme.colors.primary1};

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.9rem;
  }
`

export const MilestoneNow = styled(motion.span)`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  color: ${props => props.theme.colors.accent};
  background: ${props => props.theme.colors.accentSoft};
  border: 1px solid ${props => props.theme.colors.chipBorder};
`

export const MilestoneText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textMuted};

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.5rem;
    max-width: 52rem;
  }
`
