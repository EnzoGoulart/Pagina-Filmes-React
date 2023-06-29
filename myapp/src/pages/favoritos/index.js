import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom'

function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])

  function excluir(id){
    let filtragem = filmes.filter(item=>{
        return item.id !== id
    })
    setFilmes(filtragem)
    localStorage.setItem('@primeflix', JSON.stringify(filtragem))
  }

  return(
    <div className="pagFvav">
      <h1>Meus filmes</h1>
    {filmes.length === 0  && <p id='notFav'>Você ainda não possui filmes salvos</p>}
        <div id='itemFav'>
            {filmes.map((item) => {
              return(
                <div id='divFav' key={item.id}>
                  <p id='titleFav'>{item.title}</p>
                  <div id='lbFav'>
                    <Link id='linkFav' to={`/filme/${item.id}`}>Ver detalhes</Link>
                    <button id='botaoFav' onClick={()=>excluir(item.id)}>Excluir</button>
                  </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Favoritos;