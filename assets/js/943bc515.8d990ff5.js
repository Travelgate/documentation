/*! For license information please see 943bc515.8d990ff5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48645],{49881:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>u,Details:()=>h,SpecifiedBy:()=>c,assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(74848),i=n(28453),d=n(96540);const l={id:"logging-mutation",title:"LoggingMutation"},o=void 0,r={id:"types/objects/logging-mutation",title:"LoggingMutation",description:"No description",source:"@site/api/types/objects/logging-mutation.mdx",sourceDirName:"types/objects",slug:"/types/objects/logging-mutation",permalink:"/api/types/objects/logging-mutation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"logging-mutation",title:"LoggingMutation"},sidebar:"schemaSidebar",previous:{title:"LoggingLegacy",permalink:"/api/types/objects/logging-legacy"},next:{title:"LoggingQuery",permalink:"/api/types/objects/logging-query"}},s={},u=()=>{const e={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const t={a:"a",...(0,i.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const t={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,i.R)()},[r,s]=(0,d.useState)(l);return(0,a.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>LoggingMutation.<b>createAuditRule</b></code><Bullet></Bullet><code>AuditRuleConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingmutationcreateauditruleauditruleconnection--",level:4},{value:'<code>LoggingMutation.createAuditRule.<b>data</b></code><Bullet></Bullet><code>AuditRuleCreateInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingmutationcreateauditruledataauditrulecreateinput--",level:5},{value:'<code>LoggingMutation.<b>deleteAuditRule</b></code><Bullet></Bullet><code>AuditRule!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingmutationdeleteauditruleauditrule--",level:4},{value:'<code>LoggingMutation.deleteAuditRule.<b>where</b></code><Bullet></Bullet><code>AuditRuleWhereUniqueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingmutationdeleteauditrulewhereauditrulewhereuniqueinput--",level:5},{value:"Returned By",id:"returned-by",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type LoggingMutation {\n  createAuditRule(data: AuditRuleCreateInput!): AuditRuleConnection!\n  deleteAuditRule(where: AuditRuleWhereUniqueInput!): AuditRule!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"loggingmutationcreateauditruleauditruleconnection--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LoggingMutation.",(0,a.jsx)("b",{children:"createAuditRule"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/audit-rule-connection",children:(0,a.jsx)(t.code,{children:"AuditRuleConnection!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h5,{id:"loggingmutationcreateauditruledataauditrulecreateinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LoggingMutation.createAuditRule.",(0,a.jsx)("b",{children:"data"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/audit-rule-create-input",children:(0,a.jsx)(t.code,{children:"AuditRuleCreateInput!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"loggingmutationdeleteauditruleauditrule--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LoggingMutation.",(0,a.jsx)("b",{children:"deleteAuditRule"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/audit-rule",children:(0,a.jsx)(t.code,{children:"AuditRule!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h5,{id:"loggingmutationdeleteauditrulewhereauditrulewhereuniqueinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LoggingMutation.deleteAuditRule.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/audit-rule-where-unique-input",children:(0,a.jsx)(t.code,{children:"AuditRuleWhereUniqueInput!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/api/mutations/logging",children:(0,a.jsx)(t.code,{children:"logging"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var a=n(96540),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,d={},s=null,u=null;for(a in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!r.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===d[a]&&(d[a]=t[a]);return{$$typeof:i,type:e,key:s,ref:u,props:d,_owner:o.current}}t.Fragment=d,t.jsx=s,t.jsxs=s},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var a=n(96540);const i={},d=a.createContext(i);function l(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);