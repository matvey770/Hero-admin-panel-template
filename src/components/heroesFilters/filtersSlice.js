import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => {state.filtersLoadingStatus = 'loading'},
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle'
            state.filters = action.payload
        },
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload
        },
        filtersFetchingError: state => {
            state.filtersLoadingStatus = 'error'
        }
    }
})

const {actions, reducer} = filtersSlice

export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersChanged,
    filtersFetchingError
} = actions;