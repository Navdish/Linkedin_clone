import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import { fetchNotification } from "./notification.type"

export const getNotification = createAsyncThunk(
    fetchNotification,
    async()=> {
        try {
            const response = await axios.get('http://localhost:4000/notification')
            const dataj = await response.data
            return dataj;
        } catch (error) {
            throw error;
        }
    }
)

