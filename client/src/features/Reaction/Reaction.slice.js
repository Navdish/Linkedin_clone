import { createSlice, current} from "@reduxjs/toolkit"
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
            state.error = action.error;
        })
        builder.addCase(addReactions.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(addReactions.fulfilled, (state, action)=> {
            state.isLoading = false;

            if(state.userReaction[action.payload?.postId]) {
                if((current(state.userReaction[action.payload?.postId])).type === action.payload.type)
                {
                    const reactions = current(state.userReaction);
                    var result = Object.keys(reactions).map((key)=> [key, reactions[key]]);
                    result = result.filter((r)=> {
                        return r[0] !== action.payload.postId;
                    });
                    const final = Object.fromEntries(result);
                    state.userReaction = final;
                }
            }
            else {
                state.userReaction[action.payload?.postId] = action.payload;
                console.log("current state ", current(state.userReaction))
            }
            
        })
        builder.addCase(addReactions.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default reactionSlice.reducer
