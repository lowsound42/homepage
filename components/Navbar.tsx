import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useRouter } from 'next/router';

// Array of links/pages
const menu = [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' }
];
import { device } from '../styles/mediaQueryHelpers';
const Navbar = () => {
    const router = useRouter();
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

    // we loop over the array of pages and generate the links dynamically. This way we can check what path we are on and set the active link accordingly
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <NavContainer className=".navContainer">
                <NavUList>
                    {menu.map((item, index) => {
                        return (
                            <NavLink key={index}>
                                <Link href={item.path}>
                                    <a
                                        className={`cursor-pointer ${
                                            router.pathname === item.path
                                                ? 'activeLink navlink'
                                                : 'inactiveLink navlink'
                                        }`}
                                    >
                                        {item.title}
                                    </a>
                                </Link>
                            </NavLink>
                        );
                    })}
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
    position: fixed;
    z-index: 999;
    height: 70px;
    padding: 10px 50px;
    display: flex;
    align-items: center;
    width: 100%;
    font-family: 'Space Grotesk';
    justify-content: center;
    @media ${device.tablet} {
        justify-content: space-between;
    }
`;
const NavUList = styled.ul`
    @media ${device.mobileS} {
        font-size: 0.7rem;
    }
    @media ${device.mobileM} {
        font-size: 1rem;
    }
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
