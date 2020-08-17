import React, { useEffect, useState } from 'react';

import './index.css';
import correct from '../../assets/correct.ogg';
import weirdMusic from '../../assets/weird_music.mp3';

const countable = ['Apple', 'Orange', 'Carrot', 'Cake', 'Hospital', 'School', 'Temple', 'Church', 'Pen', 'Pencil', 'Eraser', 'Bag', 'Lamp', 'Brush', 'Bottle', 'Car', 'Trophy', 'House', 'Chair', 'Table'];
const uncountable = ['Milk', 'Water', 'Coffee', 'Water', 'Oil', 'Juice', 'Air', 'Childhood', 'Sand', 'Salt', 'Rice', 'Wheat', 'Barley', 'Rain', 'Snow', 'Time', 'Soil', 'Love', 'Patience', 'Oat'];
const nouns = countable.concat(uncountable);
const correctAudio = new Audio(correct);
correctAudio.volume = .3;
const music = new Audio(weirdMusic);
music.volume = .2;
let rand = 0;

export default function Game({ history }) {
  const [word, setWord] = useState(nouns[Math.round(Math.random() * (nouns.length - 1))]);
  const [maxCount, setMaxCount] = useState(10.0)
  const [count, setCount] = useState(maxCount);

  useEffect(() => {
    music.play()
  });

  useEffect(() => setCount(maxCount), [maxCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 0.01);
      if (count < 0.1) {
        history.push('/retry');
        music.pause();
      }
    }, 10);

    return () => clearInterval(timer);

  });

  function handleClick(value) {
    if (!(countable.includes(word) && value) && !(uncountable.includes(word) && !value)) {
      music.pause();
      history.push('/retry');
    } else {
      rand = Math.round(Math.random() * (nouns.length - 1));
      correctAudio.play();
      setWord(nouns[rand]);
      setMaxCount(maxCount >= 2 ? maxCount - 1 : 1);
    }
  }

  return (
    <>
      <h1 className="title" >SASKE</h1>
      <div className="game-window">
        <p className="mission">Essa palavra é <strong>countable</strong> ou <strong>uncountable</strong> ?</p>
        <p className="word">{word}</p>
        <p className="counter"><span className={count < 5 ? "count" : ""}>{count.toFixed(2)}</span> <span>segundos restantes!</span> </p>

        <button className="game-btn" id="left" value={true} onClick={() => handleClick(true)}>COUNTABLE</button>
        <button className="game-btn" id="right" value={false} onClick={() => handleClick(false)}>UNCOUNTABLE</button>
      </div>
      <button className="back" onClick={() => { history.push('/'); music.pause(); }}>VOLTAR</button>
    </>
  );
}
