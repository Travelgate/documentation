/*! For license information please see 03176e91.506b1f95.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71605],{77906:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/request-headers","title":"Request Headers","description":"The following HTTP request headers are essential for all request methods and must be included in every API request.","source":"@site/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/request-headers.mdx","sourceDirName":"apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests","slug":"/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/request-headers","permalink":"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/request-headers","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/request-headers.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"API Endpoint","permalink":"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/endpoint"},"next":{"title":"GraphQL API","permalink":"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/graphql-api"}}');var s=t(74848),a=t(28453);const o={sidebar_position:2},i="Request Headers",l={},d=[{value:"Mandatory Request Headers",id:"mandatory-request-headers",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"request-headers",children:"Request Headers"})}),"\n",(0,s.jsx)(r.p,{children:"The following HTTP request headers are essential for all request methods and must be included in every API request."}),"\n",(0,s.jsx)(r.h3,{id:"mandatory-request-headers",children:"Mandatory Request Headers"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Gzip Compression"}),": In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",children:"Accept-Encoding: gzip\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"API Key"}),": Authentication is required for every request to the Travelgate GraphQL API. An API Key must be included in the HTTP Authorization request header to authenticate the user agent with the server. You can find your API Key on the Travelgate website in Connections > ",(0,s.jsx)(r.a,{href:"https://app.travelgatex.com/connections/settings",children:"Connections Settings"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",children:"Authorization: ApiKey xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n"})}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["By default, your API Key will not have the Inventory Set Up GraphQL API enabled, so if you are interested in using this tool please create a ",(0,s.jsx)(r.a,{href:"https://app.travelgate.com/support",children:"Ticket"})," indicating the access that you would like to enable it for."]})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,a={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:u,props:a,_owner:i.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);