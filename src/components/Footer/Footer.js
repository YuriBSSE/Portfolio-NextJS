import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ahsanmuneer81@gmail.com">
          ahsanmuneer81@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2021 <Link href="#">  Ahsan Muneer</Link> . All rights reserved.</Slogan>
        </CompanyContainer>
        {/* <SocialContainer>
          <SocialIcons href="https://github.com/YuriBSSE">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/muhammad-ahsan-muneer-36980738/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer> */}
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
