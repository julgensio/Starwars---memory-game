import {useState} from 'react'
import './App.css';

const cardImages = [
  {"src":"/images/Bastila-Shan.jpg"},
  {"src":"/images/Black-sith.jpg"},
  {"src":"/images/Dark-lord-Vador.jpg"},
  {"src":"/images/Darth-vador.jpg"},
  {"src":"/images/Mandalorian.jpg"},
  {"src":"/images/Yoda.jpg"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTunrs] = useState(0)

  // * Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5) // * negative number remains the same order | positive number switch the numbers around
      .map((card) => ({...card, id:Math.random()})) // * Add ID proberty

    setCards(shuffledCards)
    setTunrs(0)
  }
    console.log(cards, turns)
  return (
    <div className="App">
      <h1>Star Wars | Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
