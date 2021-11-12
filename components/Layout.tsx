import Navbar from './Navbar';
import { LayoutProps } from './types';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import styled from 'styled-components';

const Layout = ({ children }: LayoutProps) => {
    const [theme, setTheme] = useState<string>('light');
    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Navbar />
            <MainContainer>
                {
                    <div className="toggleSwitch" onClick={toggleTheme}>
                        {theme === 'dark' ? <span>🌙</span> : <span>🌞</span>}
                    </div>
                }
                <main>
                    <LayoutContent>{children}</LayoutContent>
                </main>
            </MainContainer>
        </ThemeProvider>
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
    padding: 1rem 3rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.25rem;
}`;
