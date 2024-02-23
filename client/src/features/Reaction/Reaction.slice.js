import { createSlice} from "@reduxjs/toolkit"
import { getReactions, addReactions, getUserReactions } from "./Reaction.action"

const initialState = {
    isLoading : false,
    reactions : {},
    userReaction : {},
    error: null,
}

export const reactionSlice = createSlice({
    name: 'reaction',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(getUserReactions.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(getUserReactions.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.userReaction[action.payload?.postId] = action.payload; // we are using the type only, so we can map the type only(later..)
        })
        builder.addCase(getUserReactions.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })

        builder.addCase(getReactions.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(getReactions.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.reactions[action.payload[0].postId] = action.payload;
            // state.comments[action.payload[0].postId] = action.payload;
        })
        builder.addCase(getReactions.rejected, (state, action)=> {
            state.isLoading = false;
            state.reactions = action.error;
        })
        builder.addCase(addReactions.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(addReactions.fulfilled, (state, action)=> {
            state.isLoading = false;

            // console.log(state.userReaction[action.payload?.postId])
            // console.log("new added reaction ", action.payload.type, " ===== ", state.userReaction[action.payload?.postId])

            // if(state.userReaction[action.payload?.postId] === action.payload.type) {
            //     console.log("delete the reaction ", action.payload)
            //     state.userReaction[action.payload?.postId] = null;
            // }
            const reactions =  state.userReaction;
            const map = new Map();
            console.log(Object.entries(reactions))
            // Object.entries(reactions).forEach((key) => {
            //     console.log(reactions)
            //     // map.set(key, reactions[key]);
            // });
            // const map = new Map(Object.entries(reactions));
            console.log(map.get(action.payload?.postId))
            // console.log(Object.keys(reactions.hasOwnProperty('property1')));

            // state.userReaction[action.payload?.postId] = action.payload;
            // state.comments[action.payload.postId] = [...state.comments[action.payload.postId], action.payload]
        })
        builder.addCase(addReactions.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default reactionSlice.reducer
