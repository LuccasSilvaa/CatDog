import React, {useState} from 'react'
import * as S from './catstyle'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Catpage() {

  const [aviso, setAviso] = useState ('')
  const [cat, setCat] = useState()
  const [status, setStatus] = useState(false)

  const getCat = () => {
  //   axios.get('https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_LGn01TtxzYW85AasdHlqGiSL1SyRpTeBgYhbl6ubtiSNyeKY2R0CB3q7SuxObm4Y').then(res =>{
  //     console.log(res)
  //     setCat(res.data[].url)

  //   })
  // }
    axios.get('https://cataas.com/cat').then(res =>{
      console.log(res)
      setCat(res.config.url)
      setStatus(true)
      setAviso('Obs.: o site esta passando por ajustes, para gerar um novo gato, por favor atualizar a pagina.')


    })
  }


  return (
   
   <S.Cats>
    <Link to="/">Home</Link>
    <button onClick={() => {getCat()}}>Clique</button>
    {status && <img src={cat} alt="gatinho" />}   
    <p>{aviso}</p>
    </S.Cats>

    
   
  )
}
