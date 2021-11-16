import Navbar from './Navbar';
import { LayoutProps } from './types';
import styled from 'styled-components';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import mixins from '../styles/mixins';
import { device } from '../styles/mediaQueryHelpers';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Omario {new Date().getFullYear()}</FooterText>
            <Social>
                <SocialLink
                    href="https://github.com/lowsound42"
                    rel="noreferrer"
                    target="_blank"
                >
                    <SiGithub size={20} />
                </SocialLink>
                <SocialLink
                    href="https://www.linkedin.com/in/omarkhanhr/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <SiLinkedin size={20} />
                </SocialLink>
            </Social>
        </FooterContainer>
    );
};

export default Footer;

const FooterText = styled.p``;

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    ${mixins.flexColumn}
    width: 100%;
    justify-content: center;
    font-family: 'Space Grotesk';
`;

const Social = styled.div`
 
    text-align: center;
    ${mixins.flexRow}
    justify-content: space-around;
    align-items:center;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 20%;
    @media ${device.laptop}{
      width: 8%;
    }
  }`;

const SocialLink = styled.a``;
