import { createSlice} from "@reduxjs/toolkit"
import { getNotification } from "./notification.action";


const initialState = {
    isLoading : false,
    notifications : {},
    error: null,
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification(state, action){
            state.notifications = [...state.notifications, action.payload];
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(getNotification.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(getNotification.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.notifications = action.payload; 
        })
        builder.addCase(getNotification.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer
