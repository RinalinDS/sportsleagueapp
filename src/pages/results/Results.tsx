import styles from './Results.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {ResultsType} from "../../models/ResultModel";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setLatestResults} from "../../store/results-reducer";
import ResultsTable from "./ResultsTable";
import {data} from "../../utils/mockData";

export const Results = () => {
    const latestResult = useAppSelector<ResultsType>(state => state.results.latestResults)
    //TODO create a custom hook , that return keys array , and hides whole logic
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
        formatData(latestResult)
    }, [latestResult])


    return (
        <div className={styles.resultsPage}>
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    {keys.map(dataKey =>
                        <ResultsTable key={dataKey} dataKey={dataKey} latestResult={latestResult[dataKey]}/>
                    )}
                </div>
            </div>
        </div>
    )
}