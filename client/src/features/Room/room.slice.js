import { createSlice, current} from "@reduxjs/toolkit"
import { createRoom } from "./room.action"

const initialState = {
    isLoading : false,
    room : {},
    error : null
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(createRoom.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(createRoom.fulfilled, (state, action)=> {

            state.room[action.payload._id] = action.payload.participants;
            // if(state.room.length === 0) state.room = [action.payload];
            // else {
            //     state.room = [...state.room, action.payload];
            // }
        })
        builder.addCase(createRoom.rejected, (state, action)=> {
            state.error = action.error;
        })
    }
})

export default roomSlice.reducer
