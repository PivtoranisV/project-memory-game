import { configureStore } from '@reduxjs/toolkit';
import userInputSlice from './userInput-slice';

const store = configureStore({
  reducer: { input: userInputSlice.reducer },
});

export default store;
