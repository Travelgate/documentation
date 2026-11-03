const {test} = require('node:test');
const assert = require('node:assert/strict');
const {GRAPHQL_APIS, PLAYGROUND_LINKS, getGraphqlApi, createPlaygroundStorage} = require('./playgrounds');

function memoryStorage(entries = []) {
    const data = new Map(entries);
    return {
        getItem: key => data.get(key) ?? null,
        setItem: (key, value) => { data.set(key, value); },
        removeItem: key => { data.delete(key); },
        key: index => [...data.keys()][index] ?? null,
        get length() { return data.size; },
    };
}

test('dedicated playgrounds use the confirmed GraphQL endpoints', () => {
    assert.deepEqual(
        Object.fromEntries(Object.entries(GRAPHQL_APIS).map(([api, {endpoint}]) => [api, endpoint])),
        {
            shopping: 'https://api-shopping.travelgate.com/graphql',
            content: 'https://api-content.travelgate.com/graphql',
            inventory: 'https://api-inventory.travelgate.com/graphql',
            generic: 'https://api.travelgate.com/',
        },
    );
});

test('navbar and reference links select an allowlisted internal API', () => {
    assert.equal(PLAYGROUND_LINKS.length, 4);
    for (const {label, to} of PLAYGROUND_LINKS) {
        const url = new URL(to, 'https://docs.travelgate.com');
        assert.equal(url.pathname, '/playground');
        const api = url.searchParams.get('api');
        assert.equal(getGraphqlApi(api).label, label);
    }
});

test('unknown API names are rejected rather than used as request URLs', () => {
    for (const api of ['', 'unknown', 'toString', '__proto__', 'https://example.com/graphql']) {
        assert.throws(() => getGraphqlApi(api), /Unknown GraphQL API/);
        assert.throws(() => createPlaygroundStorage(api, {}), /Unknown GraphQL API/);
    }
});

test('each dedicated API has isolated tabs, history and removals', () => {
    const storage = memoryStorage();
    const stores = Object.fromEntries(Object.keys(GRAPHQL_APIS).map(api =>
        [api, createPlaygroundStorage(api, storage)]));
    for (const [api, store] of Object.entries(stores)) {
        store.setItem('graphiql:tabs', `${api} query`);
        store.setItem('graphiql:queries', `${api} history`);
    }
    for (const [api, store] of Object.entries(stores)) {
        assert.equal(store.getItem('graphiql:tabs'), `${api} query`);
        assert.equal(store.getItem('graphiql:queries'), `${api} history`);
    }
    stores.content.removeItem('graphiql:tabs');
    assert.equal(stores.content.getItem('graphiql:tabs'), null);
    assert.equal(stores.shopping.getItem('graphiql:tabs'), 'shopping query');
    assert.equal(stores.inventory.getItem('graphiql:tabs'), 'inventory query');
    assert.equal(stores.generic.getItem('graphiql:tabs'), 'generic query');
});

test('the generic playground preserves legacy saved state', () => {
    const storage = memoryStorage([['graphiql:tabs', 'existing tabs']]);
    assert.equal(createPlaygroundStorage('generic', storage).getItem('graphiql:tabs'), 'existing tabs');
    assert.equal(createPlaygroundStorage('shopping', storage).getItem('graphiql:tabs'), null);
});

test('clearing an API removes only its GraphiQL state, not other APIs or application data', () => {
    const storage = memoryStorage([['client', 'client_demo']]);
    const generic = createPlaygroundStorage('generic', storage);
    const shopping = createPlaygroundStorage('shopping', storage);
    const content = createPlaygroundStorage('content', storage);
    generic.setItem('graphiql:tabs', 'generic');
    shopping.setItem('graphiql:tabs', 'shopping');
    content.setItem('graphiql:tabs', 'content');
    content.setItem('graphiql:queries', 'history');
    assert.equal(content.length, 2);
    content.clear();
    assert.equal(content.length, 0);
    assert.equal(shopping.getItem('graphiql:tabs'), 'shopping');
    assert.equal(generic.getItem('graphiql:tabs'), 'generic');
    generic.clear();
    assert.equal(shopping.getItem('graphiql:tabs'), 'shopping');
    assert.equal(storage.getItem('client'), 'client_demo');
});
