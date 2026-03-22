import styled from 'styled-components';

export const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) => props.theme.colors.background1};
  border-bottom: 1px solid ${(props) =>
    props.$scrolled ? props.theme.colors.borderSubtle : 'transparent'};
  box-shadow: ${(props) =>
    props.$scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : 'none'};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`;

export const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2.4rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1.6rem;
    height: 5.6rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary1};
  opacity: 0.75;
  cursor: pointer;
  transition: opacity 0.25s ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary1};
  border-radius: 50%;
  padding: 6px;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${(props) => props.theme.colors.background2};
    transform: scale(1.15);
    cursor: pointer;
  }
`;

/* ── Hamburger ── */
export const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  color: ${(props) => props.theme.colors.primary1};
  border-radius: 8px;
  transition: background 0.2s ease;

  &:focus { outline: none; }
  &:hover { background: ${(props) => props.theme.colors.background2}; }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* ── Mobile Menu ── */
export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
`;

export const MobileMenuPanel = styled.div`
  position: fixed;
  top: 5.6rem;
  left: 0;
  right: 0;
  z-index: 999;
  background: ${(props) => props.theme.colors.background1};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderSubtle};
  padding: 1.2rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const MobileNavLink = styled.a`
  font-size: 1.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary1};
  padding: 1.1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderSubtle};
  opacity: 0.85;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease, padding-left 0.2s ease;

  &:hover {
    opacity: 1;
    padding-left: 0.8rem;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export const MobileSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-top: 2rem;
  flex-wrap: wrap;
`;
