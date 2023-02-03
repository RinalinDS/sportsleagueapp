import styles from './Results.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {ResultsType} from "../../models/ResultModel";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setLatestResults} from "../../store/results-reducer";
import ResultsTable from "../../components/ResultsTable/ResultsTable";
import {data} from "../../utils/mockData";
import {MatchdayAccordion} from "../../components/MatchdayAccordion/MatchdayAccordion";
import { useLatestResultsKeys } from '../../hooks/useLatestResultsKeys';

export const Results = () => {
    const {keys, latestResults} = useLatestResultsKeys()

    return (
        <div className={styles.resultsPage}>
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    {keys.map((dataKey, index) =>
                        <MatchdayAccordion key={dataKey} isVisible={index === 0} title={dataKey.trim()}>
                            <ResultsTable latestResult={latestResults[dataKey]}/>
                        </MatchdayAccordion>
                    )}
                </div>
            </div>
        </div>
    )
}