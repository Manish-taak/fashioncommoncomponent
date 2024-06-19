import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/MyFirstslice'
import SecoundSlice from './slice/SecoundSlice'
import ModeSlice from './slice/ModeSlice'

export const mydata = configureStore({
    reducer: {
        counterSlice,
        SecoundSlice,
        ModeSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof mydata.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof mydata.dispatch
