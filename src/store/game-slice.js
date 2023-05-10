import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: { clickedItems: [], score: 0, bestScore: 0, status: null },
  reducers: {
    click(state, action) {
      if (state.clickedItems.includes(action.payload.id)) {
        state.score = 0;
        state.clickedItems = [];
        state.status = 'game over';
      } else {
        state.clickedItems.push(action.payload.id);
        state.score++;
        if (state.bestScore < state.score) {
          state.bestScore = state.score;
        }
      }
    },
  },
});

export const gameAction = gameSlice.actions;

export default gameSlice;
