import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { filtersReducer } from '../features/filters/filtersSlice';
import { curseForgeApi } from '../services/curseForgeApi';
import { setupListeners } from '@reduxjs/toolkit/query'
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    filters: filtersReducer,
    [ curseForgeApi.reducerPath ]: curseForgeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(curseForgeApi.middleware),
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
