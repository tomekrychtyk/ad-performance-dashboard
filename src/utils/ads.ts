import { Ad } from './api';

export function getStats(ads: Array<Ad>) {
    const impressions = ads.reduce((acc, ad) => acc + ad.impressions, 0);
    const clicks = ads.reduce((acc, ad) => acc + ad.clicks, 0);
    const ctr = impressions > 0 ? Number(((clicks / impressions) * 100).toFixed(2)) : 0;

    return { impressions, clicks, ctr };
}

export function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
