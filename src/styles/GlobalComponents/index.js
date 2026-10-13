import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.$grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.$row ? "row" : "column" };
  padding: ${(props) => props.$nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  /* the hero's photo column is hidden below this width (HeroVisual), so the
     text takes the full row instead of half of it */
  @media only screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
  }


  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.$nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.$main ? '65px' : '56px'};
  line-height: ${(props) => props.$main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: ${props => props.theme.colors.titleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.$main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.$main ? '56px' : '48px'};
    line-height: ${(props) => props.$main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.$main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.$main ? '28px' : '32px'};
    line-height: ${(props) => props.$main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.$main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

// Small numbered label shown above a section title, e.g. "01 — About".
export const SectionEyebrow = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 0.6rem;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${props => props.theme.colors.textSubtle};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 1670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.accentGradient};

    margin: ${(props) => props.$divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
// Pill-shaped call-to-action link: the back layer carries the hover gradient,
// and the front layer fades out on hover to reveal it.
export const ButtonBack = styled.a`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  text-decoration: none;
  background: ${(props) => props.theme.colors.accentGradientHover};
  box-shadow: 0 6px 18px ${(props) => props.theme.colors.accentGlow};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 3px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 16px;
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 32px;
  }
`

export const ButtonFront = styled.span`
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.accentGradient};
  transition: .4s ease;
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  justify-content: center;

  ${ButtonBack}:hover & {
    opacity: 0;
  }

  ${ButtonBack}:active & {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`
