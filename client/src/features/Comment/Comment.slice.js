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
            console.log("action payload: ", action.payload[0]?.postId);
            state.comments[action.payload[0]?.postId] = action.payload;
            console.log("fetch comments", current(state.comments))
        })
        builder.addCase(getComments.rejected, (state, action)=> {
            state.isLoading = false;
            console.log(action.error);
            state.error = action.error;
        })
        builder.addCase(addComments.pending, (state)=> {
            state.isLoading = true;
        })
        builder.addCase(addComments.fulfilled, (state, action)=> {
            state.isLoading = false;
            // console.log("reducer comment ", action.payload, Object.entries(state.comments).length, Object.entries(state.comments));
            // console.log("current comments", current(state.comments))
            // if(Object.entries(state.comments).length === 0) state.comments[action.payload.postId] = [action.payload]
            // else {
                // const comments = current(state.comments[action.payload.postId])
                // console.log("comments reducer ",comments)
                console.log("xbaksjxbkasj")
                const comments = current(state.comments);
                if(comments[undefined] && Object.entries(state.comments).length === 1) {
                    console.log("empty comments object ", comments)
                    state.comments[action.payload.postId] = [action.payload]
                }
                else {
                    console.log("comments are already there")
                    const comments = current(state.comments[action.payload.postId])
                    console.log('comments from currnet state: ', comments);
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
