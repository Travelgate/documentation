/*! For license information please see 713cba86.51a63983.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54780],{7086:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var a=t(74848),r=t(28453),o=t(96540);const s={id:"organization-edge",title:"OrganizationEdge"},i=void 0,d={id:"types/objects/organization-edge",title:"OrganizationEdge",description:"No description",source:"@site/api/types/objects/organization-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/organization-edge",permalink:"/api/types/objects/organization-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organization-edge",title:"OrganizationEdge"},sidebar:"schemaSidebar",previous:{title:"OrganizationData",permalink:"/api/types/objects/organization-data"},next:{title:"OrganizationMemberRole",permalink:"/api/types/objects/organization-member-role"}},c={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[d,c]=(0,o.useState)(s);return(0,a.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>OrganizationEdge.<b>node</b></code><Bullet></Bullet><code>Organization</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationedgenodeorganization-",level:4},{value:'<code>OrganizationEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type OrganizationEdge {\n  node: Organization\n  cursor: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"organizationedgenodeorganization-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationEdge.",(0,a.jsx)("b",{children:"node"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/organization",children:(0,a.jsx)(n.code,{children:"Organization"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.h4,{id:"organizationedgecursorstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationEdge.",(0,a.jsx)("b",{children:"cursor"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/objects/organization-connection",children:(0,a.jsx)(n.code,{children:"OrganizationConnection"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/user-profile-data",children:(0,a.jsx)(n.code,{children:"UserProfileData"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var a=t(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,o={},c=null,l=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,a)&&!d.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:r,type:e,key:c,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(96540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);