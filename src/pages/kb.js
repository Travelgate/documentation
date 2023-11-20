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
        //                 to="/kb/getting-started-with-travelgate/about-us">
        //                 Get Started with KB
        //             </Link>
        //         </div>
        //     </div>
        // </header>
      <header className={clsx('hero hero--primary hero-kb', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Knowledge Base</h1>
          <p className="hero__subtitle">What is TravelgateX and how can it help me?</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/kb/getting-started-with-travelgate/about-us">
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
                          <h3>Most read articles in Travelgate's Knowledge Base</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col--3">
                        <div class="item">
                          <img src="https://stplaformwe.blob.core.windows.net/kbase/home_kb_browse_myconnections.svg" />
                          <h4>My Connections</h4>
                          <p>In My Connections section you will find a list of all your connections. You may filter your accesses based on their status, type, and whether they are active or not.</p>
                          <p><a href="/kb/connections/my-connections/">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--3">
                        <div class="item">
                          <img src="https://stplaformwe.blob.core.windows.net/kbase/home_kb_browse_credentials.svg" />
                          <h4>Hotel-X Credentials</h4>
                          <p>Once you have configured your account, you can access our APP and check your Hotel-X credentials and accesses by following this simple guide.</p>
                          <p><a href="/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--3">
                        <div class="item">
                          <img src="https://stplaformwe.blob.core.windows.net/kbase/home_kb_browse_activations.svg" />
                          <h4>Quick-Guide to Activations</h4>
                          <p>I want to request a new connection, what should I do?</p>
                          <p><a href="/kb/connections/my-connections/guick-guide-to-auto-activations">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--3">
                        <div class="item">
                          <img src="https://stplaformwe.blob.core.windows.net/kbase/home_kb_browse_errors.svg" />
                          <h4>Errors and Warnings</h4>
                          <p>Welcome to this section where we'll provide you with a comprehensive list of errors and warnings that users may come across while using our Hotel Buyers API.</p>
                          <p><a href="/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/overview">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr/>

                  <div className="browse-articles">
                    <div className="row">
                      <div className="col col--4">
                        <div class="item">
                          <h4>Explore GIATA Products in our marketplace</h4>
                          <p>TravelgateX previously offered this solution as GIATA Universal Hotel Codes. There are no costs associated with accessing your GIATA hotel codes through TravelgateX; all we need are your credentials. To utilize this solution, it is necessary to enter into a commercial agreement with GIATA.</p>
                          <p><a href="/kb/getting-started-with-travelgate/About-our-Connectivity/explore-and-discover-giata-products-in-our-marketplace">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--4">
                        <div class="item">
                          <h4>What is Hotel-X and why should i develop it?</h4>
                          <p>Hotel-X Pull Buyers API is a GraphQL-based powerful aggregating API. A single connection provides you a gateway to the largest Network of Buyers and Sellers, trusted by industry leaders and niche providers around the world.</p>
                          <p><a href="/kb/getting-started-with-travelgate/About-our-Connectivity/what-exactly-is-hotel-x-and-why-should-i-develop-it">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                      <div className="col col--4">
                        <div class="item">
                          <h4>What is the difference between Pull and Push Sellers? </h4>
                          <p>An XML integration is basically a connector that acts as a "translator" between the systems of Buyers and Sellers, allowing different formats or programming languages ​​(usually XML) to be compatible. This way, the information from a hotel provider, a Rent a Car, an airline, a railway company, or a shipping company is available on the website of an online travel agency, even if the information in their databases is structured differently.</p>
                          <p><a href="/kb/getting-started-with-travelgate/About-our-Connectivity/what-is-the-difference-between-pull-and-push-sellers">Read article <i class="fa-solid fa-chevron-right"></i></a></p>
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
                          <p><a href="https://docs.travelgatex.com/integrations-roadmap/" target="_blank">More information <i class="fa-solid fa-chevron-right"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </main>
        </Layout>
    );
}
