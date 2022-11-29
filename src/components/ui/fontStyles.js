import { createGlobalStyle } from "styled-components";
import BrolimboRegular from "../../fonts/BROLIMO-Regular.ttf";
import theme from "./theme";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'BROLIMO';
  src: url(${BrolimboRegular}) format('ttf')
}

    h1 {
        margin: 20px 0px 20px 0px;
        font-weight: 400;
        font-family: 'BROLIMO';
        font-size: 5rem;
        color: ${theme.palette.common.white};
        @media only screen and (max-width: 500px){
            font-size: 3rem;
        }
    }
    h2 {
        margin: 0px 0px 0px 0px;
        font-family: 'BROLIMO';
        font-size: 3.75rem;
        font-weight: 400;
        color: ${theme.palette.primary.main};
        @media only screen and (max-width: 500px){
            font-size: 2.5rem;
        }
    }
    h3 {
        margin: 30px 0px 40px 0px;
        font-family: 'BROLIMO';
        font-size: 2.5rem;
        font-weight: 200;
        color: ${theme.palette.primary.main};
        @media only screen and (max-width: 500px){
            font-size: 1.5rem;
        }
    }
    h4 {
        font-family: 'BROLIMO';
        font-size: 2.5rem;
        color: ${theme.palette.common.black};
        @media only screen and (max-width: 500px){
            font-size: 1.5rem;
        }
    }
    h5 {
        font-family: 'BROLIMO';
        font-size: 1.5rem;
        color: ${theme.palette.common.black};
    }
    p {
        font-family: 'BROLIMO';
        font-size: 1rem;
        color: ${theme.palette.common.black};
    }
    button {
        font-family: 'BROLIMO';
    }
    body{
        margin-top: 0px; 
        margin-bottom: 0px; 
        margin-left: 0px; 
        margin-right: 0px;
        padding: 0;
        background-color: ${theme.palette.common.white};
    }
`;

export default FontStyles;