import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { DiCssdeck, DiBitbucket } from "react-icons/di";
import { HiMail } from "react-icons/hi";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
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
          <SocialIcons href="https://bit.ly/linkedin-werner">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/werner_ovalle">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
