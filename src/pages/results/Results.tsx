import { MatchdayAccordion } from '../../components/MatchdayAccordion'
import styles from './Results.module.scss'

const data = [
    { homeTeam: 'Arsenal', roadTeam: 'Chelsea', homeTeamScore: 0, roadTeamScore: 0 },
    { homeTeam: 'Leeds', roadTeam: 'Leicester', homeTeamScore: 0, roadTeamScore: 2 },
    { homeTeam: 'Man City', roadTeam: 'Blackburn', homeTeamScore: 3, roadTeamScore: 1 },
]

export const Results = () => {
    return (
        <div className={styles.resultsPage}>
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    {data.map((day, index) => {
                        return (
                            <MatchdayAccordion isVisible={index === 0} title={`Matchday ${index + 1}`}>
                                <div className={styles.grid}>
                                    <div className={styles.team}>{day.homeTeam}</div>
                                    <div className={styles.score}>{day.homeTeamScore} - {day.roadTeamScore} </div>
                                    <div className={styles.team}>{day.roadTeam}</div>
                                </div>
                            </MatchdayAccordion>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}