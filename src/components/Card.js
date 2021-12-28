import './Card.css';

export default function Cards({ card }) {
	return (
		<div className='card'>
			<div>
				<img className='front' src={card.src} alt='card front' />
				<img className='back' src='/images/cover.png' alt='card cover' />
			</div>
		</div>
	);
}
