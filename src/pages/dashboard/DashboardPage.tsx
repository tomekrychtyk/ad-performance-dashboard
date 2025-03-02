import { useState } from 'react';
import { Dashboard } from '@/features/Dashboard';
import { DashboardHeader } from '@/features/Dashboard/components/DashboardHeader';
import { DashboardContext } from './DashboardContext';

export function DashboardPage() {
    const [currentFilter, setCurrentFilter] = useState('all');

    return (
        <DashboardContext value={{ currentFilter, setCurrentFilter }}>
            <DashboardHeader />
            <Dashboard />
        </DashboardContext>
    );
}
