import { FilterIcon } from '../svgs/FilterIcon';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SelectInput } from './SelectInput';

export const GenreControls = ({ setFilters }) => {
	const games = useSelector((state) => state.game.games);
	const [genreSelection, setGenreSelection] = useState('ALL');
	const [genreList, setGenreList] = useState([]);

	useEffect(() => {
		if (games.length === 0) {
			return;
		}
		const genres = ['ALL'];
		games.forEach((gameObj) => {
			if (genres.includes(gameObj.genre)) {
				return;
			} else {
				genres.push(gameObj.genre);
			}
		});
		setGenreList(genres);
	}, [games]);

	const toggleTooltip = () => {
		const tooltip = document.getElementsByClassName('filter-tooltip')[0];
		if (tooltip.classList.contains('tooltip-active')) {
			tooltip.classList.remove('tooltip-active');
		} else {
			tooltip.classList.add('tooltip-active');
		}
	};

	const handleClick = () => {
		const INPUT = document.getElementById('genre-select');
		const MENU = document.getElementById('genre-select-menu');
		if (INPUT.classList.contains('select-active')) {
			MENU.classList.remove('menu-active');
			setTimeout(() => {
				INPUT.classList.remove('select-active');
			}, 300);
		} else {
			INPUT.classList.add('select-active');
			setTimeout(() => {
				MENU.classList.add('menu-active');
			}, 300);
		}
	};
	// const handleBlur = () => {
	// 	console.log('blur');
	// 	const INPUT = document.getElementById('genre-select');
	// 	const MENU = document.getElementById('genre-select-menu');
	// 	MENU.classList.remove('menu-active');
	// 	setTimeout(() => {
	// 		INPUT.classList.remove('select-active');
	// 	}, 300);
	// };

	const handleSelection = (selection) => {
		setGenreSelection(selection);
		setFilters('genre', selection);
	};

	return (
		<div className='options-item-conatiner'>
			<p className='filter-tooltip'>Filter</p>
			<button
				className='icon-button'
				onClick={handleClick}
				onMouseEnter={toggleTooltip}
				onMouseLeave={toggleTooltip}
			>
				<FilterIcon styles='filter-icon' />
			</button>
			<SelectInput
				inputID='genre-select'
				state={genreSelection}
				dropdownList={genreList}
				handleState={handleSelection}
			/>
		</div>
	);
};