import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;
    --gray: #666666;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--black);
    color: var(--white);
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4rem;
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .btn-primary {
    background: linear-gradient(135deg, #ff6b6b 0%, #ffa07a 100%);
    color: var(--white);
    border: none;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    }
  }

  .btn-outline {
    background: transparent;
    color: var(--white);
    border: 2px solid var(--white);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 1s ease forwards;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }

    .btn {
      padding: 0.8rem 1.5rem;
    }
  }
`;

export default GlobalStyles; 