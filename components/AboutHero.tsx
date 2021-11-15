import styled from 'styled-components';
import { device } from '../styles/mediaQueryHelpers';
import mixins from '../styles/mixins';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <AboutContainer className="heroContainer">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4
                        }
                    }
                }}
            >
                <CartoonMe>
                    <Image
                        src="/CroppedCartoonMeAndGobi.png"
                        alt="cartoony image of me by Lisa Guo"
                        width="150"
                        height="150px"
                    />
                </CartoonMe>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4
                        }
                    }
                }}
            >
                <AboutText>
                    <AboutHeader>Hello. I&apos;m Omar.</AboutHeader>
                    <p>
                        I&apos;m a Web Developer who likes cats, dogs, bikes,
                        rock music, pizza, and probably other stuff as well.
                    </p>
                    <p>
                        For a while I was a technical recruiter for companies in
                        the fintech and travel-tech spaces. My job was to help
                        build the teams that built those great products. These
                        days I&apos;m more interested in building products and
                        experiences myself. So, here I am, learning, building,
                        and experimenting.
                    </p>
                </AboutText>
            </motion.div>
        </AboutContainer>
    );
};
export default AboutHero;

const AboutContainer = styled.div`
    ${mixins.flexColumn}
    min-height: 70vh;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 5rem;
`;
const CartoonMe = styled.div``;
const AboutText = styled.div`
    text-align: center;
    width: 90vw;
    @media ${device.tablet} {
        width: 70vw;
    }
`;
const AboutHeader = styled.h1`
    font-family: 'Space Grotesk';
    font-size: 2.5rem;
`;
