import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import { postComments, fetchComments } from "./Comment.type"

export const getComments = createAsyncThunk(
    fetchComments,
    async(data)=> {
        try {     
            console.log("action get comments", data);
            const response = await axios.get(`http://localhost:8080/comments`, {params : {
                data: data
            }})
            const resData = await response.data
            console.log(resData);
            return resData;
        } catch (error) {
            throw error;
        }
    }
)

export const addComments = createAsyncThunk(
    postComments,
    async(data)=> {
        try {
            const response = await axios.post('http://localhost:8080/comments', data)
            const resData = await response.data
            return resData;
        } catch (error) {
            throw error;
        }
    }
)
