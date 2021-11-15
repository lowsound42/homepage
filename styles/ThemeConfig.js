import { createGlobalStyle } from 'styled-components';
// export const lightTheme = {
//   body: '#FFF',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   background: '#363537',
//   buttonBody: '#363537',
//   buttonText: '#FAFAFA'
// };

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   background: '#999',
//   buttonBody: '#FAFAFA',
//   buttonText: '#363537'
// };

export const lightTheme = {
    body: '#FFEFD5',
    text: '#5D2689',
    toggleBorder: '#FFF',
    background: '#47297B',
    buttonBody: '#363537',
    buttonText: '#FAFAFA',
    navText: '#FFEFD5',
    link: '#1D00FF',
    linkClicked: '#D33BDD'
};

export const darkTheme = {
    body: '#363537',
    text: '#C6CDF2',
    toggleBorder: '#6B8096',
    background: '#696969',
    buttonBody: '#FAFAFA',
    buttonText: '#363537',
    link: '#FF0000',
    linkClicked: '#F200FF'
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

  nav{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.navText};
  }

  .hereLink{
    color:  ${({ theme }) => theme.link};

    &:visited {
      color: ${({ theme }) => theme.linkClicked};
    }
  }

  p>a{
    color:  ${({ theme }) => theme.link};

    &:visited {
      color: ${({ theme }) => theme.linkClicked};
    }}

`;
