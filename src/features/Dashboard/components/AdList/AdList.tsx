import { Ad } from '@/utils/api';
import { AdRenderer } from '../AdRenderer';

interface AdListProps {
    ads: Array<Ad>;
}

export const AdList = ({ ads }: AdListProps) => {
    return (
        <section className="grid grid-cols-12 gap-6 mt-8">
            {ads.map((ad) => (
                <div key={ad.id} className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 rounded-xl">
                    <AdRenderer ad={ad} />
                </div>
            ))}
        </section>
    );
};
