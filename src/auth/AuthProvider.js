import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';

// Shared login through the Travelgate web BFF: Auth0 session lives in an HttpOnly cookie
// (auth_session_id) + Redis; the idToken is only kept in memory here.

const RETURN_PATH_KEY = 'travelgate-docs:login-return-path';
const ANONYMOUS = {status: 'anonymous', idToken: null, user: null};

const AuthContext = createContext({status: 'loading', idToken: null, user: null, login: async () => {}, logout: async () => {}});

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

    const validateSession = useCallback(async () => {
        try {
            const response = await fetch(`${webBffUrl}auth/user-data/validate-session`, {credentials: 'include'});
            const data = response.ok ? await response.json() : null;
            setSession(toSession(data?.session?.idToken));
        } catch {
            setSession(ANONYMOUS);
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

    // The BFF always redirects back to the site origin, so restore the page where login started.
    useEffect(() => {
        let returnPath = null;
        try {
            returnPath = sessionStorage.getItem(RETURN_PATH_KEY);
            sessionStorage.removeItem(RETURN_PATH_KEY);
        } catch {
            return;
        }
        if (returnPath?.startsWith('/') && !returnPath.startsWith('//')) {
            history.replace(returnPath);
        }
    }, [history]);

    const login = useCallback(async () => {
        try {
            const {pathname, search, hash} = window.location;
            sessionStorage.setItem(RETURN_PATH_KEY, `${pathname}${search}${hash}`);
        } catch {
            // Without storage the user simply lands on the home page after login.
        }

        const params = new URLSearchParams({redirectUri: `${webBffUrl}auth0/login?redirect=${window.location.origin}`});
        const response = await fetch(`${webBffUrl}auth0/login-url?${params}`);
        if (!response.ok) throw new Error(`Login URL request failed: ${response.status}`);
        const {authorizeUrl} = await response.json();
        window.location.href = authorizeUrl;
    }, [webBffUrl]);

    const logout = useCallback(async () => {
        try {
            await fetch(`${webBffUrl}auth0/logout`, {method: 'POST', credentials: 'include'});
        } catch (error) {
            console.error('Error clearing auth cookies:', error);
        }
        setSession(ANONYMOUS);
    }, [webBffUrl]);

    const value = useMemo(() => ({...session, login, logout}), [session, login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
