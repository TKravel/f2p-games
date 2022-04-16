import { Image } from './Image';

export const GameCard = ({ gameId, gameData, toggleModal }) => {
	return (
		<div className='game-card'>
			<Image data={gameData} />
			{/* <img
				src={gameData.thumbnail}
				alt={`${gameData.title} cover image`}
				samesite='Lax'
			></img> */}
			<h2>{gameData.title}</h2>
			<p className='bottom-game-card'>
				<span>{gameData.genre}</span>
				<button
					id={gameId}
					onClick={(e) => toggleModal(e)}
					className='learn-more-button'
				>
					Learn more
				</button>
			</p>
		</div>
	);
};
