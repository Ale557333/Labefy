import styled from "styled-components"

export const ContainerListaPlaylists = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-grow: 2;

h1 {
    margin-bottom: 50px;
    color: #F7E2FD;
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE;
}
`

export const ListaPlaylistCard = styled.div`
background-image: linear-gradient(to left, #F7E2FD, #1A52AE);
display: flex;
width: 50%;
justify-content: space-between;
align-items: center;
text-align: center;
border: 1px solid black;
padding: 12px;
margin-bottom: 20px;
flex-direction: left;



button {
    margin-left: 10px;
    border: 1px solid gray;
    border-radius:15px;
    height: 35px;
    background-color: black;
    color: #F7E2FD;
    width: 100px;

}
`