/*! For license information please see 9085fdd5.dcd3cb7d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12258],{12459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(74848),s=r(28453);const i={sidebar_position:2},o="Request Headers",a={id:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests/request-headers",title:"Request Headers",description:"The following HTTP request headers are essential for all request methods and must be included in every API request.",source:"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests/request-headers.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests",slug:"/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests/request-headers",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests/request-headers",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests/request-headers.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"API Endpoint",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests/endpoint"},next:{title:"GraphQL API",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/making-requests/graphql-api"}},u={},d=[{value:"Mandatory Request Headers",id:"mandatory-request-headers",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"request-headers",children:"Request Headers"}),"\n",(0,n.jsx)(t.p,{children:"The following HTTP request headers are essential for all request methods and must be included in every API request."}),"\n",(0,n.jsx)(t.h3,{id:"mandatory-request-headers",children:"Mandatory Request Headers"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Gzip Compression"}),": In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"Accept-Encoding: gzip\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"API Key"}),": Authentication is required for every request to the Travelgate GraphQL API. An API Key must be included in the HTTP Authorization request header to authenticate the user agent with the server. You can find your API Key on the Travelgate website in Connections > ",(0,n.jsx)(t.a,{href:"https://app.travelgatex.com/connections/settings",children:"Connections Settings"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"Authorization: ApiKey xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["By default, your API Key will not have the Inventory Set Up GraphQL API enabled, so if you are interested in using this tool please create a ",(0,n.jsx)(t.a,{href:"https://app.travelgatex.com/tickets",children:"Ticket"})," indicating the access that you would like to enable it for."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);