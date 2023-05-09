import { createSlice } from '@reduxjs/toolkit';

const userInputSlice = createSlice({
  name: 'input',
  initialState: { topic: '', level: '', page: '' },
  reducers: {
    getInput(state, action) {
      state.topic =
        action.payload.enteredTopic[0].toUpperCase() +
        action.payload.enteredTopic.slice(1).toLowerCase();
      state.level = action.payload.enteredLevel;
      state.page = action.payload.enteredPage;
    },
  },
});

export const inputAction = userInputSlice.actions;

export default userInputSlice;
