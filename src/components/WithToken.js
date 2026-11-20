import React from 'react';
import {useAuth} from "../auth/AuthProvider";


const withToken = (WrappedComponent) => {

    // Return a new component
    return function WithToken(props) {
        const {idToken: token} = useAuth();

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
