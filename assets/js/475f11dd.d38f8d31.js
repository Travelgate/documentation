/*! For license information please see 475f11dd.d38f8d31.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82795],{60633:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(74848),s=n(28453),r=n(96540);const o={id:"amount-type",title:"AmountType",hide_table_of_contents:!1},c=void 0,l={id:"objects/amount-type",title:"AmountType",description:"An amount is a number of monetary units specified in a currency.",source:"@site/api/objects/amount-type.mdx",sourceDirName:"objects",slug:"/objects/amount-type",permalink:"/api/objects/amount-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"amount-type",title:"AmountType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AmountCancelPenalty",permalink:"/api/objects/amount-cancel-penalty"},next:{title:"API",permalink:"/api/objects/api"}},d={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[l,d]=(0,r.useState)(o);return(0,a.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AmountType.<b>amount</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"amounttypeamountfloat-",level:4},{value:'<code>AmountType.<b>curCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"amounttypecurcodestring-",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"An amount is a number of monetary units specified in a currency."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type AmountType {\n  amount: Float\n  curCode: String\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"amounttypeamountfloat-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AmountType.",(0,a.jsx)("b",{children:"amount"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/scalars/float",children:(0,a.jsx)(t.code,{children:"Float"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"amounttypecurcodestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AmountType.",(0,a.jsx)("b",{children:"curCode"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/objects/fee",children:(0,a.jsx)(t.code,{children:"Fee"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/objects/flight-offer-data",children:(0,a.jsx)(t.code,{children:"FlightOfferData"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/objects/flight-price",children:(0,a.jsx)(t.code,{children:"FlightPrice"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/objects/flight-surcharge",children:(0,a.jsx)(t.code,{children:"FlightSurcharge"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/objects/tax-summary-type",children:(0,a.jsx)(t.code,{children:"TaxSummaryType"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/objects/tax-type",children:(0,a.jsx)(t.code,{children:"TaxType"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var a=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,r={},d=null,i=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:i,props:r,_owner:c.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(96540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);