/*! For license information please see 3f79e46d.8f32f12e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61457],{43380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>u,toc:()=>d});var s=r(74848),o=r(28453);const n={sidebar_position:16},a="HubStatus codes and errors",u={id:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/hubstatus-codes-and-errors",title:"HubStatus codes and errors",description:"What are the potential hubStatus codes that can be returned in a method response?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/hubstatus-codes-and-errors.mdx",sourceDirName:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings",slug:"/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/hubstatus-codes-and-errors",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/hubstatus-codes-and-errors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"kbSidebar",previous:{title:"303 error - Booking not confirmed",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-booking-not-confirmed"},next:{title:"HTTP Status Codes",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/http-status-codes"}},i={},d=[{value:"What are the potential hubStatus codes that can be returned in a method response?\ud83d\udca1",id:"what-are-the-potential-hubstatus-codes-that-can-be-returned-in-a-method-response",level:3},{value:"I have received a hubStatus 3 error in my Legacy Pull Buyers API response, what can I do?\u26a0\ufe0f",id:"i-have-received-a-hubstatus-3-error-in-my-legacy-pull-buyers-api-response-what-can-i-do\ufe0f",level:3}];function c(e){const t={a:"a",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{TipContactCustomerCare:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipContactCustomerCare",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"hubstatus-codes-and-errors",children:"HubStatus codes and errors"})}),"\n",(0,s.jsx)(t.h3,{id:"what-are-the-potential-hubstatus-codes-that-can-be-returned-in-a-method-response",children:"What are the potential hubStatus codes that can be returned in a method response?\ud83d\udca1"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Hubstatus 1: OK"})," - This code indicates that the request has been successfully executed without any Hub errors."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Hubstatus 2: EXCEPTION"})," - If you receive this code, it means that the request has encountered an uncontrolled exception at the Hub level."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Hubstatus 3: TIMEOUT"})," - This code indicates that the request has encountered a timeout error. A hubStatus code of 3 indicates that the hub timeout set by the Buyer in their request was insufficient to parse the Seller's response."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Hubstatus 4: UNDEFINED"})," - If you receive this code, it means that the request has encountered an unspecified Hub error."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"i-have-received-a-hubstatus-3-error-in-my-legacy-pull-buyers-api-response-what-can-i-do\ufe0f",children:"I have received a hubStatus 3 error in my Legacy Pull Buyers API response, what can I do?\u26a0\ufe0f"}),"\n",(0,s.jsxs)(t.p,{children:["To prevent hubStatus 3 errors, it is important to ensure that the ",(0,s.jsx)(t.a,{href:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/timeout-settings#my-legacy-api-requests-contain-two-timeout-tags-what-distinguishes-one-from-the-other",children:"Hub timeout"})," set by the Buyer is ",(0,s.jsx)(t.strong,{children:"at least 300ms higher"})," than the provider timeout tag. This additional time allows for sufficient parsing of the Seller's response."]}),"\n",(0,s.jsx)(r,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var s=r(96540),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var s,n={},d=null,c=null;for(s in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:o,type:e,key:d,ref:c,props:n,_owner:u.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>u});var s=r(96540);const o={},n=s.createContext(o);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);