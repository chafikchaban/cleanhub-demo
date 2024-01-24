
import { HubsResponse } from '../../model/hub.model';
import { Client } from './api_client';

export const fetchList = async (): Promise<HubsResponse> => {
    return await Client.get<HubsResponse>(`/hubs`).then(({ data }) => {
        return data;
    });
};
