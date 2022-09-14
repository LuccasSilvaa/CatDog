import React from 'react';
import { Link } from 'react-router-dom';
import CatDog from './img/CatDog.svg'
import * as S from './homestyle'

export default function Home() {
  return (
    <S.Home>
      <img src={CatDog} alt="" />


      <S.Text>
      <p>BEM-VINDO AO SITE MAIS FOFO</p>
      <p>QUE VOÇÊ IRÁ CONHCER</p>
      </S.Text>


      <S.Buttons>
      <Link to="/catpage">
        <S.ButtonCat>Gatos</S.ButtonCat>
      </Link>
      <Link to="dogpage">
        <S.ButtonDog>cachorros</S.ButtonDog>
      </Link>
      </S.Buttons>
    </S.Home>
  );
}
