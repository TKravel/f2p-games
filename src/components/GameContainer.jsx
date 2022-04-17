import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GameCard } from './GameCard';
import { OptionsPanel } from './OptionsPanel';
import { PaginationControls } from './PaginationControls';

export const GameContainer = ({ toggleModal }) => {
	const gameStore = useSelector((state) => state.game.games);
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const [filters, setFilters] = useState({
		genre: 'ALL',
		sort: 'ALPHABETICAL',
	});
	const totalPageCount = Math.ceil(games.length / 12);

	const compare = (a, b) => {
		if (filters.sort === 'ALPHABETICAL') {
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}
			return 0;
		} else if (filters.sort === 'RELEASE DATE') {
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
		console.log(sortedGames);

		sortedGames.sort(compare);
		if (filters.genre !== 'ALL') {
			const filteredGames = sortedGames.filter(
				(game) => game.genre == filters.genre
			);
			// console.log(filteredGames);
			setGames(filteredGames);
		} else {
			setGames(sortedGames);
		}
	}, [filters, gameStore]);

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

	const handleFilters = (type, selection) => {
		console.log(type, selection);
		setFilters((prevValues) => {
			return {
				...prevValues,
				[type]: selection,
			};
		});
	};

	return (
		<section className='game-container'>
			<span id='page-scroll-anchor'></span>
			<OptionsPanel
				setFilters={handleFilters}
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
