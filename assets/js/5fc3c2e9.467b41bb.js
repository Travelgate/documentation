/*! For license information please see 5fc3c2e9.467b41bb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38109],{52664:(e,r,a)=>{a.r(r),a.d(r,{Badge:()=>b,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=a(74848),n=a(28453),s=a(96540);const o={id:"bearer-data",title:"BearerData",hide_table_of_contents:!1},d=void 0,c={id:"objects/bearer-data",title:"BearerData",description:"Response struct for admin &#x003E; bearer. Useful to get the orgCode for an apiKey",source:"@site/api/objects/bearer-data.mdx",sourceDirName:"objects",slug:"/objects/bearer-data",permalink:"/api/objects/bearer-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"bearer-data",title:"BearerData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AuditRule",permalink:"/api/objects/audit-rule"},next:{title:"BedStatic",permalink:"/api/objects/bed-static"}},l={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const r={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:r,children:a,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,n.R)()},[c,l]=(0,s.useState)(o);return(0,t.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&a]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>BearerData.<b>jwt</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bearerdatajwtstring--",level:4},{value:'<code>BearerData.<b>orgCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bearerdataorgcodestring--",level:4},{value:"Member of",id:"member-of",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Response struct for admin > bearer. Useful to get the orgCode for an apiKey"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type BearerData {\n  jwt: String!\n  orgCode: String!\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"bearerdatajwtstring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BearerData.",(0,t.jsx)("b",{children:"jwt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"bearerdataorgcodestring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BearerData.",(0,t.jsx)("b",{children:"orgCode"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/objects/admin-query",children:(0,t.jsx)(r.code,{children:"AdminQuery"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,r,a)=>{var t=a(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,a){var t,s={},l=null,i=null;for(t in void 0!==a&&(l=""+a),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:n,type:e,key:l,ref:i,props:s,_owner:d.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},74848:(e,r,a)=>{e.exports=a(21020)},28453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>d});var t=a(96540);const n={},s=t.createContext(n);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);