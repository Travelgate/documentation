/*! For license information please see 7dc01cd5.f7421366.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75350],{29830:(e,r,a)=>{a.r(r),a.d(r,{Badge:()=>h,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>y,assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>n,toc:()=>b});var d=a(74848),o=a(28453),l=a(96540);const s={id:"ferry-order-payload",title:"FerryOrderPayload",hide_table_of_contents:!1},c=void 0,n={id:"objects/ferry-order-payload",title:"FerryOrderPayload",description:"No description",source:"@site/api/objects/ferry-order-payload.mdx",sourceDirName:"objects",slug:"/objects/ferry-order-payload",permalink:"/api/objects/ferry-order-payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ferry-order-payload",title:"FerryOrderPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryOffer",permalink:"/api/objects/ferry-offer"},next:{title:"FerryQuotePayload",permalink:"/api/objects/ferry-quote-payload"}},t={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},y=e=>{const r={a:"a",...(0,o.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,o.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:r,children:a,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,o.R)()},[n,t]=(0,l.useState)(s);return(0,d.jsxs)(c.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:n?e:r}),n&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>FerryOrderPayload.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadadvisemessagesadvisemessage--",level:4},{value:'<code>FerryOrderPayload.<b>status</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadstatusstring-",level:4},{value:'<code>FerryOrderPayload.<b>locator</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadlocatorstring-",level:4},{value:'<code>FerryOrderPayload.<b>departure</b></code><Bullet></Bullet><code>FerryOfferBook</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloaddepartureferryofferbook-",level:4},{value:'<code>FerryOrderPayload.<b>return</b></code><Bullet></Bullet><code>FerryOfferBook</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadreturnferryofferbook-",level:4},{value:'<code>FerryOrderPayload.<b>holder</b></code><Bullet></Bullet><code>Holder</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadholderholder-",level:4},{value:'<code>FerryOrderPayload.<b>cancelPolicy</b></code><Bullet></Bullet><code>CancelPolicy</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadcancelpolicycancelpolicy-",level:4},{value:'<code>FerryOrderPayload.<b>totalPrice</b></code><Bullet></Bullet><code>Price</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadtotalpriceprice-",level:4},{value:'<code>FerryOrderPayload.<b>traveller</b></code><Bullet></Bullet><code>TravellerBook</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryorderpayloadtravellertravellerbook-",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:"No description"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:"type FerryOrderPayload {\n  adviseMessages: [AdviseMessage]\n  status: String\n  locator: String\n  departure: FerryOfferBook\n  return: FerryOfferBook\n  holder: Holder\n  cancelPolicy: CancelPolicy\n  totalPrice: Price\n  traveller: TravellerBook\n}\n"})}),"\n",(0,d.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadadvisemessagesadvisemessage--",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"adviseMessages"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(r.code,{children:"[AdviseMessage]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadstatusstring-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"status"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/scalars/string",children:(0,d.jsx)(r.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadlocatorstring-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"locator"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/scalars/string",children:(0,d.jsx)(r.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloaddepartureferryofferbook-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"departure"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/ferry-offer-book",children:(0,d.jsx)(r.code,{children:"FerryOfferBook"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadreturnferryofferbook-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"return"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/ferry-offer-book",children:(0,d.jsx)(r.code,{children:"FerryOfferBook"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadholderholder-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"holder"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/holder",children:(0,d.jsx)(r.code,{children:"Holder"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadcancelpolicycancelpolicy-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"cancelPolicy"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/cancel-policy",children:(0,d.jsx)(r.code,{children:"CancelPolicy"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadtotalpriceprice-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"totalPrice"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/price",children:(0,d.jsx)(r.code,{children:"Price"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(r.h4,{id:"ferryorderpayloadtravellertravellerbook-",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOrderPayload.",(0,d.jsx)("b",{children:"traveller"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/traveller-book",children:(0,d.jsx)(r.code,{children:"TravellerBook"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(r.blockquote,{children:"\n"}),"\n",(0,d.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/objects/transport-mutation",children:(0,d.jsx)(r.code,{children:"TransportMutation"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(r.a,{href:"/api/objects/transport-query",children:(0,d.jsx)(r.code,{children:"TransportQuery"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},21020:(e,r,a)=>{var d=a(96540),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function t(e,r,a){var d,l={},t=null,i=null;for(d in void 0!==a&&(t=""+a),void 0!==r.key&&(t=""+r.key),void 0!==r.ref&&(i=r.ref),r)s.call(r,d)&&!n.hasOwnProperty(d)&&(l[d]=r[d]);if(e&&e.defaultProps)for(d in r=e.defaultProps)void 0===l[d]&&(l[d]=r[d]);return{$$typeof:o,type:e,key:t,ref:i,props:l,_owner:c.current}}r.Fragment=l,r.jsx=t,r.jsxs=t},74848:(e,r,a)=>{e.exports=a(21020)},28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>c});var d=a(96540);const o={},l=d.createContext(o);function s(e){const r=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),d.createElement(l.Provider,{value:r},e.children)}}}]);