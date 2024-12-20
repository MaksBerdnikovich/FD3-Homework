import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        filter: filterReducer,
    },
});

export default store;