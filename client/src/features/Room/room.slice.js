import { createSlice, current} from "@reduxjs/toolkit"
import { createRoom, fetchRoom } from "./room.action"

const initialState = {
    isLoading : false,
    isLoadingRoom : false,
    room : [],
    socket : null,
    roomError : null,
    error : null
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        saveSocket(state, action) {
            console.log("socket ", action.payload)
            state.socket = action.payload;
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(createRoom.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(createRoom.fulfilled, (state, action)=> {
            state.isLoading = false;
            if(state.room.length === 0) state.room = [action.payload];
            state.room = [...state.room, action.payload];
        })
        builder.addCase(createRoom.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })
        builder.addCase(fetchRoom.pending, (state, action)=> {
            state.isLoadingRoom = true;
        })
        builder.addCase(fetchRoom.fulfilled, (state, action)=> {
            state.isLoadingRoom = false;
            state.room = action.payload;
        })
        builder.addCase(fetchRoom.rejected, (state, action)=> {
            state.isLoadingRoom = false;
            state.error = action.error;
        })
    }
})

export default roomSlice.reducer
