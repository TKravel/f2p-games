import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from './features/gameDataSlice';
import { useEffect } from 'react';
import { GameCard } from './components/GameCard';

function App() {
	const dispatch = useDispatch();
	const gameStatus = useSelector((state) => state.game.status);
	const games = useSelector((state) => state.game.games);

	useEffect(() => {
		if (gameStatus === 'idle') {
			dispatch(fetchGames());
		}
	}, [gameStatus, dispatch]);

	return (
		<div className='App'>
			{games.map((game) => {
				return <GameCard key={game.id} gameData={game} />;
			})}
		</div>
	);
}

export default App;
