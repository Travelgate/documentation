/*! For license information please see 29b66a4e.5152c0a4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70222],{63767:(e,d,s)=>{s.r(d),s.d(d,{Badge:()=>h,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=s(74848),r=s(28453),t=s(96540);const n={id:"provider",title:"Provider"},o=void 0,i={id:"types/objects/provider",title:"Provider",description:"A Provider is the link with the associated integration (also known as DLL)",source:"@site/api/types/objects/provider.mdx",sourceDirName:"types/objects",slug:"/types/objects/provider",permalink:"/api/types/objects/provider",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"provider",title:"Provider"},sidebar:"schemaSidebar",previous:{title:"ProviderData",permalink:"/api/types/objects/provider-data"},next:{title:"QuotePayload",permalink:"/api/types/objects/quote-payload"}},c={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const d={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const d={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:d,children:s,startOpen:n=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,t.useState)(n);return(0,a.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:d}),i&&s]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>Provider.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providercodeid--",level:4},{value:'<code>Provider.<b>providerData</b></code><Bullet></Bullet><code>ProviderData</code> <Badge class="badge badge--secondary"></Badge>',id:"providerproviderdataproviderdata-",level:4},{value:'<code>Provider.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"provideradvisemessageadvisemessage--",level:4},{value:'<code>Provider.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"provideradvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Provider.<b>error</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providererrorerror---",level:4},{value:'<code>Provider.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providercreatedatdatetime--",level:4},{value:'<code>Provider.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const d={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.p,{children:"A Provider is the link with the associated integration (also known as DLL)"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-graphql",children:"type Provider implements Node {\n  code: ID!\n  providerData: ProviderData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  error: [Error!] @deprecated\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,a.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(d.h4,{id:"providercodeid--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Provider.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(d.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Provider unique code"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"providerproviderdataproviderdata-",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Provider.",(0,a.jsx)("b",{children:"providerData"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/objects/provider-data",children:(0,a.jsx)(d.code,{children:"ProviderData"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Extended Provider information"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"provideradvisemessageadvisemessage--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Provider.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(d.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"List of advise messages."}),"\n",(0,a.jsxs)(d.h5,{id:"provideradvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Provider.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/enums/advise-message-level",children:(0,a.jsx)(d.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"providererrorerror---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Provider.",(0,a.jsx)("b",{children:"error"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/objects/error",children:(0,a.jsx)(d.code,{children:"[Error!]"})})," ",(0,a.jsx)(h,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(d.p,{children:"deprecated from 2019-01-01. Use AdviseMessage instead"})}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"providercreatedatdatetime--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Provider.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Provider creation date"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"providerupdatedatdatetime--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Provider.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Provider last update date"}),"\n"]}),"\n",(0,a.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(d.h4,{id:"node-",children:[(0,a.jsx)(d.a,{href:"/api/types/interfaces/node",children:(0,a.jsx)(d.code,{children:"Node"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/api/types/objects/admin-mutation",children:(0,a.jsx)(d.code,{children:"AdminMutation"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/api/types/objects/admin-query",children:(0,a.jsx)(d.code,{children:"AdminQuery"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function v(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,d,s)=>{var a=s(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,d,s){var a,t={},c=null,l=null;for(a in void 0!==s&&(c=""+s),void 0!==d.key&&(c=""+d.key),void 0!==d.ref&&(l=d.ref),d)n.call(d,a)&&!i.hasOwnProperty(a)&&(t[a]=d[a]);if(e&&e.defaultProps)for(a in d=e.defaultProps)void 0===t[a]&&(t[a]=d[a]);return{$$typeof:r,type:e,key:c,ref:l,props:t,_owner:o.current}}d.Fragment=t,d.jsx=c,d.jsxs=c},74848:(e,d,s)=>{e.exports=s(21020)},28453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>o});var a=s(96540);const r={},t=a.createContext(r);function n(e){const d=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(t.Provider,{value:d},e.children)}}}]);