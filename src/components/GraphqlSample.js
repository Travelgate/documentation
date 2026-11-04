import 'graphiql/setup-workers/webpack';

import React, {useEffect, useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import withToken from "../components/WithToken";
import {CheckIcon, CopyIcon, CopyStatus, useCopyToClipboard} from "../components/CopyToClipboard";
import {hotelsListQuerySampleA} from "../graphql/sample-queries/hotels.list.query";
import {replaceClient} from "../utils";
import {getGraphqlApi, createPlaygroundStorage} from "../graphql/playgrounds";

const EndpointBar = ({label, endpoint}) => {
    const [copied, copy] = useCopyToClipboard(endpoint);

    return (
        <div className="graphql-sample-interactive__bar">
            <span className="graphql-sample-interactive__api">{label}</span>
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

const GraphqlSample = ({token, query, variables, api = 'generic', showLabel = true}) => {
    const isBrowser = useIsBrowser();
    const {label, endpoint} = getGraphqlApi(api);
    const fetcher = useMemo(() => ExecutionEnvironment.canUseDOM
        ? createGraphiQLFetcher({
            url: endpoint,
            headers: {
                "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
            }
        })
        : null, [endpoint]);
    const storage = useMemo(() => ExecutionEnvironment.canUseDOM
        ? createPlaygroundStorage(api, localStorage)
        : undefined, [api]);
    const [headers, setHeaders] = useState(`{
        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
    }`);
    const [parsedVariables, setParsedVariables] = useState(variables);
    const formattedHeaders = useMemo(() => JSON.stringify(JSON.parse(headers), null, 2), [headers]);
    const formattedVariables = useMemo(() => parsedVariables
        ? JSON.stringify(JSON.parse(parsedVariables), null, 2)
        : '', [parsedVariables]);

    useEffect(() => {
        if (token) {
            setHeaders(`{"Authorization": "Bearer ${token}"}`);
        }
    }, [token]);

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
                                    key={api}
                                    fetcher={fetcher}
                                    storage={storage}
                                    initialHeaders={formattedHeaders}
                                    initialQuery={query??hotelsListQuerySampleA}
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

export default withToken(GraphqlSample);