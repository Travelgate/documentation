/*! For license information please see f0ba8d8e.b311e822.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23315],{91053:(e,r,a)=>{a.r(r),a.d(r,{Badge:()=>u,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>n,metadata:()=>t,toc:()=>y});const t=JSON.parse('{"id":"types/objects/search-criteria-query","title":"SearchCriteriaQuery","description":"No description","source":"@site/api/types/objects/search-criteria-query.mdx","sourceDirName":"types/objects","slug":"/types/objects/search-criteria-query","permalink":"/api/types/objects/search-criteria-query","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"search-criteria-query","title":"SearchCriteriaQuery"},"sidebar":"schemaSidebar","previous":{"title":"SearchCriteriaMutation","permalink":"/api/types/objects/search-criteria-mutation"},"next":{"title":"SearchCriteriaStaticDates","permalink":"/api/types/objects/search-criteria-static-dates"}}');var i=a(74848),c=a(28453),s=a(96540);const n={id:"search-criteria-query",title:"SearchCriteriaQuery"},l=void 0,o={},d=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:r,children:a,startOpen:t=!1})=>{const[c,n]=(0,s.useState)(t);return(0,i.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&a]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>SearchCriteriaQuery.<b>allSearchCriteria</b></code><Bullet></Bullet><code>SearchCriteriaConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriaqueryallsearchcriteriasearchcriteriaconnection--",level:4},{value:'<code>SearchCriteriaQuery.allSearchCriteria.<b>where</b></code><Bullet></Bullet><code>SearchCriteriaWhereInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriaqueryallsearchcriteriawheresearchcriteriawhereinput--",level:5},{value:"Returned By",id:"returned-by",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"No description"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"type SearchCriteriaQuery {\n  allSearchCriteria(where: SearchCriteriaWhereInput!): SearchCriteriaConnection!\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"searchcriteriaqueryallsearchcriteriasearchcriteriaconnection--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaQuery.",(0,i.jsx)("b",{children:"allSearchCriteria"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(r.a,{href:"/api/types/objects/search-criteria-connection",children:(0,i.jsx)(r.code,{children:"SearchCriteriaConnection!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(r.h5,{id:"searchcriteriaqueryallsearchcriteriawheresearchcriteriawhereinput--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaQuery.allSearchCriteria.",(0,i.jsx)("b",{children:"where"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(r.a,{href:"/api/types/inputs/search-criteria-where-input",children:(0,i.jsx)(r.code,{children:"SearchCriteriaWhereInput!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(r.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/api/operations/queries/search-criteria",children:(0,i.jsx)(r.code,{children:"searchCriteria"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"query"})]})]})}function f(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},21020:(e,r,a)=>{var t=a(96540),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,a){var t,c={},o=null,d=null;for(t in void 0!==a&&(o=""+a),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,t)&&!l.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:i,type:e,key:o,ref:d,props:c,_owner:n.current}}r.Fragment=c,r.jsx=o,r.jsxs=o},74848:(e,r,a)=>{e.exports=a(21020)},28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>n});var t=a(96540);const i={},c=t.createContext(i);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);