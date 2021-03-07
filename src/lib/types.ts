import AxiosResponse from 'axios';
interface succes {
    code: number,
    status: string
}
export interface error {
    code: number,
    status: string,
    pesan: string
}
// facebookScraper
export interface facebookScraper extends succes{
    title: string,
    desc: string,
    thumbnail: string,
    result: Array<
        {
            resolution: string,
            format: string,
            type: string,
            url: string,
            size: string
        }
    >
}
// youtubeScraper
export interface youtubeScraper extends succes {
    title: string,
    desc: string,
    url_video: string,
    url_audio: string,
    thumbnail: string,
    second: number,
    duration: string,
    size: string
}
// pinterestScraper
export interface pinterestScraper extends succes {
    thumbnail: string,
    link: Array<{
        ext: string,
        resolution: string,
        url: string,
        size: string
    }>
}
// instagramScraper
export interface instagramScraper extends succes {
    username: string,
    caption: string,
    likes: number,
    comments: number,
    result: {
        thumbnail: string,
        url: string,
        size: string,
        uploaded_at: string
    }
}