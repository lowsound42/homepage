import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import { BiMoon, BiSun } from 'react-icons/bi';

import { device } from '../styles/mediaQueryHelpers';
const Navbar = () => {
    const [theme, setTheme] = useState<string>('light');
    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    };

    useEffect(() => {
        let preference = localStorage.getItem('themePreference') || 'light';
        setTheme(preference);
    }, []);

    useEffect(() => {
        localStorage.setItem('themePreference', theme);
    }, [theme]);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <NavContainer className=".navContainer">
                <NavUList>
                    <NavLink>
                        <Link href="/">Home</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/blog">Blog</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/projects">Projects</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/contact">Contact</Link>
                    </NavLink>
                </NavUList>
                <NavToggle onClick={toggleTheme}>
                    {theme === 'dark' ? (
                        <BiSun size={30} />
                    ) : (
                        <BiMoon size={30} />
                    )}
                </NavToggle>
            </NavContainer>
        </ThemeProvider>
    );
};
export default Navbar;

const NavContainer = styled.nav`
    height: 70px;
    padding: 10px 50px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    @media ${device.tablet} {
        justify-content: space-between;
    }
`;
const NavUList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    justify-content: center;
    padding-left: 0rem;
`;

const NavLink = styled.li`
    & a {
        margin: 5px 15px;
    }
`;

const NavToggle = styled.div`
    &:hover {
        cursor: pointer;
    }
`;
