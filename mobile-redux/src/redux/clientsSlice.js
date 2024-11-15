import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    dataLoadState: 0,
    dataLoadError: null,
    data: [],
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        updateLoadState: (state, action) => {
            state.dataLoadState = action.payload.state;
            state.dataLoadError = action.payload.error;
        },

        updateData: (state, action) => {
            state.data = action.payload;
        },

        addClient: (state, action) => {
            state.data.clientsArr.push(action.payload);
        },

        deleteClient: (state, action) => {
            state.data.clientsArr = state.data.clientsArr.filter(client => client.id !== action.payload);
        },

        updateClient: (state, action) => {
            state.data.clientsArr = state.data.clientsArr.map(client => client.id === action.payload.id ? action.payload : client);
        },
    },
});

export const {updateLoadState, updateData, addClient, deleteClient, updateClient} = clientsSlice.actions;

export default clientsSlice.reducer;
