import React from 'react';
import { debounce } from '../../utils';
import { SearchIcon } from '../icons';
import { useSearchParams } from 'react-router-dom';

export interface SearchInputProps extends React.ComponentPropsWithoutRef<'input'> {
    setSearchQuery: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setSearchQuery, ...props }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateQueryParams = (key: string, value: string) => {
        searchParams.set(key, value);
        setSearchParams(searchParams);
    }

    const handleSearchChange = debounce((e: { target: { value: string; }; }) => {
        updateQueryParams('query', e.target.value);
        setSearchQuery(e.target.value);
    }, 500);

    return (
        <div className="relative grow">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
            </div>
            <input
                name='search-input'
                {...props}
                className="block w-full size-12 p-2 ps-10 text-sm border-2 border-gray-400 outline-0"
                placeholder="Product title..."
                onChange={handleSearchChange}
            />
        </div>
    );
}
