/*! For license information please see 8fde3252.cdae281d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36350],{28733:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(74848),s=r(28453);const i={sidebar_position:3},o="Updating to TLS 1.2 or Later",a={id:"security/tls",title:"Updating to TLS 1.2 or Later",description:"Overview",source:"@site/docs/security/tls.md",sourceDirName:"security",slug:"/security/tls",permalink:"/docs/security/tls",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/security/tls.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"FAQs",permalink:"/docs/security/iso_27k/faq"},next:{title:"California Senate Bill 644 - Impact on Hotel and Short-Term Rental Bookings",permalink:"/docs/\u2696\ufe0f Legislation/Publications/California Law/California-law"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"Key benefits",id:"key-benefits",level:3},{value:"Recommended Actions",id:"recommended-actions",level:2},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2},{value:"Testing Your Implementation",id:"testing-your-implementation",level:2},{value:"Deadline",id:"deadline",level:2},{value:"Contact Us",id:"contact-us",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"updating-to-tls-12-or-later",children:"Updating to TLS 1.2 or Later"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["As part of our commitment to maintaining the highest levels of security and encryption for your data, Travelgate is requiring all Partners to use Transport Layer Security (TLS) version 1.2 or later when interacting with our services. By ",(0,t.jsx)(n.strong,{children:"January 31, 2025"}),", support for TLS versions 1.0 and 1.1 will be discontinued."]}),"\n",(0,t.jsx)(n.p,{children:"This document outlines the steps needed to update your systems to TLS 1.2 or later to ensure uninterrupted service and enhanced security."}),"\n",(0,t.jsx)(n.h2,{id:"why-is-this-important",children:"Why is this important?"}),"\n",(0,t.jsx)(n.p,{children:"Transport Layer Security (TLS) is a widely used protocol that secures data communication over the internet. While TLS 1.0 and 1.1 have been reliable in the past, they are now outdated and do not provide the same level of protection as newer versions."}),"\n",(0,t.jsx)(n.h3,{id:"key-benefits",children:"Key benefits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved Security"}),": TLS 1.2 includes stronger encryption algorithms and features like perfect forward secrecy, which provides greater data protection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compliance with Modern Standards"}),": Many regulatory standards and industry best practices now mandate the use of TLS 1.2 or later."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Future-proofing"}),": As older versions become deprecated, transitioning now ensures that your services remain compliant and secure in the long term."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"recommended-actions",children:"Recommended Actions"}),"\n",(0,t.jsx)(n.p,{children:"To ensure that your systems remain secure and your service with Travelgate continues without disruption, please follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Identify Systems Using TLS 1.0 or 1.1"}),(0,t.jsx)(n.br,{}),"\n","Review your infrastructure to determine which of your systems currently rely on TLS 1.0 or 1.1 for communication with Travelgate services. These could include APIs, websites, or other services."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Update to TLS 1.2 or Later"}),(0,t.jsx)(n.br,{}),"\n","Transition any systems that still use TLS 1.0 or 1.1 to TLS 1.2 or later. This may involve updating configurations, software, or libraries that handle TLS connections."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Test Your Configuration"}),(0,t.jsx)(n.br,{}),"\n","After updating, test your systems to ensure they are correctly communicating with Travelgate using TLS 1.2 or later. We recommend using tools such as ",(0,t.jsx)(n.a,{href:"https://www.ssllabs.com/ssltest/",children:"SSL Labs' SSL Test"})," to verify your TLS setup."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Monitor for Security Updates"}),(0,t.jsx)(n.br,{}),"\n","Stay updated with the latest security patches and TLS improvements. Regularly review and update your TLS configurations as newer versions (like TLS 1.3) become more widely supported."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Older Operating Systems or Libraries"}),(0,t.jsx)(n.br,{}),"\n","Some older systems or libraries may not support TLS 1.2. In such cases, you may need to upgrade the underlying operating system, library, or API to ensure compatibility with TLS 1.2 or later."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Configuration Errors"}),(0,t.jsx)(n.br,{}),"\n","Misconfigurations can lead to failures when upgrading to TLS 1.2. Be sure to review documentation for any services or libraries you are using to ensure proper TLS 1.2 implementation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"API Clients"}),(0,t.jsx)(n.br,{}),"\n","Ensure that any API clients or third-party integrations that communicate with Travelgate are also using TLS 1.2 or later."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"testing-your-implementation",children:"Testing Your Implementation"}),"\n",(0,t.jsx)(n.p,{children:"To verify that your systems are correctly configured, you can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"openssl"})," to check TLS support:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"openssl s_client -connect yourservice.com:443 -tls1_2\n"})}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Run external tools like SSL Labs' test to ensure your services are properly supporting TLS 1.2 or later."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deadline",children:"Deadline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Final Deadline"}),": TLS 1.0 and 1.1 will no longer be supported after ",(0,t.jsx)(n.strong,{children:"January 31, 2025"}),". Systems that have not been updated to TLS 1.2 or later by this date will experience disruptions in service when connecting to Travelgate services."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"contact-us",children:"Contact Us"}),"\n",(0,t.jsxs)(n.p,{children:["If you have any questions or need assistance with upgrading to TLS 1.2 or later, please contact our Support Team through the ",(0,t.jsx)(n.a,{href:"https://app.travelgate.com/support",children:"Support Portal"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,i={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);