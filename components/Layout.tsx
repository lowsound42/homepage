import Navbar from './Navbar';
import { LayoutProps } from './types';
import styled from 'styled-components';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <MainContainer>
                <main>
                    <LayoutContent>
                        {children} <Footer />
                    </LayoutContent>
                </main>
            </MainContainer>
        </>
    );
};
export default Layout;

const MainContainer = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const LayoutContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1rem;
}`;
