import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: '',
}

const codeSlice = createSlice({
    name: 'code',
    initialState,
    reducers: {
        setValue(state, action) {
            state.value = action.payload
        },
    }
})

export const { setValue } = codeSlice.actions
export const codeReducer = codeSlice.reducer