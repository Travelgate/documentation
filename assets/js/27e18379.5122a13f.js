/*! For license information please see 27e18379.5122a13f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60171],{74095:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=r(74848),t=r(28453),l=r(96540);const s={id:"role-type",title:"RoleType",hide_table_of_contents:!1},i=void 0,c={id:"enums/role-type",title:"RoleType",description:"No description",source:"@site/api/enums/role-type.mdx",sourceDirName:"enums",slug:"/enums/role-type",permalink:"/api/enums/role-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"role-type",title:"RoleType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RoleMemberType",permalink:"/api/enums/role-member-type"},next:{title:"SellerCompanyType",permalink:"/api/enums/seller-company-type"}},a={},d=()=>{const e={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,t.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:r,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,t.R)()},[c,a]=(0,l.useState)(s);return(0,o.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&r]})},m=[{value:"Values",id:"values",level:3},{value:"<code>RoleType.<b>VIEWER</b></code>",id:"roletypeviewer",level:4},{value:"<code>RoleType.<b>EDITOR</b></code>",id:"roletypeeditor",level:4},{value:"<code>RoleType.<b>ADMIN</b></code>",id:"roletypeadmin",level:4},{value:"<code>RoleType.<b>EXECUTOR</b></code>",id:"roletypeexecutor",level:4},{value:"<code>RoleType.<b>SPECIFIC</b></code>",id:"roletypespecific",level:4},{value:"Member of",id:"member-of",level:3}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"enum RoleType {\n  VIEWER\n  EDITOR\n  ADMIN\n  EXECUTOR\n  SPECIFIC\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,o.jsx)(n.h4,{id:"roletypeviewer",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RoleType.",(0,o.jsx)("b",{children:"VIEWER"})]})})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Allows a User to make Queries of resources, but not change any resource data"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"roletypeeditor",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RoleType.",(0,o.jsx)("b",{children:"EDITOR"})]})})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Allows a User to make Mutations (changes) to the resource data"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"roletypeadmin",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RoleType.",(0,o.jsx)("b",{children:"ADMIN"})]})})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Allows a User to make All (changes) to the resource"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"roletypeexecutor",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RoleType.",(0,o.jsx)("b",{children:"EXECUTOR"})]})})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Allows a User to make use of reources only for extecutations queries."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"roletypespecific",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RoleType.",(0,o.jsx)("b",{children:"SPECIFIC"})]})})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Allows a User to make othen kind of operation with the resource. Defined by API."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/objects/role-data",children:(0,o.jsx)(n.code,{children:"RoleData"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},21020:(e,n,r)=>{var o=r(96540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var o,l={},a=null,d=null;for(o in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:t,type:e,key:a,ref:d,props:l,_owner:i.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var o=r(96540);const t={},l=o.createContext(t);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);