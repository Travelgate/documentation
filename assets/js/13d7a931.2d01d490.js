/*! For license information please see 13d7a931.2d01d490.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94498],{63629:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>p,Bullet:()=>r,Details:()=>y,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"types/objects/logging-legacy-connection","title":"LoggingLegacyConnection","description":"No description","source":"@site/api/types/objects/logging-legacy-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/logging-legacy-connection","permalink":"/api/types/objects/logging-legacy-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"logging-legacy-connection","title":"LoggingLegacyConnection"},"sidebar":"schemaSidebar","previous":{"title":"LoggingData","permalink":"/api/types/objects/logging-data"},"next":{"title":"LoggingLegacyData","permalink":"/api/types/objects/logging-legacy-data"}}');var a=o(74848),c=o(28453),g=o(96540);const s={id:"logging-legacy-connection",title:"LoggingLegacyConnection"},i=void 0,l={},r=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),d=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:n,children:o,startOpen:t=!1})=>{const[c,s]=(0,g.useState)(t);return(0,a.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&o]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>LoggingLegacyConnection.<b>edges</b></code><Bullet></Bullet><code>[LoggingLegacyEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"logginglegacyconnectionedgeslogginglegacyedge--",level:4},{value:'<code>LoggingLegacyConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"logginglegacyconnectionpageinfopageinfo--",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type LoggingLegacyConnection {\n  edges: [LoggingLegacyEdge]\n  pageInfo: PageInfo!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"logginglegacyconnectionedgeslogginglegacyedge--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LoggingLegacyConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/logging-legacy-edge",children:(0,a.jsx)(n.code,{children:"[LoggingLegacyEdge]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.h4,{id:"logginglegacyconnectionpageinfopageinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LoggingLegacyConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,a.jsx)(n.code,{children:"PageInfo!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/objects/logging-query",children:(0,a.jsx)(n.code,{children:"LoggingQuery"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},21020:(e,n,o)=>{var t=o(96540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var t,c={},l=null,r=null;for(t in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(r=n.ref),n)g.call(n,t)&&!i.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:a,type:e,key:l,ref:r,props:c,_owner:s.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>g,x:()=>s});var t=o(96540);const a={},c=t.createContext(a);function g(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:g(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);