/*! For license information please see cd357025.4a171af1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36616],{31729:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>y});var i=n(74848),r=n(28453),s=n(96540);const a={id:"unit-time-type",title:"UnitTimeType"},l=void 0,o={id:"types/enums/unit-time-type",title:"UnitTimeType",description:"Unit Time Type",source:"@site/api/types/enums/unit-time-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/unit-time-type",permalink:"/api/types/enums/unit-time-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"unit-time-type",title:"UnitTimeType"},sidebar:"schemaSidebar",previous:{title:"TripMode",permalink:"/api/types/enums/trip-mode"},next:{title:"ValidationStatusType",permalink:"/api/types/enums/validation-status-type"}},c={},p=()=>{const e={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,r.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[o,c]=(0,s.useState)(a);return(0,i.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>UnitTimeType.<b>DAY</b></code>",id:"unittimetypeday",level:4},{value:"<code>UnitTimeType.<b>HOUR</b></code>",id:"unittimetypehour",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Unit Time Type"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"enum UnitTimeType {\n  DAY\n  HOUR\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,i.jsx)(t.h4,{id:"unittimetypeday",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["UnitTimeType.",(0,i.jsx)("b",{children:"DAY"})]})})}),"\n",(0,i.jsx)(t.p,{children:"Day"}),"\n",(0,i.jsx)(t.h4,{id:"unittimetypehour",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["UnitTimeType.",(0,i.jsx)("b",{children:"HOUR"})]})})}),"\n",(0,i.jsx)(t.p,{children:"Hour"}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/objects/supplement",children:(0,i.jsx)(t.code,{children:"Supplement"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/supplement-input",children:(0,i.jsx)(t.code,{children:"SupplementInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var i=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,p=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,i)&&!o.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:p,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);