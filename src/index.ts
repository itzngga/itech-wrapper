import { fetchJSON } from './util';
import { Profile, error } from './constant';
import { api } from './api';
export let apiKey: string | undefined = ''
export let profile: Profile | any = {}

export function key (apiKeys: string | undefined) {
    apiKey = apiKeys
    fetchJSON('https://api.i-tech.id/tools/profile?key='+apiKey).then(data => {
        profile = data
        return api
    })
    return api
}
export async function getProfile(apiKeys: string | undefined = apiKey): Promise<Object | Profile | error> {
    return await fetchJSON('https://api.i-tech.id/tools/profile?key='+apiKeys)
}

export * from './api'