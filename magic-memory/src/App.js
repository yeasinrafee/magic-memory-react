import { useEffect, useState } from 'react';
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // shuffle cards
  const shuffleCards = () =>{
    const shuffleCards = [...cardImages, ...cardImages].sort( () => Math.random() - 0.5).map((card) => ({...card, id: Math.random()}));

    setCards(shuffleCards);
    setTurns(0);
  }

  // handle choice
  const handleChoice = (card) =>{
    choiceOne? setChoiceTwo(card) : setChoiceOne(card);
  }

  //Check Choice match:
  useEffect(() =>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("choice matched");
        resetTurn();
      }else{
        console.log("choice does not match");
        resetTurn();
      }
    }
  })


  const resetTurn = ()=>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} 
          card={card}
          handleChoice={handleChoice} 
          />
        ))}
      </div>
    </div>
  );
}

export default App