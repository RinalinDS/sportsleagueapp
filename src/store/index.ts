import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-reducer";
import { resultsReducer } from "./results-reducer";
import thunkMiddleware from 'redux-thunk'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        results: resultsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware)
})

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch