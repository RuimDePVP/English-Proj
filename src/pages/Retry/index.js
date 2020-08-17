import React, { useEffect } from 'react';

import './index.css';
import incorrect from '../../assets/incorrect.ogg';

const incorrectAudio = new Audio(incorrect);
incorrectAudio.volume = 0.3;

export default function Retry({ history }) {

  useEffect(() => {
    incorrectAudio.play()
  });

  function handleRetry() {
    history.push('/game');
  }

  return (
    <>
      <h1>Você Perdeu!</h1>
      <button className="retry" onClick={handleRetry}>TENTAR NOVAMENTE</button>
    </>
  )
}