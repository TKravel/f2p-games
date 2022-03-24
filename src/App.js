import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from './features/gameDataSlice';
import { useEffect, useState } from 'react';
import { GameCard } from './components/GameCard';
import { Nav } from './components/Nav';
import { PageControls } from './components/PageControls';
import { Modal } from './components/Modal';

function App() {
	const dispatch = useDispatch();
	const gameStatus = useSelector((state) => state.game.status);
	const games = useSelector((state) => state.game.games);
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState(null);
	const maxPage = Math.ceil(games.length / 10);

	useEffect(() => {
		if (gameStatus === 'idle') {
			dispatch(fetchGames());
		}
	}, [gameStatus, dispatch]);

	const handlePage = (e) => {
		let button = e.target.id;
		const anchor = document.getElementById('page-scroll-anchor');

		if (button === 'prev') {
			if (page === 1) {
				return;
			} else {
				setPage(page - 1);
				anchor.scrollIntoView({ behavior: 'smooth' });
			}
		} else if (button === 'next') {
			if (page === maxPage) {
				return;
			} else {
				setPage(page + 1);
				anchor.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

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
								web browser games. With {games.length} free
								games, we're sure you'll find something you'll
								love!
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
						<span id='page-scroll-anchor'></span>
						<PageControls
							changePage={handlePage}
							currentPage={page}
							totalPages={maxPage}
						/>
						{games.map((game, index) => {
							if (
								index >= page * 10 - 10 &&
								index <= page * 10 - 1
							) {
								return (
									<GameCard
										key={game.id}
										gameId={game.id}
										gameData={game}
										controlModal={handleModal}
									/>
								);
							}
						})}
						<PageControls
							changePage={handlePage}
							currentPage={page}
							totalPages={maxPage}
						/>
					</main>
				</>
			)}
			{isModalOpen && <Modal data={modalData} closeModal={handleModal} />}
		</div>
	);
}

export default App;
