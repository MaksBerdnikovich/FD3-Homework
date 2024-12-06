import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: '',
    genre: '',
    director: '',
    order: '',
    perPage: 60
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setNameFilter: (state, action) => {
            state.name = action.payload;
        },
        setGenreFilter: (state, action) => {
            state.genre = action.payload;
        },
        setDirectorFilter: (state, action) => {
            state.director = action.payload;
        },
        setOrderFilter: (state, action) => {
            state.order = action.payload;
        },
        setPerPageFilter: (state, action) => {
            state.perPage = action.payload;
        },
        resetFilters: () => {
            return initialState;
        },
    },
});

export const {
    setNameFilter,
    setGenreFilter,
    setDirectorFilter,
    setOrderFilter,
    setPerPageFilter,
    resetFilters,
} = filterSlice.actions;

export const selectNameFilter = (state) => state.filter.name;
export const selectGenreFilter = (state) => state.filter.genre;
export const selectDirectorFilter = (state) => state.filter.director;
export const selectOrderFilter = (state) => state.filter.order;
export const selectPerPageFilter = (state) => state.filter.perPage;

export default filterSlice.reducer;
