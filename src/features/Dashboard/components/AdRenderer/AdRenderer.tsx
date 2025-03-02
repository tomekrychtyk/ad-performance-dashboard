import { formatNumber } from '@/utils/ads';
import { Ad } from '@/utils/api';

interface AdRendererProps {
    ad: Ad;
}

export const AdRenderer = ({ ad }: AdRendererProps) => {
    const renderImage = (url: string, headLine: string) => {
        return <img src={url} alt={headLine} className="h-48 w-full object-cover" />;
    };

    const renderVideo = (url: string) => {
        return (
            <video className="h-48 w-full object-cover" controls>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    };

    const renderText = (headLine: string, description: string) => {
        return (
            <div className="p-4 pr-[40px]">
                <h2 className="text-lg font-semibold text-gray-800">{headLine}</h2>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        );
    };

    const renderAdLabel = (type: string) => {
        return <div className="absolute top-0 right-0 bg-gray-200 text-gray-900 text-xs p-1 rounded-bl-lg">{type}</div>;
    };

    return (
        <article className="flex flex-col h-[250px] bg-white rounded-xl overflow-hidden relative shadow-sm">
            {ad.type === 'image' && renderImage(ad.url ?? '', ad.headline ?? 'image ad')}
            {ad.type === 'video' && renderVideo(ad.url ?? '')}
            {ad.type === 'text' && renderText(ad.headline ?? '', ad.description ?? '')}
            {renderAdLabel(ad.type)}
            <footer className="bg-gray-100 p-4 flex justify-between items-center absolute bottom-0 w-full border-t border border-gray-300">
                <div className="text-xs text-gray-500">
                    <div className="font-bold">Impressions</div>
                    <div>{formatNumber(ad.impressions)}</div>
                </div>
                <div className="text-xs text-gray-500">
                    <div className="font-bold">Clicks</div>
                    <div>{formatNumber(ad.clicks)}</div>
                </div>
                <div className="text-xs text-gray-500">
                    <div className="font-bold">CTR</div>
                    <div>{`${ad.ctr}%`}</div>
                </div>
            </footer>
        </article>
    );
};
