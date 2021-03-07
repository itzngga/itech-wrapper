import * as db from '../db'
import * as types from './types'
import {fetchJSON} from '../util'

export class api {
    static async facebookScraper(link: string): Promise<types.facebookScraper>{
        const result = await fetchJSON(db.downloader.facebookScraper(link))
        return result.data
    }
    static async youtubeScraper(link: string): Promise<types.youtubeScraper>{
        const result = await fetchJSON(db.downloader.youtubeScraper(link))
        return result.data
    }
    static async pinterestScraper(link: string): Promise<types.pinterestScraper>{
        const result = await fetchJSON(db.downloader.pinterestScraper(link))
        return result.data
    }
    static async instagramScraper(link: string): Promise<types.instagramScraper>{
        const result = await fetchJSON(db.downloader.instagramScraper(link))
        return result.data
    }
}