import { AllAdsIcon, ImageIcon, TextIcon, VideoIcon } from '@/components/Icons';
import { Option, Select, SelectWrapper } from '@/components/Select';
import { useDashboard } from '../../hooks';
import { FilterType } from '../../types';

export const AdFilter = () => {
    const { setCurrentFilter } = useDashboard();
    return (
        <div className="relative xs:w-full sm:w-1/2 lg:w-[200px] h-8">
            <Select onChange={(value) => setCurrentFilter(value)}>
                <SelectWrapper
                    trigger={
                        <div className="flex items-center gap-2 cursor-pointer">
                            <AllAdsIcon />
                            All Ads
                        </div>
                    }
                >
                    <div className="pt-6">
                        <div className="pb-2">
                            <Option value={FilterType.All}>
                                <div className="flex items-center gap-2">
                                    <AllAdsIcon />
                                    All Ads
                                </div>
                            </Option>
                        </div>
                        <div className="pb-2">
                            <Option value={FilterType.Text}>
                                <div className="flex items-center gap-2">
                                    <TextIcon />
                                    Text
                                </div>
                            </Option>
                        </div>
                        <div className="pb-2">
                            <Option value={FilterType.Image}>
                                <div className="flex items-center gap-2">
                                    <ImageIcon />
                                    Image
                                </div>
                            </Option>
                        </div>
                        <div className="pb-2">
                            <Option value={FilterType.Video}>
                                <div className="flex items-center gap-2">
                                    <VideoIcon />
                                    Video
                                </div>
                            </Option>
                        </div>
                    </div>
                </SelectWrapper>
            </Select>
        </div>
    );
};
