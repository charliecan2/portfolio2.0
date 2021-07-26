import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkRow, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
        <LinkList>
          <LinkTitle main style={{display: 'inline-block'}}>Contact</LinkTitle><br />
          <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
            <LinkItem href='tel:956-263-2453'>+1 (956) 263-2453</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:carloscq920@gmail.com'>carloscq920@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Forging intuitive & user friendly applications
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/charliecan2">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/carlos-cantu-jr/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
