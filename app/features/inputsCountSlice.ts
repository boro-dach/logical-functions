import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inputsCountState {
    count: number
}

const initialState: inputsCountState = {
    count: 0
}

const inputsCountSlice = createSlice({
    name: 'inputsCount',
    initialState,
    reducers: {
      setInputsCount: (state, action: PayloadAction<number>) => {
        state.count = action.payload;
      }
    }
});

export const { setInputsCount } = inputsCountSlice.actions;
export default inputsCountSlice.reducer;