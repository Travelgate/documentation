import {createContext, useContext} from 'react';
import {gql, useQuery} from '@apollo/client';
import {allClientsListQuery} from '../graphql/admin/allclients.query';
import {useAuth} from './AuthProvider';

export const DEFAULT_CLIENT = 'client_demo';

const allClientsQuery = gql(allClientsListQuery);
const ClientContext = createContext(null);

// Client to fill `settings.client` in the GraphQL samples; null keeps the sample's placeholder.
export const ClientProvider = ({children}) => {
    const {idToken} = useAuth();
    const {data} = useQuery(allClientsQuery, {skip: !idToken});
    const clients = data?.admin?.allClients?.edges;
    const client = idToken && clients
        ? clients[0]?.node?.clientData?.name || DEFAULT_CLIENT
        : null;

    return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>;
};

export const useClientName = () => useContext(ClientContext);
