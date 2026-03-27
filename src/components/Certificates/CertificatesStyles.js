import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  justify-items: center;
  align-items: stretch;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`
export const BlogCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.cardBg};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 400;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.cardTitle};
  padding: 2rem;
  font-size: ${(props) => props.title ? '2rem' : '1rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
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
  padding: 0 50px;
  color: ${props => props.theme.colors.textMuted};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0 1.25rem 0;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 12px 24px;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, hsl(34.9, 98.6%, 72.9%) 0%, hsl(205.1, 100%, 36.1%) 100%);
  border-radius: 25px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, hsl(205.1, 100%, 36.1%) 0%, hsl(34.9, 98.6%, 72.9%) 100%);
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 0;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: ${props => props.theme.colors.textMuted};
font-size: 1.5rem;
`

export const CategoryTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props => props.$color || props.theme.colors.cardTitle};
  margin: 4rem 0 0.4rem 3rem;
  padding-left: 1.2rem;
  border-left: 4px solid ${props => props.$color || props.theme.colors.accent1};

  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
    margin: 3rem 0 0.4rem 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
    margin: 2.5rem 0 0.4rem 1rem;
  }
`

export const CategoryDesc = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.textSubtle};
  margin: 0.4rem 0 1rem 3rem;
  padding-left: 1.2rem;
  line-height: 1.7;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    margin: 0.4rem 0 1rem 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    margin: 0.4rem 0 1rem 1rem;
  }
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
  font-size: 1.15rem;
  color: ${props => props.theme.colors.textMuted};
  padding: 0 1.8rem 1rem;
  line-height: 1.65;
  text-align: justify;
`