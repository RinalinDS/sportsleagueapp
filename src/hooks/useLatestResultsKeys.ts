import { useEffect, useState } from "react"
import { MatchDay, ResultsType } from "../models/ResultModel"
import { setLatestResults } from "../store/results-reducer"
import { data } from "../utils/mockData"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"

export const useLatestResultsKeys = () => {
    const latestResults = useAppSelector<ResultsType>(state => state.results.latestResults)


    const dispatch = useAppDispatch()
    const [keys, setKeys] = useState<string[]>([])
    const formatData = (data: ResultsType) => {
        for (const dataKey in data) {
            setKeys(prevValue => Array.from(new Set([...prevValue, dataKey])))
        }
    }
    useEffect(() => {
        // for situation when internet connection isn't available
        dispatch(setLatestResults(data))

        // for situation when internet connection available
        // dispatch(getLatestResults())
    }, [])

    useEffect(() => {
        formatData(latestResults)
    }, [latestResults])

    return {keys, latestResults}
}
