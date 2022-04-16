import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PageControls } from './PageControls';
import { GameCard } from './GameCard';
import { OptionsPanel } from './OptionsPanel';

export const GameContainer = ({ toggleModal }) => {
	const games = useSelector((state) => state.game.games);
	const [page, setPage] = useState(1);
	const totalPageCount = Math.ceil(games.length / 12);

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

	const genres = [];
	console.log(games);
	games.forEach((game) => {
		if (genres.includes(game.genre.toUpperCase())) {
			return;
		} else {
			genres.push(game.genre.toUpperCase());
		}
	});
	console.log(genres);

	return (
		<section className='game-container'>
			<span id='page-scroll-anchor'></span>
			<OptionsPanel />
			<PageControls
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
			<PageControls
				changePage={handlePage}
				currentPage={page}
				totalPages={totalPageCount}
			/>
		</section>
	);
};
