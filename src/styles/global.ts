import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Paleta inspirada no site, com fundo escuro */
    --primary-red: #D32F2F;      /* Vermelho escuro para acentos */
    --text-color: #ffffff;       /* Texto branco para contraste com o fundo preto */
    --background: #000000;       /* Fundo preto */
    --header-bg: rgba(0, 0, 0, 0.95); /* Cabeçalho quase preto com leve transparência */
    --footer-bg: #121212;        /* Fundo escuro para o footer */
    scroll-padding-top: 10rem;
  }

  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--text-color);
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }
  
  a {
    text-decoration: none;
    color: var(--primary-red);
  }
  
  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--primary-red);
    color: var(--background);
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s, background-color 0.25s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  
  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }
  
  /* Logo com destaque no primeiro caractere */
  .logo {
    font-size: 3rem;
    color: var(--text-color);
    &::first-letter {
      color: var(--primary-red);
    }
  }
  
  /* Cabeçalho com fundo escuro e links/texto em branco */
  header.header-fixed {
    transition: background-color 0.5s;
    background-color: var(--header-bg);
    a {
      transition: color 0.5s;
      color: var(--text-color);
    }
    .menu,
    .menu:before,
    .menu:after {
      background-color: var(--text-color);
    }
  }
  
  /* Footer com fundo escuro e texto em branco */
  footer.footer {
    transition: background-color 0.5s;
    background-color: var(--footer-bg);
    color: var(--text-color);
  }
  
  /* Estilização para formulários – inputs com fundo preto e texto branco */
  form {
    input, textarea {
      transition: border-color 0.5s, color 0.5s;
      border: 1px solid var(--text-color);
      background-color: var(--background);
      color: var(--text-color);
      &::placeholder {
        transition: color 0.5s;
        color: var(--text-color);
      }
    }
  }
`;
