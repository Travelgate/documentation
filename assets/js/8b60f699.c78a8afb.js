/*! For license information please see 8b60f699.c78a8afb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55361],{24825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"apis/for-buyers/legacy-pull-buyers-api/making-requests/xml-api","title":"XML API","description":"The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the Hotel-X Buyers API in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace.","source":"@site/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/xml-api.mdx","sourceDirName":"apis/for-buyers/legacy-pull-buyers-api/making-requests","slug":"/apis/for-buyers/legacy-pull-buyers-api/making-requests/xml-api","permalink":"/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/xml-api","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/xml-api.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"XML API","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Request Headers","permalink":"/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/request-headers"},"next":{"title":"Common Elements","permalink":"/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/common-elements"}}');var a=r(74848),n=r(28453);const i={title:"XML API",sidebar_position:3},o="Legacy Buyers XML API",l={},u=[];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"Deprecated API",type:"danger",children:(0,a.jsxs)(t.p,{children:["The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the ",(0,a.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Buyers API"})," in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace."]})}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"legacy-buyers-xml-api",children:"Legacy Buyers XML API"})}),"\n",(0,a.jsx)(t.p,{children:"Legacy Pull Buyers API is a travel API based on XML. All requests are expected to be standard HTTP POST requests, with the POST body containing the XML request within a SOAP envelope."}),"\n",(0,a.jsx)(t.p,{children:"In the Legacy Pull Buyers API framework, you will need to submit a request to Travelgate's system. Subsequently, Travelgate will validate the format and forward it to the Seller's endpoint. The Seller will receive the request, generate a response, and send it back, once again forwarding it to Travelgate, which will, in turn, relay it to the Buyer; that is, to you."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var s=r(96540),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var s,n={},u=null,c=null;for(s in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:a,type:e,key:u,ref:c,props:n,_owner:o.current}}t.Fragment=n,t.jsx=u,t.jsxs=u},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var s=r(96540);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);