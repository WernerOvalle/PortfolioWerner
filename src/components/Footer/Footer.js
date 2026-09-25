import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { SiNetlify } from "react-icons/si";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  CopyrightBar,
  CopyrightDivider,
  CopyrightText,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  TechBadge,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <HiMail /> Email
          </LinkTitle>
          <LinkItem href="mailto:wovalle@protonmail.com">
            wovalle@protonmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            <AiFillLinkedin /> LinkedIn
          </LinkTitle>
          <LinkItem
            href="https://www.linkedin.com/in/werner-ovalle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/werner-ovalle
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Open to remote opportunities — let&apos;s talk.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/WernerOvalle" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/werner-ovalle/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <CopyrightBar>
        <CopyrightText>© {new Date().getFullYear()} Werner Ovalle</CopyrightText>
        <CopyrightDivider>—</CopyrightDivider>
        <TechBadge>Built with Next.js</TechBadge>
        <CopyrightDivider>•</CopyrightDivider>
        <TechBadge netlify><SiNetlify /> Deployed on Netlify</TechBadge>
      </CopyrightBar>
    </FooterWrapper>
  );
};

export default Footer;
