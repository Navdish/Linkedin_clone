import { createSlice} from "@reduxjs/toolkit"
import { addPosts, getPosts } from "./Post.action"

const initialState = {
    isLoading : false,
    posts : [],
    error: null,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(getPosts.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(getPosts.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.posts = action.payload;
        })
        builder.addCase(getPosts.rejected, (state, action)=> {
            state.isLoading = false;
            console.log(action.error);
            state.error = action.error;
        })
        builder.addCase(addPosts.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(addPosts.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.posts = [...state.posts, action.payload];
        })
        builder.addCase(addPosts.rejected, (state, action)=> {
            state.isLoading = false;
            console.log(action.error);
            state.error = action.error;
        })
    }
})

export default postSlice.reducer
