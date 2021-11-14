import styled from 'styled-components';
import { ImHipster } from 'react-icons/im';
import mixins from '../styles/mixins';
import Image from 'next/image';
const AboutHero = () => {
    return (
        <AboutContainer className="heroContainer">
            <CartoonMe>
                <Image
                    src="/CroppedCartoonMeAndGobi.png"
                    alt="cartoony image of me by Lisa Guo"
                    width="150"
                    height="150px"
                />
            </CartoonMe>
            <AboutText>
                <AboutHeader>Hello. It&apos;s me, Omar</AboutHeader>
                <p>
                    I&apos;m a Web Developer who like cats, dogs, bikes, rock
                    music, pizza, and probably other stuff as well.
                </p>
                <p>
                    For a while I did technical recruitment for companies in the
                    fintech and traveltech space and helped build teams that
                    built great products. These days I&apos;m more interested in
                    building the things and so here I am, learning what I can to
                    help me do that.
                </p>
            </AboutText>
        </AboutContainer>
    );
};
export default AboutHero;

const AboutContainer = styled.div`
    ${mixins.flexColumn}
    min-height: 60vh;
    justify-content: center;
`;
const CartoonMe = styled.div``;
const AboutText = styled.div`
    text-align: center;
    width: 90vw;
`;
const AboutHeader = styled.h1`
    font-family: 'Space Grotesk';
`;
