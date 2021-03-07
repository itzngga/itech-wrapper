import { apiKey } from '../';

export const downloader = {
    facebookScraper: (link: string): string => `https://api.i-tech.id/dl/fb?key=${apiKey}&link=${link}`,
    youtubeScraper: (link: string): string => `https://api.i-tech.id/dl/yt?key=${apiKey}&link=${link}`,
    pinterestScraper: (link: string): string => `https://api.i-tech.id/dl/pin?key=${apiKey}&link=${link}`,
    instagramScraper: (link: string): string => `https://api.i-tech.id/dl/igdl?key=${apiKey}&link=${link}`
}