import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="row">
          <div className="col col--3">
            <img src="https://storage.travelgate.com/assets/logo_tgx_negative.svg" className="logo" />
            <p className="copyright">© 2023 Travelgate</p>
          </div>
          <div className="col col--3">
            <h6>Company</h6>
            <ul>
              <li><a href="https://docs.travelgatex.com/integrations-roadmap/" target="_blank">Integrations Roadmap</a></li>
              <li><a href="https://blog.travelgatex.com/en?hsLang=en" target="_blank">Blog</a></li>
              <li><a href="https://community.travelgatex.com/" target="_blank">TGX Community</a></li>
            </ul>
          </div>
          <div className="col col--3">
            <h6>Legal</h6>
            <ul>
              <li><a href="https://www.travelgate.com/cookies-policy" target="_blank">Cookies policy</a></li>
              <li><a href="https://www.travelgate.com/privacy-policy" target="_blank">Privacy Policy</a></li>
              <li><a href="https://www.travelgate.com/aviso-legal" target="_blank">Aviso legal</a></li>
            </ul>
          </div>
          <div className="col col--3">
            <h6>Knowledge Base Articles</h6>
            <ul>
              <li><a href="https://knowledge.travelgatex.com/buying-on-travelgatex" target="_blank">Buying on Travelgate</a></li>
              <li><a href="https://knowledge.travelgatex.com/selling-on-travelgatex" target="_blank">Selling on Travelgate</a></li>
              <li><a href="https://knowledge.travelgatex.com/faqs" target="_blank">FAQS</a></li>
            </ul>
          </div>
        </div>
        {/*
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
        */}
      </div>
    </footer>
  );
}
