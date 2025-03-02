import { getStats } from '@/utils/ads';
import { Ad } from '@/utils/api';
import { AdList } from './components';
import { Stats } from './components';
import { useDashboard } from './hooks';
import { FilterType } from './types';

export const Dashboard = () => {
    const { ads, currentFilter } = useDashboard();
    let filteredAds: Array<Ad> = ads;

    if (currentFilter !== FilterType.All) {
        filteredAds = ads.filter((ad) => ad.type === currentFilter);
    }

    const stats = getStats(filteredAds);

    return (
        <div className="grow lg:px-36 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Stats stats={stats} />
            <AdList ads={filteredAds} />
        </div>
    );
};
