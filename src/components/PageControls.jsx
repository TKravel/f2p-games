export const PageControls = ({ changePage, currentPage, totalPages }) => {
	return (
		<div className='page-controls'>
			<button
				id='prev'
				className='styled-button'
				onClick={(e) => changePage(e)}
			>
				Prev
			</button>
			<span>
				Page {currentPage} of {totalPages}
			</span>
			<button
				id='next'
				className='styled-button'
				onClick={(e) => changePage(e)}
			>
				Next
			</button>
		</div>
	);
};
