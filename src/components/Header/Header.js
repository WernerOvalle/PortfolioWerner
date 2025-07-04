import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { RiBook2Line } from "react-icons/ri";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  ContactDropDown
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}>

        <RiBook2Line size="3rem" /> <Span> Portfolio</Span>

      </Link>
    </Div1>
    <Div2>
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.1, y: -2 }}
    >
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1, y: -2 }}
      >
        <Link href="#certificates" legacyBehavior>
          <NavLink>Certficates</NavLink>
         
        </Link>
       
      </motion.li>

    
      <motion.li
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.1, y: -2 }}
      >
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </motion.li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/WernerOvalle">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://bit.ly/linkedin-werner">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/werner_ovalle">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      
    </Div3>
  </Container>
);

export default Header;
