import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResultsService} from "../api/ResultsService";
// import {AppThunk} from "./index";
import {BaseResponseType, ResultsType} from "../models/ResultModel";


export const getLatestResults = () => async (dispatch:any )=> {
    try {
        const response = await ResultsService.getResults()
        dispatch(setLatestResults(response.data))
        console.log(response.data)

    } catch (e) {
        console.log(e)
    }

}

const slice = createSlice({
    name: 'results',
    initialState: {
        latestResults: {} as ResultsType
    },
    reducers: {
        setLatestResults: (state, action: PayloadAction<BaseResponseType>) => {
            console.log(action.payload)
            return {...state, latestResults: action.payload[0]}
        }
    }
})

export const resultsReducer = slice.reducer
export const {setLatestResults} = slice.actions