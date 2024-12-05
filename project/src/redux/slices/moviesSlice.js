import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//import createBookWithID from '../../utils/createBookWithID';
//import { setError } from './errorSlice';

const initialState = {
    movies: [],
    isLoading: false
}

const API = 'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json'

export const fetchMovies = createAsyncThunk('movies/fetchMovies',
    async (url = API, thunkAPI) => {
        const res = await axios.get(url);
        return res.data;
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            state.movies.forEach((movie) => {
                if (movie.id === action.payload) {
                    movie.isFavorite = !movie.isFavorite;
                }
            });
        },
        toggleWatchlist: (state, action) => {
            state.movies.forEach((movie) => {
                if (movie.id === action.payload) {
                    movie.isWatchlist = !movie.isWatchlist;
                }
            });
        },
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.isLoading = true
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.isLoading = false

            state.movies = action.payload.map((item, index) => {
                return {
                    ...item,
                    id: index,
                    isFavorite: [0,1,2,3,4,34, 56, 34, 12].includes(index),
                    isWatchlist: [0,1,2,3,4,67, 45, 23, 89].includes(index),
                }
            })
        },
        [fetchMovies.rejected]: (state) => {
            state.isLoading = false
        },
    },
})

export const {toggleFavorite, toggleWatchlist} = moviesSlice.actions

export const selectMovies = (state) => state.movies.movies
export const selectIsLoading = (state) => state.movies.isLoading

export default moviesSlice.reducer
