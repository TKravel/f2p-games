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

		if (button === 'prev') {
			if (page === 1) {
				return;
			} else {
				setPage(page - 1);
			}
		} else if (button === 'next') {
			if (page === maxPage) {
				return;
			} else {
				setPage(page + 1);
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
			<Nav />
			{!isModalOpen && (
				<main className='App'>
					<h1>Free to play games</h1>
					<PageControls
						changePage={handlePage}
						currentPage={page}
						totalPages={maxPage}
					/>
					{games.map((game, index) => {
						if (index >= page * 10 - 10 && index <= page * 10 - 1) {
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
			)}
			{isModalOpen && <Modal data={modalData} closeModal={handleModal} />}
		</div>
	);
}

export default App;
