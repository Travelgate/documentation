/*! For license information please see c4af4ced.0d46a224.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67339],{26547:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>j});const r=JSON.parse('{"id":"types/objects/airport-data","title":"AirportData","description":"Information about the airport","source":"@site/api/types/objects/airport-data.mdx","sourceDirName":"types/objects","slug":"/types/objects/airport-data","permalink":"/api/types/objects/airport-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"airport-data","title":"AirportData"},"sidebar":"schemaSidebar","previous":{"title":"Aggregate","permalink":"/api/types/objects/aggregate"},"next":{"title":"Airport","permalink":"/api/types/objects/airport"}}');var o=a(74848),n=a(28453),s=a(96540);const i={id:"airport-data",title:"AirportData"},d=void 0,c={},l=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:t,children:a,startOpen:r=!1})=>{const[n,i]=(0,s.useState)(r);return(0,o.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:n?e:t}),n&&a]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>AirportData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"airportdatacodeid--",level:4},{value:'<code>AirportData.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"airportdatanamestring-",level:4},{value:'<code>AirportData.<b>location</b></code><Bullet></Bullet><code>Location</code> <Badge class="badge badge--secondary"></Badge>',id:"airportdatalocationlocation-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Information about the airport"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type AirportData {\n  code: ID!\n  name: String\n  location: Location\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"airportdatacodeid--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AirportData.",(0,o.jsx)("b",{children:"code"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,o.jsx)(t.code,{children:"ID!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(t.p,{children:"Airport Code (IATA)"}),"\n",(0,o.jsxs)(t.h4,{id:"airportdatanamestring-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AirportData.",(0,o.jsx)("b",{children:"name"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"String"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(t.p,{children:"The airport s name"}),"\n",(0,o.jsxs)(t.h4,{id:"airportdatalocationlocation-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AirportData.",(0,o.jsx)("b",{children:"location"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(t.a,{href:"/api/types/objects/location",children:(0,o.jsx)(t.code,{children:"Location"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(t.p,{children:"The airport s location"}),"\n",(0,o.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/api/types/objects/airport",children:(0,o.jsx)(t.code,{children:"Airport"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},21020:(e,t,a)=>{var r=a(96540),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var r,n={},c=null,l=null;for(r in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!d.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:n,_owner:i.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var r=a(96540);const o={},n=r.createContext(o);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);