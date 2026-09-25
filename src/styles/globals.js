import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }

  @media only screen and (max-width: 1150px) {
    #profileImg {
      display: none;
    }
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    position: relative;
  }

  /* Fixed backdrop: soft accent glows plus a faint dot grid that fades out
     towards the bottom, so the page has depth without competing with content. */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      ${props => props.theme.colors.pageGlow},
      radial-gradient(${props => props.theme.colors.gridDot} 1px, transparent 1px) 0 0 / 28px 28px;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%);
  }
  
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;