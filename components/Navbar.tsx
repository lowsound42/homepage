import Link from 'next/link';
import navStyles from '../styles/Navbar.module.css';
import styled from 'styled-components';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
const Navbar = () => {
    const [theme, setTheme] = useState<string>('light');
    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <NavContainer className={navStyles.nav}>
                <NavUList>
                    <NavLink>
                        <Link href="/">Home</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/contact">Contact</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/blog">Blog</Link>
                    </NavLink>
                </NavUList>
                <NavToggle onClick={toggleTheme}>
                    {theme === 'dark' ? '🌙' : '🌞'}
                </NavToggle>
            </NavContainer>
        </ThemeProvider>
    );
};
export default Navbar;

const NavContainer = styled.nav`
    height: 50px;
    padding: 10px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const NavUList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`;

const NavLink = styled.li`
    & a {
        margin: 5px 15px;
    }
`;

const NavToggle = styled.div``;
