/*! For license information please see a85535a7.60dd969c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11222],{60237:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var s=n(74848),a=n(28453),r=n(96540);const o={id:"recon-guest-data-input",title:"ReconGuestDataInput"},i=void 0,c={id:"types/inputs/recon-guest-data-input",title:"ReconGuestDataInput",description:"No description",source:"@site/api/types/inputs/recon-guest-data-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/recon-guest-data-input",permalink:"/api/types/inputs/recon-guest-data-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"recon-guest-data-input",title:"ReconGuestDataInput"},sidebar:"schemaSidebar",previous:{title:"ReconCoordinatesInput",permalink:"/api/types/inputs/recon-coordinates-input"},next:{title:"ReconHotelInput",permalink:"/api/types/inputs/recon-hotel-input"}},l={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,r.useState)(o);return(0,s.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>ReconGuestDataInput.<b>age</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reconguestdatainputageint--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input ReconGuestDataInput {\n  age: Int!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"reconguestdatainputageint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReconGuestDataInput.",(0,s.jsx)("b",{children:"age"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/recon-room-input",children:(0,s.jsx)(t.code,{children:"ReconRoomInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var s=n(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:d,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);