import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

export const getPosts = createAsyncThunk(
    'post/getPosts',
    async()=> {
        try {
            const response = await axios.get('http://localhost:8080/posts')
            const dataj = await response.data
            console.log("dataj",dataj);
            return dataj;
        } catch (error) {
            console.log("error",error);
            throw error;
        }
    }
)

export const addPosts = createAsyncThunk(
    'post/addPosts',
    async(data)=> {
        try {
            const response = await axios.post('http://localhost:8080/posts', data)
            const dataj = await response.data
            return dataj;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

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
