import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
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
  letter-spacing: 1.2px;
  color: ${props => props.theme.colors.cardTitle};
  padding: ${(props) => props.title ? '1.6rem 1.8rem 0' : '.5rem 0'};
  margin: 0;
  font-size: ${(props) => props.title ? '1.8rem' : '1rem'};
  line-height: 1.35;
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
  padding: 2rem 2rem 0;
  display: flex;
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
`

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  padding: 3rem 3rem 0;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 1.2rem 0;
    gap: 0.6rem;
  }
`

export const FilterChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: 999px;
  padding: 0.9rem 1.6rem;
  color: ${props => props.$active
    ? props.theme.colors.primary1
    : props.theme.colors.textSubtle};
  background: ${props => props.$active
    ? props.theme.colors.chipBg
    : 'transparent'};
  border: 1px solid ${props => props.$active
    ? (props.$color || props.theme.colors.accent1)
    : props.theme.colors.chipBorder};
  box-shadow: ${props => props.$active
    ? `0 0 20px ${(props.$color || '#f77f00')}33`
    : 'none'};
  transition: color 0.25s ease, background 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease, transform 0.2s ease;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
    background: ${props => props.$color || props.theme.colors.accent1};
    opacity: ${props => props.$active ? 1 : 0.45};
    box-shadow: ${props => props.$active
      ? `0 0 10px ${props.$color || '#f77f00'}`
      : 'none'};
    transition: opacity 0.25s ease, box-shadow 0.25s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.primary1};
    border-color: ${props => props.$color || props.theme.colors.accent1};
    transform: translateY(-2px);
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.15rem;
    padding: 0.7rem 1.2rem;
    gap: 0.6rem;
  }
`

export const ChipCount = styled.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textFaint};
`

export const ShowAllRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 3rem 0;
`

export const ShowAllBtn = styled.button`
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => props.theme.colors.textMuted};
  background: transparent;
  border: 1px solid ${props => props.theme.colors.chipBorder};
  border-radius: 999px;
  padding: 1.1rem 2.8rem;
  transition: color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease,
    transform 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary1};
    border-color: ${props => props.theme.colors.accent1};
    box-shadow: 0 0 22px ${props => props.theme.colors.borderSubtle};
    transform: translateY(-2px);
  }
`

export const CardTag = styled.span`
  display: block;
  padding: 1.6rem 1.8rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${props => props.$color || props.theme.colors.textFaint};
`

export const EmptyNote = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.textSubtle};
  font-size: 1.4rem;
  padding: 3rem;
`

export const CarouselOuter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.5rem 0.5rem;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1rem 0.25rem 0.5rem;
    gap: 0.5rem;
  }
`

export const CarouselViewport = styled.div`
  overflow: hidden;
  flex: 1;
`

export const CarouselCard = styled.div`
  flex-shrink: 0;
  width: 280px;

  @media ${props => props.theme.breakpoints.sm} {
    width: calc(82vw);
  }
`

export const ArrowButton = styled.button`
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.borderSubtle};
  border-radius: 50%;
  color: ${props => props.theme.colors.primary1};
  width: 42px;
  height: 42px;
  min-width: 42px;
  font-size: 2.6rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.borderMuted};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 34px;
    height: 34px;
    min-width: 34px;
    font-size: 2rem;
  }
`

export const DotsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0 1.5rem;
`

export const Dot = styled.button`
  width: ${props => props.$active ? '22px' : '8px'};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${props => props.$active
    ? (props.$color || '#9cc9e3')
    : 'rgba(128,128,128,0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`

export const CardDesc = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.textMuted};
  padding: 1.2rem 2rem 0;
  margin: 0;
  line-height: 1.7;
  text-align: left;
`
