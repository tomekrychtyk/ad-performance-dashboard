import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from './mocks/node.js';

server.events.on('request:start', ({ request }) => {
    console.log('Outgoing:', request.method, request.url);
});

beforeAll(() => {
    server.listen({
        onUnhandledRequest: 'error',
    });
    console.log('Server listening on');
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
