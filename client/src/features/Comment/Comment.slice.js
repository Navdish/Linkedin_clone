import { createSlice, current} from "@reduxjs/toolkit"
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
            state.comments[action.payload[0]?.postId] = action.payload;
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
            console.log("reducer comment ", action.payload.postId, Object.entries(state.comments));
            if(Object.entries(state.comments).length === 0) state.comments[action.payload.postId] = [action.payload]
            else {
                const comments = current(state.comments[action.payload.postId])
                console.log("comments reducer ",comments)
                state.comments[action.payload.postId] = [...comments, action.payload]
            }
        })
        builder.addCase(addComments.rejected, (state, action)=> {
            state.isLoading = false;
            console.log(action.error);
            state.error = action.error;
        })
    }
})

export default commentSlice.reducer
