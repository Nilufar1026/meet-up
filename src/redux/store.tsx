
import { configureStore } from "@reduxjs/toolkit";

import events from './slice/event.slice'

const store = configureStore({
    reducer: {
        events,
        
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch


export default store