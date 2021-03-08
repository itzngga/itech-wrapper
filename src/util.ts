import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as types from './constant';
import { profile } from './index'

export async function fetchJSON(url: string): Promise<types.apiResult> {
    const reqOption: AxiosRequestConfig = {
        method: 'GET',
        url,
        responseType: 'json'
    }
    const result: AxiosResponse = await axios(reqOption)
    if(result.data.code === 404) console.error(result.data.pesan)
    return result.data
}
export function roleCheck(role: string): boolean {
    const usrRole = profile.result
    if(usrRole === 'Admin') return false
    else if(role === 'Premium' && usrRole === 'Free'){
        console.error('Premium feature users only')
        return true
    }else if(role === 'Vip' && usrRole === 'Free' || usrRole === 'Premium'){
        console.error('VIP feature users only')
        return true
    }
    return false
}