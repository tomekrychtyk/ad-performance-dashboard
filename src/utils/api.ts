export type Ad = {
    id: number;
    type: 'image' | 'video' | 'text';
    impressions: number;
    clicks: number;
    ctr: number;
    url?: string;
    headline?: string;
    description?: string;
};

const API_URL = import.meta.env.VITE_API_URL as string;

const adsCache = new Map<string, Promise<Array<Ad>>>();

export function getAds() {
    const adsPromise = adsCache.get('ads') ?? getAdsImpl();
    adsCache.set('ads', adsPromise);
    return adsPromise;
}

export async function getAdsImpl() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        return Promise.reject(new Error(await response.text()));
    }
    const ads = await response.json();
    return ads as Array<Ad>;
}
