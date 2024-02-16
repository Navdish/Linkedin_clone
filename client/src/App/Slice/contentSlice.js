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

const initialState = {
    isLoading : false,
    users: [],
    error: null
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
    }
})

export default userSlice.reducer
