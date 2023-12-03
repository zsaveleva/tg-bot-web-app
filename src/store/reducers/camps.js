import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios'

const initialState = {
    camps: [],
    isLoading: true,
    error: ''
}

export const fetchRemoveCamp = createAsyncThunk('camps/fetchRemoveCamp', async (id) => {
    await axios.delete(`/camps/${id}`)
})

export const fetchAddCamp = createAsyncThunk('camps/fetchAddCamp', async (fields) => {
    const { data } = await axios.post('camp', fields)
    return data
})

const campsSlice = createSlice({
    name: 'camps',
    initialState,
    reducers: {
        campsFetching(state) {
            state.isLoading = true
        },
        campsFetchingSuccess(state, action) {
            state.isLoading = false
            state.error = ''
            state.camps = action.payload
        },
        campsFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchRemoveCamp.pending, (state, action) => {
            state.camps = state.camps.filter(obj => obj._id !== action.meta.arg)
        })

        builder.addCase(fetchAddCamp.fulfilled, (state, action) => {
            state.camps.push(action.payload)
        })
    },
})

export const { campsFetching, campsFetchingSuccess, campsFetchingError } = campsSlice.actions
export const campsReducer = campsSlice.reducer
