import React, {useEffect} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import 'graphiql/graphiql.css';
import { createGraphiQLFetcher } from '@graphiql/create-fetcher';
import { GraphiQL } from 'graphiql';
import useIsBrowser from '@docusaurus/useIsBrowser';

const Explorer = () => {
    const { siteConfig } = useDocusaurusContext();
    const isBrowser = useIsBrowser();
    let fetcher = null;

    useEffect(() => {
        if (isBrowser) {
            fetcher = createGraphiQLFetcher({ url: 'https://api.travelgatex.com/' });
        }
    }, []);

    return (
        <Layout
            title={siteConfig.title}
            description="GraphQL Explorer">
            {isBrowser && fetcher && (
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        return <GraphiQL fetcher={fetcher} headers={'{"Authorization": "Bearer YOUR_BEARER_HERE"}'} />
                        //return <></>
                    }}
                </BrowserOnly>
            )}
        </Layout>
    );
}

export default Explorer;
