import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease;
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
  flex-shrink: 0;
  /* own compositor layer: kills the 1px seam that flickers between image and
     text while the card lifts on fractional-DPI screens */
  transform: translateZ(0);
  backface-visibility: hidden;

  /* fades the screenshot into the card surface instead of a hard cut */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -1px;
    background: ${props => props.theme.colors.cardFade};
    pointer-events: none;
  }
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 2rem 3rem 1rem;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 2.5rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.5rem 0;
    row-gap: 2rem;
  }
`
export const BlogCard = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  width: 100%;
  max-width: 440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  isolation: isolate;
  background: ${props => props.theme.colors.cardSurface};
  border: 1px solid ${props => props.theme.colors.borderSubtle};
  box-shadow: ${props => props.theme.colors.cardShadow};
  transition: box-shadow 0.45s ease, border-color 0.45s ease;

  /* gradient hairline border that lights up on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: ${props => props.theme.colors.cardSheen};
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.45s ease;
    pointer-events: none;
    z-index: 3;
  }

  &:hover {
    border-color: transparent;
    box-shadow: ${props => props.theme.colors.cardShadowHover};
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover ${Img} {
    transform: scale(1.07);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1.5px;
  color: ${props => props.theme.colors.cardTitle};
  padding: ${(props) => props.title ? '1.6rem 1.8rem 0' : '.5rem 0'};
  margin: 0;
  font-size: ${(props) => props.title ? '2.2rem' : '1.8rem'};
  line-height: 1.25;
`;

export const Hr = styled.hr`
  width: 56px;
  height: 2px;
  margin: 1.4rem auto 0;
  border: 0;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.accent1} 0%,
    ${props => props.theme.colors.button} 100%
  );
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: ${props => props.theme.colors.textMuted};
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 1.6rem 2rem 0;
  margin: 0;
  color: ${props => props.theme.colors.textMuted};
  font-size: 1.4rem;
  line-height: 1.7;
  text-align: left;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.4rem 1.6rem 0;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 0 0 2.2rem 0;
  margin-top: auto;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 1.1rem 2.6rem;
  background: linear-gradient(
    120deg,
    hsl(34.9, 98.6%, 72.9%) 0%,
    hsl(205.1, 100%, 36.1%) 50%,
    hsl(34.9, 98.6%, 72.9%) 100%
  );
  background-size: 220% 100%;
  background-position: 0% 50%;
  border-radius: 999px;
  transition: background-position 0.55s ease, transform 0.25s ease, box-shadow 0.25s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);

  &:hover {
    background-position: 100% 50%;
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(0, 119, 182, 0.35);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  }
`;

export const StackLabel = styled.span`
  display: block;
  margin: 2rem 0 0;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textFaint};
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  list-style: none;
  padding: 1.2rem 2rem 1.8rem;
  margin: 0;
`
export const Tag = styled.li`
  color: ${props => props.theme.colors.textMuted};
  background: ${props => props.theme.colors.chipBg};
  border: 1px solid ${props => props.theme.colors.chipBorder};
  border-radius: 999px;
  padding: 0.45rem 1.1rem;
  font-size: 1.2rem;
  line-height: 1;
  white-space: nowrap;
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;

  &:hover {
    color: ${props => props.theme.colors.primary1};
    border-color: ${props => props.theme.colors.accent1};
    background: ${props => props.theme.colors.borderSubtle};
  }
`

export const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary1};
  margin: 5rem 3rem 0;

  &::before {
    content: '';
    flex-shrink: 0;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${props => props.$color || props.theme.colors.accent1};
    box-shadow: 0 0 0 4px ${props => (props.$color || '#f77f00') + '22'},
      0 0 16px ${props => props.$color || '#f77f00'};
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      ${props => (props.$color || '#f77f00') + '80'} 0%,
      transparent 100%
    );
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    letter-spacing: 3px;
    margin: 4rem 2rem 0;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.25rem;
    letter-spacing: 2px;
    margin: 3.5rem 1.5rem 0;
  }
`

export const Badge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 999px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  background: ${(props) => {
    switch(props.type) {
      case 'Work':
        return 'linear-gradient(135deg, rgba(0, 119, 182, 0.9) 0%, rgba(0, 180, 216, 0.9) 100%)';
      case 'Course':
        return 'linear-gradient(135deg, rgba(123, 44, 191, 0.9) 0%, rgba(199, 125, 255, 0.9) 100%)';
      case 'Personal':
        return 'linear-gradient(135deg, rgba(45, 106, 79, 0.9) 0%, rgba(82, 183, 136, 0.9) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(247, 127, 0, 0.9) 0%, rgba(252, 191, 73, 0.9) 100%)';
    }
  }};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  z-index: 4;
`

// Shown instead of a Visit button for work that has no public URL.
export const PrivateNote = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 1rem 2rem;
  border-radius: 999px;
  color: ${props => props.theme.colors.textSubtle};
  background: ${props => props.theme.colors.chipBg};
  border: 1px dashed ${props => props.theme.colors.chipBorder};
`;
