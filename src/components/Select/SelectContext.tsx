import { createContext } from 'react';

type SelectValue = {
    selectedValue: string;
    selectedValueDisplay: React.ReactNode;
    isOpen: boolean;
    onChange: (value: string) => void;
    setIsOpen: (isOpen: boolean) => void;
    setSelectedValueDisplay: (node: React.ReactNode) => void;
};

export const SelectContext = createContext<SelectValue | null>(null);
