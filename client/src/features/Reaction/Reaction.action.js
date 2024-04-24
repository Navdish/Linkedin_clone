import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import { fetchReactions, postReactions, userReaction } from "./Reaction.type"

export const getUserReactions = createAsyncThunk(
    userReaction,
    async(data)=> {
        try {
            const response = await axios.get('http://localhost:8080/reactions/user', {params: {
                postId : data
            }})
            const dataj = await response.data
            return dataj;
        } catch (error) {
            throw error;
        }
    }
)

export const getReactions = createAsyncThunk(
    fetchReactions,
    async(data)=> {
        try {
            const response = await axios.get('http://localhost:8080/reactions', {params:data})
            const dataj = await response.data
            return dataj;
        } catch (error) {
            throw error;
        }
    }
)

export const addReactions = createAsyncThunk(
    postReactions,
    async(data)=> {
        try {
            const response = await axios.post('http://localhost:8080/reactions', data)
            const dataj = await response.data
            return dataj;
        } catch (error) {
            throw error;
        }
    }
)
