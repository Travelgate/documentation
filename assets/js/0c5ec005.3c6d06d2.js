/*! For license information please see 0c5ec005.3c6d06d2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19246],{44601:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>y});var r=n(74848),a=n(28453),s=n(96540);const o={id:"generated-payment-method-type",title:"GeneratedPaymentMethodType"},d=void 0,i={id:"types/enums/generated-payment-method-type",title:"GeneratedPaymentMethodType",description:"Indicates the payment method used, which depends on the configured payment supplier.",source:"@site/api/types/enums/generated-payment-method-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/generated-payment-method-type",permalink:"/api/types/enums/generated-payment-method-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"generated-payment-method-type",title:"GeneratedPaymentMethodType"},sidebar:"schemaSidebar",previous:{title:"GenderType",permalink:"/api/types/enums/gender-type"},next:{title:"GiataType",permalink:"/api/types/enums/giata-type"}},l={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[i,l]=(0,s.useState)(o);return(0,r.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>GeneratedPaymentMethodType.<b>VIRTUAL_CARD</b></code>",id:"generatedpaymentmethodtypevirtual_card",level:4},{value:"<code>GeneratedPaymentMethodType.<b>WALLET</b></code>",id:"generatedpaymentmethodtypewallet",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Indicates the payment method used, which depends on the configured payment supplier."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"enum GeneratedPaymentMethodType {\n  VIRTUAL_CARD\n  WALLET\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(t.h4,{id:"generatedpaymentmethodtypevirtual_card",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GeneratedPaymentMethodType.",(0,r.jsx)("b",{children:"VIRTUAL_CARD"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The payment method is a generation of a virtual credit card to send to the supplier."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"generatedpaymentmethodtypewallet",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GeneratedPaymentMethodType.",(0,r.jsx)("b",{children:"WALLET"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The payment method is a wallet transaction."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/objects/generated-payment-info",children:(0,r.jsx)(t.code,{children:"GeneratedPaymentInfo"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:c,props:s,_owner:d.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);