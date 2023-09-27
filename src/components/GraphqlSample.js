import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import 'graphiql/graphiql.css';
import {createGraphiQLFetcher} from '@graphiql/create-fetcher';
import {GraphiQL} from 'graphiql';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import withToken from "../components/WithToken";
import {hotelsListQuerySampleA} from "../graphql/sample-queries/hotels.list.query";

let fetcher = null;

if (ExecutionEnvironment.canUseDOM) {
    fetcher = createGraphiQLFetcher({url: 'https://api.travelgatex.com/'});
} else {
    fetcher = null;
}

const GraphqlSample = ({token, query}) => {
    const isBrowser = useIsBrowser();

    return (
        <>
            {isBrowser && fetcher && (
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        return (
                            <>
                                <GraphiQL
                                    fetcher={fetcher}
                                    headers={`{"Authorization": "Bearer ${token??''}"}`}
                                    query={query??hotelsListQuerySampleA}
                                >
                                    <GraphiQL.Logo><></></GraphiQL.Logo>
                                </GraphiQL>
                            </>
                        )
                    }}
                </BrowserOnly>
            )}
        </>
    );
}

export default withToken(GraphqlSample);
