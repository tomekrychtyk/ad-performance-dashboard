import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Layout } from '@/components/Layout';
import { GenericError } from './components/GenericError';
import { Spinner } from './components/Spinner';
import { DashboardPage } from './pages/dashboard';

function App() {
    return (
        <Layout>
            <ErrorBoundary fallback={<GenericError />}>
                <Suspense fallback={<Spinner />}>
                    <DashboardPage />
                </Suspense>
            </ErrorBoundary>
        </Layout>
    );
}

export default App;
