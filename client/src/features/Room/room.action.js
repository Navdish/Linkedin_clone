import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeCreateRoom } from "./room.type";
import { createRooms } from "../../services/room.service";


export const createRoom = createAsyncThunk(
    typeCreateRoom,
    async(data)=> {
        const response = await createRooms(data);
        const resData = response.data;
        return resData;
    }
)

