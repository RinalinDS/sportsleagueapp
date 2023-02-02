import {AnyAction, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {authReducer} from "./auth-reducer";
import {resultsReducer} from "./results-reducer";
import thunkMiddleware from 'redux-thunk'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        results: resultsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
    devTools: true,

})

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AnyAction>


// @ts-ignore
window.store = store