import React from 'react';
import { OrderSelect, SearchInput, SortSelect } from '..';
import { OrderSelectProps } from '../OrderSelect/OrderSelect';
import { SortSelectProps } from '../SortSelect/SortSelect';
import { CheckBox } from '../CheckBox/CheckBox';
import { Logo } from '../icons';

export interface HeaderProps extends OrderSelectProps, SortSelectProps {
    search(value: string): void;
    setPortfolioFilter(checked: boolean): void;
}

export const Header: React.FC<HeaderProps> = ({ search, setSort, setOrder, setPortfolioFilter }) => {

    return (
        <>
            <div className='flex justify-center mb-6'>
                <Logo />
            </div>
            {/* Desktop version */}
            <div className="hidden md:flex justify-center gap-4 py-4">
                <SearchInput setSearchQuery={search} />
                <SortSelect setSort={setSort} />
                <OrderSelect setOrder={setOrder} />
                <CheckBox label={'PORTFOLIO'} onChange={setPortfolioFilter} />
            </div>
            {/* Mobile version */}
            <div className="md:hidden flex flex-col gap-4 bg-default-bg py-4 sticky top-0 z-50">
                <SearchInput setSearchQuery={search} />
                <div className='flex w-full gap-2'>
                    <SortSelect className="w-full" setSort={setSort} />
                    <OrderSelect className="w-full" setOrder={setOrder} />
                    <CheckBox label={'PORTFOLIO'} onChange={setPortfolioFilter} />
                </div>
            </div>
        </>
    );
}
