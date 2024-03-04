import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeCreateRoom } from "./connection.type";
import { UpdateRequests, fetchRequest, fetchUsers, postRequests } from "../../services/connection.service";


export const createRoom = createAsyncThunk(
    typeCreateRoom,
    async()=> {
        const response = await createRoom();
        const data = response.data;
        return data;
    }
)

