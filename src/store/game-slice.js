import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: { clickedItems: [], score: 0, bestScore: 0, status: null },
  reducers: {
    click(state, action) {
      if (state.clickedItems.includes(action.payload.id)) {
        state.status = 'game over';
      } else {
        state.clickedItems.push(action.payload.id);
        state.score++;
        if (state.bestScore < state.score) {
          state.bestScore = state.score;
        }
        if (state.score === +action.payload.level) {
          state.status = 'game win';
        }
      }
    },
    gameReset(state) {
      return {
        clickedItems: [],
        score: 0,
        status: null,
        bestScore: state.bestScore,
      };
    },
  },
});

export const gameAction = gameSlice.actions;

export default gameSlice;
