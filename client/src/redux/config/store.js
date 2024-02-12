import {configureStore} from '@reduxjs/toolkit'
import contentSlice from '../Slice/contentSlice'

export const store = configureStore({
    reducer: {
        user : contentSlice,
    }
})