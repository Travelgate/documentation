/*! For license information please see 8876e7fd.3a19ca72.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18006],{28981:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=t(74848),s=t(28453),o=t(96540);const i={id:"trip-mode",title:"TripMode"},a=void 0,d={id:"types/enums/trip-mode",title:"TripMode",description:"No description",source:"@site/api/types/enums/trip-mode.mdx",sourceDirName:"types/enums",slug:"/types/enums/trip-mode",permalink:"/api/types/enums/trip-mode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"trip-mode",title:"TripMode"},sidebar:"schemaSidebar",previous:{title:"TransportType",permalink:"/api/types/enums/transport-type"},next:{title:"UnitTimeType",permalink:"/api/types/enums/unit-time-type"}},l={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,s.R)()},[d,l]=(0,o.useState)(i);return(0,r.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},h=[{value:"Values",id:"values",level:3},{value:"<code>TripMode.<b>DEPARTING</b></code>",id:"tripmodedeparting",level:4},{value:"<code>TripMode.<b>RETURNING</b></code>",id:"tripmodereturning",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum TripMode {\n  DEPARTING\n  RETURNING\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"tripmodedeparting",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TripMode.",(0,r.jsx)("b",{children:"DEPARTING"})]})})}),"\n",(0,r.jsx)(n.h4,{id:"tripmodereturning",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TripMode.",(0,r.jsx)("b",{children:"RETURNING"})]})})}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/objects/journey",children:(0,r.jsx)(n.code,{children:"Journey"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:c,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);