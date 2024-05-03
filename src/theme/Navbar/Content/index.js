import React, {useEffect} from 'react';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import { useAuth0 } from "@auth0/auth0-react";
import {useQuery, gql} from "@apollo/client";
import {allClientsListQuery} from "../../../graphql/admin/allclients.query";

import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({left, right}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

const LogoutAndName = () => {
    const { logout, getIdTokenClaims } = useAuth0();
    const [email, setEmail] = React.useState(null);
    const { data, loading, error } = useQuery(gql(allClientsListQuery));

    useEffect(() => {
        (async () => {
            try {
                const token = await getIdTokenClaims();
                localStorage.setItem('token', token.__raw);
                setEmail(token.email)
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    useEffect(() => {
        if (!loading && !error && data) {
            localStorage.setItem('client', data?.admin?.allClients?.edges[0]?.node?.clientData?.name);
        }
    }, [loading, error, data]);

    return (
        <>
            <NavbarItem label={`Logout ${email}`} position="right" to={`#!`} onClick={() => logout({
                logoutParams: {
                    returnTo: window.location.origin
                }
            })} />
        </>
    )
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
            {isAuthenticated ? (
                <LogoutAndName />
            ) : (
                <NavbarItem label={`Login`} position="right" to={`#!`} onClick={() => loginWithRedirect()} />
            )}

          {/*<NavbarColorModeToggle className={styles.colorModeToggle} />*/}
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
