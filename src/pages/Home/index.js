import React from 'react';

import './index.css';
import gameImg from '../../assets/game_img.png'

export default function Home({ history }) {
  return (
    <>
      <h1 className="title">Jogo dos Substantivos</h1>
      <img src={gameImg} className="game-img" alt="Game" />
      <h2 className="subtitle">COMO JOGAR:</h2>
      <p className="game-desc">&emsp;Para jogar é simples! Basta observar a palavra que aparecerá na tela e clicar na opção correta! Aperte <strong>"play!"</strong> para começar!</p>
      <button className="play" onClick={() => history.push('/game')}>PLAY!</button>
    </>
  );
}