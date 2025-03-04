import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Roboto", serif;
        color: ${({ theme }) => theme.colors.darkGray}
    }
`;

export default GlobalStyles;
