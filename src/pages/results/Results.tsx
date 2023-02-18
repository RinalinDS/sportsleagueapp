import styles from './Results.module.scss'
import ResultsTable from "../../components/ResultsTable/ResultsTable";
import {MatchdayAccordion} from "../../components/MatchdayAccordion/MatchdayAccordion";
import {useLatestResultsKeys} from '../../hooks/useLatestResultsKeys';

export const Results = () => {
    const {keys, latestResults} = useLatestResultsKeys()

    return (
        <div className={styles.resultsPage}>
            <div className={styles.container}>
                {keys.map((dataKey, index) =>
                    <MatchdayAccordion key={dataKey} isVisible={index === 0} title={dataKey.trim()}>
                        <ResultsTable latestResult={latestResults[dataKey]}/>
                    </MatchdayAccordion>
                )}
            </div>
        </div>
    )
}