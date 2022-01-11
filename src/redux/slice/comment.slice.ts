import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Event } from './event.slice'

interface EventComment  {
    comment: string[],
   
}
const initialState:EventComment={
    comment:[],
    
}
const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<string>) => {
            //const index= state.findIndex(event => event.id === action.payload.id) 
            state.comment.push(action.payload)
        },
       
    },
})

export const getEventCommentSelector = (state: RootState) => state.comment
export const { addComment } = commentSlice.actions
export default commentSlice.reducer