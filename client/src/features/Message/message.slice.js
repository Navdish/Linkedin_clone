import { createSlice, current} from "@reduxjs/toolkit"
import { UpdateRequest, fetchRequests, fetchUser, postRequest } from "./connection.action"

const initialState = {
    isLoadingRequests : false,
    room : [],
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase()
    }
})

export default messageSlice.reducer
