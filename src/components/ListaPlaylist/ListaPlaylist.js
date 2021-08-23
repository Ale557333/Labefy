import { ContainerListaPlaylists, ListaPlaylistCard } from './styled';

export default function ListaPlaylist(props) {

    
    return (
        <ContainerListaPlaylists>
            <h1>Lista de Playlists</h1>
            
            {props.playlists ?
            props.playlists.map(playlist => {
                return (
                    <ListaPlaylistCard key={playlist.id}>
                        <h3>{playlist.name}</h3>
                        <div>
                            <button onClick={() => props.pegarMusicasPlaylist(playlist.id, playlist.name)}>VER MAIS</button>
                            <button onClick={() => props.apagarPlaylist(playlist.id)}>EXCLUIR</button>
                        </div>
                    </ListaPlaylistCard>
                )
            }): false}
        </ContainerListaPlaylists>
    )
}