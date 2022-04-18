import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GameCard } from './GameCard';
import { OptionsPanel } from './OptionsPanel';
import { PaginationControls } from './PaginationControls';

export const GameContainer = ({ toggleModal }) => {
	const gameStore = useSelector((state) => state.game.games);
	const filterStore = useSelector((state) => state.filters);
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const totalPageCount = Math.ceil(games.length / 12);

	const compare = (a, b) => {
		if (filterStore.sort === 'ALPHABETICAL') {
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}
			return 0;
		} else if (filterStore.sort === 'RELEASE DATE') {
			const dateA = parseInt(a.release_date.replace('-', ''));
			const dateB = parseInt(b.release_date.replace('-', ''));
			return dateA - dateB;
		}
	};

	useEffect(() => {
		if (games.length === 0) {
			setGames([...gameStore]);
		}
	}, []);

	useEffect(() => {
		const sortedGames = [...gameStore];

		sortedGames.sort(compare);
		if (filterStore.genreFilter !== 'ALL') {
			const filteredGames = sortedGames.filter(
				(game) => game.genre === filterStore.genreFilter
			);
			setGames(filteredGames);
		} else {
			setGames(sortedGames);
		}
	}, [filterStore, gameStore]);

	const handlePage = (e) => {
		let button = e.currentTarget.id;
		const anchor = document.getElementById('page-scroll-anchor');

		if (button === 'prev') {
			if (page === 1) {
				return;
			} else {
				setPage(page - 1);
				anchor.scrollIntoView({ behavior: 'smooth' });
			}
		} else if (button === 'next') {
			if (page === totalPageCount) {
				return;
			} else {
				setPage(page + 1);
				anchor.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	return (
		<section className='game-container'>
			<span id='page-scroll-anchor'></span>
			<OptionsPanel
				changePage={handlePage}
				currentPage={page}
				totalPages={totalPageCount}
			/>

			{games.map((game, index) => {
				if (index >= page * 12 - 12 && index <= page * 12 - 1) {
					return (
						<GameCard
							key={game.id}
							gameId={game.id}
							gameData={game}
							toggleModal={toggleModal}
						/>
					);
				}
			})}
			<PaginationControls
				id='bottom-pagination-controls'
				changePage={handlePage}
				currentPage={page}
				totalPages={totalPageCount}
			/>
		</section>
	);
};
