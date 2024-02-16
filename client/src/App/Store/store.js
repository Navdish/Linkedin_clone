import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../Slice/contentSlice'

export const store = configureStore({
    reducer: {
        user : userSlice,
    }
})