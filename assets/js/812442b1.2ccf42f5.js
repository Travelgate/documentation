/*! For license information please see 812442b1.2ccf42f5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31501],{30452:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=n(74848),a=n(28453),i=n(96540);const s={id:"hotel-criteria-amend-remarks-commit-input",title:"HotelCriteriaAmendRemarksCommitInput"},o=void 0,d={id:"types/inputs/hotel-criteria-amend-remarks-commit-input",title:"HotelCriteriaAmendRemarksCommitInput",description:"Criteria that contains basic information to add remarks into a booking.",source:"@site/api/types/inputs/hotel-criteria-amend-remarks-commit-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/hotel-criteria-amend-remarks-commit-input",permalink:"/api/types/inputs/hotel-criteria-amend-remarks-commit-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-criteria-amend-remarks-commit-input",title:"HotelCriteriaAmendRemarksCommitInput"},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaAmendPaxesQuoteInput",permalink:"/api/types/inputs/hotel-criteria-amend-paxes-quote-input"},next:{title:"HotelCriteriaAmendRemarksQuoteInput",permalink:"/api/types/inputs/hotel-criteria-amend-remarks-quote-input"}},l={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[d,l]=(0,i.useState)(s);return(0,r.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCriteriaAmendRemarksCommitInput.<b>amendmentID</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamendremarkscommitinputamendmentidstring--",level:4}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Criteria that contains basic information to add remarks into a booking."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input HotelCriteriaAmendRemarksCommitInput {\n  amendmentID: String!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriaamendremarkscommitinputamendmentidstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendRemarksCommitInput.",(0,r.jsx)("b",{children:"amendmentID"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"HotelX's amend booking reference (received in AmendRemarksQuote response)"})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);