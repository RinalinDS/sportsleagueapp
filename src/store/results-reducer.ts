import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type latestResultsType = MatchType[]

type MatchType = {
    homeTeam: string,
    homeTeamScore: number,
    roadTeam: string,
    roadTeamScore: number,
}

const slice = createSlice({
    name: 'results',
    initialState: {
        latestResults: [] as latestResultsType
    },
    reducers: {
        setLatestResults: (state, action: PayloadAction<latestResultsType>) => {
            return { ...state, latestResults: action.payload }
        }
    }
})

export const resultsReducer = slice.reducer
export const { setLatestResults } = slice.actions