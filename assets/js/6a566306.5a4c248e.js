/*! For license information please see 6a566306.5a4c248e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62794],{70986:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>g,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var a=n(74848),t=n(28453),o=n(96540);const d={id:"members-connection",title:"MembersConnection"},c=void 0,r={id:"types/objects/members-connection",title:"MembersConnection",description:"No description",source:"@site/api/types/objects/members-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/members-connection",permalink:"/api/types/objects/members-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"members-connection",title:"MembersConnection"},sidebar:"schemaSidebar",previous:{title:"Member",permalink:"/api/types/objects/member"},next:{title:"MembersData",permalink:"/api/types/objects/members-data"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const s={a:"a",...(0,t.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:s,children:n,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,t.R)()},[r,l]=(0,o.useState)(d);return(0,a.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>MembersConnection.<b>edges</b></code><Bullet></Bullet><code>[MembersEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersconnectionedgesmembersedge--",level:4},{value:'<code>MembersConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersconnectionpageinfopageinfo--",level:4},{value:'<code>MembersConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersconnectionadvisemessageadvisemessage--",level:4},{value:'<code>MembersConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>MembersConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type MembersConnection {\n  edges: [MembersEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"membersconnectionedgesmembersedge--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/members-edge",children:(0,a.jsx)(s.code,{children:"[MembersEdge]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"membersconnectionpageinfopageinfo--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/page-info",children:(0,a.jsx)(s.code,{children:"PageInfo!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"membersconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.h5,{id:"membersconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,a.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"membersconnectiontotalcountint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/admin-query",children:(0,a.jsx)(s.code,{children:"AdminQuery"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,s,n)=>{var a=n(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var a,o={},l=null,i=null;for(a in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)d.call(s,a)&&!r.hasOwnProperty(a)&&(o[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:t,type:e,key:l,ref:i,props:o,_owner:c.current}}s.Fragment=o,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var a=n(96540);const t={},o=a.createContext(t);function d(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);