import axios, { AxiosRequestConfig } from 'axios';
import { profile } from './index'

export async function fetchJSON(url: string): Promise<any> {
    const reqOption: AxiosRequestConfig = {
        method: 'GET',
        url,
        responseType: 'json'
    }
    return axios(reqOption)
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