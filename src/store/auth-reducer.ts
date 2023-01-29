import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    isLoggedIn: boolean
}

const initialState: AuthState = {
    isLoggedIn: false
}


const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            return { ...state, isLoggedIn: action.payload }
        }
    }
})

export const authReducer = slice.reducer
export const { setIsLoggedIn } = slice.actions