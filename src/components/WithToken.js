import React, {useEffect} from 'react';
import {useAuth0} from "@auth0/auth0-react";


const withToken = (WrappedComponent) => {

    // Return a new component
    return function WithToken(props) {
        const { user, isAuthenticated, loginWithPopup, getIdTokenClaims } = useAuth0();
        const [token, setToken] = React.useState(null);

        useEffect(() => {
            if (isAuthenticated) {
                getIdTokenClaims().then(token => {
                    setToken(token?.__raw)
                });
            }

        }, [isAuthenticated]);

        // Merge the extraProps with the existing props
        const combinedProps = {
            ...props,
            token: token,
        };

        // Render the wrapped component with the combined props
        return <WrappedComponent {...combinedProps} />;

    };
};

export default withToken;
