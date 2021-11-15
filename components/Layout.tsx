import Navbar from './Navbar';
import { LayoutProps } from './types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
            >
                <MainContainer>
                    <main>
                        <LayoutContent>{children} </LayoutContent>
                    </main>
                </MainContainer>
            </motion.main>
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
