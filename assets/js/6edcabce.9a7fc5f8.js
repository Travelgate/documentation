/*! For license information please see 6edcabce.9a7fc5f8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45154],{79070:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"types/enums/hotel-pax-type","title":"HotelPaxType","description":"Define type of pax allowed","source":"@site/api/types/enums/hotel-pax-type.mdx","sourceDirName":"types/enums","slug":"/types/enums/hotel-pax-type","permalink":"/api/types/enums/hotel-pax-type","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hotel-pax-type","title":"HotelPaxType"},"sidebar":"schemaSidebar","previous":{"title":"HotelOptionRateRestrictionType","permalink":"/api/types/enums/hotel-option-rate-restriction-type"},"next":{"title":"HubStatus","permalink":"/api/types/enums/hub-status"}}');var l=n(74848),r=n(28453),s=n(96540);const o={id:"hotel-pax-type",title:"HotelPaxType"},i=void 0,c={},d=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const[r,o]=(0,s.useState)(a);return(0,l.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},u=[{value:"Values",id:"values",level:3},{value:"<code>HotelPaxType.<b>ADULT</b></code>",id:"hotelpaxtypeadult",level:4},{value:"<code>HotelPaxType.<b>CHILD</b></code>",id:"hotelpaxtypechild",level:4},{value:"<code>HotelPaxType.<b>INFANT</b></code>",id:"hotelpaxtypeinfant",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Define type of pax allowed"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"enum HotelPaxType {\n  ADULT\n  CHILD\n  INFANT\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,l.jsx)(t.h4,{id:"hotelpaxtypeadult",children:(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelPaxType.",(0,l.jsx)("b",{children:"ADULT"})]})})}),"\n",(0,l.jsx)(t.h4,{id:"hotelpaxtypechild",children:(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelPaxType.",(0,l.jsx)("b",{children:"CHILD"})]})})}),"\n",(0,l.jsx)(t.h4,{id:"hotelpaxtypeinfant",children:(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelPaxType.",(0,l.jsx)("b",{children:"INFANT"})]})})}),"\n",(0,l.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/api/types/objects/age-range",children:(0,l.jsx)(t.code,{children:"AgeRange"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,l.jsx)(d,{}),(0,l.jsx)(t.a,{href:"/api/types/objects/metadata-candidate",children:(0,l.jsx)(t.code,{children:"MetadataCandidate"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(y,{...e})}):y(e)}},21020:(e,t,n)=>{var a=n(96540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,r={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!i.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:l,type:e,key:c,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const l={},r=a.createContext(l);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);