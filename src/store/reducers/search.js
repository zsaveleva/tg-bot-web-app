import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: '',
}

const searchSlice = createSlice({
    name: 'searchValue',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.value = action.payload
        },
    }
})

export const { setSearchValue } = searchSlice.actions
export const searchReducer = searchSlice.reducer