import React from "react";
import { BaseSite, Header, Footer, GlobalStyle, BotaoMultiPaginas } from './styled';
import axios from 'axios';
import CadastrarPlaylist from './components/CadastrarPlaylist/CadastrarPlaylist';
import ListaPlaylist from './components/ListaPlaylist/ListaPlaylist';
import DetalhePlaylist from './components/DetalhePlaylist/DetalhePlaylist';
import GlobalFonts from './fonts/fonts';
import swal from "sweetalert";

const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const header = {
  headers:
    { Authorization: "alexandre-oliveira-johnson" }
}
export default class App extends React.Component {

  state = {
    playlists: [],
    inputPlaylist: "",
    paginaAtual: "cadastro",
    playlistDetalhe: "",
    playlistDetalheNome: "",
    playlistDetalheId: "",
    inputMusica: "",
    inputArtistaMusica: "",
    inputUrlMusica: ""
  }

  componentDidMount() {
    this.pegarPlaylists()
  }

  cadastrarPlaylist = async () => {

    const body = {
      name: this.state.inputPlaylist
    }

    try {
      const res = await axios
        .post(BASE_URL, body, header)
      if (res.status === 200) {
        swal("Sua playlist foi criada!", "Verifique a Lista de Playlists!", "success", {
        button: false,
        timer: 3000
      });
      }
      this.pegarPlaylists()
      this.setState({ inputPlaylist: '' })
    }
    catch (err) {
      swal("Houve um erro!", "Tente Novamente!", "error", {
        button: false,
        timer: 2000
      });
    }
  }

  pegarPlaylists = async () => {
    try {
      const res = await axios
        .get(BASE_URL, header)
      this.setState({ playlists: res.data.result.list })
    }
    catch (err) {
      alert(err)
    }
  }

  apagarPlaylist = async (id) => {
    if (window.confirm("Tem certeza que quer apagar essa playlist?")) {
      try {
        const res = await axios
          .delete(`${BASE_URL}/${id}`, header)
        if (res.status === 200) swal("", "Sua playlist foi excluída!", "success", 
        {
          button: false,
          timer: 2000
        });
        this.pegarPlaylists()
      }
      catch (err) {
        alert(err)
      }
    }
  }

  pegarMusicasPlaylist = async (id, playlist) => {
    try {
      const res = await axios
        .get(`${BASE_URL}/${id}/tracks`, header)
      this.setState({
        playlistDetalhe: res.data.result,
        playlistDetalheNome: playlist,
        playlistDetalheId: id,
        paginaAtual: "detalhe"
      })
    }
    catch (err) {
      console.log("Erro ao criar playlist!")
    }
  }


  adicionarMusica = async () => {
    const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtistaMusica,
      url: this.state.inputUrlMusica
    }

    try {
      await axios
        .post(`${BASE_URL}/${this.state.playlistDetalheId}/tracks`, body, header)
      this.setState({
        inputMusica: "",
        inputArtistaMusica: "",
        inputUrlMusica: ""
      })
      this.pegarMusicasPlaylist(this.state.playlistDetalheId, this.state.playlistDetalheNome)
      swal("", "Música adicionada à !", "success", {
        button: false,
        timer: 3000
      });
    }
    catch (error) {
      alert("Deu problema!")
    }
  }

  inputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value })
  }

  inputMusica = (event) => {
    this.setState({ inputMusica: event.target.value })
  }

  inputArtistaMusica = (event) => {
    this.setState({ inputArtistaMusica: event.target.value })
  }

  inputUrlMusica = (event) => {
    this.setState({ inputUrlMusica: event.target.value })
  }

  goToPaginaLista = () => {
    if (this.state.paginaAtual === "cadastro" || "detalhe") {
      this.setState({ paginaAtual: "lista" })
    }
  }

  goToPaginaCadastro = () => {
    if (this.state.paginaAtual === "lista" || "detalhe") {
      this.setState({ paginaAtual: "cadastro" })
    }
  }

  renderizaPagina = () => {
    if (this.state.paginaAtual === "cadastro") {
      return <CadastrarPlaylist
        inputPlaylist={this.inputPlaylist}
        cadastrarPlaylist={this.cadastrarPlaylist}
        value={this.state.inputPlaylist} />


    } else if (this.state.paginaAtual === "lista") {
      return <ListaPlaylist
        playlists={this.state.playlists}
        apagarPlaylist={this.apagarPlaylist}
        pegarMusicasPlaylist={this.pegarMusicasPlaylist} />

    } else if (this.state.paginaAtual === "detalhe") {
      return <DetalhePlaylist
        playlistDetalhe={this.state.playlistDetalhe}
        adicionarMusica={this.adicionarMusica}
        inputMusica={this.inputMusica}
        inputArtistaMusica={this.inputArtistaMusica}
        inputUrlMusica={this.inputUrlMusica}
        valueNome={this.state.inputMusica}
        valueArtista={this.state.inputArtistaMusica}
        valueUrl={this.state.inputUrlMusica}
        playlistDetalheNome={this.state.playlistDetalheNome} />

    };
  };


  render() {
    return (
      <BaseSite>
        <GlobalStyle />
        <GlobalFonts />
        <Header>
          <h1 onClick={this.goToPaginaCadastro}>Labefy</h1>
        </Header>
        {this.renderizaPagina()}
        {this.state.paginaAtual === "cadastro" && (
          <BotaoMultiPaginas><button onClick={this.goToPaginaLista}>Lista de Playlists</button></BotaoMultiPaginas>
        )}
        {this.state.paginaAtual === "lista" && (
          <BotaoMultiPaginas><button onClick={this.goToPaginaCadastro}>Adicionar Playlists</button></BotaoMultiPaginas>
        )}
        {this.state.paginaAtual === "detalhe" && (
          <BotaoMultiPaginas><button onClick={this.goToPaginaLista}>Voltar</button></BotaoMultiPaginas>
        )}
        <Footer>
          <p>Alexandre - Turma Johnson 2021</p>
              
          <p></p>
        </Footer>
      </BaseSite>
    )
  }




}
