import { useSelect } from './useSelect';

export function SelectWrapper({ children, trigger }: { children: React.ReactNode; trigger: React.ReactNode }) {
    const { isOpen, setIsOpen, selectedValue, selectedValueDisplay } = useSelect();

    return (
        <div
            className="absolute bg-white border border-gray-300 rounded-md p-2 absolute left-0 w-full"
            onClick={() => setIsOpen(!isOpen)}
        >
            {selectedValue ? <div className="cursor-pointer">{selectedValueDisplay}</div> : trigger}
            <div style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
        </div>
    );
}
