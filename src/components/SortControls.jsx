import { SortIcon } from '../svgs/SortIcon';
import { useState } from 'react';
import { SelectInput } from './SelectInput';

export const SortControls = ({ setFilters }) => {
	const [sortSelection, setSortSelection] = useState('ALPHABETICAL');
	const sortList = ['ALPHABETICAL', 'RELEASE DATE'];

	const toggleTooltip = () => {
		const tooltip = document.getElementsByClassName('sort-tooltip')[0];
		if (tooltip.classList.contains('tooltip-active')) {
			tooltip.classList.remove('tooltip-active');
		} else {
			tooltip.classList.add('tooltip-active');
		}
	};

	const handleClick = () => {
		const INPUT = document.getElementById('sort-select');
		const MENU = document.getElementById('sort-select-menu');
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
	// 	const INPUT = document.getElementById('sort-select');
	// 	const MENU = document.getElementById('sort-select-menu');
	// 	MENU.classList.remove('menu-active');
	// 	setTimeout(() => {
	// 		INPUT.classList.remove('select-active');
	// 	}, 300);
	// };

	const handleSelection = (selection) => {
		setSortSelection(selection);
		setFilters('sort', selection);
	};

	return (
		<div className='options-item-conatiner'>
			<p className='sort-tooltip'>Sort</p>
			<button
				className='icon-button'
				onClick={handleClick}
				onMouseEnter={toggleTooltip}
				onMouseLeave={toggleTooltip}
			>
				<SortIcon styles='sort-icon' />
			</button>
			<SelectInput
				inputID='sort-select'
				state={sortSelection}
				dropdownList={sortList}
				handleState={handleSelection}
			/>
		</div>
	);
};
