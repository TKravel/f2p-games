export const GameCard = ({ gameId, gameData, toggleModal }) => {
	return (
		<div className='game-card'>
			<h2>{gameData.title}</h2>
			<img src={gameData.thumbnail} samesite='Lax'></img>
			<p className='bottom-game-card'>
				<span>{gameData.genre}</span>
				<span
					id={gameId}
					onClick={(e) => toggleModal(e)}
					className='learn-more'
					aria-labelledby='button'
				>
					Learn more
				</span>
			</p>
		</div>
	);
};
