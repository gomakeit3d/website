import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #000000;
    color: #ffffff;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(30, 30, 30, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(30, 30, 30, 0.3) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: -1;
    pointer-events: none;
  }

  .section-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }

  .section-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 3rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .btn-primary {
    background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    color: #000;
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 77, 77, 0.2);
  }

  .btn-outline {
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
  }

  .btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  section {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2.5rem;
    }
    
    .section-subtitle {
      font-size: 1.2rem;
    }
  }
`;

export default GlobalStyles;
