import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

import styles from './ask-ai.module.css';
import clsx from "clsx";

export default function AskAi() {
    useEffect(() => {
        const hideElement = () => {
            const element = document.getElementById('kapa-widget-container'); // Use the appropriate ID
            if (element) {
                element.classList.add('d-none');
            }
        };

        const showElement = () => {
            const element = document.getElementById('kapa-widget-container'); // Use the appropriate ID
            if (element) {
                element.classList.remove('d-none');
            }
        };

        hideElement();

        // Add a mutation observer because the element is injected dynamically after the page load
        const observer = new MutationObserver(() => {
            hideElement();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            showElement();
            observer.disconnect();
        };
    }, []);
    return (
        <Layout title="Ask AI" description="AI assistant for Travelgate documenatation">
            <div className={clsx('na', styles.customContainer)}>
            <iframe src="/ask-ai.html" title="Ask AI"></iframe>
            </div>
        </Layout>
    );
}
