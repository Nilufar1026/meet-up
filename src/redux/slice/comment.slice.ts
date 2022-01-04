import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Event } from './event.slice'

interface EventComment  {
    comment: string[],
}
const initialState:EventComment={
    comment:[]
}
const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<string>) => {
            //const index= state.findIndex(event => event.id === action.payload.id) 
            state.comment.push(action.payload)
        },
        // removeFromCart: (state, action: PayloadAction<string>) => {
        //     const productIndex = state.findIndex(product => product.id === action.payload)
        //     if (state[productIndex].amount > 1) {
        //         state[productIndex].amount -= 1
        //     } else {
        //         return state.filter(product => product.id !== action.payload)
        //     }
        // }
    },
})

export const getEventCommentSelector = (state: RootState) => state.comment
export const { addComment } = commentSlice.actions
export default commentSlice.reducer