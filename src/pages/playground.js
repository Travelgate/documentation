import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const GraphExplorer = () => {
    return (
        <div>
            <iframe
                src="https://api.travelgatex.com/"
                style={{
                    width: '100%',
                    height: '100vh',
                    border: 'none',
                    margin: 0,
                    padding: 0,
                }}
            />
        </div>
    )
}

const Explorer = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Slerp GraphQL Explorer">
            <main>
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        const GraphEx = GraphExplorer
                        return <GraphEx />
                    }}
                </BrowserOnly>
            </main>
        </Layout>
    );
}

export default Explorer;
