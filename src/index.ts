import { fetchJSON, roleCheck } from './util';
import { Profile, error, roleError, apiResult } from './constant';
export let apiKey: string | undefined = ''
export let profile: Profile | any = {}

export function key (apiKeys: string | undefined) {
    apiKey = apiKeys
    fetchJSON('https://api.i-tech.id/tools/profile?key='+apiKey).then(data => {
        profile = data
        return Api
    })
    return Api
}
export async function getProfile(apiKeys: string | undefined = apiKey): Promise<Object | Profile | error> {
    return await fetchJSON('https://api.i-tech.id/tools/profile?key='+apiKeys)
}

export class Api {
    // FREE - DOWNLOADER
    static async facebookScraper (link: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/dl/fb?key=${apiKey}&link=${link}`)
    }
    static async youtubeScraper (link: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/dl/yt?key=${apiKey}&link=${link}`)
    }
    static async pinterestScraper (link: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/dl/pin?key=${apiKey}&link=${link}`)
    }
    static async instagramScraper (link: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/dl/igdl?key=${apiKey}&link=${link}`)
    }
    // FREE - ANIME
    static async randomQuotesAnime (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/quotes?key=${apiKey}`)
    }
    static async randomWibu (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/wibu?key=${apiKey}`)
    }
    static async randomNekonime (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/nime?key=${apiKey}`)
    }
    static async randomNekonime2 (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/nime2?key=${apiKey}`)
    }
    static async randomAnime (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/anime?key=${apiKey}`)
    }
    static async randomAnime2 (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/anime2?key=${apiKey}`)
    }
    static async randomAnimeHentai (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/hentai?key=${apiKey}`)
    }
    static async randomAnimeYuri (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/yuri?key=${apiKey}`)
    }
    static async randomAnimeDVA (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/dva?key=${apiKey}`)
    }
    static async randomAnimeTrap (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/trap?key=${apiKey}`)
    }
    static async randomAnimeHug (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/hug?key=${apiKey}`)
    }
    static async randomAnimeNsfwNeko (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/nsfwneko?key=${apiKey}`)
    }
    static async randomAnimeBaguette (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/baguette?key=${apiKey}`)
    }
    static async jurnalOtaku (type: string, query: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/otaku?key=${apiKey}&type=${type}&query=${query}`)
    }
    static async dewaBatchScraper (query: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/dewabatch?key=${apiKey}&query=${query}`)
    }
    static async kusonimeScraper (query: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/anim/kusonime?key=${apiKey}&query=${query}`)
    }
    // FREE - ENCRYPT
    static async encryptBcrypt (string: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/hash/bcrypt?key=${apiKey}&string=${string}`)
    }
    static async encryptSHA (type:string, string: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/hash/sha?key=${apiKey}&type=${type}&string=${string}`)
    }
    static async encryptBase32 (type:string, string: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/hash/bs32?key=${apiKey}&type=${type}&string=${string}`)
    }
    static async encryptBase64 (type:string, string: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/hash/bs64?key=${apiKey}&type=${type}&string=${string}`)
    }
    // FREE - TOOLS
    static async toolsJamDunia (kota: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/jam?key=${apiKey}&kota=${kota}`)
    }
    static async toolsChordGuitar (query: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/chord?key=${apiKey}&query=${query}`)
    }
    static async toolsCuacaDunia (kota: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/cuaca?key=${apiKey}&kota=${kota}`)
    }
    static async toolsArtiNama (nama: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/arti?key=${apiKey}&nama=${nama}`)
    }
    static async toolsKataAlay (kata: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/alay?key=${apiKey}&kata=${kata}`)
    }
    static async toolsKataHilih (kata: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/hilih?key=${apiKey}&kata=${kata}`)
    }
    static async toolsKataNinja (kata: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/ninja?key=${apiKey}&kata=${kata}`)
    }
    static async toolsRandomQuotes1 (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/quotes?key=${apiKey}`)
    }
    static async toolsRandomQuotes2 (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/quotes2?key=${apiKey}`)
    }
    static async toolsRandomQuotes3 (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/quotes3?key=${apiKey}`)
    }
    static async toolsRandomNama (gender: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/nama?key=${apiKey}&gender=${gender}`)
    }
    static async toolsSearchLirik (query: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/lirik?key=${apiKey}&query=${query}`)
    }
    static async toolsJadwalSholat (kota: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/sholat?key=${apiKey}&kota=${kota}`)
    }
    static async toolsGempaTerkini (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/bmkg?key=${apiKey}`)
    }
    static async toolsUrlShortener (link: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/shorturl?key=${apiKey}&link=${link}`)
    }
    static async toolsScreenshotWebsite (link: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/ssweb?key=${apiKey}&link=${link}`)
    }
    static async toolsAnimalFacts (animal: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/fact?key=${apiKey}&animal=${animal}`)
    }
    static async toolsRandomAsu (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/asu?key=${apiKey}`)
    }
    static async toolsRandomRubah (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/foxes?key=${apiKey}`)
    }
    static async toolsRandomKambing (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/goat?key=${apiKey}`)
    }
    static async toolsRandomKucing (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/cat?key=${apiKey}`)
    }
    static async toolsRandomAnjing (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/dog?key=${apiKey}`)
    }
    static async toolsQrCodeMaker (query: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/qr?key=${apiKey}&query=${query}`)
    }
    static async toolsFaktaUnik (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/fakta?key=${apiKey}`)
    }
    static async toolsPantunPakboy (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/pantun?key=${apiKey}`)
    }
    static async toolsKbbiScraper (query: string): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/kbbi?key=${apiKey}&query=${query}`)
    }
    static async toolsRandomPanda (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/panda?key=${apiKey}`)
    }
    static async toolsRandomPandaMerah (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/pandar?key=${apiKey}`)
    }
    static async toolsRandomGambarBurung (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/bird?key=${apiKey}`)
    }
    static async toolsRandomGambarTupai (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/fox?key=${apiKey}`)
    }
    static async toolsRandomGambarKoala (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/koala?key=${apiKey}`)
    }
    static async toolsRandomGifWink (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/wink?key=${apiKey}`)
    }
    static async toolsRandomGifPat (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/pat?key=${apiKey}`)
    }
    static async toolsRandomGifHug (): Promise<apiResult> {
        return fetchJSON(`https://api.i-tech.id/tools/hug?key=${apiKey}`)
    }
    // PREMIUM - DOWNLOADER
    static async premiumTiktokScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/tiktok?key=${apiKey}&link=${link}`)
    }
    static async premiumTiktokStalker (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/tiktoks?key=${apiKey}&query=${query}`)
    }
    static async premiumYoutubeSearch (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/yts?key=${apiKey}&query=${query}`)
    }
    static async premiumInstagramStalker (username: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/stalk?key=${apiKey}&username=${username}`)
    }
    static async premiumSmuleScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/smule?key=${apiKey}&link=${link}`)
    }
    static async premiumSmuleStalker (username: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/smules?key=${apiKey}&username=${username}`)
    }
    static async premiumTimelineScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/timeline?key=${apiKey}&link=${link}`)
    }
    static async premiumTwitterVideoScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/twitter?key=${apiKey}&link=${link}`)
    }
    static async premiumYoutubePlayMusic (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/ytplay?key=${apiKey}&query=${query}`)
    }
    static async premiumMediafireScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/mediafire?key=${apiKey}&link=${link}`)
    }
    static async premiumCocofunVideoScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/cocofun?key=${apiKey}&link=${link}`)
    }
    static async premiumSnackVideoScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/snackdl?key=${apiKey}&link=${link}`)
    }
    static async premiumPlayStoreDownloader (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/psdl?key=${apiKey}&link=${link}`)
    }
    static async premiumUpToDownScraper (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/utdl?key=${apiKey}&query=${query}`)
    }
    static async premiumApkPureScraper (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/dl/apkpure?key=${apiKey}&query=${query}`)
    }
    // PREMIUM - TOOLS
    static async premiumBrainly (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/brainly?key=${apiKey}&query=${query}`)
    }
    static async premiumRamalanJodoh (p1: string, p2: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/jodoh?key=${apiKey}&p1=${p1}&p2=${p2}`)
    }
    static async premiumQuotesMaker (type: string, author: string, kata: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/qtm?key=${apiKey}&type=${type}&author=${author}&text=${kata}`)
    }
    static async premiumTextToSpeech (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/tts?key=${apiKey}&query=${query}`)
    }
    static async premiumWikipediaScraper (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/wiki?key=${apiKey}&query=${query}`)
    }
    static async premiumJadwalTv (list: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/jadwaltv?key=${apiKey}&list=${list}`)
    }
    static async premiumCekJodoh (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/cekjodoh?key=${apiKey}&query=${query}`)
    }
    static async premiumGoogleTranslate (lang: string, teks: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/gambar?key=${apiKey}&lang=${lang}&teks=${teks}`)
    }
    static async premiumHartaTahta (kata: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/harta?key=${apiKey}&kata=${kata}`)
    }
    static async premiumPUBGMaker (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/pubg?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async premiumAvengerMaker (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/avenger?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async premiumHahaMaker (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/haha?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async premiumMarvelMaker1 (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/marvel?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async premiumMarvelrMaker2 (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/marvel2?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async premiumSuitGames (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/suit?key=${apiKey}&query=${query}`)
    }
    static async premiumSarangheoGenerator (teks: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/sh?key=${apiKey}&teks=${teks}`)
    }
    static async premiumGoogleScreenshot (teks1: string, teks2: string, teks3: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/gs?key=${apiKey}&teks1=${teks1}&teks2=${teks2}&teks3=${teks3}`)
    }
    static async premiumFaceIdentify (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/fm?key=${apiKey}&link=${link}`)
    }
    static async premiumRainbowMaker (url: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/rainbow?key=${apiKey}&url=${url}`)
    }
    static async premiumGlassMaker (url: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/glass?key=${apiKey}&url=${url}`)
    }
    static async premiumWastedMaker (url: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/wasted?key=${apiKey}&url=${url}`)
    }
    static async premiumTriggeredMaker (url: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/triggered?key=${apiKey}&url=${url}`)
    }
    static async premiumYoutubeCommand (nama: string, komen: string, url: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/ytc?key=${apiKey}&nama=${nama}&komen=${komen}&url=${url}`)
    }
    static async premiumRemoveBg2 (url: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/nobg2?key=${apiKey}&url=${url}`)
    }
    static async premiumJadwalTv2 (channel: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/jadwaltv2?key=${apiKey}&channel=${channel}`)
    }
    static async premiumRandomMemeGenerator (): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/meme?key=${apiKey}`)
    }
    static async premiumCekHalalMui (query: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/mui?key=${apiKey}&query=${query}`)
    }
    static async premiumPageTranslator (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/ptrans?key=${apiKey}&link=${link}`)
    }
    static async premiumPhotomathScraper (link: string): Promise<apiResult> {
        if(roleCheck('premium')) return roleError('Premium')
        return fetchJSON(`https://api.i-tech.id/tools/photomath?key=${apiKey}&link=${link}`)
    }
    // VIP - DOWNLOADER
    static async vipInstagramStory (username: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/story?key=${apiKey}&username=${username}`)
    }
    static async vipInstagramHighlight (username: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/highlight?key=${apiKey}&username=${username}`)
    }
    static async vipInstagramTv (username: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/igtv?key=${apiKey}&username=${username}`)
    }
    static async vipInstagramHashtag (query: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/story?key=${apiKey}&query=${query}`)
    }
    static async vipGoogleSearch (query: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/googles?key=${apiKey}&query=${query}`)
    }
    static async vipPlayStore (query: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/ps?key=${apiKey}&query=${query}`)
    }
    static async vipJooxScraper (query: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/joox?key=${apiKey}&query=${query}`)
    }
    static async vipSpotifyScraper (query: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/spotify?key=${apiKey}&query=${query}`)
    }
    static async vipPornhubScraper (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/pornhub?key=${apiKey}&link=${link}`)
    }
    static async vipPornhubStalker (username: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/dl/phs?key=${apiKey}&username=${username}`)
    }
    // VIP - TOOLS
    static async vipCekResi (kurir: string, resi: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/resi?key=${apiKey}&kurir=${kurir}&resi=${resi}`)
    }
    static async vipTulisDiBuku (text: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/nulis?key=${apiKey}&text=${text}`)
    }
    static async vipGenerateCoolText (text: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/cool?key=${apiKey}&text=${text}`)
    }
    static async vipPrediksiUmur (nama: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/umur?key=${apiKey}&nama=${nama}`)
    }
    static async vipMacAddresLookup (mac: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/mac?key=${apiKey}&mac=${mac}`)
    }
    static async vipCekZodiak (nama: string, tgl: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/zodiak?key=${apiKey}&nama=${nama}&tgl=${tgl}`)
    }
    static async vipAlQuran (surat: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/quran?key=${apiKey}&surat=${surat}`)
    }
    static async vipSimiSimi (lang: string, kata: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/simi?key=${apiKey}&lang=${lang}&kata=${kata}`)
    }
    static async vipRemoveBg (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/nobg?key=${apiKey}&link=${link}`)
    }
    static async vipHartaTahtaCostume (teks1: string, teks2: string, teks3: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/harta?key=${apiKey}&teks1=${teks1}&teks2=${teks2}&teks3=${teks3}`)
    }
    static async vipWhatsappSender (nomor: string, teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/otp?key=${apiKey}&nomor=${nomor}&teks=${teks}`)
    }
    static async vipTattoHand (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/hand?key=${apiKey}&teks=${teks}`)
    }
    static async vipBlurMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/blur?key=${apiKey}&teks=${teks}`)
    }
    static async vipAlbertEinsteinMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/ae?key=${apiKey}&teks=${teks}`)
    }
    static async vipBlackPinkMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/blackpink?key=${apiKey}&teks=${teks}`)
    }
    static async vipThunderMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/thunder?key=${apiKey}&teks=${teks}`)
    }
    static async vipMapScreenshot (query: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/maps?key=${apiKey}&query=${query}`)
    }
    static async vip3dAudioBooster (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/3d?key=${apiKey}&link=${link}`)
    }
    static async vipDotaMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/dota?key=${apiKey}&teks=${teks}`)
    }
    static async vipAvatarMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/avatar?key=${apiKey}&teks=${teks}`)
    }
    static async vipPokemonMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/pokemon?key=${apiKey}&teks=${teks}`)
    }
    static async vipWarfaceMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/warface?key=${apiKey}&teks=${teks}`)
    }
    static async vipCSGOMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/csgo?key=${apiKey}&teks=${teks}`)
    }
    static async vipCrossFireMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/crossfire?key=${apiKey}&teks=${teks}`)
    }
    static async vipBattlefieldMaker (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/battlefield?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async vipToiletMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/toilet?key=${apiKey}&link=${link}`)
    }
    static async vipFrameMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/frame?key=${apiKey}&link=${link}`)
    }
    static async vipVersusMaker (link1: string, link2: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/versus?key=${apiKey}&link1=${link1}&link2=${link2}`)
    }
    static async vipFacebookMaker (link: string, teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/fb?key=${apiKey}&link=${link}&teks=${teks}`)
    }
    static async vipMirorMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/miror?key=${apiKey}&link=${link}`)
    }
    static async vipDrawMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/draw?key=${apiKey}&link=${link}`)
    }
    static async vipSketchMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/sketch?key=${apiKey}&link=${link}`)
    }
    static async vipHujanMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/hujan?key=${apiKey}&link=${link}`)
    }
    static async vipLinesMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/lines?key=${apiKey}&link=${link}`)
    }
    static async vipGlitchMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/glitch?key=${apiKey}&link=${link}`)
    }
    static async vipPokemonBallMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/pokebal?key=${apiKey}&link=${link}`)
    }
    static async vipPuzzleVideoMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/puzzle?key=${apiKey}&link=${link}`)
    }
    static async vipFlamingTextMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/flaming?key=${apiKey}&teks=${teks}`)
    }
    static async vipMetalicTextMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/metalic?key=${apiKey}&teks=${teks}`)
    }
    static async vipCoffeeTextMaker (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/coffee?key=${apiKey}&teks=${teks}`)
    }
    static async vipTiktokMaker (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/tiktok?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async vipGTASACoverMaker (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/gta?key=${apiKey}&link=${link}`)
    }
    static async vipWantedCoverMaker (teks1: string, teks2: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/wanted?key=${apiKey}&teks1=${teks1}&teks2=${teks2}`)
    }
    static async vipFireMaker1 (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/fire?key=${apiKey}&link=${link}`)
    }
    static async vipFireMaker2 (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/fire2?key=${apiKey}&link=${link}`)
    }
    static async vipFireMaker3 (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/fire3?key=${apiKey}&link=${link}`)
    }
    static async vipLolCoverMaker1 (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/lol?key=${apiKey}&teks=${teks}`)
    }
    static async vipLolCoverMaker2 (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/lol2?key=${apiKey}&teks=${teks}`)
    }
    static async vipPhoneMaker1 (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/phone?key=${apiKey}&link=${link}`)
    }
    static async vipPhoneMaker2 (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/phone2?key=${apiKey}&link=${link}`)
    }
    static async vipHBDCoverMaker1 (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/hbd?key=${apiKey}&link=${link}`)
    }
    static async vipHBDCoverMaker2 (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/hbd2?key=${apiKey}&link=${link}`)
    }
    static async vipLoveMaker1 (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/love?key=${apiKey}&teks=${teks}`)
    }
    static async vipLoveMaker2 (teks: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/love2?key=${apiKey}&teks=${teks}`)
    }
    static async vip8dAudioBooster (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/8d?key=${apiKey}&link=${link}`)
    }
    static async vipSpeechToText (link: string): Promise<apiResult> {
        if(roleCheck('Vip')) return roleError('Vip')
        return fetchJSON(`https://api.i-tech.id/tools/stt?key=${apiKey}&link=${link}`)
    }
}