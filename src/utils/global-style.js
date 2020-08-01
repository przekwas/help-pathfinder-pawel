import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        min-height: 100vh;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: flex-start;
	    font-family: Arial, Helvetica, sans-serif;
        transition: 0.2s linear;
    }
`;
