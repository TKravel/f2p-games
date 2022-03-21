import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from '../features/gameDataSlice';

export const Nav = () => {
	const dispatch = useDispatch();
	const [sortBy, setSortBy] = useState('alphabetical');

	const handleChange = (e) => {
		setSortBy(e.target.value);
	};
	useEffect(() => {
		dispatch(fetchGames(sortBy));
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
