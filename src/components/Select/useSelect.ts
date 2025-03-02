import { use } from 'react';
import { SelectContext } from './SelectContext';

export const useSelect = () => {
    const context = use(SelectContext);

    if (!context) {
        throw new Error('No Select context found');
    }

    return context;
};
