import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    buttonBody: '#363537',
    buttonText: '#FAFAFA'
};

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    buttonBody: '#FAFAFA',
    buttonText: '#363537'
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  button{
    color: ${({ theme }) => theme.buttonText};
    transition: all 0.50s linear;
    background: ${({ theme }) => theme.buttonBody}
  }

`;
