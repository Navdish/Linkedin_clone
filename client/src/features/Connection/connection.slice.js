import { createSlice, current} from "@reduxjs/toolkit"
import { fetchRequests } from "./connection.action"

const initialState = {
    isLoading : false,
    requests : [],
    suggestions : [],
    connections : [],
    error: null,
}

export const connectionSlice = createSlice({
    name: 'connection',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(fetchRequests.pending, (state, action)=> {
            state.requests = [...state.requests,action.payload];
        })
    }
})

export default connectionSlice.reducer
