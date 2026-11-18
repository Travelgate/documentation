import {useEffect, useId, useRef, useState} from 'react';
import clsx from 'clsx';
import {useAuth} from '../../auth/AuthProvider';
import styles from './styles.module.css';

const getDisplayName = (user) =>
    [user?.given_name, user?.family_name].filter(Boolean).join(' ') || user?.name || user?.email || '';

const Avatar = ({user, name, className}) => {
    const [failed, setFailed] = useState(false);

    if (!user?.picture || failed) {
        return (
            <span className={clsx(styles.avatar, styles.initials, className)} aria-hidden="true">
                {name.charAt(0).toUpperCase()}
            </span>
        );
    }

    return (
        <img
            className={clsx(styles.avatar, className)}
            src={user.picture}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
        />
    );
};

export function NavbarSignIn() {
    const {login} = useAuth();

    return (
        <button type="button" className={styles.signIn} onClick={() => login()}>
            <i className="fa-solid fa-user" aria-hidden="true" />
            Sign in
        </button>
    );
}

export default function NavbarProfileMenu() {
    const {user, logout} = useAuth();
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const toggleRef = useRef(null);
    const menuId = useId();
    const name = getDisplayName(user);

    useEffect(() => {
        if (!open) return undefined;

        const onPointerDown = (event) => {
            if (!containerRef.current?.contains(event.target)) setOpen(false);
        };
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    const signOut = () => {
        setOpen(false);
        logout();
    };

    return (
        <div ref={containerRef} className={styles.profileMenu}>
            <button
                ref={toggleRef}
                type="button"
                className={styles.toggle}
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={`Account menu for ${name}`}
                onClick={() => setOpen((value) => !value)}
            >
                <Avatar user={user} name={name} className={styles.toggleAvatar} />
            </button>
            {open && (
                <div id={menuId} className={styles.menu}>
                    <div className={styles.header}>
                        <Avatar user={user} name={name} className={styles.headerAvatar} />
                        <div className={styles.info}>
                            <p className={styles.name}>{name}</p>
                            {user?.email && <p className={styles.email}>{user.email}</p>}
                        </div>
                    </div>
                    <hr className={styles.divider} />
                    <button type="button" className={styles.signOut} onClick={signOut}>
                        <i className="fa-regular fa-right-from-bracket" aria-hidden="true" />
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}
