/*! For license information please see f904a976.a445b751.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62793],{70711:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>v,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>b});var t=a(74848),r=a(28453),n=a(96540);const l={id:"avail-rates-rs",title:"AvailRatesRs"},i=void 0,d={id:"types/objects/avail-rates-rs",title:"AvailRatesRs",description:"Represents the response data for rates availability operations.",source:"@site/api/types/objects/avail-rates-rs.mdx",sourceDirName:"types/objects",slug:"/types/objects/avail-rates-rs",permalink:"/api/types/objects/avail-rates-rs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"avail-rates-rs",title:"AvailRatesRs"},sidebar:"schemaSidebar",previous:{title:"AvailOffersRs",permalink:"/api/types/objects/avail-offers-rs"},next:{title:"AvailRetrieveRs",permalink:"/api/types/objects/avail-retrieve-rs"}},o={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},v=e=>{const s={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:a,startOpen:l=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[d,o]=(0,n.useState)(l);return(0,t.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AvailRatesRs.<b>rates</b></code><Bullet></Bullet><code>[RateAvailLoad]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availratesrsratesrateavailload--",level:4},{value:'<code>AvailRatesRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availratesrsadvisemessagesadvisemessage--",level:4},{value:'<code>AvailRatesRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availratesrssuccessboolean--",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Represents the response data for rates availability operations."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type AvailRatesRs {\n  rates: [RateAvailLoad]\n  adviseMessages: [AdviseMessage]\n  success: Boolean!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"availratesrsratesrateavailload--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRatesRs.",(0,t.jsx)("b",{children:"rates"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/rate-avail-load",children:(0,t.jsx)(s.code,{children:"[RateAvailLoad]"})})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"List of rates availabilities. See RateAvailLoad."}),"\n",(0,t.jsxs)(s.h4,{id:"availratesrsadvisemessagesadvisemessage--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRatesRs.",(0,t.jsx)("b",{children:"adviseMessages"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"List of advise messages associated with the operation. See AdviseMessage."}),"\n",(0,t.jsxs)(s.h4,{id:"availratesrssuccessboolean--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRatesRs.",(0,t.jsx)("b",{children:"success"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean!"})})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Indicates whether the operation was successful."}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-mutation",children:(0,t.jsx)(s.code,{children:"InventoryMutation"})})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-query",children:(0,t.jsx)(s.code,{children:"InventoryQuery"})})," ",(0,t.jsx)(v,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},21020:(e,s,a)=>{var t=a(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,a){var t,n={},o=null,c=null;for(t in void 0!==a&&(o=""+a),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(c=s.ref),s)l.call(s,t)&&!d.hasOwnProperty(t)&&(n[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===n[t]&&(n[t]=s[t]);return{$$typeof:r,type:e,key:o,ref:c,props:n,_owner:i.current}}s.Fragment=n,s.jsx=o,s.jsxs=o},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>i});var t=a(96540);const r={},n=t.createContext(r);function l(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);