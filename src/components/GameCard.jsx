export const GameCard = ({ gameData }) => {
	return (
		<div className='game-card'>
			<h2>{gameData.title}</h2>
			<img src={gameData.thumbnail} samesite='Lax'></img>
			<p className='bottom-game-card'>
				<span>{gameData.genre}</span>
				<span>Expand</span>
			</p>
		</div>
	);
};
