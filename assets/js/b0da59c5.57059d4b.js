/*! For license information please see b0da59c5.57059d4b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27030],{11111:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>f});const a=JSON.parse('{"id":"types/objects/room-criteria","title":"RoomCriteria","description":"Occupancy for a room. It contains a list of pax ages.","source":"@site/api/types/objects/room-criteria.mdx","sourceDirName":"types/objects","slug":"/types/objects/room-criteria","permalink":"/api/types/objects/room-criteria","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"room-criteria","title":"RoomCriteria"},"sidebar":"schemaSidebar","previous":{"title":"RoomConnection","permalink":"/api/types/objects/room-connection"},"next":{"title":"RoomData","permalink":"/api/types/objects/room-data"}}');var o=t(74848),s=t(28453),n=t(96540);const i={id:"room-criteria",title:"RoomCriteria"},c=void 0,l={},d=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:r,children:t,startOpen:a=!1})=>{const[s,i]=(0,n.useState)(a);return(0,o.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:r}),s&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomCriteria.<b>paxes</b></code><Bullet></Bullet><code>[Pax!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomcriteriapaxespax--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Occupancy for a room. It contains a list of pax ages."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-graphql",children:"type RoomCriteria {\n  paxes: [Pax!]!\n}\n"})}),"\n",(0,o.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(r.h4,{id:"roomcriteriapaxespax--",children:[(0,o.jsx)(r.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomCriteria.",(0,o.jsx)("b",{children:"paxes"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(r.a,{href:"/api/types/objects/pax",children:(0,o.jsx)(r.code,{children:"[Pax!]!"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(r.p,{children:"Array of pax ages. The number of items in the array will indicate the pax occupancy."}),"\n",(0,o.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/api/types/objects/criteria-search",children:(0,o.jsx)(r.code,{children:"CriteriaSearch"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(d,{}),(0,o.jsx)(r.a,{href:"/api/types/objects/search-criteria-data",children:(0,o.jsx)(r.code,{children:"SearchCriteriaData"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var a=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var a,s={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)n.call(r,a)&&!c.hasOwnProperty(a)&&(s[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===s[a]&&(s[a]=r[a]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:i.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>i});var a=t(96540);const o={},s=a.createContext(o);function n(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);