import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import 'graphiql/graphiql.css';
import withToken from "../components/WithToken";
import {CheckIcon, CopyIcon, CopyStatus, useCopyToClipboard} from "../components/CopyToClipboard";
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

const EndpointField = ({endpoint}) => {
    const [copied, copy] = useCopyToClipboard(endpoint);

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
            <CopyStatus copied={copied} message="Endpoint URL copied" />
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
                    ? <GraphqlSample key={api} {...props} {...samples[api]} api={api} showLabel={false} collapsible={false} />
                    : <p role="alert">Unknown GraphQL API: {api}. Choose one of the APIs above.</p>}
            </div>
        </Layout>
    );
}

export default withToken(Explorer);