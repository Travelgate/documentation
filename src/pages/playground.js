import React, {useEffect, useState} from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import 'graphiql/graphiql.css';
import withToken from "../components/WithToken";
import GraphqlSample from "../components/GraphqlSample";
import Link from "@docusaurus/Link";
import {useLocation} from "@docusaurus/router";
import {parse, print} from "graphql";
import {GRAPHQL_APIS} from "../graphql/playgrounds";
import {hotelsListQuerySampleA} from "../graphql/sample-queries/hotels.list.query";
import {searchQuickStartQuery, searchQuickStartVariables} from "../graphql/hotel-x/search.quickstart.query";
import {hotelsMasterQuery, hotelsMasterByContextCodeVariables} from "../graphql/inventory/masters/hotels-master.query";
import {apiByCodeQuery} from "../graphql/admin/api.query";

const samples = {
    shopping: {query: searchQuickStartQuery, variables: searchQuickStartVariables},
    content: {query: hotelsListQuerySampleA},
    inventory: {query: hotelsMasterQuery, variables: hotelsMasterByContextCodeVariables},
    generic: {query: print(parse(apiByCodeQuery))},
};

const CopyIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const EndpointField = ({endpoint}) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => setCopied(false), [endpoint]);
    useEffect(() => {
        if (!copied) return undefined;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(endpoint);
            setCopied(true);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="g-playground__endpoint">
            <span className="g-playground__endpoint-label">Endpoint</span>
            <code className="g-playground__endpoint-url">{endpoint}</code>
            <button
                type="button"
                className="g-playground__copy"
                onClick={copy}
                title={copied ? 'Copied!' : 'Copy endpoint URL'}
                aria-label={copied ? 'Endpoint URL copied' : `Copy endpoint URL ${endpoint}`}
            >
                {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
            <span className="g-playground__sr-only" role="status">{copied ? 'Endpoint URL copied' : ''}</span>
        </div>
    );
};

const Explorer = (props) => {
    const {siteConfig} = useDocusaurusContext();
    const location = useLocation();
    const api = new URLSearchParams(location.search).get('api') ?? 'generic';
    const validApi = Object.hasOwn(GRAPHQL_APIS, api);

    return (
        <Layout
            title={siteConfig.title}
            description="GraphQL Explorer"
        >
            <div className={`g-playground`}>
                <div className="g-playground__toolbar">
                    <nav className="g-playground__tabs" aria-label="GraphQL API">
                        {Object.entries(GRAPHQL_APIS).map(([value, {label, description}]) => (
                            <Link
                                key={value}
                                to={`/playground?api=${value}`}
                                className="g-playground__tab"
                                title={description}
                                aria-current={validApi && value === api ? 'page' : undefined}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    {validApi && <EndpointField endpoint={GRAPHQL_APIS[api].endpoint} />}
                </div>
                {validApi
                    ? <GraphqlSample key={api} {...props} {...samples[api]} api={api} showLabel={false} />
                    : <p role="alert">Unknown GraphQL API: {api}. Choose one of the APIs above.</p>}
            </div>
        </Layout>
    );
}

export default withToken(Explorer);