import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import 'graphiql/graphiql.css';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
const fetcher = createGraphiQLFetcher({ url: 'https://api.travelgatex.com/' });

const Explorer = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Slerp GraphQL Explorer">
            <GraphiQL fetcher={fetcher} />

        </Layout>
    );
}

export default Explorer;
