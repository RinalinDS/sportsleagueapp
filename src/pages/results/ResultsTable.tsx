import React, {FC} from 'react';
import styles from "./Results.module.scss";
import {MatchDay} from "../../models/ResultModel";

type propsType = {
    dataKey: string
    latestResult: MatchDay[]
}

export const ResultsTable: FC<propsType> = (props) => {
    const {latestResult, dataKey} = props
    return (
        <>
            <h1>
                {dataKey.trim()}
            </h1>
            {latestResult?.map(m => {
                return (
                    <div className={styles.grid} key={m.homeTeam}>
                        <div className={styles.team}>{m.homeTeam}</div>
                        <div className={styles.score}>{m.homeTeamScore} - {m.awayTeamScore}</div>
                        <div className={styles.team}>{m.awayTeam}</div>
                    </div>
                )
            })}
        </>
    );
};

export default ResultsTable;