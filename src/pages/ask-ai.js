import React, { useEffect } from "react";
import Layout from "@theme/Layout";

import styles from "./ask-ai.module.css";
import clsx from "clsx";

export default function AskAi() {
  useEffect(() => {
    const hideElement = () => {
      const element = document.getElementById("kapa-widget-container"); // Use the appropriate ID
      if (element) {
        element.classList.add("d-none");
      }

      // Search for footer > .container and add d-none class
      const footerContainer = document.querySelector("footer > .container");
      if (footerContainer) {
        footerContainer.classList.add("d-none");
      }

      const footer = document.querySelector("footer");
      if (footer) {
        footer.classList.add("p-20");
      }
    };

    const showElement = () => {
      const element = document.getElementById("kapa-widget-container"); // Use the appropriate ID
      if (element) {
        element.classList.remove("d-none");
      }

      const footerContainer = document.querySelector("footer > .container");
      if (footerContainer) {
        footerContainer.classList.remove("d-none");
      }

      const footer = document.querySelector("footer");
      if (footer) {
        footer.classList.remove("p-20");
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
    <Layout
      title="Ask AI"
      description="AI assistant for Travelgate documenatation"
    >
      <div className="container">
        <div className="row">
          <div className="col col--12 browse-articles title-ia">
            <div className="item margin-top--lg margin-bottom--sm">
              <h4>Travelgate Developer AI Assistant.</h4>
            </div>
          </div>
          <div className={clsx("na", styles.customContainer)}>
            <iframe src="/kapa.html" title="Ask AI"></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
