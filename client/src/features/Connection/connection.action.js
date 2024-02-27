// request action

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeUpdateRequest, typefetchRequest, typefetchUser } from "./connection.type";

export const fetchRequests = createAsyncThunk(
    typefetchRequest,
    async()=> {

        const response = await axios.get('http://localhost:8080/connection/request');
        const data = response.data;
        return data;
    }
)

export const fetchUser = createAsyncThunk(
    typefetchUser,
    async()=> {
        const response = await axios.get('http://localhost:8080/connection/user');
        const data = response.data;
        return data;
    }
)

export const UpdateRequest = createAsyncThunk(
    typeUpdateRequest,
    async(data)=> {
        const {connectionId , status} = data;
        const response = await axios.put('http://localhost:8080/connection', null ,{
            params : {
                connectionId,
                status 
            }
        })
        const resData = response.data;
        return resData;
    }
)