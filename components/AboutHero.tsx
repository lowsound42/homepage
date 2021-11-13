import styled from 'styled-components';
import { ImHipster } from 'react-icons/im';
import mixins from '../styles/mixins';

const AboutHero = () => {
    return (
        <AboutContainer>
            <CartoonMe>
                <ImHipster size={70} />
            </CartoonMe>
            <AboutText>
                <h4>Welcome to my space</h4>
            </AboutText>
        </AboutContainer>
    );
};
export default AboutHero;

const AboutContainer = styled.div`
    ${mixins.flexColumn}
`;
const CartoonMe = styled.div``;
const AboutText = styled.div``;
