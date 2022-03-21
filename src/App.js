import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from './features/gameDataSlice';
import { useEffect } from 'react';
import { GameCard } from './components/GameCard';
import { Nav } from './components/Nav';

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
		<div className='app-wrapper'>
			<Nav />
			<main className='App'>
				<h1>Free to play games</h1>

				{games.map((game) => {
					return <GameCard key={game.id} gameData={game} />;
				})}
			</main>
		</div>
	);
}

export default App;
