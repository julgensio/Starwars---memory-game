import { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

const cardImages = [
	{ src: '/images/Villains-1.png' },
	{ src: '/images/Robot-2.png' },
	{ src: '/images/Trooper-3.png' },
	{ src: '/images/Bear-4.png' },
	{ src: '/images/Woman-5.png' },
	{ src: '/images/Darth-6.png' },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	// * Choices
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	// * Shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5) // * negative number remains the same order | positive number switch the numbers around
			.map((card) => ({ ...card, id: Math.random() })); // * Add ID proberty

		setCards(shuffledCards);
		setTurns(0);
	};

	// * Handle Choices
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	// * Compare 2 cards
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			if (choiceOne.src === choiceTwo.src) {
				console.log('Those cards match');
				resetTurns();
			} else {
				console.log('those cards do not match');
				resetTurns();
			}
		}
	}, [choiceOne, choiceTwo]);

	const resetTurns = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
	};

	return (
		<div className='App'>
			<h1>Star Wars | Memory Game</h1>
			<small className='source'>
				Image credit:&nbsp;
				<a
					href='https://www.deviantart.com/dereklaufman/gallery'
					target='_blank'
					rel='noreferrer'
				>
					DerekLaufman
				</a>
			</small>
			<button onClick={shuffleCards}>New Game</button>
			<div className='card-grid'>
				{cards.map((card) => (
					<Card key={card.id} card={card} handleChoice={handleChoice} />
				))}
			</div>
		</div>
	);
}

export default App;
