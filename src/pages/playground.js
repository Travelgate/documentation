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

let fetcher = null;

if (ExecutionEnvironment.canUseDOM) {
    fetcher = createGraphiQLFetcher({url: 'https://api.travelgatex.com/'});
} else {
    fetcher = null;
}

const Explorer = ({token}) => {
    const {siteConfig} = useDocusaurusContext();
    const isBrowser = useIsBrowser();

    return (
        <Layout
            title={siteConfig.title}
            description="GraphQL Explorer">
            {isBrowser && fetcher && (
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        return (
                            <>
                                <GraphiQL
                                    fetcher={fetcher}
                                    headers={`{"Authorization": "Bearer ${token??''}"}`}
                                />
                            </>
                        )
                    }}
                </BrowserOnly>
            )}
        </Layout>
    );
}

export default withToken(Explorer);
