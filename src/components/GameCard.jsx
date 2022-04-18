import { Image } from './Image';

export const GameCard = ({ gameId, gameData, toggleModal }) => {
	return (
		<div className='game-card'>
			<Image data={gameData} />
			<div className='bottom-game-card'>
				<h2>{gameData.title}</h2>
				<span>{gameData.genre}</span>
				<button
					id={gameId}
					onClick={(e) => toggleModal(e)}
					className='learn-more-button'
				>
					Learn more
				</button>
			</div>
		</div>
	);
};
