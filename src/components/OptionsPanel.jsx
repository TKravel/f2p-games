import { GenreControls } from './GenreControls';
import { SortControls } from './SortControls';
import { PaginationControls } from './PaginationControls';
import { useState } from 'react';

export const OptionsPanel = ({
	setFilters,
	changePage,
	currentPage,
	totalPages,
}) => {
	return (
		<div className='options-panel'>
			<div className='filter-buttons-container'>
				<GenreControls setFilters={setFilters} />
				<SortControls setFilters={setFilters} />
			</div>
			<PaginationControls
				id='top-pagination-controls'
				changePage={changePage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</div>
	);
};
