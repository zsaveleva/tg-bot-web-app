import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    values: []
}

const filteringSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilteringValue: (state, action) => {
            state.values.push(action.payload)
        },
        removeFilteringValue: (state, action) => {
            state.values = state.values.filter(el => el != action.payload)
        }
    },
})

export const { addFilteringValue, removeFilteringValue } = filteringSlice.actions
export const filterReducer = filteringSlice.reducer