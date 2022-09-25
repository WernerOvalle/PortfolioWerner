import Link from "next/link";
import React from "react";
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
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <RiBook2Line size="3rem" /> <Span> Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#certificates">
          <NavLink>Certficates</NavLink>
         
        </Link>
       
      </li>

    
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
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
