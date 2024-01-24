import React from 'react';
import { SearchExclamationIcon } from '../icons';
import { Card, HubDisplayable } from '../Card/Card';
import { observer } from 'mobx-react';

export interface ListProps {
    data?: Array<HubDisplayable>;
    loading: boolean;
    error: boolean;
}
export const List: React.FC<ListProps> = observer(({ data, loading, error }) => {
    if (loading && !data) {
        return (
            <div className="flex flex-col justify-center items-center my-16">
                <p>Loading..</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center my-16 p-4">
                <SearchExclamationIcon />
                <p className="font-bold">Something went wrong</p>
                <p>An error accured while fetching hubs</p>
            </div>
        );
    }

    if (!data.length) {
        return (
            <div className="flex flex-col justify-center items-center my-16 p-4">
                <SearchExclamationIcon />
                <p className="font-bold">No Results Found</p>
                <p>We could not find any results matching your search criteria</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 ">
            {data.map((hub) => (
                <Card key={hub.uuid} {...hub} />
            ))}
        </div>
    )
})