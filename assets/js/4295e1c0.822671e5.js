/*! For license information please see 4295e1c0.822671e5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22284],{33656:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>b});var n=o(74848),r=o(28453),a=o(96540);const l={id:"hotel-option-rate-rule",title:"HotelOptionRateRule",hide_table_of_contents:!1},s=void 0,i={id:"objects/hotel-option-rate-rule",title:"HotelOptionRateRule",description:"No description",source:"@site/api/objects/hotel-option-rate-rule.mdx",sourceDirName:"objects",slug:"/objects/hotel-option-rate-rule",permalink:"/api/objects/hotel-option-rate-rule",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-option-rate-rule",title:"HotelOptionRateRule",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelOptionRateRestriction",permalink:"/api/objects/hotel-option-rate-restriction"},next:{title:"HotelOptionRate",permalink:"/api/objects/hotel-option-rate"}},c={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:o,startOpen:l=!1})=>{const s={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,a.useState)(l);return(0,n.jsxs)(s.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&o]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelOptionRateRule.<b>type</b></code><Bullet></Bullet><code>RateRulesType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionrateruletyperaterulestype--",level:4},{value:'<code>HotelOptionRateRule.<b>rates</b></code><Bullet></Bullet><code>[HotelOptionRate!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionraterulerateshoteloptionrate--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type HotelOptionRateRule {\n  type: RateRulesType!\n  rates: [HotelOptionRate!]\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"hoteloptionrateruletyperaterulestype--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionRateRule.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/enums/rate-rules-type",children:(0,n.jsx)(t.code,{children:"RateRulesType!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Rate rule type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"hoteloptionraterulerateshoteloptionrate--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionRateRule.",(0,n.jsx)("b",{children:"rates"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/objects/hotel-option-rate",children:(0,n.jsx)(t.code,{children:"[HotelOptionRate!]"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Rates applied to the option"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/hotel-option-search",children:(0,n.jsx)(t.code,{children:"HotelOptionSearch"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,t,o)=>{var n=o(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,a={},c=null,d=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,o)=>{e.exports=o(21020)},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>s});var n=o(96540);const r={},a=n.createContext(r);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);