import React, {useEffect} from 'react';
import 'graphiql/graphiql.css';
import {Auth0Provider} from '@auth0/auth0-react';
import useIsBrowser from "@docusaurus/useIsBrowser";


const Root = ({children}) => {
    const {isBrowser} = useIsBrowser();

    const configuration = {
        domain: 'xtg.eu.auth0.com',
        clientID: 'z5bs7Yo5L5tZ18hU7aHskyQu7nutyagO',
        // redirectUri: 'http://localhost:4200',
        redirectUri: 'https://animated-adventure-8k6mlky.pages.github.io',
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
                {children}
            </Auth0Provider>
        </>
    );
}

export default Root;
