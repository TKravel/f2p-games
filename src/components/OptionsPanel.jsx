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
			<GenreControls setFilters={setFilters} />
			<SortControls setFilters={setFilters} />
			<PaginationControls
				id='top-pagination-controls'
				changePage={changePage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</div>
	);
};
