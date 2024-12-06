import axios from 'axios'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const fetchApi = 'http://d3335303.beget.tech/api/data.json'
const postApi = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    movies: [],
    isLoading: false,
    successMessage: '',
    errorMessage: ''
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies',
    async (url = fetchApi, thunkAPI) => {
        const response = await axios.get(url);
        return response.data;
    }
)

export const updateMovies = createAsyncThunk('movies/updateMovies',
    async (postData ,  thunkAPI) => {
        const response = await axios.post(postApi, postData)
        return response.data;
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            state.movies.forEach((movie) => {
                if (movie.slug === action.payload) {
                    movie.isFavorite = !movie.isFavorite;
                }
            });
        },
        toggleWatchlist: (state, action) => {
            state.movies.forEach((movie) => {
                if (movie.slug === action.payload) {
                    movie.isWatchlist = !movie.isWatchlist;
                }
            });
        },
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.isLoading = true
            state.errorMessage = ''
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload
        },
        [fetchMovies.rejected]: (state, action) => {
            state.errorMessage = action.error.message
        },
        [updateMovies.pending]: (state) => {
            state.successMessage = ''
            state.errorMessage = ''
        },
        [updateMovies.fulfilled]: (state, action) => {
            state.successMessage = 'Action completed!'
        },
        [updateMovies.rejected]: (state, action) => {
            state.errorMessage = action.error.message
        },
    },
})

export const {toggleFavorite, toggleWatchlist} = moviesSlice.actions

export const selectMovies = (state) => state.movies.movies
export const selectIsLoading = (state) => state.movies.isLoading
export const selectErrorMessage = (state) => state.movies.errorMessage
export const selectSuccessMessage = (state) => state.movies.successMessage

export default moviesSlice.reducer
