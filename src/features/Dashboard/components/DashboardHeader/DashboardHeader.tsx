import { AdFilter } from '../AdFilter';

export function DashboardHeader() {
    return (
        <header className="sticky top-0 before:absolute before:-z-10 z-30 max-lg:shadow-xs bg-gray-100/90 border-b border-gray-300 shadow-md">
            <div className="px-4 sm:px-6 lg:px-8 sm:flex sm:justify-between sm:items-center mb-4">
                <div className="mb-4 sm:mb-0">
                    <h1 className="pt-4 text-2xl md:text-3xl text-gray-800 font-bold">Ad Performance Dashboard</h1>
                </div>
                <AdFilter />
            </div>
        </header>
    );
}
