export type BaseResponseType = Array<ResultsType>

export type ResultsType = {
    [key: string]: MatchDay[]
}

export type MatchDay = {
    homeLogo: string;
    homeTeam: string;
    awayLogo: string;
    awayTeam: string;
    homeTeamScore: string;
    awayTeamScore: string;
}
