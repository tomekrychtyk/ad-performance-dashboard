import { http } from 'msw';
import { ADS_MOCK_RESPONSE } from './mocks/ads-mock-response';

export const handlers = [
    http.get('https://my-json-server.typicode.com/akramsaouri/ad-performance/ads', () => {
        return Response.json(ADS_MOCK_RESPONSE);
    }),
];
