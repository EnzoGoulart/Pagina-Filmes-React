import { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom'
import "./filme.css";
import api from '../../services/api';
import imagemLoad from '../home/imageload.png'
function Filme(){
    const nav = useNavigate()
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        nav("/", {replace: true})
      })
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [nav, id])

  if(loading){
    return(
      <div className="filme-info">
        <p id='carregando'>Carregando detalhes...</p>
        <img id='imgLoad' src={imagemLoad}/>
      </div>
    )
  }
  function salvarFilme(){
    const lista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(lista) || [];

    const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id)

    if(hasFilme){

      return;
    }
    filmesSalvos.push(filme)
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))

  }

  return(
    <div className="filmeInfo">
      <h1 id='filmeP'>{filme.title}</h1>
      <strong id='sF'>Avalição: {filme.vote_average} / 10</strong>
      <img id='imgF' src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3 id='sinF'>Sinopse</h3>
      <p id='overF'>{filme.overview}</p>
      <div id='divBF'>
          <button onClick={salvarFilme} id='b1F'>Salvar</button>
          <button id='b2F'><a target='blank' id='ancF' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a></button>
      </div>
    </div>
  )
}

export default Filme;