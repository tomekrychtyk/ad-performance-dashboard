import { use, useState } from 'react';
import { Dashboard } from '@/features/Dashboard';
import { DashboardHeader } from '@/features/Dashboard/components/DashboardHeader';
import { getAds } from '@/utils/api';
import { DashboardContext } from './DashboardContext';

const adsPromise = getAds();

export function DashboardPage() {
    const ads = use(adsPromise);
    const [currentFilter, setCurrentFilter] = useState('all');

    return (
        <DashboardContext value={{ ads, currentFilter, setCurrentFilter }}>
            <DashboardHeader />
            <Dashboard />
        </DashboardContext>
    );
}
