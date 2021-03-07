import {fetchJSON} from './util';
import { Profile } from './types';
import { api } from './api';
export let apiKey: string | undefined = ''
export let profile: Profile | any = {}

export function key (apiKeys: string | undefined) {
    apiKey = apiKeys
    fetchJSON('https://api.i-tech.id/tools/profile?key='+apiKey).then(({data}) => {
        if(data.code === 404) throw new Error(data.pesan)
        profile = data
        return api
    })
    return api
}

export * from './api'