import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer
