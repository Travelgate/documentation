/*! For license information please see 34e25392.bbe629d0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81506],{57580:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>p,Bullet:()=>r,Details:()=>y,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>b});const a=JSON.parse('{"id":"types/objects/apikeys-connection","title":"ApikeysConnection","description":"No description","source":"@site/api/types/objects/apikeys-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/apikeys-connection","permalink":"/api/types/objects/apikeys-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"apikeys-connection","title":"ApikeysConnection"},"sidebar":"schemaSidebar","previous":{"title":"APIEdge","permalink":"/api/types/objects/apiedge"},"next":{"title":"ApikeysData","permalink":"/api/types/objects/apikeys-data"}}');var t=n(74848),d=n(28453),o=n(96540);const i={id:"apikeys-connection",title:"ApikeysConnection"},c=void 0,l={},r=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const[d,i]=(0,o.useState)(a);return(0,t.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>ApikeysConnection.<b>edges</b></code><Bullet></Bullet><code>[ApikeysEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysconnectionedgesapikeysedge--",level:4},{value:'<code>ApikeysConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysconnectionpageinfopageinfo--",level:4},{value:'<code>ApikeysConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysconnectionadvisemessageadvisemessage--",level:4},{value:'<code>ApikeysConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>ApikeysConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type ApikeysConnection {\n  edges: [ApikeysEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"apikeysconnectionedgesapikeysedge--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/apikeys-edge",children:(0,t.jsx)(s.code,{children:"[ApikeysEdge]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.h4,{id:"apikeysconnectionpageinfopageinfo--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/page-info",children:(0,t.jsx)(s.code,{children:"PageInfo!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.h4,{id:"apikeysconnectionadvisemessageadvisemessage--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysConnection.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.h5,{id:"apikeysconnectionadvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysConnection.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,t.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.h4,{id:"apikeysconnectiontotalcountint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysConnection.",(0,t.jsx)("b",{children:"totalCount"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/admin-query",children:(0,t.jsx)(s.code,{children:"AdminQuery"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/organizations-data",children:(0,t.jsx)(s.code,{children:"OrganizationsData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,s,n)=>{var a=n(96540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var a,d={},l=null,r=null;for(a in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(r=s.ref),s)o.call(s,a)&&!c.hasOwnProperty(a)&&(d[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===d[a]&&(d[a]=s[a]);return{$$typeof:t,type:e,key:l,ref:r,props:d,_owner:i.current}}s.Fragment=d,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var a=n(96540);const t={},d=a.createContext(t);function o(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);