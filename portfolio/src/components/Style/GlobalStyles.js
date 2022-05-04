import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      :root{
        --darkBlue_1: #3B447A;
        --darkBlue_2: #222B5F;
        --darkBlue_3: #0A0F19;
        --darkBlue_4: #101826;
        --mediumSlateBlue: #6C62E2;
        --lightBlue_1: #F3F1FE;
        --lightBlue_2: #ADBDE3;
        --white: #FFFFFF;
        --black: #000000;
      }
      html{
        font-size: 10px;
      }
      a{
        text-decoration: none;
        cursor: pointer;
      }
      
      img, svg{
        width: 100%;
        height: 100%;
      }
`;

export default GlobalStyles;
