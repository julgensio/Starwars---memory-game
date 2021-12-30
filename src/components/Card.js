import './Card.css';

export default function Cards({ card, handleChoice, flipped }) {
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<div className='card'>
			<div className={flipped ? 'flipped' : ''}>
				<img className='front' src={card.src} alt='card front' />
				<img
					className='back'
					src='/images/cover.png'
					alt='card cover'
					onClick={handleClick}
				/>
			</div>
		</div>
	);
}
