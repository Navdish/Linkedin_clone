// request action

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typefetchRequest } from "./connection.type";

export const fetchRequests = createAsyncThunk(
    typefetchRequest,
    async()=> {
        const response = await axios.get('http://localhost:8080/connection/request');
        const data = response.data;
        return data;
    }
)