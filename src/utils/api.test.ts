import { http } from 'msw';
import { describe, expect, test } from 'vitest';
import { ADS_MOCK_RESPONSE } from '../../mocks/ads-mock-response';
import { server } from '../../mocks/node';
import { getAdsImpl } from './api';

describe('getAdsImpl', () => {
    test('returns correct data on successful response', async () => {
        await expect(getAdsImpl()).resolves.toEqual(ADS_MOCK_RESPONSE);
    });

    test('throws an error if the server responds with an error', async () => {
        server.use(
            http.get('https://my-json-server.typicode.com/akramsaouri/ad-performance/ads', () => {
                return Response.error();
            }),
        );

        await expect(getAdsImpl()).rejects.toThrow();
    });
});
