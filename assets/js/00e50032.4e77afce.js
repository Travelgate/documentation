/*! For license information please see 00e50032.4e77afce.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13414],{85658:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"types/inputs/hotel-criteria-amend-dates-commit-input","title":"HotelCriteriaAmendDatesCommitInput","description":"Criteria that contains basic information to amend dates into a booking.","source":"@site/api/types/inputs/hotel-criteria-amend-dates-commit-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/hotel-criteria-amend-dates-commit-input","permalink":"/api/types/inputs/hotel-criteria-amend-dates-commit-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hotel-criteria-amend-dates-commit-input","title":"HotelCriteriaAmendDatesCommitInput"},"sidebar":"schemaSidebar","previous":{"title":"HotelCriteriaAmendBoardQuoteInput","permalink":"/api/types/inputs/hotel-criteria-amend-board-quote-input"},"next":{"title":"HotelCriteriaAmendDatesQuoteInput","permalink":"/api/types/inputs/hotel-criteria-amend-dates-quote-input"}}');var a=n(74848),r=n(28453),s=n(96540);const o={id:"hotel-criteria-amend-dates-commit-input",title:"HotelCriteriaAmendDatesCommitInput"},d=void 0,l={},c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),m=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const[r,o]=(0,s.useState)(i);return(0,a.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCriteriaAmendDatesCommitInput.<b>amendmentID</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamenddatescommitinputamendmentidstring--",level:4}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Criteria that contains basic information to amend dates into a booking."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input HotelCriteriaAmendDatesCommitInput {\n  amendmentID: String!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"hotelcriteriaamenddatescommitinputamendmentidstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendDatesCommitInput.",(0,a.jsx)("b",{children:"amendmentID"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"HotelX's amend booking reference (received in AmendDatesQuote response)"})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var i=n(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,r={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,i)&&!d.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:l,ref:c,props:r,_owner:o.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);