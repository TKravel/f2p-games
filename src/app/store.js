import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/gameDataSlice';

export default configureStore({
	reducer: {
		game: gameReducer,
	},
});
