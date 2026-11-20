import {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';

// Shared login through the Travelgate web BFF: Auth0 session lives in an HttpOnly cookie
// (auth_session_id) + Redis; the idToken is only kept in memory here.

const RETURN_PATH_KEY = 'travelgate-docs:login-return-path';
const ANONYMOUS = {status: 'anonymous', idToken: null, user: null};

const AuthContext = createContext({status: 'loading', idToken: null, user: null, loginState: 'idle', login: async () => {}, dismissLoginError: () => {}, logout: async () => {}});

const decodeJwtPayload = (token) => {
    try {
        const payload = atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'));
        return JSON.parse(new TextDecoder().decode(Uint8Array.from(payload, (char) => char.charCodeAt(0))));
    } catch {
        return null;
    }
};

const toSession = (idToken) => {
    const user = idToken && decodeJwtPayload(idToken);
    return user ? {status: 'authenticated', idToken, user} : ANONYMOUS;
};

export const AuthProvider = ({children}) => {
    const {siteConfig} = useDocusaurusContext();
    const webBffUrl = siteConfig.customFields.webBffUrl;
    const history = useHistory();
    const [session, setSession] = useState({status: 'loading', idToken: null, user: null});
    const [loginState, setLoginState] = useState('idle');
    // Only the latest validation may update the session; logout invalidates any in flight.
    const sessionRequestId = useRef(0);
    const isLoggingOut = useRef(false);

    const validateSession = useCallback(async () => {
        if (isLoggingOut.current) return;
        const requestId = ++sessionRequestId.current;

        let nextSession = ANONYMOUS;
        try {
            const response = await fetch(`${webBffUrl}auth/user-data/validate-session`, {credentials: 'include'});
            const data = response.ok ? await response.json() : null;
            nextSession = toSession(data?.session?.idToken);
        } catch {
            // An unreachable BFF is treated as no session.
        }

        if (requestId === sessionRequestId.current) {
            setSession(nextSession);
        }
    }, [webBffUrl]);

    useEffect(() => {
        validateSession();

        const onVisibilityChange = () => {
            if (document.visibilityState === 'visible') validateSession();
        };
        document.addEventListener('visibilitychange', onVisibilityChange);
        return () => document.removeEventListener('visibilitychange', onVisibilityChange);
    }, [validateSession]);

    // The BFF always redirects back to the site root, so restore the page where login started.
    useEffect(() => {
        let returnPath = null;
        try {
            returnPath = sessionStorage.getItem(RETURN_PATH_KEY);
            sessionStorage.removeItem(RETURN_PATH_KEY);
        } catch {
            return;
        }
        // Any other landing page means the login was abandoned, so the stored path is just discarded.
        if (window.location.pathname === '/' && returnPath?.startsWith('/') && !returnPath.startsWith('//')) {
            history.replace(returnPath);
        }
    }, [history]);

    const login = useCallback(async () => {
        setLoginState('pending');
        try {
            const params = new URLSearchParams({redirectUri: `${webBffUrl}auth0/login?redirect=${window.location.origin}`});
            const response = await fetch(`${webBffUrl}auth0/login-url?${params}`);
            if (!response.ok) throw new Error(`Login URL request failed: ${response.status}`);
            const {authorizeUrl} = await response.json();
            if (!authorizeUrl) throw new Error('Login URL response without authorizeUrl');

            try {
                const {pathname, search, hash} = window.location;
                sessionStorage.setItem(RETURN_PATH_KEY, `${pathname}${search}${hash}`);
            } catch {
                // Without storage the user simply lands on the home page after login.
            }
            window.location.href = authorizeUrl;
        } catch (error) {
            console.error('Error starting login:', error);
            setLoginState('error');
        }
    }, [webBffUrl]);

    const dismissLoginError = useCallback(() => {
        setLoginState((state) => (state === 'error' ? 'idle' : state));
    }, []);

    const logout = useCallback(async () => {
        isLoggingOut.current = true;
        sessionRequestId.current += 1;
        try {
            const response = await fetch(`${webBffUrl}auth0/logout`, {method: 'POST', credentials: 'include'});
            if (!response.ok) throw new Error(`Logout request failed: ${response.status}`);
            setSession(ANONYMOUS);
        } catch (error) {
            // The BFF session may still be alive, so keep the user signed in and let them retry.
            console.error('Error clearing auth cookies:', error);
        } finally {
            isLoggingOut.current = false;
        }
    }, [webBffUrl]);

    const value = useMemo(
        () => ({...session, loginState, login, dismissLoginError, logout}),
        [session, loginState, login, dismissLoginError, logout],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
