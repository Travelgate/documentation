import '../graphql/setupMonacoWorkers';

import {useEffect, useMemo, useRef, useState} from 'react';
import {useEffect, useMemo, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {Details} from '@docusaurus/theme-common/Details';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import withToken from "../components/WithToken";
import {CheckIcon, CopyIcon, CopyStatus, useCopyToClipboard} from "../components/CopyToClipboard";
import {hotelsListQuerySampleA, hotelsListQuerySampleAVariables} from "../graphql/sample-queries/hotels.list.query";
import {replaceClient} from "../utils";
import {getGraphqlApi, createPlaygroundStorage} from "../graphql/playgrounds";

const PLAYGROUND_HEADERS_STORAGE_KEY = 'travelgate-playground:request-headers';
const DEFAULT_HEADERS = JSON.stringify({
    Authorization: 'Bearer <YOUR_TRAVELGATE_BEARER_TOKEN>',
}, null, 2);

const PLAYGROUND_HEADERS_STORAGE_KEY = 'travelgate-playground:request-headers';
const DEFAULT_HEADERS = JSON.stringify({
    Authorization: 'Bearer <YOUR_TRAVELGATE_BEARER_TOKEN>',
}, null, 2);

const EndpointBar = ({label, endpoint}) => {
    const [copied, copy] = useCopyToClipboard(endpoint);

    return (
        <div className="graphql-sample-interactive__bar">
            <code className="graphql-sample-interactive__url">{endpoint}</code>
            <button
                type="button"
                className="graphql-sample-interactive__copy"
                onClick={copy}
                title={`Copy ${label} endpoint URL`}
                aria-label={copied ? `${label} endpoint URL copied` : `Copy ${label} endpoint URL ${endpoint}`}
            >
                {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                {copied ? 'Copied' : 'Copy'}
            </button>
            <CopyStatus copied={copied} message={`${label} endpoint URL copied`} />
        </div>
    );
};

const GraphqlSampleEditor = ({token, query: queryProp, variables: variablesProp, api = 'generic', showLabel = true}) => {
    const isBrowser = useIsBrowser();
    const {label, endpoint} = getGraphqlApi(api);
    // The default sample declares its own variables, so both must fall back together.
    const usesDefaultSample = queryProp === undefined;
    const query = usesDefaultSample ? hotelsListQuerySampleA : queryProp;
    const variables = usesDefaultSample ? hotelsListQuerySampleAVariables : variablesProp;
    const [headers, setHeaders] = useState(() => {
        if (token) return JSON.stringify({Authorization: `Bearer ${token}`}, null, 2);
        if (typeof window !== 'undefined') {
            try {
                const storedHeaders = window.sessionStorage.getItem(PLAYGROUND_HEADERS_STORAGE_KEY);
                const parsedHeaders = storedHeaders && JSON.parse(storedHeaders);
                if (parsedHeaders && typeof parsedHeaders === 'object' && !Array.isArray(parsedHeaders)) {
                    return storedHeaders;
                }
            } catch {
                return DEFAULT_HEADERS;
            }
        }
        return DEFAULT_HEADERS;
    });
    const [fetcherHeaders, setFetcherHeaders] = useState(() => JSON.parse(headers));
    const headerUpdateTimer = useRef(null);
    const [headers, setHeaders] = useState(() => {
        if (token) return JSON.stringify({Authorization: `Bearer ${token}`}, null, 2);
        if (typeof window !== 'undefined') {
            try {
                const storedHeaders = window.sessionStorage.getItem(PLAYGROUND_HEADERS_STORAGE_KEY);
                const parsedHeaders = storedHeaders && JSON.parse(storedHeaders);
                if (parsedHeaders && typeof parsedHeaders === 'object' && !Array.isArray(parsedHeaders)) {
                    return storedHeaders;
                }
            } catch {
                return DEFAULT_HEADERS;
            }
        }
        return DEFAULT_HEADERS;
    });
    const [fetcherHeaders, setFetcherHeaders] = useState(() => JSON.parse(headers));
    const headerUpdateTimer = useRef(null);
    const fetcher = useMemo(() => ExecutionEnvironment.canUseDOM
        ? createGraphiQLFetcher({url: endpoint, headers: fetcherHeaders})
        : null, [endpoint, fetcherHeaders]);
    const storage = useMemo(() => ExecutionEnvironment.canUseDOM
        ? createPlaygroundStorage(api, localStorage)
        : undefined, [api]);
    const [parsedVariables, setParsedVariables] = useState(variables);
    const formattedHeaders = useMemo(() => token
        ? JSON.stringify({Authorization: `Bearer ${token}`}, null, 2)
        : JSON.stringify(JSON.parse(headers), null, 2), [headers, token]);
    const formattedHeaders = useMemo(() => token
        ? JSON.stringify({Authorization: `Bearer ${token}`}, null, 2)
        : JSON.stringify(JSON.parse(headers), null, 2), [headers, token]);
    const formattedVariables = useMemo(() => parsedVariables
        ? JSON.stringify(JSON.parse(parsedVariables), null, 2)
        : '', [parsedVariables]);

    useEffect(() => {
        if (token) {
            setHeaders(`{"Authorization": "Bearer ${token}"}`);
            clearTimeout(headerUpdateTimer.current);
            setFetcherHeaders({Authorization: `Bearer ${token}`});
        }
    }, [token]);

    useEffect(() => () => clearTimeout(headerUpdateTimer.current), []);

    const updateHeaders = (value) => {
        clearTimeout(headerUpdateTimer.current);
        let parsedHeaders;
        try {
            parsedHeaders = JSON.parse(value);
        } catch {
            return;
        }
        if (!parsedHeaders || typeof parsedHeaders !== 'object' || Array.isArray(parsedHeaders)) return;

        try {
            window.sessionStorage.setItem(PLAYGROUND_HEADERS_STORAGE_KEY, value);
        } catch {
            // Continue without persistence if browser storage is unavailable.
        }
        headerUpdateTimer.current = setTimeout(() => setFetcherHeaders(parsedHeaders), 500);
    };

    useEffect(() => () => clearTimeout(headerUpdateTimer.current), []);

    const updateHeaders = (value) => {
        clearTimeout(headerUpdateTimer.current);
        let parsedHeaders;
        try {
            parsedHeaders = JSON.parse(value);
        } catch {
            return;
        }
        if (!parsedHeaders || typeof parsedHeaders !== 'object' || Array.isArray(parsedHeaders)) return;

        try {
            window.sessionStorage.setItem(PLAYGROUND_HEADERS_STORAGE_KEY, value);
        } catch {
            // Continue without persistence if browser storage is unavailable.
        }
        headerUpdateTimer.current = setTimeout(() => setFetcherHeaders(parsedHeaders), 500);
    };

    useEffect(() => {
        if (variables) {
            setParsedVariables(replaceClient(variables, localStorage.getItem('client') ?? 'client_demo'));
        }
    }, [variables]);

    return (
        <>
            {isBrowser && fetcher && headers && (
                <BrowserOnly fallback={<div>Loading interactive playground...</div>}>
                    {() => {
                        return (
                            <div className="graphql-sample-interactive" aria-label="Interactive GraphQL playground">
                                {showLabel && <EndpointBar label={label} endpoint={endpoint} />}
                                <GraphiQL
                                    key={`${api}:${token ? 'authenticated' : 'anonymous'}`}
                                    key={`${api}:${token ? 'authenticated' : 'anonymous'}`}
                                    fetcher={fetcher}
                                    storage={storage}
                                    initialHeaders={formattedHeaders}
                                    onEditHeaders={updateHeaders}
                                    initialQuery={query}
                                    initialVariables={formattedVariables}
                                >
                                    <GraphiQL.Logo><></></GraphiQL.Logo>
                                </GraphiQL>
                            </div>
                        )
                    }}
                </BrowserOnly>
            )}
        </>
    );
}

const GraphqlSample = ({collapsible = true, ...props}) => {
    const [hasOpened, setHasOpened] = useState(false);
    const {label} = getGraphqlApi(props.api ?? 'generic');

    if (!collapsible) {
        return <GraphqlSampleEditor {...props} />;
    }

    return (
        <Details
            className="graphql-example"
            summary={
                <summary className="graphql-example__summary">
                    <span className="graphql-example__title">Try this example</span>
                    <span className="graphql-sample-interactive__api">{label}</span>
                </summary>
            }
            onToggle={(event) => {
                if (event.currentTarget.open) {
                    setHasOpened(true);
                }
            }}
        >
            <div className="graphql-example__content">
                {hasOpened && <GraphqlSampleEditor {...props} />}
            </div>
        </Details>
    );
};

export default withToken(GraphqlSample);