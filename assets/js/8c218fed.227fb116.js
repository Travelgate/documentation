/*! For license information please see 8c218fed.227fb116.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19154],{37690:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>p,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var r=s(74848),t=s(28453),o=s(96540);const n={id:"offers-avail-load",title:"OffersAvailLoad"},l=void 0,d={id:"types/objects/offers-avail-load",title:"OffersAvailLoad",description:"Represents a load operation for offer availabilities.",source:"@site/api/types/objects/offers-avail-load.mdx",sourceDirName:"types/objects",slug:"/types/objects/offers-avail-load",permalink:"/api/types/objects/offers-avail-load",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"offers-avail-load",title:"OffersAvailLoad"},sidebar:"schemaSidebar",previous:{title:"OfferDto",permalink:"/api/types/objects/offer-dto"},next:{title:"OffersRs",permalink:"/api/types/objects/offers-rs"}},i={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const a={a:"a",...(0,t.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,t.R)()},[d,i]=(0,o.useState)(n);return(0,r.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>OffersAvailLoad.<b>rateCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"offersavailloadratecodestring-",level:4},{value:'<code>OffersAvailLoad.<b>offers</b></code><Bullet></Bullet><code>[OfferAvailLoad]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"offersavailloadoffersofferavailload--",level:4},{value:'<code>OffersAvailLoad.<b>dateRange</b></code><Bullet></Bullet><code>DateRangeProduct</code> <Badge class="badge badge--secondary"></Badge>',id:"offersavailloaddaterangedaterangeproduct-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Represents a load operation for offer availabilities."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:"type OffersAvailLoad {\n  rateCode: String\n  offers: [OfferAvailLoad]\n  dateRange: DateRangeProduct\n}\n"})}),"\n",(0,r.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(a.h4,{id:"offersavailloadratecodestring-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersAvailLoad.",(0,r.jsx)("b",{children:"rateCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"List of rate codes associated with the offers."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"offersavailloadoffersofferavailload--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersAvailLoad.",(0,r.jsx)("b",{children:"offers"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.a,{href:"/api/types/objects/offer-avail-load",children:(0,r.jsx)(a.code,{children:"[OfferAvailLoad]"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"List of offers to load. See OfferAvailLoad."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"offersavailloaddaterangedaterangeproduct-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersAvailLoad.",(0,r.jsx)("b",{children:"dateRange"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.a,{href:"/api/types/objects/date-range-product",children:(0,r.jsx)(a.code,{children:"DateRangeProduct"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"Date range to apply"}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/api/types/objects/avail-offers-rs",children:(0,r.jsx)(a.code,{children:"AvailOffersRs"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(c,{}),(0,r.jsx)(a.a,{href:"/api/types/objects/avail-retrieve-rs",children:(0,r.jsx)(a.code,{children:"AvailRetrieveRs"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},21020:(e,a,s)=>{var r=s(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,s){var r,o={},i=null,c=null;for(r in void 0!==s&&(i=""+s),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(c=a.ref),a)n.call(a,r)&&!d.hasOwnProperty(r)&&(o[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:t,type:e,key:i,ref:c,props:o,_owner:l.current}}a.Fragment=o,a.jsx=i,a.jsxs=i},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>l});var r=s(96540);const t={},o=r.createContext(t);function n(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);