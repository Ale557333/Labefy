import { ContainerCriaPlaylist, Input } from './styled';


export default function CadastrarPlaylist(props) {
    return (
        <ContainerCriaPlaylist>
            <h1>Labefy</h1>
            
            <div>
                <input value={props.value} 
                onChange={props.inputPlaylist} 
                placeholder="Nome da Playlist"
                placeholderTextColor="white"/>

                <button onClick={props.cadastrarPlaylist}>Adicionar</button>
            </div>
        </ContainerCriaPlaylist>
    )
}