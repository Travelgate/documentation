/*! For license information please see 65bca3a8.a0d8b7a8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18466],{33632:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"types/enums/payment-type","title":"PaymentType","description":"Payment type options.","source":"@site/api/types/enums/payment-type.mdx","sourceDirName":"types/enums","slug":"/types/enums/payment-type","permalink":"/api/types/enums/payment-type","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"payment-type","title":"PaymentType"},"sidebar":"schemaSidebar","previous":{"title":"PaymentCardType","permalink":"/api/types/enums/payment-card-type"},"next":{"title":"PenaltyType","permalink":"/api/types/enums/penalty-type"}}');var s=n(74848),r=n(28453),c=n(96540);const i={id:"payment-type",title:"PaymentType"},o=void 0,d={},l=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),y=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const[r,i]=(0,c.useState)(a);return(0,s.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},h=[{value:"Values",id:"values",level:3},{value:"<code>PaymentType.<b>MERCHANT</b></code>",id:"paymenttypemerchant",level:4},{value:"<code>PaymentType.<b>DIRECT</b></code>",id:"paymenttypedirect",level:4},{value:"<code>PaymentType.<b>CARD_BOOKING</b></code>",id:"paymenttypecard_booking",level:4},{value:"<code>PaymentType.<b>CARD_CHECK_IN</b></code>",id:"paymenttypecard_check_in",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Payment type options."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum PaymentType {\n  MERCHANT\n  DIRECT\n  CARD_BOOKING\n  CARD_CHECK_IN\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"paymenttypemerchant",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentType.",(0,s.jsx)("b",{children:"MERCHANT"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Payment is managed by the supplier."}),"\n",(0,s.jsx)(t.h4,{id:"paymenttypedirect",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentType.",(0,s.jsx)("b",{children:"DIRECT"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Payment is made directly to the actual payee (e.g., the hotel), without involving an intermediary or third party. The payment will be completed at check-in."}),"\n",(0,s.jsx)(t.h4,{id:"paymenttypecard_booking",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentType.",(0,s.jsx)("b",{children:"CARD_BOOKING"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Payment is managed by the supplier. The payment is effectuated at the time of booking."}),"\n",(0,s.jsx)(t.h4,{id:"paymenttypecard_check_in",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentType.",(0,s.jsx)("b",{children:"CARD_CHECK_IN"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Payment is managed by the supplier and is made at the hotel during check-in."}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/objects/accepted-payment",children:(0,s.jsx)(t.code,{children:"AcceptedPayment"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/types/inputs/accepted-payment-input",children:(0,s.jsx)(t.code,{children:"AcceptedPaymentInput"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/hotel-option-quote",children:(0,s.jsx)(t.code,{children:"HotelOptionQuote"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/hotel-option-search",children:(0,s.jsx)(t.code,{children:"HotelOptionSearch"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/types/inputs/payment-input",children:(0,s.jsx)(t.code,{children:"PaymentInput"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/reviewed-payment-type",children:(0,s.jsx)(t.code,{children:"ReviewedPaymentType"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},21020:(e,t,n)=>{var a=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,r={},d=null,l=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,a)&&!o.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:i.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);