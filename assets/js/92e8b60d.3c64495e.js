/*! For license information please see 92e8b60d.3c64495e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61773],{83006:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=n(74848),r=n(28453),o=n(96540);const c={id:"fee",title:"Fee"},a=void 0,d={id:"types/objects/fee",title:"Fee",description:"Amount added on to a charge for a specific product, purpose, or service.",source:"@site/api/types/objects/fee.mdx",sourceDirName:"types/objects",slug:"/types/objects/fee",permalink:"/api/types/objects/fee",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"fee",title:"Fee"},sidebar:"schemaSidebar",previous:{title:"Feature",permalink:"/api/types/objects/feature"},next:{title:"FerryAccommodation",permalink:"/api/types/objects/ferry-accommodation"}},l={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const a={details:"details",summary:"summary",...(0,r.R)()},[d,l]=(0,o.useState)(c);return(0,s.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Fee.<b>amount</b></code><Bullet></Bullet><code>AmountType</code> <Badge class="badge badge--secondary"></Badge>',id:"feeamountamounttype-",level:4},{value:'<code>Fee.<b>descText</b></code><Bullet></Bullet><code>TextType</code> <Badge class="badge badge--secondary"></Badge>',id:"feedesctexttexttype-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Amount added on to a charge for a specific product, purpose, or service."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type Fee {\n  amount: AmountType\n  descText: TextType\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"feeamountamounttype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Fee.",(0,s.jsx)("b",{children:"amount"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/amount-type",children:(0,s.jsx)(t.code,{children:"AmountType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"feedesctexttexttype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Fee.",(0,s.jsx)("b",{children:"descText"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/text-type",children:(0,s.jsx)(t.code,{children:"TextType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/objects/flight-price",children:(0,s.jsx)(t.code,{children:"FlightPrice"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/flight-surcharge",children:(0,s.jsx)(t.code,{children:"FlightSurcharge"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,i=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)c.call(t,s)&&!d.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:i,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);