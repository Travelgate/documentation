/*! For license information please see 79051c35.ba893407.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4054],{69039:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=s(74848),r=s(28453),n=s(96540);const o={id:"uri",title:"URI"},c=void 0,i={id:"types/scalars/uri",title:"URI",description:"The URI type represents a URI values. A good example mith be an Hotel Image URL.",source:"@site/api/types/scalars/uri.mdx",sourceDirName:"types/scalars",slug:"/types/scalars/uri",permalink:"/api/types/scalars/uri",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"uri",title:"URI"},sidebar:"schemaSidebar",previous:{title:"Time",permalink:"/api/types/scalars/time"},next:{title:"Worker",permalink:"/api/types/scalars/worker"}},l={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:s,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[i,l]=(0,n.useState)(o);return(0,a.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&s]})},h=[{value:"Member Of",id:"member-of",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:['The URI type represents a URI values. A good example mith be an Hotel Image URL.\nIn queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: "http:\\',(0,a.jsx)(t.a,{href:"http://www.travelgatex.com",children:"www.travelgatex.com"}),'".']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"scalar URI\n"})}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/objects/contact",children:(0,a.jsx)(t.code,{children:"Contact"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/giata-data",children:(0,a.jsx)(t.code,{children:"GiataData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/logging-legacy-data",children:(0,a.jsx)(t.code,{children:"LoggingLegacyData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/media",children:(0,a.jsx)(t.code,{children:"Media"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/stats-asset",children:(0,a.jsx)(t.code,{children:"StatsAsset"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/urls",children:(0,a.jsx)(t.code,{children:"Urls"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/urls-input",children:(0,a.jsx)(t.code,{children:"UrlsInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},21020:(e,t,s)=>{var a=s(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var a,n={},l=null,d=null;for(a in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,a)&&!i.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:d,props:n,_owner:c.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var a=s(96540);const r={},n=a.createContext(r);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);