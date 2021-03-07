import {fetchJSON} from './util';
import { Profile } from './types';
import { api } from './lib/api';
export let apiKey: string | undefined = ''
export let profile: Profile | any = {}

export function key (apiKeys: string | undefined) {
    apiKey = apiKeys
    fetchJSON('https://api.i-tech.id/tools/profile?key='+apiKey).then(({data}) => {
        console.log(data);
        if(data.code === 404) throw new Error(data.pesan)
        else {
            clearInterval(profile);
            profile = data
        }
    })
    return api
}

export * from './lib/api'