/*! For license information please see 40dcb69b.46145d0b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97533],{19055:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>n,metadata:()=>i,toc:()=>g});var s=a(74848),r=a(28453),t=a(96540);const n={id:"hub-provider",title:"HubProvider",hide_table_of_contents:!1},o=void 0,i={id:"objects/hub-provider",title:"HubProvider",description:"No description",source:"@site/api/objects/hub-provider.mdx",sourceDirName:"objects",slug:"/objects/hub-provider",permalink:"/api/objects/hub-provider",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hub-provider",title:"HubProvider",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HubProviderData",permalink:"/api/objects/hub-provider-data"},next:{title:"HubUserData",permalink:"/api/objects/hub-user-data"}},c={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const d={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const d={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:d,children:a,startOpen:n=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,t.useState)(n);return(0,s.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:d}),i&&a]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>HubProvider.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubprovidercodeid--",level:4},{value:'<code>HubProvider.<b>hubProviderData</b></code><Bullet></Bullet><code>HubProviderData</code> <Badge class="badge badge--secondary"></Badge>',id:"hubproviderhubproviderdatahubproviderdata-",level:4},{value:'<code>HubProvider.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubprovideradvisemessageadvisemessage--",level:4},{value:'<code>HubProvider.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubprovideradvisemessageleveladvisemessagelevel--",level:5},{value:'<code>HubProvider.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubprovidercreatedatdatetime--",level:4},{value:'<code>HubProvider.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubproviderupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}];function v(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"No description"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-graphql",children:"type HubProvider implements Node {\n  code: ID!\n  hubProviderData: HubProviderData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,s.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(d.h4,{id:"hubprovidercodeid--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HubProvider.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/api/scalars/id",children:(0,s.jsx)(d.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(d.h4,{id:"hubproviderhubproviderdatahubproviderdata-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HubProvider.",(0,s.jsx)("b",{children:"hubProviderData"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/api/objects/hub-provider-data",children:(0,s.jsx)(d.code,{children:"HubProviderData"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(d.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(d.h4,{id:"hubprovideradvisemessageadvisemessage--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HubProvider.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/api/objects/advise-message",children:(0,s.jsx)(d.code,{children:"[AdviseMessage!]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(d.blockquote,{children:["\n",(0,s.jsxs)(d.h5,{id:"hubprovideradvisemessageleveladvisemessagelevel--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HubProvider.adviseMessage.",(0,s.jsx)("b",{children:"level"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/api/enums/advise-message-level",children:(0,s.jsx)(d.code,{children:"[AdviseMessageLevel]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,s.jsxs)(d.h4,{id:"hubprovidercreatedatdatetime--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HubProvider.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(d.code,{children:"DateTime!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(d.h4,{id:"hubproviderupdatedatdatetime--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HubProvider.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(d.code,{children:"DateTime!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.blockquote,{children:"\n"}),"\n",(0,s.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(d.h4,{id:"node-",children:[(0,s.jsx)(d.a,{href:"/api/interfaces/node",children:(0,s.jsx)(d.code,{children:"Node"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(d.blockquote,{children:"\n"}),"\n",(0,s.jsx)(d.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"/api/objects/admin-mutation",children:(0,s.jsx)(d.code,{children:"AdminMutation"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/api/objects/admin-query",children:(0,s.jsx)(d.code,{children:"AdminQuery"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},21020:(e,d,a)=>{var s=a(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,d,a){var s,t={},c=null,l=null;for(s in void 0!==a&&(c=""+a),void 0!==d.key&&(c=""+d.key),void 0!==d.ref&&(l=d.ref),d)n.call(d,s)&&!i.hasOwnProperty(s)&&(t[s]=d[s]);if(e&&e.defaultProps)for(s in d=e.defaultProps)void 0===t[s]&&(t[s]=d[s]);return{$$typeof:r,type:e,key:c,ref:l,props:t,_owner:o.current}}d.Fragment=t,d.jsx=c,d.jsxs=c},74848:(e,d,a)=>{e.exports=a(21020)},28453:(e,d,a)=>{a.d(d,{R:()=>n,x:()=>o});var s=a(96540);const r={},t=s.createContext(r);function n(e){const d=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(t.Provider,{value:d},e.children)}}}]);