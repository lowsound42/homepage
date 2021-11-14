import styled from 'styled-components';
import { ImHipster } from 'react-icons/im';
import mixins from '../styles/mixins';

const AboutHero = () => {
    return (
        <AboutContainer className="heroContainer">
            <CartoonMe>
                <ImHipster size={70} />
            </CartoonMe>
            <AboutText>
                <h4>Hello</h4>
                <p>
                    I like cats, dogs, bikes, rock music, pizza, and probably
                    other stuff as well.
                </p>
            </AboutText>
        </AboutContainer>
    );
};
export default AboutHero;

const AboutContainer = styled.div`
    ${mixins.flexColumn}
    height: 100vh;
    justify-content: center;
`;
const CartoonMe = styled.div``;
const AboutText = styled.div`
    text-align: center;
    width: 100vw;
`;
