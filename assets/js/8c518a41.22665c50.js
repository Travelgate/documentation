/*! For license information please see 8c518a41.22665c50.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41782],{10692:(e,s,l)=>{l.r(s),l.d(s,{Badge:()=>g,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"types/objects/blacklist-rule-connection","title":"BlacklistRuleConnection","description":"The BlacklistRuleConnection type represents a connection to a list of BlacklistRule objects.","source":"@site/api/types/objects/blacklist-rule-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/blacklist-rule-connection","permalink":"/api/types/objects/blacklist-rule-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"blacklist-rule-connection","title":"BlacklistRuleConnection"},"sidebar":"schemaSidebar","previous":{"title":"Bed","permalink":"/api/types/objects/bed"},"next":{"title":"BlacklistRuleCriteria","permalink":"/api/types/objects/blacklist-rule-criteria"}}');var n=l(74848),a=l(28453),c=l(96540);const i={id:"blacklist-rule-connection",title:"BlacklistRuleConnection"},o=void 0,d={},r=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:s,children:l,startOpen:t=!1})=>{const[a,i]=(0,c.useState)(t);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:a?e:s}),a&&l]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>BlacklistRuleConnection.<b>edges</b></code><Bullet></Bullet><code>[BlacklistRuleEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"blacklistruleconnectionedgesblacklistruleedge--",level:4},{value:'<code>BlacklistRuleConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"blacklistruleconnectionadvisemessageadvisemessage--",level:4},{value:'<code>BlacklistRuleConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"blacklistruleconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"The BlacklistRuleConnection type represents a connection to a list of BlacklistRule objects."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type BlacklistRuleConnection {\n  edges: [BlacklistRuleEdge]\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"blacklistruleconnectionedgesblacklistruleedge--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BlacklistRuleConnection.",(0,n.jsx)("b",{children:"edges"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/blacklist-rule-edge",children:(0,n.jsx)(s.code,{children:"[BlacklistRuleEdge]"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.h4,{id:"blacklistruleconnectionadvisemessageadvisemessage--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BlacklistRuleConnection.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,n.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.h5,{id:"blacklistruleconnectionadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BlacklistRuleConnection.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,n.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/types/objects/rules-query",children:(0,n.jsx)(s.code,{children:"RulesQuery"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,s,l)=>{var t=l(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,l){var t,a={},d=null,r=null;for(t in void 0!==l&&(d=""+l),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(r=s.ref),s)c.call(s,t)&&!o.hasOwnProperty(t)&&(a[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===a[t]&&(a[t]=s[t]);return{$$typeof:n,type:e,key:d,ref:r,props:a,_owner:i.current}}s.Fragment=a,s.jsx=d,s.jsxs=d},74848:(e,s,l)=>{e.exports=l(21020)},28453:(e,s,l)=>{l.d(s,{R:()=>c,x:()=>i});var t=l(96540);const n={},a=t.createContext(n);function c(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);