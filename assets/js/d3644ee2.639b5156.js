/*! For license information please see d3644ee2.639b5156.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60818],{78974:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>y,Bullet:()=>p,Details:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=t(74848),a=t(28453),r=t(96540);const l={id:"penalty-type",title:"PenaltyType"},o=void 0,i={id:"types/enums/penalty-type",title:"PenaltyType",description:"No description",source:"@site/api/types/enums/penalty-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/penalty-type",permalink:"/api/types/enums/penalty-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"penalty-type",title:"PenaltyType"},sidebar:"schemaSidebar",previous:{title:"PaymentType",permalink:"/api/types/enums/payment-type"},next:{title:"PersonalTitleType",permalink:"/api/types/enums/personal-title-type"}},c={},p=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[i,c]=(0,r.useState)(l);return(0,s.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},h=[{value:"Values",id:"values",level:3},{value:"<code>PenaltyType.<b>AMOUNT</b></code>",id:"penaltytypeamount",level:4},{value:"<code>PenaltyType.<b>NIGHTS</b></code>",id:"penaltytypenights",level:4},{value:"<code>PenaltyType.<b>PERCENTAGE</b></code>",id:"penaltytypepercentage",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"enum PenaltyType {\n  AMOUNT\n  NIGHTS\n  PERCENTAGE\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(n.h4,{id:"penaltytypeamount",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PenaltyType.",(0,s.jsx)("b",{children:"AMOUNT"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h4,{id:"penaltytypenights",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PenaltyType.",(0,s.jsx)("b",{children:"NIGHTS"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h4,{id:"penaltytypepercentage",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PenaltyType.",(0,s.jsx)("b",{children:"PERCENTAGE"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/types/inputs/amend-penalty-input",children:(0,s.jsx)(n.code,{children:"AmendPenaltyInput"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(p,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/inventory-cancel-penalty",children:(0,s.jsx)(n.code,{children:"InventoryCancelPenalty"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(p,{}),(0,s.jsx)(n.a,{href:"/api/types/inputs/inventory-cancel-penalty-input",children:(0,s.jsx)(n.code,{children:"InventoryCancelPenaltyInput"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},21020:(e,n,t)=>{var s=t(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,p=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)l.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:a,type:e,key:c,ref:p,props:r,_owner:o.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);