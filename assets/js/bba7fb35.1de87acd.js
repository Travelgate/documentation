/*! For license information please see bba7fb35.1de87acd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64959],{73615:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"types/inputs/search-criteria-code-where-input","title":"SearchCriteriaCodeWhereInput","description":"No description","source":"@site/api/types/inputs/search-criteria-code-where-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/search-criteria-code-where-input","permalink":"/api/types/inputs/search-criteria-code-where-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"search-criteria-code-where-input","title":"SearchCriteriaCodeWhereInput"},"sidebar":"schemaSidebar","previous":{"title":"RoomSetUpUpdateInput","permalink":"/api/types/inputs/room-set-up-update-input"},"next":{"title":"SearchCriteriaCodeWhereUniqueInput","permalink":"/api/types/inputs/search-criteria-code-where-unique-input"}}');var i=t(74848),a=t(28453),s=t(96540);const c={id:"search-criteria-code-where-input",title:"SearchCriteriaCodeWhereInput"},d=void 0,o={},l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:r,children:t,startOpen:n=!1})=>{const[a,c]=(0,s.useState)(n);return(0,i.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:r}),a&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>SearchCriteriaCodeWhereInput.<b>code_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriacodewhereinputcode_inid--",level:4},{value:'<code>SearchCriteriaCodeWhereInput.<b>supplier_in</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriacodewhereinputsupplier_inid--",level:4}];function x(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"No description"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"input SearchCriteriaCodeWhereInput {\n  code_in: [ID!]\n  supplier_in: ID!\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"searchcriteriacodewhereinputcode_inid--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaCodeWhereInput.",(0,i.jsx)("b",{children:"code_in"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(r.a,{href:"/api/types/scalars/id",children:(0,i.jsx)(r.code,{children:"[ID!]"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(r.h4,{id:"searchcriteriacodewhereinputsupplier_inid--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaCodeWhereInput.",(0,i.jsx)("b",{children:"supplier_in"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(r.a,{href:"/api/types/scalars/id",children:(0,i.jsx)(r.code,{children:"ID!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]})]})}function g(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},21020:(e,r,t)=>{var n=t(96540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,a={},o=null,l=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!d.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:i,type:e,key:o,ref:l,props:a,_owner:c.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(96540);const i={},a=n.createContext(i);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);