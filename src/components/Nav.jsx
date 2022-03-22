import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames, sort } from '../features/gameDataSlice';

function compare(a, b) {
	if (a.title < b.title) {
		return -1;
	}
	if (a.title > b.title) {
		return 1;
	}
	return 0;
}

export const Nav = () => {
	const dispatch = useDispatch();
	const gameData = useSelector((state) => state.game.games);
	const [sortBy, setSortBy] = useState('alphabetical');

	const handleChange = (e) => {
		setSortBy(e.target.value);
		const sortByOption = e.target.value;

		if (sortByOption === 'alphabetical') {
			let sortedGames = [...gameData];
			sortedGames.sort(compare);
			dispatch(sort(sortedGames));
		}
	};
	// useEffect(() => {
	// 	dispatch(fetchGames(sortBy));
	// }, [sortBy, dispatch]);

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
