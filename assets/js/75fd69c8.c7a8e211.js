/*! For license information please see 75fd69c8.c7a8e211.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2283],{31783:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=t(74848),n=t(28453),d=t(96540);const r={id:"update-system-input",title:"UpdateSystemInput"},l=void 0,i={id:"types/inputs/update-system-input",title:"UpdateSystemInput",description:"System input for UpdateSystem",source:"@site/api/types/inputs/update-system-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/update-system-input",permalink:"/api/types/inputs/update-system-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-system-input",title:"UpdateSystemInput"},sidebar:"schemaSidebar",previous:{title:"UpdatePreferenceRuleInput",permalink:"/api/types/inputs/update-preference-rule-input"},next:{title:"UrlsInput",permalink:"/api/types/inputs/urls-input"}},c={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[i,c]=(0,d.useState)(r);return(0,a.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>UpdateSystemInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputcodeid--",level:4},{value:'<code>UpdateSystemInput.<b>name</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputnameid-",level:4},{value:'<code>UpdateSystemInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputisactiveboolean-",level:4},{value:'<code>UpdateSystemInput.<b>group</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputgroupid-",level:4},{value:'<code>UpdateSystemInput.<b>owner</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputownerid-",level:4},{value:'<code>UpdateSystemInput.<b>suppliers</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputsuppliersid--",level:4}];function m(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"System input for UpdateSystem"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"input UpdateSystemInput {\n  code: ID!\n  name: ID\n  isActive: Boolean\n  group: ID\n  owner: ID\n  suppliers: [ID]\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"updatesysteminputcodeid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"updatesysteminputnameid-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(s.code,{children:"ID"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"updatesysteminputisactiveboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,a.jsx)("b",{children:"isActive"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"updatesysteminputgroupid-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,a.jsx)("b",{children:"group"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(s.code,{children:"ID"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"updatesysteminputownerid-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,a.jsx)("b",{children:"owner"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(s.code,{children:"ID"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"updatesysteminputsuppliersid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,a.jsx)("b",{children:"suppliers"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(s.code,{children:"[ID]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},21020:(e,s,t)=>{var a=t(96540),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var a,d={},c=null,o=null;for(a in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(o=s.ref),s)r.call(s,a)&&!i.hasOwnProperty(a)&&(d[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===d[a]&&(d[a]=s[a]);return{$$typeof:n,type:e,key:c,ref:o,props:d,_owner:l.current}}s.Fragment=d,s.jsx=c,s.jsxs=c},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var a=t(96540);const n={},d=a.createContext(n);function r(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);