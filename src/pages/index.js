import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/get-started/introduction">
    //         Get Startedx
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <header className={clsx('hero hero--primary hero-docs', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Travelgate Documentation</h1>
        <p className="hero__subtitle">Intuitive, flexible and customisable APIs connecting Buyers and Sellers across the Travel Industry.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/get-started/introduction">
            Documentation <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <Link
            className="button button--secondary button--lg margin-left--md button--outline"
            to="/kb">
            Knowledge Base <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      {/*
        <HomepageFeatures />
      */}
        <div className="container">
          <div className="browse-articles">
            <div className="row">
              <div className="col col--12">
                <div className="section-title">
                  <h3>Explore Travelgate APIs</h3>
                  <p>Travelgate offers customized API solutions to enhance travel operations, providing two main types of API connections for Buyers and Sellers: Pull APIs and Push APIs.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col--4">
                <div className="item">
                  <img src="https://storage.travelgate.com/docs/home_docs_browse_api_hotelx.svg" />
                  <h4>Hotel-X Pull Buyers API</h4>
                  <p>Hotel-X API allows you to get results from the largest network of Sellers in a single request. It enables access to static information, booking and reservation management.</p>
                  <p><a href="/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart">Quickstart guide <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
              <div className="col col--4">
                <div className="item">
                  <img src="https://storage.travelgate.com/docs/home_docs_browse_channelx.svg" />
                  <h4>Channel-X Push Buyers API</h4>
                  <p>Channel-X API extracts products loaded into our Inventory tool and pushes them to the Buyer’s system. Note that to enable bookings, it is essential to also develop Hotel-X API.</p>
                  <p><a href="/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart">Quickstart guide <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
              <div className="col col--4">
                <div className="item">
                  <img src="https://storage.travelgate.com/docs/home_docs_browse_hotelpush.svg" />
                  <h4>Hotel Push Sellers API</h4>
                  <p>By combining Inventory tool and the Hotel Push Sellers API, Sellers can push their products into Travelgate database, making them accessible to Buyers.</p>
                  <p><a href="/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/quickstart">Quickstart guide <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="browse-articles">
            <div className="row">
              <div className="col col--12">
                <div className="section-title">
                  <h3>Explore Travelgate APPs</h3>
                  <p>If you don’t have an API in your tech stack, aren’t integrated with any tech platform, or simply want to maximize our apps, Travelgate offers user-friendly, tailored solutions.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col--4">
                <div className="item">
                  <img src="https://storage.travelgate.com/docs/home_docs_browse_inventory.svg" />
                  <h4>Inventory</h4>
                  <p>In our Inventory extranet we will give you the tools to setup hotels, rates and rooms contracted with the hoteliers, allowing channel managers to push availability and prices.</p>
                  <p><a href="/docs/apps/inventory/quickstart">Quickstart guide <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
              <div className="col col--4">
                <div className="item">
                  <img src="https://storage.travelgate.com/docs/home_docs_browse_distribution.svg" />
                  <h4>Distribution</h4>
                  <p>With Distribution you will be able to configure distribution rules to connect your B2B Buyers effortless and access all Sellers from our Marketplace.</p>
                  <p><a href="/docs/apps/distribution/quickstart">Quickstart guide <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="subhero-kb">
          <div className="container">
            <div className="aux">
              <div className="wrap-text">
                <h3>Knowledge Base</h3>
                <p>Are your already engaged in buying and selling? Our Knowledge Base provides answers to all your doubts. Explore our articles for solutions to concerns, technical issues, web usage and beyond.</p>
                <Link
                  className="button button--secondary button--lg"
                  to="/kb">
                  Knowledge Base <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
              <img src="https://stplaformwe.blob.core.windows.net/docs/home_docs_hero_kb.svg" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="join-community">
            <div className="row">
              <div className="col col--3">
                <h5>Join a community of builders</h5>
              </div>
              <div className="col col--3">
                <div className="item">
                  <img src="https://stplaformwe.blob.core.windows.net/docs/home_join_community_a.svg" />
                  <h6>Community</h6>
                  <p>Explore the latest feature releases and share your ideas and suggestions.</p>
                  <p><a href="https://community.travelgatex.com/" target="_blank">More information <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
              <div className="col col--3">
                <div className="item">
                  <img src="https://stplaformwe.blob.core.windows.net/docs/home_join_community_b.svg" />
                  <h6>Status page</h6>
                  <p>Check the status of our services in real time.</p>
                  <p><a href="https://status.travelgatex.com/" target="_blank">More information <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
              <div className="col col--3">
                <div className="item">
                  <img src="https://stplaformwe.blob.core.windows.net/docs/home_join_community_c.svg" />
                  <h6>Integrations Roadmap</h6>
                  <p>Take a look at Travelgate’s Seller API Development Roadmap.</p>
                  <p><a href="https://app.travelgate.com/network/roadmap" target="_blank">More information <i className="fa-solid fa-chevron-right"></i></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

    </Layout>
  );
}
