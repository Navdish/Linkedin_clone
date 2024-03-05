import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeCreateRoom, typefetchRoom } from "./room.type";
import { createRooms, fetchRooms } from "../../services/room.service";


export const createRoom = createAsyncThunk(
    typeCreateRoom,
    async(data)=> {
        const response = await createRooms(data);
        const resData = response.data;
        return resData;
    }
)

export const fetchRoom = createAsyncThunk(
    typefetchRoom,
    async()=> {
        const response = await fetchRooms();
        const resData = response.data;
        return resData;
    }
)