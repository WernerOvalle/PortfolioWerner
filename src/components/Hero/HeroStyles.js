import styled from 'styled-components'

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
  color: ${props => props.theme.colors.accent1};
  font-weight: 800;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 1.2em;
  
  > * {
    grid-column: 1;
    grid-row: 1;
  }
  
  &::before {
    content: "Full Stack Developer_";
    grid-column: 1;
    grid-row: 1;
    visibility: hidden;
    font-weight: 800;
    white-space: nowrap;
  }
  
  .typed-cursor {
    color: ${props => props.theme.colors.accent1};
    font-weight: 100;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

