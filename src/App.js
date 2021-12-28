import { useState } from 'react';
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

	// * Shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5) // * negative number remains the same order | positive number switch the numbers around
			.map((card) => ({ ...card, id: Math.random() })); // * Add ID proberty

		setCards(shuffledCards);
		setTurns(0);
	};
	console.log(cards, turns);
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
					<Card key={card.id} card={card} />
				))}
			</div>
		</div>
	);
}

export default App;
