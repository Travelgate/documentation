/*! For license information please see 09a8048f.2cd1210d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92099],{23085:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"types/inputs/member-where-unique-input","title":"MemberWhereUniqueInput","description":"Filter for unique member query","source":"@site/api/types/inputs/member-where-unique-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/member-where-unique-input","permalink":"/api/types/inputs/member-where-unique-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"member-where-unique-input","title":"MemberWhereUniqueInput"},"sidebar":"schemaSidebar","previous":{"title":"MemberToOrganizationInput","permalink":"/api/types/inputs/member-to-organization-input"},"next":{"title":"MembersWhereInput","permalink":"/api/types/inputs/members-where-input"}}');var s=r(74848),a=r(28453),i=r(96540);const o={id:"member-where-unique-input",title:"MemberWhereUniqueInput"},c=void 0,l={},d=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:n,children:r,startOpen:t=!1})=>{const[a,o]=(0,i.useState)(t);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&r]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>MemberWhereUniqueInput.<b>search</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberwhereuniqueinputsearchid--",level:4},{value:'<code>MemberWhereUniqueInput.<b>searchBy</b></code><Bullet></Bullet><code>MemberSearchByOptions!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberwhereuniqueinputsearchbymembersearchbyoptions--",level:4}];function b(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Filter for unique member query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input MemberWhereUniqueInput {\n  search: ID!\n  searchBy: MemberSearchByOptions!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"memberwhereuniqueinputsearchid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberWhereUniqueInput.",(0,s.jsx)("b",{children:"search"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"memberwhereuniqueinputsearchbymembersearchbyoptions--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberWhereUniqueInput.",(0,s.jsx)("b",{children:"searchBy"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/types/enums/member-search-by-options",children:(0,s.jsx)(n.code,{children:"MemberSearchByOptions!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]})]})}function y(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,a={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:o.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);