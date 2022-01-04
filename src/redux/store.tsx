
import { configureStore } from "@reduxjs/toolkit";

import events from './slice/event.slice'
import comment from './slice/comment.slice'
const store = configureStore({
    reducer: {
        events,
       comment,
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch


export default store