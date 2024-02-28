// request action

import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeUpdateRequest, typefetchRequest, typefetchUser, typepostRequest } from "./connection.type";
import { UpdateRequests, fetchRequest, fetchUsers, postRequests } from "../../services/connection.service";


export const fetchRequests = createAsyncThunk(
    typefetchRequest,
    async()=> {

        const response = await fetchRequest();
        const data = response.data;
        return data;
    }
)

export const fetchUser = createAsyncThunk(
    typefetchUser,
    async()=> {
        const response = await fetchUsers();
        const data = response.data;
        return data;
    }
)

export const postRequest = createAsyncThunk(
    typepostRequest,
    async(data)=> {
        const response = await postRequests(data);
        const resData = response.data;
        return resData;
    }
)

export const UpdateRequest = createAsyncThunk(
    typeUpdateRequest,
    async(data)=> {
        const {connectionId , status} = data;
        const response = await UpdateRequests({connectionId, status});
        const resData = response.data;
        return resData;
    }
)