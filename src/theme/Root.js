import React, {useEffect} from 'react';
import 'graphiql/graphiql.css';
import {Auth0Provider} from '@auth0/auth0-react';
import useIsBrowser from "@docusaurus/useIsBrowser";
import {ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'https://api.travelgatex.com/',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const Root = ({children}) => {
    const {isBrowser} = useIsBrowser();

    const configuration = {
        domain: 'xtg.eu.auth0.com',
        clientID: 'z5bs7Yo5L5tZ18hU7aHskyQu7nutyagO',
        //redirectUri: 'http://localhost:4200',
        redirectUri: 'https://docs.travelgate.com',
        responseType: 'token id_token',
        scope: 'openid profile email picture name',
        responseMode: 'form_post',
        audience: 'z5bs7Yo5L5tZ18hU7aHskyQu7nutyagO'
    };

    useEffect(() => {
        if (isBrowser) {
            configuration.redirectUri = window.location.origin;
        }
    }, []);

    return (
        <>
            <Auth0Provider
                domain={configuration.domain}
                clientId={configuration.clientID}
                authorizationParams={{
                    redirect_uri: configuration.redirectUri,
                    responseType: configuration.responseType,
                    scope: configuration.scope,
                    responseMode: configuration.responseMode,
                    cacheLocation: 'localstorage',
                }}
            >
                <ApolloProvider client={client}>
                    {children}
                </ApolloProvider>
            </Auth0Provider>
        </>
    );
}

export default Root;
