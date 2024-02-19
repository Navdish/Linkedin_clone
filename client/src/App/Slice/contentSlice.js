import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

export const createUser = createAsyncThunk(
    'user/createUser',
    async(data)=> {
        try {
            const response = await axios.post('http://localhost:8080/auth/signup', data)
            console.log("data", data);
            const dataj = await response.data
            return dataj;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async(data)=> {
        try{
            const response = await axios.post('http://localhost:8080/auth/login', data)
            const resData = await response.data
            return resData
        }
        catch(error) {
            throw error;
        }
    }
)

const initialState = {
    isLoading : false,
    user: {},
    error: null,
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(createUser.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(createUser.fulfilled, (state, action)=> {
            state.isLoading = false;
        })
        builder.addCase(createUser.rejected, (state, action)=> {
            state.isLoading = false;
            console.log(action.error);
            state.error = action.error;
        })
        builder.addCase(login.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.user = action.payload;
            state.isLoggedIn = true;
        })
        builder.addCase(login.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default userSlice.reducer
