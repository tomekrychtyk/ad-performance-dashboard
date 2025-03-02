import { createContext } from 'react';
import { Ad } from '@/utils/api';

export type DashboardValue = {
    ads: Array<Ad>;
    currentFilter: string;
    setCurrentFilter: (filter: string) => void;
};
export const DashboardContext = createContext<DashboardValue | null>(null);
