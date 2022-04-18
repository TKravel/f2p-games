import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	genreFilter: 'ALL',
	sort: 'ALPHABETICAL',
};

export const filterStateSlice = createSlice({
	name: 'filterState',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.genreFilter = action.payload;
		},
		setSort: (state, action) => {
			state.sort = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setFilter, setSort } = filterStateSlice.actions;

export default filterStateSlice.reducer;
