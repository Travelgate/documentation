/*! For license information please see 677fc809.1cfba408.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55721],{79628:(e,t,d)=>{d.r(t),d.d(t,{Badge:()=>y,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"types/objects/entity-audit","title":"EntityAudit","description":"No description","source":"@site/api/types/objects/entity-audit.mdx","sourceDirName":"types/objects","slug":"/types/objects/entity-audit","permalink":"/api/types/objects/entity-audit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"entity-audit","title":"EntityAudit"},"sidebar":"schemaSidebar","previous":{"title":"EntityAuditEdge","permalink":"/api/types/objects/entity-audit-edge"},"next":{"title":"Entity","permalink":"/api/types/objects/entity"}}');var s=d(74848),i=d(28453),n=d(96540);const l={id:"entity-audit",title:"EntityAudit"},c=void 0,r={},o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),y=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:d,startOpen:a=!1})=>{const[i,l]=(0,n.useState)(a);return(0,s.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&d]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>EntityAudit.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"entityauditcodeid--",level:4},{value:'<code>EntityAudit.<b>entityAuditData</b></code><Bullet></Bullet><code>EntityAuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"entityauditentityauditdataentityauditdata-",level:4},{value:'<code>EntityAudit.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"entityauditadvisemessageadvisemessage--",level:4},{value:'<code>EntityAudit.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"entityauditadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>EntityAudit.<b>createdAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"entityauditcreatedattime--",level:4},{value:'<code>EntityAudit.<b>updatedAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"entityauditupdatedattime--",level:4},{value:'<code>EntityAudit.<b>deletedAt</b></code><Bullet></Bullet><code>Time</code> <Badge class="badge badge--secondary"></Badge>',id:"entityauditdeletedattime-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type EntityAudit {\n  code: ID!\n  entityAuditData: EntityAuditData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: Time!\n  updatedAt: Time!\n  deletedAt: Time\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"entityauditcodeid--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAudit.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(t.code,{children:"ID!"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.h4,{id:"entityauditentityauditdataentityauditdata-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAudit.",(0,s.jsx)("b",{children:"entityAuditData"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/entity-audit-data",children:(0,s.jsx)(t.code,{children:"EntityAuditData"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.h4,{id:"entityauditadvisemessageadvisemessage--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAudit.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/advise-message",children:(0,s.jsx)(t.code,{children:"[AdviseMessage!]"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.h5,{id:"entityauditadvisemessageleveladvisemessagelevel--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAudit.adviseMessage.",(0,s.jsx)("b",{children:"level"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/api/types/enums/advise-message-level",children:(0,s.jsx)(t.code,{children:"[AdviseMessageLevel]"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.h4,{id:"entityauditcreatedattime--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAudit.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/time",children:(0,s.jsx)(t.code,{children:"Time!"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.h4,{id:"entityauditupdatedattime--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAudit.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/time",children:(0,s.jsx)(t.code,{children:"Time!"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.h4,{id:"entityauditdeletedattime-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAudit.",(0,s.jsx)("b",{children:"deletedAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/time",children:(0,s.jsx)(t.code,{children:"Time"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/objects/entity-audit-edge",children:(0,s.jsx)(t.code,{children:"EntityAuditEdge"})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,t,d)=>{var a=d(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,d){var a,i={},r=null,o=null;for(a in void 0!==d&&(r=""+d),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(o=t.ref),t)n.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:s,type:e,key:r,ref:o,props:i,_owner:l.current}}t.Fragment=i,t.jsx=r,t.jsxs=r},74848:(e,t,d)=>{e.exports=d(21020)},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>l});var a=d(96540);const s={},i=a.createContext(s);function n(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);