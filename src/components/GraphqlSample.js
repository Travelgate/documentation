import 'graphiql/setup-workers/webpack';

import React, {useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import withToken from "../components/WithToken";
import {hotelsListQuerySampleA} from "../graphql/sample-queries/hotels.list.query";
import {replaceClient} from "../utils";

let fetcher = null;

if (ExecutionEnvironment.canUseDOM) {
    fetcher = createGraphiQLFetcher({
        url: 'https://api.travelgate.com/',
        headers: {
            "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
        }
    });
} else {
    fetcher = null;
}

const GraphqlSample = ({token, query, variables}) => {
    const isBrowser = useIsBrowser();
    const [headers, setHeaders] = useState(`{
        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
    }`);
    const [parsedVariables, setParsedVariables] = useState(variables);

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
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        return (
                            <>
                                <GraphiQL
                                    fetcher={fetcher}
                                    initialHeaders={headers}
                                    initialQuery={query??hotelsListQuerySampleA}
                                    variables={parsedVariables??''}
                                    //onTabChange={(tabState) => { tabState.tabs = []; return false; }}
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