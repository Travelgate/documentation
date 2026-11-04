const GRAPHQL_APIS = {
    shopping: {
        label: 'Shopping API',
        description: 'Search, quote, book, cancel, booking, amendments, oneStepBook and oneStepQuote',
        endpoint: 'https://api-shopping.travelgate.com/graphql',
    },
    content: {
        label: 'Content API',
        description: 'Hotels, boards, destinations, chains, rooms and other static master data',
        endpoint: 'https://api-content.travelgate.com/graphql',
    },
    inventory: {
        label: 'Inventory API',
        description: 'All buyer and seller inventory operations',
        endpoint: 'https://api-inventory.travelgate.com/graphql',
    },
    generic: {
        label: 'Generic API',
        description: 'Stats, logging, admin and other shared operations',
        endpoint: 'https://api.travelgate.com/',
    },
};

const PLAYGROUND_LINKS = Object.entries(GRAPHQL_APIS).map(([api, {label}]) => ({
    label,
    to: `/playground?api=${api}`,
}));

function getGraphqlApi(api) {
    if (!Object.hasOwn(GRAPHQL_APIS, api)) {
        throw new Error(`Unknown GraphQL API: ${api}`);
    }
    return GRAPHQL_APIS[api];
}

function createPlaygroundStorage(api, storage) {
    getGraphqlApi(api);
    // Keep the existing explorer's saved tabs and history on the generic API.
    const prefix = api === 'generic' ? '' : `travelgate-playground:${api}:`;
    const keys = () => Array.from({length: storage.length}, (_, index) => storage.key(index))
        .filter(key => key?.startsWith(`${prefix}graphiql:`));
    return {
        getItem: key => storage.getItem(prefix + key),
        setItem: (key, value) => storage.setItem(prefix + key, value),
        removeItem: key => storage.removeItem(prefix + key),
        get length() { return keys().length; },
        clear: () => keys().forEach(key => storage.removeItem(key)),
    };
}

module.exports = {GRAPHQL_APIS, PLAYGROUND_LINKS, getGraphqlApi, createPlaygroundStorage};
