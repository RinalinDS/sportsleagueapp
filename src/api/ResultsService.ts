import axios, {AxiosResponse} from "axios";
import {BaseResponseType} from "../models/ResultModel";

const instance = axios.create({
    baseURL: 'https://football98.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': 'bf6cf6bbd0mshc52fd53027bdc7fp104dccjsn7e40c8c836f1',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
})

export class ResultsService {
    static async getResults(): Promise<AxiosResponse<BaseResponseType>> {
        return instance.get(`premierleague/results`)
    }
}