import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiBook2Line } from "react-icons/ri";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useThemeContext } from "../../contexts/ThemeContext";

import {
  NavBar,
  NavInner,
  Logo,
  NavLinks,
  NavLink,
  NavActions,
  SocialIcons,
  HamburgerBtn,
  MobileMenuOverlay,
  MobileMenuPanel,
  MobileNavLink,
  MobileSocials,
} from "./HeaderStyles";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "About", href: "#about" },
];

const socials = [
  { href: "https://github.com/WernerOvalle", icon: AiFillGithub },
  { href: "https://www.linkedin.com/in/werner-ovalle/", icon: AiFillLinkedin },
  { href: "https://www.instagram.com/werner_ovalle", icon: AiFillInstagram },
];

const menuVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.2, delay: i * 0.06 },
  }),
};

const Header = () => {
  const { isDark } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) setHeaderHeight(navRef.current.offsetHeight);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div style={{ height: headerHeight }} />

      <NavBar ref={navRef} $scrolled={scrolled}>
        <NavInner>
          {/* Logo */}
          <Link href="/" passHref legacyBehavior>
            <Logo>
              <RiBook2Line size="2.8rem" />
              <span>Portfolio</span>
            </Logo>
          </Link>

          {/* Desktop nav links */}
          <NavLinks>
            {navItems.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                style={{ listStyle: "none" }}
              >
                <Link href={item.href} legacyBehavior>
                  <NavLink>{item.label}</NavLink>
                </Link>
              </motion.li>
            ))}
          </NavLinks>

          {/* Desktop actions */}
          <NavActions>
            <ThemeToggle />
            {socials.map((s) => (
              <SocialIcons key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                <s.icon size="2.6rem" />
              </SocialIcons>
            ))}
          </NavActions>

          {/* Mobile hamburger */}
          <HamburgerBtn
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  <RiCloseLine size="2.8rem" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  <RiMenu4Line size="2.8rem" />
                </motion.span>
              )}
            </AnimatePresence>
          </HamburgerBtn>
        </NavInner>
      </NavBar>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0,0,0,0.45)", zIndex: 998,
              }}
              onClick={closeMenu}
            />

            <MobileMenuPanel
              as={motion.div}
              key="panel"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ top: headerHeight }}
            >
              {navItems.map((item, i) => (
                <motion.div key={item.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <Link href={item.href} legacyBehavior>
                    <MobileNavLink onClick={closeMenu}>{item.label}</MobileNavLink>
                  </Link>
                </motion.div>
              ))}

              <MobileSocials>
                <ThemeToggle />
                {socials.map((s) => (
                  <SocialIcons key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                    <s.icon size="2.8rem" />
                  </SocialIcons>
                ))}
              </MobileSocials>
            </MobileMenuPanel>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
