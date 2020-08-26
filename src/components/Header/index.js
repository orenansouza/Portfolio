import React from 'react';

import Logo from '../Logo/Logo';
import Buttons from '../Button/Button';
import SocialMedia from '../SocialMedia';

import { DiGithubBadge } from 'react-icons/di';
import { TiSocialLinkedin } from 'react-icons/ti';
import { GoMail } from 'react-icons/go';

import {
  Container,
  ContainerLogo,
  ContainerEmail,
  ContainerSocialMedia,
} from './styles';

function Header() {
  return (
    <Container>
      <ContainerLogo>
        <Logo firstName='Renan' lastName='Souza' />
        <Buttons />
        <ContainerSocialMedia>
          <SocialMedia
            Icon={TiSocialLinkedin}
            title='Linkedin'
            link='https://www.linkedin.com/in/orenansouza/'
          />
          <SocialMedia
            Icon={DiGithubBadge}
            title='Github'
            link='https://github.com/orenansouza'
          />
          <ContainerEmail href='mailto:renansouza.21.109@icloud.com'>
            <GoMail color='#71fca9' size={20} />
          </ContainerEmail>
        </ContainerSocialMedia>
      </ContainerLogo>
    </Container>
  );
}

export default Header;
