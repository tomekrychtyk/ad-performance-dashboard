import { createContext } from 'react';

export type DashboardValue = {
    currentFilter: string;
    setCurrentFilter: (filter: string) => void;
};
export const DashboardContext = createContext<DashboardValue | null>(null);
