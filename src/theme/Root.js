import React from 'react';
import 'graphiql/graphiql.css';
import {Auth0Provider} from '@auth0/auth0-react';

const Root = ({children}) => {
    const configuration = {
        domain: 'xtg.eu.auth0.com',
        clientID: 'z5bs7Yo5L5tZ18hU7aHskyQu7nutyagO',
        redirectUri: 'http://localhost:4200',
        responseType: 'token id_token',
        scope: 'openid profile email picture name',
        responseMode: 'form_post',
        audience: 'z5bs7Yo5L5tZ18hU7aHskyQu7nutyagO'
    };

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
