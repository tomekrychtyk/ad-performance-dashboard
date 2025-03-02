import { Card } from '@/components/Card';
import { formatNumber } from '@/utils/ads';

interface StatsProps {
    stats: {
        clicks: number;
        impressions: number;
        ctr: number;
    };
}

export const Stats = ({ stats }: StatsProps) => {
    const { clicks, impressions, ctr } = stats;

    return (
        <section className="grid grid-cols-12 gap-6">
            <Card title="Total Impressions" value={formatNumber(impressions)} />
            <Card title="Total Clicks" value={formatNumber(clicks)} />
            <Card title="Average CTR" value={`${ctr}%`} />
        </section>
    );
};
