import { configureStore } from '@reduxjs/toolkit';
import logicalFunctionReducer from './features/logicalFunctionSlice'
import inputsCountReducer from './features/inputsCountSlice'

const store = configureStore({
  reducer: {
    logicalFunction: logicalFunctionReducer,
    inputsCount: inputsCountReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
