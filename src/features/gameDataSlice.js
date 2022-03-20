import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	games: [],
	status: 'idle',
	error: null,
};

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
	const res = await fetch(
		'https://free-to-play-games-database.p.rapidapi.com/api/games',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
				'x-rapidapi-key':
					'3a262d5aa0msh1bb63160e972fd4p1e6060jsn84bbea94f462',
			},
		}
	).then((response) => response.json());
	return res;
});

export const counterSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchGames.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchGames.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.games = action.payload;
			})
			.addCase(fetchGames.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
