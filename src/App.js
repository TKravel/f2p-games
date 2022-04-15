import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from './features/gameDataSlice';
import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Modal } from './components/Modal';
import { GameContainer } from './components/GameContainer';

function App() {
	const dispatch = useDispatch();
	const gameStatus = useSelector((state) => state.game.status);
	const gameCount = useSelector((state) => state.game.games.length);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState(null);

	useEffect(() => {
		if (gameStatus === 'idle') {
			dispatch(fetchGames());
		}
	}, [gameStatus, dispatch]);

	const handleModal = async (e) => {
		if (!isModalOpen) {
			const gameId = e.target.id;

			fetch(
				`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
				{
					method: 'GET',
					headers: {
						'X-RapidAPI-Host':
							'free-to-play-games-database.p.rapidapi.com',
						'X-RapidAPI-Key':
							'9e6c6d778amsh4087bfdc965ca9ap1441dajsn968f3d86df55',
					},
				}
			)
				.then((response) => response.json())
				.then((response) => {
					setModalData(response);
					setIsModalOpen(true);
				})
				.catch((err) => console.error(err));
		} else {
			setIsModalOpen(false);
			setModalData(null);
		}
	};

	return (
		<div className='app-wrapper'>
			{!isModalOpen && (
				<>
					<Nav />
					<main className='App'>
						<div className='landing-info'>
							<h1>Welcome to Free to play games!</h1>
							<p>
								Your personal database for free to play PC and
								web browser games. With {gameCount} free games,
								we're sure you'll find something you'll love!
							</p>
							<p>
								<span className='alert'>
									Legal disclaimer:{' '}
								</span>
								Any games, links, or information found within
								this site are strictly{' '}
								<em>use at your own risk.</em> We do not
								guarantee the safety of the game or game
								information provided. Play at your own risk and
								as always, <em>please play responsibly!</em>
							</p>
						</div>
						<GameContainer toggleModal={handleModal} />
					</main>
				</>
			)}
			{isModalOpen && <Modal data={modalData} closeModal={handleModal} />}
		</div>
	);
}

export default App;
