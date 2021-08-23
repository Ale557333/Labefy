import styled from "styled-components"

export const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;

h1{
    color:#F7E2FD;
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE;
}

h2 {
    margin-top: 40px;
    color:#F7E2FD;
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE;
}
`

export const CardMusica = styled.div`
display: inline-block;
display: flex;
border: 1px solid black;
align-items: center;
width: 800px;
margin-bottom: 20px;
padding-left:10px;
background-color: #F7E2FD;
justify-content: space-evenly;
background-image: linear-gradient(to left, #F7E2FD, #1A52AE);
`
export const CardAdicionar = styled.div`
display: flex;
flex-direction: column;
text-align: center;
color: #F7E2FD;



input {
    background: transparent;
    border:none;
    border-bottom: 1px solid white;
    margin-bottom: 15px;
    width:100%;
    height: 35px;
    color:#F7E2FD;
    font-size: 20px;
}

button {
    border: none;
    background-image: linear-gradient(to left, #F7E2FD, #1A52AE);
    width:100%;
    height: 35px;
    border-radius: 15px;
}
`

