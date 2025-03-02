import { cx } from '@/utils/cx';
import { useSelect } from './useSelect';

export function Option({ children, value }: { children: React.ReactNode; value: string }) {
    const { onChange, setSelectedValueDisplay, selectedValue } = useSelect();

    const handleOptionSelect = () => {
        onChange(value);
        setSelectedValueDisplay(children);
    };

    return (
        <div
            onClick={handleOptionSelect}
            className={cx(
                selectedValue && selectedValue === value ? 'bg-gray-200' : 'hover:bg-gray-100',
                'cursor-pointer',
            )}
        >
            {children}
        </div>
    );
}
