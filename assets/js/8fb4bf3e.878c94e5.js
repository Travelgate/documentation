/*! For license information please see 8fb4bf3e.878c94e5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29235],{52815:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>y});var r=n(74848),s=n(28453),a=n(96540);const i={id:"date-type",title:"DateType"},o=void 0,l={id:"types/enums/date-type",title:"DateType",description:"Indicates the type of dates",source:"@site/api/types/enums/date-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/date-type",permalink:"/api/types/enums/date-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"date-type",title:"DateType"},sidebar:"schemaSidebar",previous:{title:"CustomerAgentType",permalink:"/api/types/enums/customer-agent-type"},next:{title:"DescriptionType",permalink:"/api/types/enums/description-type"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[l,c]=(0,a.useState)(i);return(0,r.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>DateType.<b>ARRIVAL</b></code>",id:"datetypearrival",level:4},{value:"<code>DateType.<b>BOOKING</b></code>",id:"datetypebooking",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Indicates the type of dates"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"enum DateType {\n  ARRIVAL\n  BOOKING\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(t.h4,{id:"datetypearrival",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["DateType.",(0,r.jsx)("b",{children:"ARRIVAL"})]})})}),"\n",(0,r.jsx)(t.p,{children:"Arrival Date"}),"\n",(0,r.jsx)(t.h4,{id:"datetypebooking",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["DateType.",(0,r.jsx)("b",{children:"BOOKING"})]})})}),"\n",(0,r.jsx)(t.p,{children:"Booking Creation"}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/inputs/criteria-booking-dates-input",children:(0,r.jsx)(t.code,{children:"CriteriaBookingDatesInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);