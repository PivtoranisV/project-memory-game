import { configureStore } from '@reduxjs/toolkit';
import userInputSlice from './userInput-slice';
import gameSlice from './game-slice';

const store = configureStore({
  reducer: { input: userInputSlice.reducer, game: gameSlice.reducer },
});

export default store;
