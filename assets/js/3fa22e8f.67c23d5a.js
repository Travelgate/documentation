/*! For license information please see 3fa22e8f.67c23d5a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86012],{30862:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>v,assets:()=>o,contentTitle:()=>n,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"types/objects/avail-retrieve-rs","title":"AvailRetrieveRs","description":"Represents the response of an availability retrieve operation.","source":"@site/api/types/objects/avail-retrieve-rs.mdx","sourceDirName":"types/objects","slug":"/types/objects/avail-retrieve-rs","permalink":"/api/types/objects/avail-retrieve-rs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"avail-retrieve-rs","title":"AvailRetrieveRs"},"sidebar":"schemaSidebar","previous":{"title":"AvailRatesRs","permalink":"/api/types/objects/avail-rates-rs"},"next":{"title":"BedStatic","permalink":"/api/types/objects/bed-static"}}');var t=a(74848),d=a(28453),i=a(96540);const l={id:"avail-retrieve-rs",title:"AvailRetrieveRs"},n=void 0,o={},c=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),v=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:s,children:a,startOpen:r=!1})=>{const[d,l]=(0,i.useState)(r);return(0,t.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&a]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>AvailRetrieveRs.<b>rates</b></code><Bullet></Bullet><code>[RateAvailLoad]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availretrieversratesrateavailload--",level:4},{value:'<code>AvailRetrieveRs.<b>derivedRates</b></code><Bullet></Bullet><code>[DerivedRatesAvailLoad]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availretrieversderivedratesderivedratesavailload--",level:4},{value:'<code>AvailRetrieveRs.<b>offers</b></code><Bullet></Bullet><code>[OffersAvailLoad]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availretrieversoffersoffersavailload--",level:4},{value:'<code>AvailRetrieveRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availretrieverssuccessboolean--",level:4},{value:'<code>AvailRetrieveRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availretrieversadvisemessagesadvisemessage--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Represents the response of an availability retrieve operation."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type AvailRetrieveRs {\n  rates: [RateAvailLoad]\n  derivedRates: [DerivedRatesAvailLoad]\n  offers: [OffersAvailLoad]\n  success: Boolean!\n  adviseMessages: [AdviseMessage]\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"availretrieversratesrateavailload--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRetrieveRs.",(0,t.jsx)("b",{children:"rates"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/rate-avail-load",children:(0,t.jsx)(s.code,{children:"[RateAvailLoad]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"List of rates retrieved. See RateAvailLoad."}),"\n",(0,t.jsxs)(s.h4,{id:"availretrieversderivedratesderivedratesavailload--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRetrieveRs.",(0,t.jsx)("b",{children:"derivedRates"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/derived-rates-avail-load",children:(0,t.jsx)(s.code,{children:"[DerivedRatesAvailLoad]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"List of derived rates retrieved. See DerivedRatesAvailLoad."}),"\n",(0,t.jsxs)(s.h4,{id:"availretrieversoffersoffersavailload--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRetrieveRs.",(0,t.jsx)("b",{children:"offers"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/offers-avail-load",children:(0,t.jsx)(s.code,{children:"[OffersAvailLoad]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"List of offers retrieved. See OffersAvailLoad."}),"\n",(0,t.jsxs)(s.h4,{id:"availretrieverssuccessboolean--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRetrieveRs.",(0,t.jsx)("b",{children:"success"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Indicates whether the operation was successful."}),"\n",(0,t.jsxs)(s.h4,{id:"availretrieversadvisemessagesadvisemessage--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailRetrieveRs.",(0,t.jsx)("b",{children:"adviseMessages"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"List of advise messages associated with the operation. See AdviseMessage."}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-query",children:(0,t.jsx)(s.code,{children:"InventoryQuery"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},21020:(e,s,a)=>{var r=a(96540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,a){var r,d={},o=null,c=null;for(r in void 0!==a&&(o=""+a),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,r)&&!n.hasOwnProperty(r)&&(d[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===d[r]&&(d[r]=s[r]);return{$$typeof:t,type:e,key:o,ref:c,props:d,_owner:l.current}}s.Fragment=d,s.jsx=o,s.jsxs=o},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>l});var r=a(96540);const t={},d=r.createContext(t);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);