import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { DiCssdeck, DiBitbucket } from "react-icons/di";
import { HiMail } from "react-icons/hi";
import { VscAzure } from "react-icons/vsc";
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
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <FaTelegramPlane /> Telegram
          </LinkTitle>

          <LinkItem href="https://t.me/Wernerovalle">
            {" "}
            https://t.me/Wernerovalle
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            <HiMail /> Email
          </LinkTitle>
          <LinkItem href="mailto:wernerovalle1995@hotmail.com">
            wernerovalle1995@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Never Stop Learning</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/WernerOvalle">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://bitbucket.org/wjop5bb/">
            <DiBitbucket size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/werner-ovalle/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/werner_ovalle">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <CopyrightBar>
        <CopyrightText>© {new Date().getFullYear()} Werner</CopyrightText>
        <CopyrightDivider>—</CopyrightDivider>
        <TechBadge>Built with Next.js</TechBadge>
        <CopyrightDivider>•</CopyrightDivider>
        <TechBadge azure><VscAzure /> Deployed on Azure Static Web Apps</TechBadge>
      </CopyrightBar>
    </FooterWrapper>
  );
};

export default Footer;
