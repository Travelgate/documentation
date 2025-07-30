import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import 'graphiql/graphiql.css';
import withToken from "../components/WithToken";
import GraphqlSample from "../components/GraphqlSample";


const Explorer = (props) => {
    const {siteConfig} = useDocusaurusContext();

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
