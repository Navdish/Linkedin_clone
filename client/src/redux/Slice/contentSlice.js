import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async()=> {
        const response = await axios.get('http://localhost:8080/users')
        const data = await response.data
        return data
    }
)

const initialState = {
    isLoading : false,
    users: [],
    error: null
}

export const contentSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(fetchUser.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.users = action.payload;
        })
        builder.addCase(fetchUser.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default contentSlice.reducer
