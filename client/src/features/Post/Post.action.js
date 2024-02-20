import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import { postPosts, fetchPosts } from "./Post.type"

export const getPosts = createAsyncThunk(
    fetchPosts,
    async()=> {
        try {
            const response = await axios.get('http://localhost:8080/posts')
            const dataj = await response.data
            return dataj;
        } catch (error) {
            throw error;
        }
    }
)

export const addPosts = createAsyncThunk(
    postPosts,
    async(data)=> {
        try {
            const response = await axios.post('http://localhost:8080/posts', data)
            const dataj = await response.data
            return dataj;
        } catch (error) {
            throw error;
        }
    }
)
