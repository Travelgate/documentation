import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import KbFeatures from '@site/src/components/KbFeatures';

import styles from './kb.module.css';

function KbHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        // <header className={clsx('hero hero--primary', styles.heroBanner)}>
        //     <div className="container">
        //         <h1 className="hero__title">Knowledge Base</h1>
        //         <p className="hero__subtitle">{siteConfig.tagline}</p>
        //         <div className={styles.buttons}>
        //             <Link
        //                 className="button button--secondary button--lg"
        //                 to="/kb/welcome-to-travelgate/who-we-are/about-us">
        //                 Get Started with KB
        //             </Link>
        //         </div>
        //     </div>
        // </header>
      <header className={clsx('hero hero--primary hero-kb', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Knowledge Base</h1>
          <p className="hero__subtitle">What is Travelgate and how can it help me?</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/kb/welcome-to-travelgate/who-we-are/about-us">
              Start browsing articles <i class="fa-solid fa-chevron-right"></i>
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
            <KbHeader />
            <main>
                {/*
                <KbFeatures />
                */}
                <div className="container">
                  <div className="browse-articles">
                    <div className="row">
                      <div className="col col--12">
                        <div className="section-title">
                          <h3>Travelgate’s Most Read Knowledge Base Articles</h3>
                          <p>Unlock seamless connectivity with Travelgate – explore our top Knowledge Base articles and harness the full potential of our travel tech solutions.</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col--4">
                        <div class="item">
                          <img src="https://storage.travelgate.com/kbase/landing-autoconnections.jpg"/>
                          <h4>Quick Guide to Auto-Connections</h4>
                          <p>This guide will walk you through the process of requesting a connection with one of our Partners via the Travelgate Marketplace. We aim to make this process as straightforward and seamless as possible, helping you connect with Partners and enhance your business opportunities.</p>
                          <p><a href="/kb/platform/app-features/connections/my-connections/guick-guide-to-auto-activations">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--4">
                        <div class="item">
                          <img src="https://storage.travelgate.com/kbase/landing_trafficoptimizer.jpg"/>
                          <h4>Traffic Optimizer</h4>
                          <p>At Travelgate, we understand the impact of handling useless traffic across the entire connectivity chain. That’s why we’ve developed Traffic Optimizer, an intelligent solution that enhances connection efficiency within our Marketplace.</p>
                          <p><a href="/kb/platform/app-features/smart-traffic/traffic-optimizer/traffic-optimizer-details">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--4">
                        <div class="item">
                          <img src="https://storage.travelgate.com/kbase/landing_errorsandwarnings.jpg"/>
                          <h4>Errors and Warnings</h4>
                          <p>Welcome to this section where we'll provide you with a comprehensive list of errors and warnings that users may come across while using our Hotel Buyers API. These errors and warnings can be received in responses during the booking flow, management, and content methods.</p>
                          <p><a href="/kb/connectivity-products/for-buyers/errors-and-warnings/overview">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr/>

                  <div className="browse-articles">
                    <div className="row">
                      <div className="col col--4">
                        <div class="item">
                          <img src="https://storage.travelgate.com/kbase/landing_connectionscontent.jpg" />
                          <h4>Connections Content</h4>
                          <p>In the Connections Content section, you can easily check and force updates for your connections' static content. This allows for timely updates and better market responsiveness, making your operations smoother and more effective.</p>
                          <p><a href="/kb/platform/app-features/connections/connections-content/content-management">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--4">
                        <div class="item">
                          <img src="https://storage.travelgate.com/kbase/landing_logging.jpg"/>
                          <h4>Logging: Logging: Monitor and Review Your Transactions</h4>
                          <p>Travelgate’s Logging feature offers a powerful way to track and analyze transaction logs. Whether you need to review Booking Flow transactions or identify error codes, Logging provides access to critical data for troubleshooting and performance monitoring.</p>
                          <p><a href="/kb/platform/app-features/monitoring-tools/logging/logging-details">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--4">
                        <div class="item">
                          <img src="https://storage.travelgate.com/kbase/landing_pullpush.jpg" />
                          <h4>Pull/Push Connection Types</h4>
                          <p>Understanding the differences between Push and Pull connectivity is key to choosing the right integration strategy in the Travelgate ecosystem. In this article, we break down how each integration works, their pros and cons, and how they impact real-time communication between Buyers and Sellers through Travelgate.</p>
                          <p><a href="/kb/welcome-to-travelgate/connectivity-services/pull-and-push-connectivity">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
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
                          <p><a href="https://community.travelgatex.com/" target="_blank">More information <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--3">
                        <div className="item">
                          <img src="https://stplaformwe.blob.core.windows.net/docs/home_join_community_b.svg" />
                          <h6>Status page</h6>
                          <p>Check the status of our services in real time.</p>
                          <p><a href="https://status.travelgatex.com/" target="_blank">More information <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--3">
                        <div className="item">
                          <img src="https://stplaformwe.blob.core.windows.net/docs/home_join_community_c.svg" />
                          <h6>Integrations Roadmap</h6>
                          <p>Take a look at Travelgate’s Seller API Development Roadmap.</p>
                          <p><a href="https://app.travelgate.com/network/roadmap" target="_blank">More information <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </main>
        </Layout>
    );
}
