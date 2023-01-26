import styles from './Results.module.scss'

export const Results = () => {
    return (
        <div className={styles.resultsPage}>
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    <div className={styles.grid}>
                        <div className={styles.team}>Arsenal</div>
                        <div className={styles.score}>0 - 0 </div>
                        <div className={styles.team}>Chelsea</div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.team}>Leeds</div>
                        <div className={styles.score}>0 - 2 </div>
                        <div className={styles.team}>Leicester</div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.team}>Man City</div>
                        <div className={styles.score}>3 - 0 </div>
                        <div className={styles.team}>Blackburn</div>
                    </div>
                </div>
            </div>
        </div>
    )
}