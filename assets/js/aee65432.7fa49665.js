/*! For license information please see aee65432.7fa49665.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38784],{14849:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=r(74848),a=r(28453),i=r(96540);const s={id:"favourite-partner-create-input",title:"FavouritePartnerCreateInput",hide_table_of_contents:!1},o=void 0,c={id:"inputs/favourite-partner-create-input",title:"FavouritePartnerCreateInput",description:"No description",source:"@site/api/inputs/favourite-partner-create-input.mdx",sourceDirName:"inputs",slug:"/inputs/favourite-partner-create-input",permalink:"/api/inputs/favourite-partner-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"favourite-partner-create-input",title:"FavouritePartnerCreateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ExpireDateInput",permalink:"/api/inputs/expire-date-input"},next:{title:"FavouritePartnerWhereUniqueInput",permalink:"/api/inputs/favourite-partner-where-unique-input"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[c,d]=(0,i.useState)(s);return(0,n.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&r]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FavouritePartnerCreateInput.<b>email</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"favouritepartnercreateinputemailid--",level:4},{value:'<code>FavouritePartnerCreateInput.<b>partnerCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"favouritepartnercreateinputpartnercodeid--",level:4}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input FavouritePartnerCreateInput {\n  email: ID!\n  partnerCode: ID!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"favouritepartnercreateinputemailid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FavouritePartnerCreateInput.",(0,n.jsx)("b",{children:"email"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"favouritepartnercreateinputpartnercodeid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FavouritePartnerCreateInput.",(0,n.jsx)("b",{children:"partnerCode"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,t,r)=>{var n=r(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:d,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);