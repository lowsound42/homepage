import Navbar from './Navbar';
import { LayoutProps } from './types';
import styled from 'styled-components';

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />

            <MainContainer>
                <main>
                    <LayoutContent>{children} </LayoutContent>
                </main>
            </MainContainer>
        </>
    );
};
export default Layout;

const MainContainer = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const LayoutContent = styled.div`
    padding: 1rem 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1rem;
}`;
