import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames, sort } from '../features/gameDataSlice';

export const Nav = () => {
	const dispatch = useDispatch();
	const gameData = useSelector((state) => state.game.games);
	const [sortBy, setSortBy] = useState('alphabetical');

	const compare = (a, b) => {
		if (sortBy === 'alphabetical') {
			const gameA = a.title.toLowerCase();
			const gameB = b.title.toLowerCase();
			if (gameA < gameB) {
				return -1;
			}
			if (gameA > gameB) {
				return 1;
			}
			return 0;
		} else if (sortBy === 'release-date') {
			return (
				parseInt(a.release_date.replace('-', '')) -
				parseInt(b.release_date.replace('-', ''))
			);
		}
	};

	const handleChange = (e) => {
		setSortBy(e.target.value);
	};
	useEffect(() => {
		let sortedGames = [...gameData];

		if (sortBy === 'alphabetical') {
			sortedGames.sort(compare);
		} else if (sortBy === 'release-date') {
			sortedGames.sort(compare);
		}
		dispatch(sort(sortedGames));
	}, [sortBy, dispatch]);

	return (
		<nav>
			<span>{'F\u2161P'}</span>
			<div>
				<label htmlFor='sort'>Sort by </label>

				<select
					name='sort'
					value={sortBy}
					id='sort'
					onChange={handleChange}
				>
					<option value='alphabetical'>Alphabetical</option>
					<option value='release-date'>Release date</option>
				</select>
			</div>
		</nav>
	);
};
