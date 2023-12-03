import { configureStore } from '@reduxjs/toolkit'
import { drawerReducer } from './reducers/drawer'
import { campsReducer } from './reducers/camps'
import { searchReducer } from './reducers/search'
import { filterReducer } from './reducers/filter'
import { modalReducer } from './reducers/modal'

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        camps: campsReducer,
        search: searchReducer,
        filter: filterReducer,
        modal: modalReducer
    },
})