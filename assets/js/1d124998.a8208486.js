/*! For license information please see 1d124998.a8208486.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88399],{97217:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>x});var r=t(74848),n=t(28453),l=t(96540);const a={id:"system-filter",title:"SystemFilter",hide_table_of_contents:!1},i=void 0,d={id:"inputs/system-filter",title:"SystemFilter",description:'System filter for "systems" query',source:"@site/api/inputs/system-filter.mdx",sourceDirName:"inputs",slug:"/inputs/system-filter",permalink:"/api/inputs/system-filter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"system-filter",title:"SystemFilter",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierWhereUniqueInput",permalink:"/api/inputs/supplier-where-unique-input"},next:{title:"ThreeDomainSecurityInput",permalink:"/api/inputs/three-domain-security-input"}},c={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,n.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[d,c]=(0,l.useState)(a);return(0,r.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SystemFilter.<b>id</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemfilteridid--",level:4},{value:'<code>SystemFilter.<b>supplier</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemfiltersupplierid--",level:4},{value:'<code>SystemFilter.<b>group</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemfiltergroupid--",level:4},{value:'<code>SystemFilter.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"systemfilterisactiveboolean-",level:4},{value:'<code>SystemFilter.<b>owner</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemfilterownerid--",level:4}];function y(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:'System filter for "systems" query'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"input SystemFilter {\n  id: [ID]\n  supplier: [ID]\n  group: [ID]\n  isActive: Boolean\n  owner: [ID]\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.h4,{id:"systemfilteridid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SystemFilter.",(0,r.jsx)("b",{children:"id"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/api/scalars/id",children:(0,r.jsx)(s.code,{children:"[ID]"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"System ID"}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"systemfiltersupplierid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SystemFilter.",(0,r.jsx)("b",{children:"supplier"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/api/scalars/id",children:(0,r.jsx)(s.code,{children:"[ID]"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Systems that contain at least one of the following supplier ids"}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"systemfiltergroupid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SystemFilter.",(0,r.jsx)("b",{children:"group"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/api/scalars/id",children:(0,r.jsx)(s.code,{children:"[ID]"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Systems belonging to this GroupIDs"}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"systemfilterisactiveboolean-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SystemFilter.",(0,r.jsx)("b",{children:"isActive"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,r.jsx)(s.code,{children:"Boolean"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"isActive filter"}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"systemfilterownerid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SystemFilter.",(0,r.jsx)("b",{children:"owner"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/api/scalars/id",children:(0,r.jsx)(s.code,{children:"[ID]"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Systems Owner filter"}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},21020:(e,s,t)=>{var r=t(96540),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var r,l={},c=null,o=null;for(r in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(o=s.ref),s)a.call(s,r)&&!d.hasOwnProperty(r)&&(l[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===l[r]&&(l[r]=s[r]);return{$$typeof:n,type:e,key:c,ref:o,props:l,_owner:i.current}}s.Fragment=l,s.jsx=c,s.jsxs=c},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var r=t(96540);const n={},l=r.createContext(n);function a(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);