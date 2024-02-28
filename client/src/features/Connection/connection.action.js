// request action

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeUpdateRequest, typefetchRequest, typefetchSuggestion, typefetchUser, typepostRequest } from "./connection.type";

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

export const postRequest = createAsyncThunk(
    typepostRequest,
    async(data)=> {
        const response = await axios.post('http://localhost:8080/connection', data);
        const resData = response.data;
        return resData;
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