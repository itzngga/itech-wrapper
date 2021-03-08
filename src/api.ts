import {url} from './url'
import {fetchJSON} from './util'

export class api {
    static async facebookScraper(link: string): Promise<any>{
        const result = await fetchJSON(url.facebookScraper(link))
        return result.data
    }
    static async youtubeScraper(link: string): Promise<any>{
        const result = await fetchJSON(url.youtubeScraper(link))
        return result.data
    }
    static async pinterestScraper(link: string): Promise<any>{
        const result = await fetchJSON(url.pinterestScraper(link))
        return result.data
    }
    static async instagramScraper(link: string): Promise<any>{
        const result = await fetchJSON(url.instagramScraper(link))
        return result.data
    }
    static async randomQuotesAnime(): Promise<any>{
        const result = await fetchJSON(url.randomQuotesAnime())
        return result.data
    }
    static async randomWibu(): Promise<any>{
        const result = await fetchJSON(url.randomWibu())
        return result.data
    }
    static async randomNekonime(): Promise<any>{
        const result = await fetchJSON(url.randomNekonime())
        return result.data
    }
    static async randomNekonime2(): Promise<any>{
        const result = await fetchJSON(url.randomNekonime2())
        return result.data
    }
    static async randomAnime(): Promise<any>{
        const result = await fetchJSON(url.randomAnime())
        return result.data
    }
    static async randomAnime2(): Promise<any>{
        const result = await fetchJSON(url.randomAnime2())
        return result.data
    }
    static async randomAnimeHentai(): Promise<any>{
        const result = await fetchJSON(url.randomAnimeHentai())
        return result.data
    }
    static async randomAnimeYuri(): Promise<any>{
        const result = await fetchJSON(url.randomAnimeYuri())
        return result.data
    }
    static async randomAnimeTrap(): Promise<any>{
        const result = await fetchJSON(url.randomAnimeTrap())
        return result.data
    }
    static async randomAnimeDVA(): Promise<any>{
        const result = await fetchJSON(url.randomAnimeDVA())
        return result.data
    }
    static async randomAnimeHug(): Promise<any>{
        const result = await fetchJSON(url.randomAnimeHug())
        return result.data
    }
    static async randomAnimeNsfwNeko(): Promise<any>{
        const result = await fetchJSON(url.randomAnimeNsfwNeko())
        return result.data
    }
    static async randomAnimeBaguette(): Promise<any>{
        const result = await fetchJSON(url.randomAnimeBaguette())
        return result.data
    }
    static async jurnalOtaku(type: string, query: string): Promise<any>{
        const result = await fetchJSON(url.jurnalOtaku(type, query))
        return result.data
    }
    static async dewaBatchScraper(query: string): Promise<any>{
        const result = await fetchJSON(url.dewaBatchScraper(query))
        return result.data
    }
    static async kusonimeScraper(query: string): Promise<any>{
        const result = await fetchJSON(url.kusonimeScraper(query))
        return result.data
    }
}