import axios, { AxiosRequestConfig } from 'axios';

export async function fetchJSON(url: string): Promise<any> {
    const reqOption: AxiosRequestConfig = {
        method: 'GET',
        url,
        responseType: 'json'
    }
    return axios(reqOption)
}
export async function fetchBuffer(url: string): Promise<any> {
    const reqOption: AxiosRequestConfig = {
        method: 'GET',
        url,
        responseType: 'arraybuffer'
    }
    return axios(reqOption)
}