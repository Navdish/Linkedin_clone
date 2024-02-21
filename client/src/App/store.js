import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../features/Auth/Auth.slice'
import postSlice from '../features/Post/Post.slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import commentSlice from '../features/Comment/Comment.slice'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authSlice)

export const store = configureStore({
    reducer: {
        user : persistedReducer,
        post : postSlice,
        comment: commentSlice
    }
})

export const persistor = persistStore(store)