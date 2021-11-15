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
    body: '#FEFCED',
    text: '#5D2689',
    toggleBorder: '#FFF',
    background: '#47297B',
    buttonBody: '#363537',
    buttonText: '#FAFAFA',
    navText: '#FEFCED',
    link: '#1D00FF',
    linkClicked: '#D33BDD',
    colorButton: '#FC8370',
    colorButtonText: '#FAFAFA',
    hoverColorButton: '#C2549D',
    hoverColorText: '#FFFFFF'
};

export const darkTheme = {
    body: '#363537',
    text: '#C6CDF2',
    toggleBorder: '#6B8096',
    background: '#696969',
    buttonBody: '#FAFAFA',
    navText: '#C6CDF2',
    buttonText: '#363537',
    link: '#FF0000',
    linkClicked: '#F200FF',
    colorButton: '#C6CDF2',
    colorButtonText: '#000000',
    hoverColorButton: '#696969',
    hoverColorText: '#C6CDF2'
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

    .backButtonHolder{
      text-align: center;
      background-color: ${({ theme }) => theme.colorButton};
      margin-top: 1rem;
      padding:1rem 1rem;
      align-self: flex-end;
      color: ${({ theme }) => theme.colorButtonText};

      &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.hoverColorButton};
          color: ${({ theme }) => theme.hoverColorText};
      }

      @media (min-width: 1024px){
        align-self:flex-end
      }
    }

    .readButtonHolder{
      align-self: flex-end;
      font-size: 0.9rem;
      text-align: center;
      align-self: flex-end;
      background-color: ${({ theme }) => theme.colorButton};
      margin-top: 1rem;
      padding:1rem 1rem;
      color: ${({ theme }) => theme.colorButtonText};

      &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.hoverColorButton};
          color: ${({ theme }) => theme.hoverColorText};

      }

      @media (min-width: 1024px){
        align-self:flex-end
      }
    }

    .activeLink {
      border-bottom: 1px solid ${({ theme }) => theme.navText};
    }

    .inactiveLink:hover{
      background-color:  ${({ theme }) => theme.navText};
      color: ${({ theme }) => theme.background};
    }
  
    .navlink{
      padding: 0.2rem 0.2rem
    }
`;
