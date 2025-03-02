import { use } from 'react';
import { DashboardContext } from '@/pages/dashboard/DashboardContext';

export const useDashboard = () => {
    const context = use(DashboardContext);
    if (!context) {
        throw new Error('useDashboard must be used within a <Dashboard /> component');
    }
    return context;
};
