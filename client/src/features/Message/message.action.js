import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeFetchMessage } from "./message.type";
import { fetchMessages } from "../../services/connection.message";




export const fetchMessage = createAsyncThunk(
    typeFetchMessage,
    async(data)=> {
        const response = await fetchMessages(data);
        const resData = await response.data;
        return resData;
    }
)
