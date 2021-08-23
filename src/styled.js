import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import guitar from "./assets/guitar.jpg";

export const GlobalStyle = createGlobalStyle`
html, body {
    margin:0;
    font-family: 'Signika', sans-serif;
}

button {
    font-family: 'Gotham Pro';
}
`

export const BaseSite = styled.div`
display: flex;
flex-direction: column;
background-repeat: no-repeat;
background-position: right;
background-size: cover;
background-image: url(${guitar});
height: 100vh;
width: 100%;
padding-bottom: 10px;
`

export const Header = styled.header`
height: 90px;
display: flex;
font-size: 25px;
padding-left: 40px;
color: black;
position: sticky;
top:0;
left: 0;
background-image: gradient(to left, #F7E2FD, #1A52AE);
`

export const BotaoMultiPaginas = styled.div`


height: 50px;
margin: auto;


button {
    border: 1px solid gray;
    border-radius: 15px;
    background-image: linear-gradient(to left, #F7E2FD, #1A52AE);
    font-size: 30px;
    margin-bottom: 10px;
   
}
`

export const Footer = styled.footer`
display: inline-block;
flex-direction: column;
text-align: center;
padding: 20px;
background-color: transparent;
color:white;
`
