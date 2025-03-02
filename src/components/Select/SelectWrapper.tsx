import { useEffect, useRef } from 'react';
import { useSelect } from './useSelect';

export function SelectWrapper({ children, trigger }: { children: React.ReactNode; trigger: React.ReactNode }) {
    const menu = useRef<HTMLDivElement>(null);
    const { isOpen, setIsOpen, selectedValue, selectedValueDisplay } = useSelect();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menu.current && !menu.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menu, setIsOpen]);

    return (
        <div
            ref={menu}
            className="absolute bg-white border border-gray-300 rounded-md p-2 absolute left-0 w-full"
            onClick={() => setIsOpen(!isOpen)}
        >
            {selectedValue ? <div className="cursor-pointer">{selectedValueDisplay}</div> : trigger}
            <div style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
        </div>
    );
}
