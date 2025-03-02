import { useState } from 'react';
import { SelectContext } from './SelectContext';

export function Select({ children, onChange }: { children: React.ReactNode; onChange: (value: string) => void }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueDisplay, setSelectedValueDisplay] = useState<React.ReactNode>(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = (value: string) => {
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <SelectContext
            value={{
                selectedValue,
                onChange: handleChange,
                isOpen,
                setIsOpen,
                selectedValueDisplay,
                setSelectedValueDisplay,
            }}
        >
            {children}{' '}
        </SelectContext>
    );
}
