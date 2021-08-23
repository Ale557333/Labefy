import './styled'
import { ContainerDetalhes, CardMusica, CardAdicionar } from './styled'

export default function DetalhePlaylist(props) {
    return (
        <ContainerDetalhes>
        <h1>Playlist: {props.playlistDetalheNome}</h1>
        <CardAdicionar>
            <h2>Adicionar Nova Música</h2>
            <input value={props.valueNome} 
            onChange={props.inputMusica} 
            placeholder="Nome da Música"/>

            <input value={props.valueArtista} 
            onChange={props.inputArtistaMusica} 
            placeholder="Artista"/>

            <input value={props.valueUrl}
            onChange={props.inputUrlMusica} 
            placeholder="Link"/>

            <button onClick={props.adicionarMusica}>Adicionar</button>
        </CardAdicionar>
        <h2>Lista de Músicas:</h2>
        {props.playlistDetalhe.tracks.map(musica => {
            return (
                <CardMusica>
                   <h4>Nome:</h4> <p>{musica.name}</p>
                   <h4>Artista:</h4> <p>{musica.artist}</p>
                    <h4>Música:</h4> <p><audio controls src={musica.url}/></p>
                </CardMusica>)
        })}
    </ContainerDetalhes>
    )
}