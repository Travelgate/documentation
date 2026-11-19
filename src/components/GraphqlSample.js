import '../graphql/setupMonacoWorkers';

import {useEffect, useMemo, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {Details} from '@docusaurus/theme-common/Details';
import {useColorMode} from '@docusaurus/theme-common';
import CodeBlock from '@theme/CodeBlock';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import withToken from "../components/WithToken";
import {CheckIcon, CopyIcon, CopyStatus, useCopyToClipboard} from "../components/CopyToClipboard";
import {hotelsListQuerySampleA, hotelsListQuerySampleAVariables} from "../graphql/sample-queries/hotels.list.query";
import {replaceClient} from "../utils";
import {useClientName} from "../auth/ClientProvider";
import {getGraphqlApi, createPlaygroundStorage} from "../graphql/playgrounds";

const PLAYGROUND_HEADERS_STORAGE_KEY = 'travelgate-playground:request-headers';
const DEFAULT_HEADERS = JSON.stringify({
    Authorization: 'Bearer <YOUR_TRAVELGATE_BEARER_TOKEN>',
}, null, 2);

const getBearerHeaders = (token) => JSON.stringify({Authorization: `Bearer ${token}`}, null, 2);

// GraphiQL resolves the Monaco theme from the OS preference; pin both variants to the site's color mode.
const EDITOR_THEMES = {
    light: {light: 'graphiql-LIGHT', dark: 'graphiql-LIGHT'},
    dark: {light: 'graphiql-DARK', dark: 'graphiql-DARK'},
};

const getStoredHeaders = () => {
    if (typeof window === 'undefined') return DEFAULT_HEADERS;
    try {
        const storedHeaders = window.sessionStorage.getItem(PLAYGROUND_HEADERS_STORAGE_KEY);
        const parsedHeaders = storedHeaders && JSON.parse(storedHeaders);
        if (parsedHeaders && typeof parsedHeaders === 'object' && !Array.isArray(parsedHeaders)) {
            return storedHeaders;
        }
    } catch {
        return DEFAULT_HEADERS;
    }
    return DEFAULT_HEADERS;
};

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

const GraphqlResponse = ({response}) => {
    const formattedResponse = useMemo(() => JSON.stringify(response, null, 2), [response]);

    return (
        <Details
            className="graphql-sample-response"
            summary={
                <summary className="graphql-sample-response__summary">
                    <span className="graphql-sample-response__title">View sample response</span>
                </summary>
            }
        >
            <CodeBlock language="json">{formattedResponse}</CodeBlock>
        </Details>
    );
};

const formatJson = (value) => {
    try {
        return JSON.stringify(JSON.parse(value), null, 2);
    } catch {
        return value;
    }
};

const GraphqlStaticExample = ({query, variables, response}) => {
    const formattedVariables = useMemo(() => variables && formatJson(variables), [variables]);
    const formattedResponse = useMemo(() => JSON.stringify(response, null, 2), [response]);

    return (
        <div className="graphql-static-example">
            <CodeBlock language="graphql" title="Query">{query.trim().replace(/\t/g, '  ')}</CodeBlock>
            {formattedVariables && <CodeBlock language="json" title="Variables">{formattedVariables}</CodeBlock>}
            <CodeBlock language="json" title="Response" className="graphql-static-example__response">
                {formattedResponse}
            </CodeBlock>
        </div>
    );
};

const GraphqlSampleEditor = ({token, query: queryProp, variables: variablesProp, api = 'generic', showLabel = true}) => {
    const isBrowser = useIsBrowser();
    const {colorMode} = useColorMode();
    const client = useClientName();
    const {label, endpoint} = getGraphqlApi(api);
    // The default sample declares its own variables, so both must fall back together.
    const usesDefaultSample = queryProp === undefined;
    const query = usesDefaultSample ? hotelsListQuerySampleA : queryProp;
    const variables = usesDefaultSample ? hotelsListQuerySampleAVariables : variablesProp;
    const [headers, setHeaders] = useState(() => token ? getBearerHeaders(token) : getStoredHeaders());
    const [fetcherHeaders, setFetcherHeaders] = useState(() => JSON.parse(headers));
    const headerUpdateTimer = useRef(null);
    const previousToken = useRef(token);
    const fetcher = useMemo(() => ExecutionEnvironment.canUseDOM
        ? createGraphiQLFetcher({url: endpoint, headers: fetcherHeaders})
        : null, [endpoint, fetcherHeaders]);
    const storage = useMemo(() => ExecutionEnvironment.canUseDOM
        ? createPlaygroundStorage(api, localStorage)
        : undefined, [api]);
    const parsedVariables = useMemo(() => variables && client ? replaceClient(variables, client) : variables, [variables, client]);
    const formattedHeaders = useMemo(() => JSON.stringify(JSON.parse(headers), null, 2), [headers]);
    const formattedVariables = useMemo(() => parsedVariables
        ? JSON.stringify(JSON.parse(parsedVariables), null, 2)
        : '', [parsedVariables]);

    useEffect(() => {
        if (previousToken.current === token) return;
        previousToken.current = token;

        const nextHeaders = token ? getBearerHeaders(token) : getStoredHeaders();
        clearTimeout(headerUpdateTimer.current);
        setHeaders(nextHeaders);
        setFetcherHeaders(JSON.parse(nextHeaders));
    }, [token]);

    useEffect(() => () => clearTimeout(headerUpdateTimer.current), []);

    const updateHeaders = (value) => {
        clearTimeout(headerUpdateTimer.current);
        let parsedHeaders;
        try {
            value = value.trim() || '{}';
            parsedHeaders = JSON.parse(value);
        } catch {
            return;
        }
        if (!parsedHeaders || typeof parsedHeaders !== 'object' || Array.isArray(parsedHeaders)) return;

        // Never persist headers that carry the logged-in user's token.
        if (!token) {
            try {
                window.sessionStorage.setItem(PLAYGROUND_HEADERS_STORAGE_KEY, value);
            } catch {
                // Continue without persistence if browser storage is unavailable.
            }
        }
        headerUpdateTimer.current = setTimeout(() => setFetcherHeaders(parsedHeaders), 500);
    };

    return (
        <>
            {isBrowser && fetcher && headers && (
                <BrowserOnly fallback={<div>Loading interactive playground...</div>}>
                    {() => {
                        return (
                            <div className="graphql-sample-interactive" aria-label="Interactive GraphQL playground">
                                {showLabel && <EndpointBar label={label} endpoint={endpoint} />}
                                <GraphiQL
                                    key={`${api}:${token ?? 'anonymous'}:${client ?? 'placeholder'}`}
                                    fetcher={fetcher}
                                    forcedTheme={colorMode}
                                    editorTheme={EDITOR_THEMES[colorMode]}
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

const GraphqlSample = ({collapsible = true, response, ...props}) => {
    const [hasOpened, setHasOpened] = useState(false);
    const {label} = getGraphqlApi(props.api ?? 'generic');
    // Without a session the APIs can't be called, so samples with a stored response are shown statically.
    const isStatic = !props.token && Boolean(response) && Boolean(props.query);

    const content = isStatic
        ? <GraphqlStaticExample query={props.query} variables={props.variables} response={response} />
        : (
            <>
                <GraphqlSampleEditor {...props} />
                {response && <GraphqlResponse response={response} />}
            </>
        );

    if (!collapsible) {
        return content;
    }

    return (
        <Details
            className="graphql-example"
            summary={
                <summary className="graphql-example__summary">
                    <span className="graphql-example__title">{isStatic ? 'View the example' : 'Try this example'}</span>
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
                {hasOpened && content}
            </div>
        </Details>
    );
};

export default withToken(GraphqlSample);