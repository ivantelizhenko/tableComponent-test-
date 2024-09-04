import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import userReducer from '../src/features/users/userSlice';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const store: EnhancedStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// Have a some problems with type for dispatch function. Here was typeof store.dispatch, but it gives a problem in code.
export type AppDispatch = any;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
