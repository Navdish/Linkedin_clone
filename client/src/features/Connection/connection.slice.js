import { createSlice, current} from "@reduxjs/toolkit"
import { UpdateRequest, fetchRequests, fetchUser } from "./connection.action"

const initialState = {
    isLoadingRequests : false,
    isLoadingSuggestions : false,
    isLoadingConnections : false,
    requests : [],
    suggestions : [],
    connections : [],
    requestError: null,
    suggestionError : null,
    connectionError : null,
    adderror : null
}

export const connectionSlice = createSlice({
    name: 'connection',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(fetchRequests.pending, (state, action)=> {
            state.isLoadingRequests = true;
        })
        builder.addCase(fetchRequests.fulfilled, (state, action)=> {
            state.isLoadingRequests = false;
            state.requests = action.payload;
        })
        builder.addCase(fetchRequests.rejected, (state, action)=> {
            state.isLoadingRequests = false;
            state.requestError = action.error;
        })
        builder.addCase(fetchUser.pending, (state, action)=> {
            state.isLoadingSuggestions = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action)=> {
            state.isLoadingSuggestions = false;
            state.suggestions = action.payload;
        })
        builder.addCase(fetchUser.rejected, (state, action)=> {
            state.isLoadingSuggestions = false;
            state.suggestionError = action.error;
        })
        builder.addCase(UpdateRequest.fulfilled, (state, action)=> {
            // recieving the connection with status "ACCEPTED" or "REJECTED"
            state.requests = state.requests.filter(up => up._id !== action.payload._id)
            if(action.payload.status === 'ACCEPTED') state.connections.push(action.payload);
            else state.suggestions.push(action.payload);
        })
        builder.addCase(UpdateRequest.rejected, (state, action)=> {
            state.adderror = action.error;
            // show snackbar or alert that the request (button click event) was not sent
        })
    }
})

export default connectionSlice.reducer
