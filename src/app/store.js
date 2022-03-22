import { configureStore } from '@reduxjs/toolkit';
import gameDataReducer from '../features/gameDataSlice';

export default configureStore({
	reducer: {
		game: gameDataReducer,
	},
});
