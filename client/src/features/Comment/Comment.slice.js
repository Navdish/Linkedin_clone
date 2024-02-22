import { createSlice} from "@reduxjs/toolkit"
import { addComments, getComments } from "./Comment.action"

const initialState = {
    isLoading : false,
    comments : {},
    error: null,
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(getComments.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(getComments.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.comments[action.payload[0].postId] = action.payload;
        })
        builder.addCase(getComments.rejected, (state, action)=> {
            state.isLoading = false;
            console.log(action.error);
            state.error = action.error;
        })
        builder.addCase(addComments.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(addComments.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.comments[action.payload.postId] = [...state.comments[action.payload.postId], action.payload]
        })
        builder.addCase(addComments.rejected, (state, action)=> {
            state.isLoading = false;
            console.log(action.error);
            state.error = action.error;
        })
    }
})

export default commentSlice.reducer
