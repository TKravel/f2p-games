import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from './features/gameDataSlice';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	const gameStatus = useSelector((state) => state.game.status);

	useEffect(() => {
		if (gameStatus === 'idle') {
			dispatch(fetchGames());
		}
	}, [gameStatus, dispatch]);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
