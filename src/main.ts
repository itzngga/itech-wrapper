import {fetchJSON} from './util';
import { Profile } from '../dist/types';
export let apiKey: string | undefined = ''
export let profile: Profile | any = {}

export class key {
    constructor(apiKeys: string | undefined) {
        apiKey = apiKeys
        profile = setInterval(() => {
            fetchJSON('https://api.i-tech.id/tools/profile?key='+apiKey).then(({data}) => {
                if(data.code === 404) throw new Error(data.pesan)
                else {
                    clearInterval(profile);
                    profile = data
                }
            })
        });
        
    }
}
