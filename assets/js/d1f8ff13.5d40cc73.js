/*! For license information please see d1f8ff13.5d40cc73.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82508],{70023:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>p,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var d=a(74848),t=a(28453),r=a(96540);const c={id:"group",title:"Group"},n=void 0,o={id:"types/objects/group",title:"Group",description:"Groups are organized hierarchically.",source:"@site/api/types/objects/group.mdx",sourceDirName:"types/objects",slug:"/types/objects/group",permalink:"/api/types/objects/group",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"group",title:"Group"},sidebar:"schemaSidebar",previous:{title:"GroupEdge",permalink:"/api/types/objects/group-edge"},next:{title:"Holder",permalink:"/api/types/objects/holder"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,t.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:s,children:a,startOpen:c=!1})=>{const n={details:"details",summary:"summary",...(0,t.R)()},[o,l]=(0,r.useState)(c);return(0,d.jsxs)(n.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(n.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Group.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupcodeid--",level:4},{value:'<code>Group.<b>groupData</b></code><Bullet></Bullet><code>GroupData</code> <Badge class="badge badge--secondary"></Badge>',id:"groupgroupdatagroupdata-",level:4},{value:'<code>Group.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupadvisemessageadvisemessage--",level:4},{value:'<code>Group.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Group.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupcreatedatdatetime--",level:4},{value:'<code>Group.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"Groups are organized hierarchically."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type Group implements Node {\n  code: ID!\n  groupData: GroupData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"groupcodeid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,d.jsx)(s.code,{children:"ID!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"groupgroupdatagroupdata-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"groupData"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/group-data",children:(0,d.jsx)(s.code,{children:"GroupData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"groupadvisemessageadvisemessage--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,d.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"List of advise messages."}),"\n",(0,d.jsxs)(s.h5,{id:"groupadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,d.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"groupcreatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Date created"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"groupupdatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Date updated"}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(s.h4,{id:"node-",children:[(0,d.jsx)(s.a,{href:"/api/types/interfaces/node",children:(0,d.jsx)(s.code,{children:"Node"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/api/types/objects/admin-mutation",children:(0,d.jsx)(s.code,{children:"AdminMutation"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/alert-data",children:(0,d.jsx)(s.code,{children:"AlertData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/audit-rule-data",children:(0,d.jsx)(s.code,{children:"AuditRuleData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/client-data",children:(0,d.jsx)(s.code,{children:"ClientData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/group-data",children:(0,d.jsx)(s.code,{children:"GroupData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/group-edge",children:(0,d.jsx)(s.code,{children:"GroupEdge"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/managed-group-data",children:(0,d.jsx)(s.code,{children:"ManagedGroupData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/profile",children:(0,d.jsx)(s.code,{children:"Profile"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/profile-data",children:(0,d.jsx)(s.code,{children:"ProfileData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/system-data",children:(0,d.jsx)(s.code,{children:"SystemData"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/api/types/unions/alert-objects-union",children:(0,d.jsx)(s.code,{children:"AlertObjectsUnion"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},21020:(e,s,a)=>{var d=a(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,n=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,a){var d,r={},l=null,i=null;for(d in void 0!==a&&(l=""+a),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)c.call(s,d)&&!o.hasOwnProperty(d)&&(r[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===r[d]&&(r[d]=s[d]);return{$$typeof:t,type:e,key:l,ref:i,props:r,_owner:n.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>n});var d=a(96540);const t={},r=d.createContext(t);function c(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);