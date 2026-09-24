import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.6rem;
  margin: 3rem 0 4rem;

  /* motion.div wrappers must stretch so every card has the same height */
  > * {
    display: flex;
  }

  @media ${props => props.theme.breakpoints.lg}{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${props => props.theme.breakpoints.md}{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin: 2rem 0 3rem;
  }
`

export const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.2rem 1.8rem 2.4rem;
  border-radius: 18px;
  background: ${props => props.theme.colors.cardSurface};
  border: 1px solid ${props => props.theme.colors.borderSubtle};
  box-shadow: ${props => props.theme.colors.cardShadow};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.colors.cardShadow}, 0 0 32px ${props => props.theme.colors.accentGlow};
  }

  @media ${props => props.theme.breakpoints.sm}{
    flex-direction: row;
    gap: 1.6rem;
    padding: 1.8rem 1.6rem;
  }
`

export const ListIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  margin-bottom: 1.6rem;
  border-radius: 14px;
  color: ${props => props.theme.colors.accent};
  background: ${props => props.theme.colors.accentSoft};
  border: 1px solid ${props => props.theme.colors.chipBorder};

  svg {
    width: 28px;
    height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 44px;
    height: 44px;
    margin-bottom: 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 1.4rem;

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 1.9rem;
    margin-bottom: 1rem;
  }
`

export const ListParagraph = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 0;
`

export const Chip = styled.span`
  color: ${props => props.theme.colors.textMuted};
  background: ${props => props.theme.colors.chipBg};
  border: 1px solid ${props => props.theme.colors.chipBorder};
  border-radius: 999px;
  padding: 0.5rem 1.1rem;
  font-size: 1.3rem;
  line-height: 1.2;
  white-space: nowrap;
`
