/*! For license information please see 81dcf3c4.1340b82f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6089],{64833:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>y});const o=JSON.parse('{"id":"types/enums/location-type","title":"LocationType","description":"No description","source":"@site/api/types/enums/location-type.mdx","sourceDirName":"types/enums","slug":"/types/enums/location-type","permalink":"/api/types/enums/location-type","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"location-type","title":"LocationType"},"sidebar":"schemaSidebar","previous":{"title":"LifecycleStage","permalink":"/api/types/enums/lifecycle-stage"},"next":{"title":"MappingType","permalink":"/api/types/enums/mapping-type"}}');var i=n(74848),r=n(28453),a=n(96540);const s={id:"location-type",title:"LocationType"},c=void 0,l={},d=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const[r,s]=(0,a.useState)(o);return(0,i.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>LocationType.<b>AIRPORT</b></code>",id:"locationtypeairport",level:4},{value:"<code>LocationType.<b>BUSSTATION</b></code>",id:"locationtypebusstation",level:4},{value:"<code>LocationType.<b>PORT</b></code>",id:"locationtypeport",level:4},{value:"<code>LocationType.<b>TRAINSTATION</b></code>",id:"locationtypetrainstation",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"enum LocationType {\n  AIRPORT\n  BUSSTATION\n  PORT\n  TRAINSTATION\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,i.jsx)(t.h4,{id:"locationtypeairport",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["LocationType.",(0,i.jsx)("b",{children:"AIRPORT"})]})})}),"\n",(0,i.jsx)(t.h4,{id:"locationtypebusstation",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["LocationType.",(0,i.jsx)("b",{children:"BUSSTATION"})]})})}),"\n",(0,i.jsx)(t.h4,{id:"locationtypeport",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["LocationType.",(0,i.jsx)("b",{children:"PORT"})]})})}),"\n",(0,i.jsx)(t.h4,{id:"locationtypetrainstation",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["LocationType.",(0,i.jsx)("b",{children:"TRAINSTATION"})]})})}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/objects/package-location",children:(0,i.jsx)(t.code,{children:"PackageLocation"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var o=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,r={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:l,ref:d,props:r,_owner:s.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);