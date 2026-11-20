import {useMemo, useRef} from 'react';
import 'graphiql/graphiql.css';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {AuthProvider, useAuth} from '../auth/AuthProvider';
import {ClientProvider} from '../auth/ClientProvider';

const httpLink = createHttpLink({
    uri: 'https://api.travelgate.com/',
});

const AuthorizedApolloProvider = ({children}) => {
    const {idToken, user} = useAuth();
    const tokenRef = useRef(idToken);
    tokenRef.current = idToken;

    // New client (and cache) per user so a different login never sees the previous user's data.
    const client = useMemo(() => {
        const authLink = setContext((_, {headers}) => ({
            headers: tokenRef.current
                ? {...headers, authorization: `Bearer ${tokenRef.current}`}
                : headers,
        }));

        return new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache()
        });
    }, [user?.sub]);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const Root = ({children}) => {
    return (
        <AuthProvider>
            <AuthorizedApolloProvider>
                <ClientProvider>
                    {children}
                </ClientProvider>
            </AuthorizedApolloProvider>
        </AuthProvider>
    );
}

export default Root;
