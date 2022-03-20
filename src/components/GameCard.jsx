export const GameCard = ({ gameData }) => {
	return (
		<>
			<h1>{gameData.title}</h1>
			<img src={gameData.thumbnail} samesite='Lax'></img>
			<div>
				<span>{gameData.genre}</span>
				<span>Expand</span>
			</div>
		</>
	);
};
