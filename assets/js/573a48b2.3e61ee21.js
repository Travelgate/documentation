/*! For license information please see 573a48b2.3e61ee21.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22567],{52625:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=s(74848),a=s(28453),r=s(96540);const o={id:"stats-edge",title:"StatsEdge"},d=void 0,c={id:"types/objects/stats-edge",title:"StatsEdge",description:"No description",source:"@site/api/types/objects/stats-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/stats-edge",permalink:"/api/types/objects/stats-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"stats-edge",title:"StatsEdge"},sidebar:"schemaSidebar",previous:{title:"StatsData",permalink:"/api/types/objects/stats-data"},next:{title:"StatsInfo",permalink:"/api/types/objects/stats-info"}},l={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:s,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,r.useState)(o);return(0,n.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>StatsEdge.<b>node</b></code><Bullet></Bullet><code>Stats</code> <Badge class="badge badge--secondary"></Badge>',id:"statsedgenodestats-",level:4},{value:'<code>StatsEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type StatsEdge {\n  node: Stats\n  cursor: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"statsedgenodestats-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/stats",children:(0,n.jsx)(t.code,{children:"Stats"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"statsedgecursorstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/objects/stats-connection",children:(0,n.jsx)(t.code,{children:"StatsConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,t,s)=>{var n=s(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var n,r={},l=null,i=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:i,props:r,_owner:d.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(96540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);