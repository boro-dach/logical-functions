import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LogicalFunctionsType = 'AND' | 'NAND' | 'OR' | 'NOR' | 'XOR' | 'NOT' | 'YES'

interface LogicalFunctionState {
  value: LogicalFunctionsType;
}

const initialState: LogicalFunctionState = {
  value: 'AND',
};

const logicalFunctionSlice = createSlice({
  name: 'logicalFunction',
  initialState,
  reducers: {
    setLogicalFunction: (state, action: PayloadAction<LogicalFunctionsType>) => {
      state.value = action.payload;
    },
  },
});

export const { setLogicalFunction } = logicalFunctionSlice.actions;
export default logicalFunctionSlice.reducer;
