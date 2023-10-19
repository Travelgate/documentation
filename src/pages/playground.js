import React, {useEffect} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import 'graphiql/graphiql.css';
import {createGraphiQLFetcher} from '@graphiql/create-fetcher';
import {GraphiQL} from 'graphiql';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import withToken from "../components/WithToken";
import {hotelsListQuerySampleA} from "../graphql/sample-queries/hotels.list.query";
import GraphqlSample from "../components/GraphqlSample";

let fetcher = null;

if (ExecutionEnvironment.canUseDOM) {
    fetcher = createGraphiQLFetcher({url: 'https://api.travelgatex.com/'});
} else {
    fetcher = null;
}

const Explorer = (props) => {
    const {siteConfig} = useDocusaurusContext();
    const isBrowser = useIsBrowser();

    return (
        <Layout
            title={siteConfig.title}
            description="GraphQL Explorer"
        >
            <div className={`g-playground`}>
                <GraphqlSample {...props} />
            </div>
        </Layout>
    );
}

export default withToken(Explorer);
